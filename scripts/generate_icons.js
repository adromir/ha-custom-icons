// Master Icon & Frontend Bundle Generator for ha-custom-icons
// Author: Adromir
const fs = require('fs');
const path = require('path');
const icons = require('./icon_definitions');

const ROOT_DIR = path.resolve(__dirname, '..');
const ICONS_DIR = path.join(ROOT_DIR, 'icons');
const VARIANTS = ['solid', 'outline', 'black', 'white'];

// Ensure directories exist
VARIANTS.forEach(v => {
  const dir = path.join(ICONS_DIR, v);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log(`Generating 4 variants for ${icons.length} icons (total ${icons.length * 4} icons)...`);

const dictionary = {};
let totalFilesWritten = 0;

icons.forEach(icon => {
  // 1. Solid
  const solidSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="${icon.solid}"/></svg>`;
  fs.writeFileSync(path.join(ICONS_DIR, 'solid', `${icon.id}.svg`), solidSvg);
  fs.writeFileSync(path.join(ICONS_DIR, 'solid', `${icon.id}-solid.svg`), solidSvg);
  totalFilesWritten += 2;

  // 2. Outline
  const outlineSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="${icon.outline}"/></svg>`;
  fs.writeFileSync(path.join(ICONS_DIR, 'outline', `${icon.id}-outline.svg`), outlineSvg);
  totalFilesWritten += 1;

  // 3. Black
  const blackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="${icon.solid}"/></svg>`;
  fs.writeFileSync(path.join(ICONS_DIR, 'black', `${icon.id}-black.svg`), blackSvg);
  totalFilesWritten += 1;

  // 4. White
  const whiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF"><path d="${icon.solid}"/></svg>`;
  fs.writeFileSync(path.join(ICONS_DIR, 'white', `${icon.id}-white.svg`), whiteSvg);
  totalFilesWritten += 1;

  // Populate JS dictionary
  // Base name maps to solid by default
  dictionary[icon.id] = {
    path: icon.solid,
    category: icon.category,
    keywords: [...icon.keywords, icon.category.toLowerCase(), 'solid'],
    variant: 'solid',
    base: icon.id
  };
  dictionary[`${icon.id}-solid`] = {
    path: icon.solid,
    category: icon.category,
    keywords: [...icon.keywords, icon.category.toLowerCase(), 'solid'],
    variant: 'solid',
    base: icon.id
  };
  dictionary[`${icon.id}-outline`] = {
    path: icon.outline,
    category: icon.category,
    keywords: [...icon.keywords, icon.category.toLowerCase(), 'outline', 'kontur'],
    variant: 'outline',
    base: icon.id
  };
  dictionary[`${icon.id}-black`] = {
    path: icon.solid,
    category: icon.category,
    keywords: [...icon.keywords, icon.category.toLowerCase(), 'black', 'dark'],
    variant: 'black',
    base: icon.id
  };
  dictionary[`${icon.id}-white`] = {
    path: icon.solid,
    category: icon.category,
    keywords: [...icon.keywords, icon.category.toLowerCase(), 'white', 'light'],
    variant: 'white',
    base: icon.id
  };
});

console.log(`Generated ${totalFilesWritten} standalone SVG files in icons/`);

// Build standalone frontend plugin JS
const bundleContent = `/**
 * Custom Home Assistant Icons (ha-custom-icons)
 * Version: 1.0.0
 * Author: Adromir (https://github.com/adromir)
 * 
 * Provides ${icons.length} custom smart home icons in 4 variants (Solid, Outline, Black, White).
 * Accessible via prefixes 'ci:<icon-name>' and 'custom:<icon-name>'.
 */

(function () {
  'use strict';

  const ICON_CATALOG = ${JSON.stringify(dictionary, null, 2)};

  async function getIcon(name) {
    if (!name) return undefined;
    const cleanName = name.toLowerCase().trim();
    const entry = ICON_CATALOG[cleanName] || ICON_CATALOG[cleanName + '-solid'];
    if (entry) {
      return {
        path: entry.path,
        viewBox: '0 0 24 24'
      };
    }
    return undefined;
  }

  async function getIconList() {
    return Object.entries(ICON_CATALOG).map(([name, data]) => ({
      name: name,
      keywords: data.keywords || [name]
    }));
  }

  // Register in Home Assistant core APIs
  window.customIconsets = window.customIconsets || {};
  window.customIcons = window.customIcons || {};

  window.customIconsets['ci'] = getIcon;
  window.customIconsets['custom'] = getIcon;

  window.customIcons['ci'] = { getIcon, getIconList };
  window.customIcons['custom'] = { getIcon, getIconList };

  console.info(
    '%c HA-CUSTOM-ICONS %c v1.0.0 Loaded (${icons.length} icons in 4 variants: Solid, Outline, Black, White) ',
    'color: white; background: #0284c7; font-weight: 700; border-radius: 4px 0 0 4px; padding: 2px 6px;',
    'color: #0284c7; background: #e0f2fe; font-weight: 600; border-radius: 0 4px 4px 0; padding: 2px 6px;'
  );

  // ==========================================
  // LOVELACE COMPONENT: <ha-custom-icons-gallery>
  // Interactive gallery card with search, category filtering and click-to-copy
  // ==========================================
  class HaCustomIconsGallery extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._search = '';
      this._category = 'All';
      this._variant = 'all';
    }

    setConfig(config) {
      this._config = config || {};
      this.render();
    }

    getCardSize() {
      return 6;
    }

    static getStubConfig() {
      return {
        title: 'Custom Icons Gallery'
      };
    }

    render() {
      if (!this.shadowRoot) return;

      const title = this._config.title || 'Custom Icons Catalog (ha-custom-icons)';
      const categories = ['All', ...new Set(Object.values(ICON_CATALOG).map(i => i.category))];

      const filtered = Object.entries(ICON_CATALOG).filter(([name, item]) => {
        if (this._category !== 'All' && item.category !== this._category) return false;
        if (this._variant !== 'all' && item.variant !== this._variant) return false;
        if (this._search) {
          const q = this._search.toLowerCase();
          const matchName = name.includes(q);
          const matchKw = item.keywords.some(k => k.toLowerCase().includes(q));
          return matchName || matchKw;
        }
        return true;
      });

      this.shadowRoot.innerHTML = \`
        <style>
          :host {
            display: block;
            font-family: var(--ha-card-header-font-family, inherit);
            color: var(--primary-text-color, #1e293b);
          }
          ha-card {
            padding: 16px;
            background: var(--ha-card-background, var(--card-background-color, #ffffff));
            border-radius: var(--ha-card-border-radius, 16px);
            border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
            box-shadow: var(--ha-card-box-shadow, 0 4px 16px rgba(0,0,0,0.06));
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 14px;
            flex-wrap: wrap;
            gap: 8px;
          }
          .title {
            font-size: 1.25rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .badge {
            background: var(--primary-color, #0284c7);
            color: white;
            font-size: 0.75rem;
            padding: 2px 8px;
            border-radius: 9999px;
            font-weight: 600;
          }
          .toolbar {
            display: flex;
            gap: 10px;
            margin-bottom: 16px;
            flex-wrap: wrap;
          }
          input.search {
            flex: 1;
            min-width: 200px;
            padding: 10px 14px;
            border-radius: 8px;
            border: 1px solid var(--divider-color, #cbd5e1);
            background: var(--card-background-color, #f8fafc);
            color: inherit;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s;
          }
          input.search:focus {
            border-color: var(--primary-color, #0284c7);
          }
          select.select {
            padding: 10px 14px;
            border-radius: 8px;
            border: 1px solid var(--divider-color, #cbd5e1);
            background: var(--card-background-color, #f8fafc);
            color: inherit;
            font-size: 0.95rem;
            outline: none;
            cursor: pointer;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
            gap: 10px;
            max-height: 480px;
            overflow-y: auto;
            padding-right: 4px;
          }
          .icon-tile {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 12px 8px;
            border-radius: 12px;
            background: rgba(148, 163, 184, 0.08);
            border: 1px solid rgba(148, 163, 184, 0.15);
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: center;
            position: relative;
          }
          .icon-tile:hover {
            transform: translateY(-2px);
            background: rgba(2, 132, 199, 0.1);
            border-color: var(--primary-color, #0284c7);
          }
          .icon-tile svg {
            width: 32px;
            height: 32px;
            fill: var(--primary-color, currentColor);
            margin-bottom: 6px;
          }
          .icon-name {
            font-size: 0.72rem;
            font-weight: 600;
            word-break: break-all;
            line-height: 1.2;
          }
          .icon-tag {
            font-size: 0.65rem;
            opacity: 0.65;
            margin-top: 2px;
            text-transform: uppercase;
          }
          .toast {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            background: #0f172a;
            color: #f8fafc;
            padding: 8px 16px;
            border-radius: 9999px;
            font-size: 0.85rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s;
            z-index: 9999;
          }
          .toast.show {
            opacity: 1;
          }
        </style>

        <ha-card>
          <div class="header">
            <div class="title">
              <span>\${title}</span>
              <span class="badge">\${filtered.length} Icons</span>
            </div>
          </div>

          <div class="toolbar">
            <input class="search" type="text" placeholder="Search icons, keywords (e.g. waschmaschine, espresso, pump)..." value="\${this._search}">
            <select class="select select-cat">
              \${categories.map(c => \`<option value="\${c}" \${this._category === c ? 'selected' : ''}>\${c}</option>\`).join('')}
            </select>
            <select class="select select-var">
              <option value="all" \${this._variant === 'all' ? 'selected' : ''}>All Variants</option>
              <option value="solid" \${this._variant === 'solid' ? 'selected' : ''}>Solid</option>
              <option value="outline" \${this._variant === 'outline' ? 'selected' : ''}>Outline</option>
              <option value="black" \${this._variant === 'black' ? 'selected' : ''}>Black</option>
              <option value="white" \${this._variant === 'white' ? 'selected' : ''}>White</option>
            </select>
          </div>

          <div class="grid">
            \${filtered.map(([name, item]) => \`
              <div class="icon-tile" data-name="ci:\${name}" title="Click to copy ci:\${name}">
                <svg viewBox="0 0 24 24"><path d="\${item.path}"/></svg>
                <div class="icon-name">\${name}</div>
                <div class="icon-tag">\${item.variant}</div>
              </div>
            \`).join('')}
          </div>

          <div class="toast" id="toast">Copied to clipboard!</div>
        </ha-card>
      \`;

      // Event listeners
      const searchInput = this.shadowRoot.querySelector('input.search');
      searchInput.addEventListener('input', (e) => {
        this._search = e.target.value;
        this.render();
      });

      const catSelect = this.shadowRoot.querySelector('.select-cat');
      catSelect.addEventListener('change', (e) => {
        this._category = e.target.value;
        this.render();
      });

      const varSelect = this.shadowRoot.querySelector('.select-var');
      varSelect.addEventListener('change', (e) => {
        this._variant = e.target.value;
        this.render();
      });

      const tiles = this.shadowRoot.querySelectorAll('.icon-tile');
      const toast = this.shadowRoot.querySelector('#toast');
      tiles.forEach(t => {
        t.addEventListener('click', () => {
          const val = t.getAttribute('data-name');
          navigator.clipboard.writeText(val).then(() => {
            toast.textContent = \`Copied "\${val}" to clipboard!\`;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
          });
        });
      });
    }
  }

  customElements.define('ha-custom-icons-gallery', HaCustomIconsGallery);
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: 'ha-custom-icons-gallery',
    name: 'Custom Icons Gallery',
    description: 'Interactive visual catalog and search tool for ha-custom-icons'
  });
})();
`;

fs.writeFileSync(path.join(ROOT_DIR, 'ha-custom-icons.js'), bundleContent);
console.log(`Successfully generated ha-custom-icons.js (${(fs.statSync(path.join(ROOT_DIR, 'ha-custom-icons.js')).size / 1024).toFixed(1)} KB)`);
