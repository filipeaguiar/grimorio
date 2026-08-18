const DEFAULT_CONTENT = `# 1º Círculo (Arcano)
Abrir
Cerrar Portas
Disco Flutuante
Escudo Arcano
Escuridão
Identificação
Luz
Mísseis Mágicos
Patas de Aranha
Trancar
Ventriloquismo

# 2º Círculo (Arcano)
Cegueira
Detectar Invisibilidade
Flecha Ácida
Invisibilidade
Pedra Mágica
Queda Suave
Teia

# 3º Círculo (Arcano)
Bola de Fogo
Dissipar Magia
Forma Ectoplásmica
Relâmpago
Voo

# 4º Círculo (Arcano)
Armadura Elétrica

# 5º Círculo (Arcano)
Carne para Gelo
Cone Glacial
Muralha de Energia
Pele Rochosa
Pequeno Globo da Invulnerabilidade

# 6º Círculo (Arcano)
Chuva de Adagas de Gelo

# 9º Círculo (Arcano)
Cancelamento Total

# Magias Exclusivas (Necromante)
Aterrorizar
Toque Sombrio
Criar Mortos-Vivos
Drenar Vida

# Magias de Necromante (2º Círculo)
Apodrecer Sangue
Criar Mortos-Vivos
Mão Espectral

# Magias de Necromante (3º Círculo)
Donzela de Ferro
Morte Podre
Parar Cura

# Magias de Necromante (4º Círculo)
Drenar Temporário
Golem de Carne

# Magias de Necromante (5º Círculo)
Invocar Demônio
Magia da Morte

# Magias de Necromante (6º Círculo)
Dedo da Morte
Entumbar
Golem de Sangue

# 1º Círculo (Divino)
Bênção

# 2º Círculo (Divino)
Aumento de Destreza
Aumento de Força

# 3º Círculo (Divino)
Agredir
Augúrio

# 5º Círculo (Divino)
Coluna de Chamas de Agmi

# 6º Círculo (Divino)
Sementes de Fogo

# 7º Círculo (Divino)
Chuva de Pedras de Rasmum`;

const DEFAULT_SLOTS = {
  // Arcano Circles
  "1º Círculo (Arcano)": 5,
  "2º Círculo (Arcano)": 4,
  "3º Círculo (Arcano)": 4,
  "4º Círculo (Arcano)": 0,
  "5º Círculo (Arcano)": 0,
  "6º Círculo (Arcano)": 0,
  "9º Círculo (Arcano)": 0,

  // Necromante Circles
  "Magias Exclusivas (Necromante)": 0,
  "Magias de Necromante (2º Círculo)": 0,
  "Magias de Necromante (3º Círculo)": 0,
  "Magias de Necromante (4º Círculo)": 0,
  "Magias de Necromante (5º Círculo)": 0,
  "Magias de Necromante (6º Círculo)": 0,

  // Divino Circles
  "1º Círculo (Divino)": 0,
  "2º Círculo (Divino)": 0,
  "3º Círculo (Divino)": 0,
  "5º Círculo (Divino)": 0,
  "6º Círculo (Divino)": 0,
  "7º Círculo (Divino)": 0,

  // Prepared sample spells
  "Escudo Arcano": 1,
  "Mísseis Mágicos": 3,
  "Patas de Aranha": 1,
  "Detectar Invisibilidade": 1,
  "Invisibilidade": 1,
  "Teia": 2,
  "Bola de Fogo": 2,
  "Dissipar Magia": 1,
  "Relâmpago": 1,

  // Necromante Spells
  "Aterrorizar": 1,
  "Toque Sombrio": 1,
  "Drenar Vida": 1,
  "Apodrecer Sangue": 1,
  "Criar Mortos-Vivos": 1,
  "Mão Espectral": 1,
  "Donzela de Ferro": 1,
  "Morte Podre": 1,
  "Parar Cura": 1,
  "Drenar Temporário": 1,
  "Golem de Carne": 1,
  "Invocar Demônio": 1,
  "Magia da Morte": 1,
  "Dedo da Morte": 1,
  "Entumbar": 1,
  "Golem de Sangue": 1,

  // Magias novas (Arcano & Divino)
  "Identificação": 1,
  "Cegueira": 1,
  "Pedra Mágica": 1,
  "Forma Ectoplásmica": 1,
  "Armadura Elétrica": 1,
  "Cone Glacial": 1,
  "Carne para Gelo": 1,
  "Muralha de Energia": 1,
  "Pele Rochosa": 1,
  "Pequeno Globo da Invulnerabilidade": 1,
  "Chuva de Adagas de Gelo": 1,
  "Cancelamento Total": 1,
  "Bênção": 1,
  "Aumento de Força": 1,
  "Aumento de Destreza": 1,
  "Augúrio": 1,
  "Agredir": 1,
  "Coluna de Chamas de Agmi": 1,
  "Sementes de Fogo": 1,
  "Chuva de Pedras de Rasmum": 1
};

