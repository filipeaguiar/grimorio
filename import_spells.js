#!/usr/bin/env node

/**
 * Script to import all Arcane Spells from Old Dragon API (https://olddragon.com.br/magias.json)
 * Respects rate limiting (50 reqs / 10s) with polite delays and Retry-After handling.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://olddragon.com.br';
const USER_AGENT = 'GrimorioApp (contato@grimorio.app)';
const DELAY_MS = 400; // Polite delay between requests

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const response = await fetch(url, {
      ...options,
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'application/json',
        ...(options.headers || {})
      }
    });

    if (response.status === 429) {
      const retryAfter = parseInt(response.headers.get('retry-after') || '2', 10);
      console.warn(`[429 Rate Limit] Waiting ${retryAfter}s before retrying ${url}...`);
      await sleep((retryAfter + 1) * 1000);
      continue;
    }

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status} fetching ${url}`);
    }

    return response;
  }
  throw new Error(`Failed to fetch ${url} after ${retries} retries`);
}

async function getAllSpells() {
  console.log('--- Iniciando importação de magias da Old Dragon API ---');
  let allSpells = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const pageUrl = `${BASE_URL}/magias.json?page=${page}`;
    console.log(`[Página ${page}/${totalPages}] Buscando: ${pageUrl}`);

    const res = await fetchWithRetry(pageUrl);
    
    // Read pagination headers
    const totalPagesHeader = res.headers.get('total-pages');
    if (totalPagesHeader) {
      totalPages = parseInt(totalPagesHeader, 10);
    }
    const totalCount = res.headers.get('total-count');
    if (page === 1 && totalCount) {
      console.log(`Total de magias cadastradas na API: ${totalCount}`);
    }

    const spells = await res.json();
    if (Array.isArray(spells)) {
      allSpells = allSpells.concat(spells);
    }

    page++;
    if (page <= totalPages) {
      await sleep(DELAY_MS);
    }
  }

  return allSpells;
}

function formatCircle(spell) {
  const arcaneCircles = spell.circles?.arcane || (spell.arcane ? [spell.arcane] : []);
  if (arcaneCircles.length > 0) {
    const minCircle = Math.min(...arcaneCircles);
    return `${minCircle}º Círculo (Arcano)`;
  }
  const divineCircles = spell.circles?.divine || (spell.divine ? [spell.divine] : []);
  if (divineCircles.length > 0) {
    return `${Math.min(...divineCircles)}º Círculo (Divino)`;
  }
  const necroCircles = spell.circles?.necromancer || (spell.necromancer ? [spell.necromancer] : []);
  if (necroCircles.length > 0) {
    return `Necromante ${Math.min(...necroCircles)}`;
  }
  return 'Arcano';
}

function cleanDescription(desc) {
  if (!desc) return '';
  return desc
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function run() {
  try {
    const allSpells = await getAllSpells();
    console.log(`Total de magias baixadas: ${allSpells.length}`);

    // Filter arcane spells
    const arcaneSpells = allSpells.filter((s) => {
      const hasArcaneInCircles = s.circles && Array.isArray(s.circles.arcane) && s.circles.arcane.length > 0;
      const hasArcaneField = s.arcane !== null && s.arcane !== undefined && s.arcane > 0;
      return hasArcaneInCircles || hasArcaneField;
    });

    console.log(`Magias arcanas identificadas: ${arcaneSpells.length}`);

    // Load existing spells_data.js to preserve custom PDF spells if any
    const spellsDataPath = path.join(__dirname, 'spells_data.js');
    let existingSpells = {};
    if (fs.existsSync(spellsDataPath)) {
      const content = fs.readFileSync(spellsDataPath, 'utf8');
      // Quick extract
      try {
        const sandbox = {};
        const code = content.replace(/^const\s+SPELL_DESCRIPTIONS\s*=/, 'sandbox.SPELL_DESCRIPTIONS =');
        eval(code);
        existingSpells = sandbox.SPELL_DESCRIPTIONS || {};
      } catch (err) {
        console.warn('Could not parse existing spells_data.js, creating fresh structure');
      }
    }

    const mergedSpells = { ...existingSpells };

    // Update with API data for arcane spells
    for (const spell of arcaneSpells) {
      const name = spell.name?.trim();
      if (!name) continue;

      const circle = formatCircle(spell);
      const range = spell.range ? spell.range.trim() : 'Especial';
      const duration = spell.duration ? spell.duration.trim() : 'Instantânea';
      const jp = spell.jp ? spell.jp.trim() : 'Nenhuma';
      const description = cleanDescription(spell.description);

      // If existing spell has custom manual PDF text and API description is limited, keep existing
      if (spell.access === 'limited' && existingSpells[name] && existingSpells[name].descricao) {
        console.log(`[Mantida do PDF/Custom] ${name} (API access: limited)`);
        continue;
      }

      if (description) {
        mergedSpells[name] = {
          circulo: circle,
          alcance: range,
          duracao: duration,
          resistencia: jp,
          descricao: description
        };
        console.log(`[Atualizada da API] ${name} (${circle})`);
      }
    }

    // Sort alphabetically for readability
    const sortedKeys = Object.keys(mergedSpells).sort((a, b) => a.localeCompare(b, 'pt-BR'));
    const sortedSpells = {};
    for (const k of sortedKeys) {
      sortedSpells[k] = mergedSpells[k];
    }

    const outputJs = `const SPELL_DESCRIPTIONS = ${JSON.stringify(sortedSpells, null, 2)};\n`;
    fs.writeFileSync(spellsDataPath, outputJs, 'utf8');
    console.log(`\nSucesso! Arquivo spells_data.js atualizado com ${Object.keys(sortedSpells).length} magias.`);

  } catch (err) {
    console.error('Erro na importação:', err);
    process.exit(1);
  }
}

run();