// Cache DOM elements
const editorTextarea = document.getElementById('editor-textarea');
const grimorioContainer = document.getElementById('grimorio-container');
const tabPlay = document.getElementById('tab-play');
const tabEdit = document.getElementById('tab-edit');
const viewPlay = document.getElementById('view-play');
const viewEdit = document.getElementById('view-edit');

// Secondary tab state
let activeSpellTab = 'arcano';

function getSectionType(title) {
  const norm = title.toLowerCase();
  if (norm.includes('necromante') || norm.includes('exclusivas')) {
    return 'necromante';
  }
  if (norm.includes('divin') || norm.includes('clérigo') || norm.includes('clerigo')) {
    return 'divina';
  }
  return 'arcano';
}

// Character Level Management & Spell Calculations
function getCharacterLevel() {
  const lvl = parseInt(localStorage.getItem('grimorio_char_level'), 10);
  return isNaN(lvl) || lvl < 1 ? 1 : lvl;
}

function setCharacterLevel(lvl) {
  const safeLvl = Math.max(1, Math.min(30, parseInt(lvl, 10) || 1));
  localStorage.setItem('grimorio_char_level', safeLvl.toString());
  const input = document.getElementById('char-level-input');
  if (input && parseInt(input.value, 10) !== safeLvl) input.value = safeLvl;
  const display = document.getElementById('char-level-display');
  if (display) display.textContent = safeLvl;
  renderPlayView(editorTextarea.value);
}

function onLevelInputChange(val) {
  const lvl = parseInt(val, 10);
  if (!isNaN(lvl) && lvl >= 1) {
    setCharacterLevel(lvl);
  }
}

function changeCharacterLevel(delta) {
  const current = getCharacterLevel();
  setCharacterLevel(current + delta);
}

function getSpellLevelCalculation(spellName, level) {
  if (!spellName) return null;
  const norm = spellName.trim().toLowerCase();
  const lvl = Math.max(1, parseInt(level, 10) || 1);

  switch (norm) {
    case 'bola de fogo':
      return {
        badge: `🔥 ${lvl}d6 dano`,
        summary: `💥 Dano: ${lvl}d6 de fogo (raio de 6m)`,
        extra: `1d6 pontos de dano de fogo por nível de conjurador (JPD reduz metade).`
      };
    case 'relâmpago':
      return {
        badge: `⚡ ${lvl}d6 dano`,
        summary: `⚡ Dano: ${lvl}d6 elétrico (linha de 1,5m × 18m)`,
        extra: `1d6 pontos de dano elétrico por nível de conjurador (JPD reduz metade).`
      };
    case 'mísseis mágicos': {
      const missiles = Math.min(5, Math.max(1, 1 + Math.floor((lvl - 1) / 3)));
      return {
        badge: `✨ ${missiles}× (${missiles}d4+${missiles})`,
        summary: `✨ Projéteis: ${missiles} míssil(eis) mágica(s)`,
        extra: `🎯 Dano Total: ${missiles}d4 + ${missiles} (1 míssil a cada 3 níveis, máx 5 mísseis no 13º nível).`
      };
    }
    case 'cone glacial':
      return {
        badge: `❄️ ${lvl}d4+${lvl} dano`,
        summary: `❄️ Dano: ${lvl}d4 + ${lvl} pontos de frio`,
        extra: `📐 Dimensões do Cone: ${(lvl * 1.5).toFixed(1).replace('.0', '')}m de comprimento por ${Math.round(lvl * 30)}cm de diâmetro.`
      };
    case 'donzela de ferro': {
      const dice = Math.min(7, Math.max(1, Math.floor(lvl / 2)));
      return {
        badge: `💀 ${dice}d6 + 1d10 CON`,
        summary: `💀 Dano: ${dice}d6 de dano e 1d10 em Constituição`,
        extra: `📏 Alcance: ${3 + lvl}m | ⏳ Duração: ${lvl} rodada(s) (condição [MD], máx 7d6).`
      };
    }
    case 'armadura elétrica': {
      const dice = Math.max(1, Math.floor(lvl / 2));
      return {
        badge: `⚡ ${dice}d6 retaliação`,
        summary: `⚡ Retaliação: ${dice}d6 de dano elétrico por ataque sofrido`,
        extra: `⏳ Duração: ${lvl}d4 rodadas (1d6 a cada 2 níveis do mago).`
      };
    }
    case 'magia da morte': {
      const dice = Math.max(1, Math.floor(lvl / 2));
      return {
        badge: `☠️ ${dice}d8 em 7DV+`,
        summary: `☠️ Criaturas até 4DV: Morte imediata | 5-6DV: JPC ou Morte`,
        extra: `💥 Criaturas 7DV+: ${dice}d8 de dano (1d8 a cada 2 níveis, JPC reduz metade).`
      };
    }
    case 'pele rochosa': {
      const bonus = Math.floor(lvl / 2);
      return {
        badge: `🛡️ 1d4+${bonus} bloqueios`,
        summary: `🛡️ Proteção: Bloqueia 1d4 + ${bonus} ataques físicos`,
        extra: `⏳ Duração: ${lvl} turno(s) (1d4 + 1 bloqueio a cada 2 níveis).`
      };
    }
    case 'identificação': {
      const chance = Math.min(100, lvl * 5);
      return {
        badge: `🔍 2d6+${lvl} itens (${chance}%)`,
        summary: `🔍 Identifica: 2d6 + ${lvl} itens mágicos`,
        extra: `🎲 Chance de sucesso: ${chance}% (5% por nível).`
      };
    }
    case 'coluna de chamas de agmi':
      return {
        badge: `🔥 6d8 (${9 + lvl}m)`,
        summary: `🔥 Dano: 6d8 de fogo divino (coluna de 4,5m raio × 9m altura)`,
        extra: `🏹 Alcance: ${9 + lvl}m (9m + 1m por nível, JPD reduz metade).`
      };
    case 'chuva de pedras de rasmum':
      return {
        badge: `🪨 15d8 + 7d8 (${9 + lvl * 3}m)`,
        summary: `🪨 Dano Primário: 15d8 de dano por impacto`,
        extra: `💥 Fragmentos Secundários: 7d8 de dano + atordoamento (2d4 rodadas) | 🏹 Alcance: ${9 + lvl * 3}m.`
      };
    case 'aumento de força':
    case 'aumento de destreza':
      return {
        badge: `💪 +1d4+1 (${lvl}h)`,
        summary: `💪 Bônus: +1d4+1 no atributo`,
        extra: `⏳ Duração: ${lvl} hora(s) (1 hora por nível de clérigo).`
      };
    case 'augúrio': {
      const chance = Math.min(100, 70 + lvl);
      return {
        badge: `🔮 ${chance}% chance`,
        summary: `🔮 Chance de resposta significativa: ${chance}%`,
        extra: `⏱️ Vislumbre: Ações nos próximos 30 minutos (70% + 1%/nível).`
      };
    }
    case 'sementes de fogo':
      return {
        badge: `🌰 2d8/1d8 (${lvl} turnos)`,
        summary: `🌰 Projéteis (até 4): 2d8 de dano | 🌿 Bombas (até 8): 1d8 de dano`,
        extra: `⏳ Duração do encanto: ${lvl} turno(s) (1 turno por nível).`
      };
    case 'patas de aranha':
      return {
        badge: `🕷️ ${3 + lvl} turnos`,
        summary: `🕷️ Escalar paredes e tetos livremente`,
        extra: `⏳ Duração: ${3 + lvl} turnos (3 turnos + 1 turno/nível).`
      };
    case 'voo':
      return {
        badge: `🦅 ${lvl} turnos + 1d6`,
        summary: `🦅 Voar com Movimento 12`,
        extra: `⏳ Duração: ${lvl} turnos + 1d6 turnos (1 turno/nível + 1d6).`
      };
    case 'bênção':
      return {
        badge: `✨ +1 atk/JP (${lvl} turnos)`,
        summary: `✨ Aura de 9m: +1 em ataques e +1 em todos os testes de resistência`,
        extra: `⏳ Duração: ${lvl} turno(s) (1 turno por nível).`
      };
    case 'agredir':
      return {
        badge: `⚔️ +1d6 dano (${lvl} turnos)`,
        summary: `⚔️ Encantamento de Arma: +1d6 de dano por ataque`,
        extra: `⏳ Duração: ${lvl} turno(s) (1 turno por nível).`
      };
    case 'apodrecer sangue':
      return {
        badge: `🩸 +4 dano (1d4×${lvl} rod.)`,
        summary: `🩸 +4 de dano por ataques de corte/perfuração`,
        extra: `🏹 Alcance: ${9 + lvl * 3}m | ⏳ Duração: 1d4 × ${lvl} rodada(s).`
      };
    case 'forma ectoplásmica':
      return {
        badge: `👻 ${lvl * 3} rodadas`,
        summary: `👻 Insubstancial e imune a ataques físicos normais`,
        extra: `⏳ Duração: ${lvl * 3} rodadas (3 rodadas por nível).`
      };
    case 'mão espectral':
      return {
        badge: `🖐️ ${lvl} turnos`,
        summary: `🖐️ Mão espectral flutuante (CA 24, Mov 12)`,
        extra: `⏳ Duração: ${lvl} turno(s) (1 turno por nível).`
      };
    case 'parar cura':
      return {
        badge: `🚫 ${lvl} turnos`,
        summary: `🚫 Impede qualquer cura (poções, magias, itens)`,
        extra: `🏹 Alcance: ${3 + lvl * 3}m | ⏳ Duração: ${lvl} turno(s).`
      };
    case 'entumbar':
      return {
        badge: `⛰️ alcance ${9 + lvl * 3}m`,
        summary: `⛰️ Prende o alvo em câmara subterrânea ou protege conjurador`,
        extra: `🏹 Alcance: ${9 + lvl * 3}m (9m + 3m/nível).`
      };
    case 'muralha de energia':
      return {
        badge: `🛡️ 1 turno + ${lvl} rod.`,
        summary: `🛡️ Barreira de força invulnerável e imóvel`,
        extra: `⏳ Duração: 1 turno + ${lvl} rodada(s) (esfera até ${Math.round(lvl * 30)}cm raio).`
      };
    default:
      return null;
  }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Register Service Worker for PWA support
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Service Worker registrado com sucesso!'))
      .catch((err) => console.warn('Erro ao registrar Service Worker:', err));
  }

  // Initialize character level display / input
  const charLvl = getCharacterLevel();
  const input = document.getElementById('char-level-input');
  if (input) input.value = charLvl;
  const display = document.getElementById('char-level-display');
  if (display) display.textContent = charLvl;

  // Initialize slots mapping in localStorage if not set or outdated
  if (!localStorage.getItem('grimorio_slots') || 
      !localStorage.getItem('grimorio_slots').includes('Identificação') || 
      !localStorage.getItem('grimorio_slots').includes('Bênção')) {
    localStorage.setItem('grimorio_slots', JSON.stringify(DEFAULT_SLOTS));
  }

  // Load stored text or default
  let storedText = localStorage.getItem('grimorio_raw_text');
  // Migrate to the new layout if outdated
  if (!storedText || !storedText.includes('Identificação') || !storedText.includes('Magias Divinas') && !storedText.includes('(Divino)')) {
    storedText = DEFAULT_CONTENT;
    localStorage.setItem('grimorio_raw_text', DEFAULT_CONTENT);
  }
  
  editorTextarea.value = storedText;
  
  // Render Jogo view
  renderPlayView(storedText);

  // Setup ESC key listener for modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSpellModal();
    }
  });
});

// Tab Navigation
function switchTab(target) {
  const btnToggle = document.getElementById('btn-toggle-edit-slots');
  const btnReset = document.getElementById('btn-reset');
  const btnSave = document.getElementById('btn-save');

  if (target === 'play') {
    tabPlay.classList.add('active');
    tabEdit.classList.remove('active');
    viewPlay.classList.add('active');
    viewEdit.classList.remove('active');
    
    if (btnToggle) btnToggle.style.display = 'flex';
    if (btnReset) btnReset.style.display = 'flex';
    if (btnSave) btnSave.style.display = 'none';
    
    // Always sync play view with current editor textarea state
    renderPlayView(editorTextarea.value);
  } else {
    tabPlay.classList.remove('active');
    tabEdit.classList.add('active');
    viewPlay.classList.remove('active');
    viewEdit.classList.add('active');
    
    if (btnToggle) btnToggle.style.display = 'none';
    if (btnReset) btnReset.style.display = 'none';
    if (btnSave) btnSave.style.display = 'flex';
  }
}

// Save Editor Content to localStorage
function saveEditorContent() {
  const text = editorTextarea.value;
  localStorage.setItem('grimorio_raw_text', text);
  renderPlayView(text);
  switchTab('play');
}

// Load all default spells from the PDF into the editor
function loadDefaultSpells() {
  if (confirm('Deseja preencher o Grimório com todas as magias aprendidas do documento PDF?')) {
    editorTextarea.value = DEFAULT_CONTENT;
    localStorage.setItem('grimorio_raw_text', DEFAULT_CONTENT);
    renderPlayView(DEFAULT_CONTENT);
    switchTab('play');
  }
}

// Parser Logic - strictly ignores extra line breaks, spaces, and empty lines
function parseGrimorio(text) {
  if (!text) return [];
  const lines = text.split(/\r?\n/);
  const sections = [];
  let currentSection = null;

  for (let rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue; // Ignores all extra line breaks

    if (line.startsWith('#')) {
      // Matches # Title or # Title [N]
      const match = line.match(/^#+\s*(.*?)(?:\s*\[\d+\])?$/);
      if (match) {
        const title = match[1].trim();
        if (title) {
          currentSection = {
            title: title,
            items: []
          };
          sections.push(currentSection);
        }
      }
    } else {
      // Matches Item Name or Item Name [N]
      const match = line.match(/^(.*?)(?:\s*\[\d+\])?$/);
      if (match) {
        const name = match[1].trim();
        if (name) {
          const item = { name };
          if (!currentSection) {
            currentSection = { title: 'Geral', items: [] };
            sections.push(currentSection);
          }
          currentSection.items.push(item);
        }
      }
    }
  }
  return sections;
}

// Get/Set quick slots counts
function getSlotCount(name) {
  const slotsConfig = JSON.parse(localStorage.getItem('grimorio_slots') || '{}');
  return slotsConfig[name] !== undefined ? slotsConfig[name] : 0;
}

function setSlotCount(name, count) {
  const slotsConfig = JSON.parse(localStorage.getItem('grimorio_slots') || '{}');
  slotsConfig[name] = Math.max(0, count);
  localStorage.setItem('grimorio_slots', JSON.stringify(slotsConfig));
}

function changeSlotCount(name, delta) {
  const current = getSlotCount(name);
  const newCount = Math.max(0, current + delta);
  setSlotCount(name, newCount);
  renderPlayView(editorTextarea.value);
}

// Render dynamic elements to Jogo view
function renderPlayView(text) {
  const data = parseGrimorio(text);
  grimorioContainer.innerHTML = '';

  if (data.length === 0) {
    grimorioContainer.innerHTML = '<div class="info-empty">O grimório está vazio. Vá para a aba "Editor" para adicionar suas magias!</div>';
    return;
  }

  data.forEach((section, sIndex) => {
    // Filter by secondary spell-type tab
    if (getSectionType(section.title) !== activeSpellTab) return;
    // Circle card structure
    const card = document.createElement('div');
    card.className = 'circle-card';

    // Circle header
    const header = document.createElement('div');
    header.className = 'circle-header';

    const title = document.createElement('h3');
    title.className = 'circle-title';
    title.textContent = section.title;
    header.appendChild(title);

    // Header controls (General Circle Slots + Adjust buttons)
    const headerControls = document.createElement('div');
    headerControls.className = 'header-controls';

    const secSlots = getSlotCount(section.title);

    // Section checkboxes
    const secSlotsDiv = document.createElement('div');
    secSlotsDiv.className = 'slots-container';
    if (secSlots > 0) {
      for (let i = 0; i < secSlots; i++) {
        const checkbox = createSlotCheckbox(`sec-${sIndex}-general-${i}`, 'general', sIndex);
        secSlotsDiv.appendChild(checkbox);
      }
    }
    headerControls.appendChild(secSlotsDiv);

    // Section Quick adjust buttons
    const secAdjustDiv = document.createElement('div');
    secAdjustDiv.className = 'quick-adjust-container';

    const secBtnMinus = document.createElement('button');
    secBtnMinus.className = 'adjust-btn';
    secBtnMinus.innerHTML = '−';
    secBtnMinus.title = 'Diminuir slots do círculo';
    secBtnMinus.addEventListener('click', (e) => {
      e.stopPropagation();
      changeSlotCount(section.title, -1);
    });

    const secBtnPlus = document.createElement('button');
    secBtnPlus.className = 'adjust-btn';
    secBtnPlus.innerHTML = '+';
    secBtnPlus.title = 'Aumentar slots do círculo';
    secBtnPlus.addEventListener('click', (e) => {
      e.stopPropagation();
      changeSlotCount(section.title, 1);
    });

    secAdjustDiv.appendChild(secBtnMinus);
    secAdjustDiv.appendChild(secBtnPlus);
    headerControls.appendChild(secAdjustDiv);

    header.appendChild(headerControls);
    card.appendChild(header);

    // Spells / Items list
    if (section.items.length > 0) {
      const spellList = document.createElement('div');
      spellList.className = 'spell-list';

      section.items.forEach((item, iIndex) => {
        const spellItem = document.createElement('div');
        spellItem.className = 'spell-item';

        const nameContainer = document.createElement('div');
        nameContainer.className = 'spell-name-container';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'spell-name';
        nameSpan.textContent = item.name;
        nameSpan.title = 'Clique para ver a descrição completa';
        nameSpan.addEventListener('click', () => showSpellDescription(item.name));
        nameContainer.appendChild(nameSpan);

        const currentLvl = getCharacterLevel();
        const calc = getSpellLevelCalculation(item.name, currentLvl);
        if (calc && calc.badge) {
          const badgeSpan = document.createElement('span');
          badgeSpan.className = 'spell-calc-badge';
          badgeSpan.textContent = calc.badge;
          badgeSpan.title = `Cálculo automático para Nível ${currentLvl} (Clique para detalhes)`;
          badgeSpan.addEventListener('click', () => showSpellDescription(item.name));
          nameContainer.appendChild(badgeSpan);
        }

        spellItem.appendChild(nameContainer);

        // Controls container (checkboxes + quick adjust buttons)
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'spell-controls';

        // Individual item checkboxes
        const slotsDiv = document.createElement('div');
        slotsDiv.className = 'slots-container';
        const itemSlots = getSlotCount(item.name);
        if (itemSlots > 0) {
          for (let i = 0; i < itemSlots; i++) {
            const checkbox = createSlotCheckbox(`sec-${sIndex}-item-${iIndex}-${i}`, 'item', sIndex);
            slotsDiv.appendChild(checkbox);
          }
        }
        controlsDiv.appendChild(slotsDiv);

        // Quick adjust +/- buttons
        const adjustDiv = document.createElement('div');
        adjustDiv.className = 'quick-adjust-container';

        const btnMinus = document.createElement('button');
        btnMinus.className = 'adjust-btn';
        btnMinus.innerHTML = '−';
        btnMinus.title = 'Diminuir slots preparados';
        btnMinus.addEventListener('click', (e) => {
          e.stopPropagation();
          changeSlotCount(item.name, -1);
        });

        const btnPlus = document.createElement('button');
        btnPlus.className = 'adjust-btn';
        btnPlus.innerHTML = '+';
        btnPlus.title = 'Aumentar slots preparados';
        btnPlus.addEventListener('click', (e) => {
          e.stopPropagation();
          changeSlotCount(item.name, 1);
        });

        adjustDiv.appendChild(btnMinus);
        adjustDiv.appendChild(btnPlus);
        controlsDiv.appendChild(adjustDiv);

        spellItem.appendChild(controlsDiv);
        spellList.appendChild(spellItem);
      });

      card.appendChild(spellList);
    }

    grimorioContainer.appendChild(card);
  });
}

// Helpers for checkbox creation and state management
function createSlotCheckbox(id, type, sIndex) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'slot-checkbox';
  checkbox.id = id;
  
  // Restore checked state
  const isChecked = localStorage.getItem(`slot-state-${id}`) === 'true';
  checkbox.checked = isChecked;

  if (type === 'item') {
    checkbox.addEventListener('click', (e) => {
      // Capture the desired state toggle (true if checking, false if unchecking)
      const wantedToCheck = e.target.checked;
      
      // Prevent browser's native checkbox toggle so we can handle it sequentially
      e.preventDefault();
      
      // Defer state update to the next execution cycle to bypass event lifecycle quirks
      setTimeout(() => {
        const parent = checkbox.closest('.slots-container');
        if (!parent) return;
        
        const siblings = parent.querySelectorAll('.slot-checkbox');
        
        // Count how many checkboxes are currently checked (prior state)
        let currentCheckedCount = 0;
        siblings.forEach(cb => {
          const state = localStorage.getItem(`slot-state-${cb.id}`) === 'true';
          if (state) currentCheckedCount++;
        });
        
        // Calculate new checked count
        let newCheckedCount = currentCheckedCount;
        if (wantedToCheck) {
          newCheckedCount = Math.min(siblings.length, currentCheckedCount + 1);
        } else {
          newCheckedCount = Math.max(0, currentCheckedCount - 1);
        }
        
        // Update all siblings sequentially from left to right
        siblings.forEach((cb, idx) => {
          const shouldBeChecked = idx < newCheckedCount;
          cb.checked = shouldBeChecked;
          localStorage.setItem(`slot-state-${cb.id}`, shouldBeChecked ? 'true' : 'false');
        });
        
        // Sync with circle general slots
        syncWithCircleSlot(sIndex, wantedToCheck);
      }, 0);
    });
  }

  return checkbox;
}

// Automatically check/uncheck a circle general slot when a spell slot is checked/unchecked
function syncWithCircleSlot(sIndex, itemChecked) {
  // Find all general checkboxes for this section card
  const generalCheckboxes = document.querySelectorAll(`input[id^="sec-${sIndex}-general-"]`);
  if (generalCheckboxes.length === 0) return;

  if (itemChecked) {
    // Find the first unchecked general checkbox and check it
    for (let cb of generalCheckboxes) {
      if (!cb.checked) {
        cb.checked = true;
        localStorage.setItem(`slot-state-${cb.id}`, 'true');
        break;
      }
    }
  } else {
    // Find the last checked general checkbox and uncheck it
    for (let i = generalCheckboxes.length - 1; i >= 0; i--) {
      const cb = generalCheckboxes[i];
      if (cb.checked) {
        cb.checked = false;
        localStorage.setItem(`slot-state-${cb.id}`, 'false');
        break;
      }
    }
  }
}

// Reset all checkboxes state (long rest equivalent)
function resetAllSlots() {
  // Clear all slot states in localStorage (covers both active and inactive tabs)
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('slot-state-')) {
      localStorage.setItem(key, 'false');
    }
  }
  
  // Set current visible DOM checkboxes to false
  const checkboxes = document.querySelectorAll('.slot-checkbox');
  checkboxes.forEach(cb => {
    cb.checked = false;
  });
}

// Switch between Arcanas, Necromante and Divinas secondary tabs in Jogo view
function switchSpellTab(tab) {
  activeSpellTab = tab;
  
  const btnArcano = document.getElementById('sub-tab-arcano');
  const btnNecromante = document.getElementById('sub-tab-necromante');
  const btnDivina = document.getElementById('sub-tab-divina');
  
  if (btnArcano) btnArcano.classList.toggle('active', tab === 'arcano');
  if (btnNecromante) btnNecromante.classList.toggle('active', tab === 'necromante');
  if (btnDivina) btnDivina.classList.toggle('active', tab === 'divina');
  
  // Re-render only filtered spells
  renderPlayView(editorTextarea.value);
}

// Spell Modal description viewer
function showSpellDescription(spellName) {
  const detailsContainer = document.getElementById('modal-spell-details');
  const modal = document.getElementById('spell-modal');
  
  // Normalize match by trimming and ignoring casing
  const key = Object.keys(SPELL_DESCRIPTIONS).find(k => k.toLowerCase() === spellName.trim().toLowerCase());
  const spell = key ? SPELL_DESCRIPTIONS[key] : null;

  if (spell) {
    const charLvl = getCharacterLevel();
    const calc = getSpellLevelCalculation(key, charLvl);
    let calcCardHtml = '';
    
    if (calc) {
      calcCardHtml = `
        <div class="spell-modal-calc-card">
          <div class="modal-calc-header">
            <i class="ra ra-perspective-dice-six"></i>
            <span>Cálculo Automático (<strong>Nível ${charLvl}</strong>)</span>
          </div>
          <div class="modal-calc-body">
            <div class="modal-calc-summary">${calc.summary}</div>
            ${calc.extra ? `<div class="modal-calc-extra">${calc.extra}</div>` : ''}
          </div>
        </div>
      `;
    }

    detailsContainer.innerHTML = `
      <h2 class="spell-modal-title">${key}</h2>
      <div class="spell-modal-meta">
        <div class="spell-meta-item">Círculo: <strong>${spell.circulo || 'N/A'}</strong></div>
        <div class="spell-meta-item">Alcance: <strong>${spell.alcance || 'N/A'}</strong></div>
        <div class="spell-meta-item">Duração: <strong>${spell.duracao || 'N/A'}</strong></div>
        <div class="spell-meta-item">Resistência: <strong>${spell.resistencia || 'N/A'}</strong></div>
      </div>
      ${calcCardHtml}
      <div class="spell-modal-desc">${spell.descricao}</div>
    `;
  } else {
    detailsContainer.innerHTML = `
      <h2 class="spell-modal-title">${spellName}</h2>
      <p class="spell-modal-desc">Descrição desta magia não foi encontrada no banco de dados.</p>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSpellModal() {
  const modal = document.getElementById('spell-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleOverlayClick(event) {
  if (event.target === document.getElementById('spell-modal')) {
    closeSpellModal();
  }
}

// Toggle edit slots mode (hide/show +/- buttons)
function toggleEditSlotsMode() {
  const container = document.getElementById('grimorio-container');
  const btn = document.getElementById('btn-toggle-edit-slots');
  const isActive = container.classList.toggle('edit-slots-mode');
  
  if (isActive) {
    btn.classList.add('active-edit');
    btn.innerHTML = '<i class="ra ra-health-increase btn-icon"></i>';
  } else {
    btn.classList.remove('active-edit');
    btn.innerHTML = '<i class="ra ra-health-increase btn-icon"></i>';
  }
}

