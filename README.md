# 🎨 Custom Home Assistant Icons (`ha-custom-icons`)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=adromir&repository=ha-custom-icons&category=plugin)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/default)
[![GitHub Release](https://img.shields.io/github/v/release/adromir/ha-custom-icons?style=for-the-badge&color=blue)](https://github.com/adromir/ha-custom-icons/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/adromir/ha-custom-icons)

A specialized, high-quality custom SVG icon pack for **Home Assistant** providing **48 unique smart home icons in 4 distinct variants** (**Solid**, **Outline**, **Black**, and **White**) for a total of **192 handcrafted vector icons**.

Fills the major gaps in standard Material Design Icons (`mdi:*`) for modern European appliances, hydronic heating/HVAC systems, smart sensors, and advanced home automation infrastructure.

---

## ✨ Key Advantages

- 🎯 **Tailored for Smart Homes**: Purpose-built icons for washing cycle stages (Prewash, Rinse, Spin, Drain, Rinse Hold), coffee machines (Single/Double Espresso, Cappuccino, Latte, Grounds Full, Decalcify), dishwashers, robot vacuum/mop bases, hydronic HVAC (Underfloor heating manifold, circulation pumps, stratified buffer tanks, 3-way mixing valves), 3-state window handles (Closed, Tilted, Open), and mmWave radar sensors.
- 🎨 **4 Variants for Every Icon**:
  - `solid` (default): Filled silhouette geometry that reacts dynamically to entity states and active theme accent colors (`fill="currentColor"`).
  - `outline`: Crisp, modern 1.5–2px wireframe contour style (`fill="currentColor"`).
  - `black`: High-contrast dark styling for light dashboards, white tiles, and badge accents (`#000000`).
  - `white`: Pure high-contrast white styling for dark glass dashboards, Vision Glass cards, and colored badges (`#FFFFFF`).
- ⚡ **Zero-Overhead Native Integration**: Hooks directly into Home Assistant's native frontend icon resolver via `window.customIconsets` and `window.customIcons`. No python backend or heavy dependencies required.
- 🔍 **Native Icon Picker Search**: Automatically populates Home Assistant's Lovelace icon picker with searchable keywords in both German and English (e.g. searching *"waschmaschine"*, *"kaffee"*, *"wärmepumpe"*, or *"radar"* immediately finds the icon).
- 🏷️ **Dual Ergonomic Prefixes**: Use either the ultra-compact `ci:<name>` or the standard `custom:<name>` prefix.
- 🖼️ **Interactive In-Dashboard Gallery**: Includes a built-in Lovelace card `<ha-custom-icons-gallery>` featuring real-time search, category filtering, and one-click copy to clipboard.

---

## 📦 Icon Catalog (48 Icons × 4 Variants)

### 🧺 European Appliances & Laundry Cycles
| Icon Name | Variants (`ci:*`) | Description | Keywords |
| :--- | :--- | :--- | :--- |
| **`washing-machine-prewash`** | `solid`, `outline`, `black`, `white` | Washing machine with prewash soak droplet | `waschmaschine`, `vorwäsche`, `laundry` |
| **`washing-machine-rinse`** | `solid`, `outline`, `black`, `white` | Drum with wavy rinse water level | `waschmaschine`, `spülen`, `rinse` |
| **`washing-machine-spin`** | `solid`, `outline`, `black`, `white` | Centrifugal high-speed drum rotation spiral | `waschmaschine`, `schleudern`, `spin` |
| **`washing-machine-drain`** | `solid`, `outline`, `black`, `white` | Water pump evacuation drainage arrow | `waschmaschine`, `abpumpen`, `drain` |
| **`washing-machine-rinse-hold`** | `solid`, `outline`, `black`, `white` | Water tub with central pause bars (Spülstopp) | `waschmaschine`, `spülstopp`, `pause` |
| **`dryer-iron-dry`** | `solid`, `outline`, `black`, `white` | Clothes dryer drum with clothes iron symbol | `trockner`, `bügeltrocken`, `iron` |
| **`dryer-cupboard-dry`** | `solid`, `outline`, `black`, `white` | Clothes dryer drum with clothes hanger | `trockner`, `schranktrocken`, `wardrobe` |
| **`filter-lint-clean`** | `solid`, `outline`, `black`, `white` | Lint screen filter with trapped particles | `flusensieb`, `filter`, `lint`, `clean` |

### ☕ Coffee Machine & Barista (Kaffeevollautomat)
| Icon Name | Variants (`ci:*`) | Description | Keywords |
| :--- | :--- | :--- | :--- |
| **`coffee-espresso-single`** | `solid`, `outline`, `black`, `white` | Espresso cup with single concentrated drop | `espresso`, `single`, `kaffee`, `shot` |
| **`coffee-espresso-double`** | `solid`, `outline`, `black`, `white` | Espresso cup with dual parallel drops | `espresso`, `doppio`, `double`, `kaffee` |
| **`coffee-cappuccino`** | `solid`, `outline`, `black`, `white` | Wide cup with rounded milk foam and cocoa | `cappuccino`, `kaffee`, `schaum`, `foam` |
| **`coffee-latte-macchiato`** | `solid`, `outline`, `black`, `white` | Tall glass with 3 stratified beverage layers | `latte`, `macchiato`, `milchkaffee` |
| **`coffee-grounds-container-full`**| `solid`, `outline`, `black`, `white` | Spent coffee grounds collection tray full | `kaffeesatz`, `trester`, `puck`, `waste` |
| **`water-tank-empty`** | `solid`, `outline`, `black`, `white` | Side water tank showing minimum level warning | `wassertank`, `leer`, `refill`, `empty` |
| **`coffee-decalcify`** | `solid`, `outline`, `black`, `white` | Heating pipe with limescale crystal purge | `entkalken`, `decalcify`, `descale` |

### 🍽️ Dishwasher (Geschirrspüler)
| Icon Name | Variants (`ci:*`) | Description | Keywords |
| :--- | :--- | :--- | :--- |
| **`dishwasher-cutlery-drawer`** | `solid`, `outline`, `black`, `white` | Pullout top cutlery tray with fork, knife, spoon | `besteckschublade`, `cutlery`, `spüler` |
| **`dishwasher-salt-refill`** | `solid`, `outline`, `black`, `white` | Regenerating salt reservoir funnel with 'S' | `salz`, `regeneriersalz`, `salt`, `refill` |
| **`dishwasher-rinse-aid`** | `solid`, `outline`, `black`, `white` | Radiant 8-spoke sunburst shine dispenser | `klarspüler`, `rinse aid`, `glanz`, `shine` |

### 🤖 Robot Vacuum & Mopping Station
| Icon Name | Variants (`ci:*`) | Description | Keywords |
| :--- | :--- | :--- | :--- |
| **`robot-mop-washing`** | `solid`, `outline`, `black`, `white` | Vacuum over dual motorized washing rollers | `saugroboter`, `mop`, `wischen`, `station` |
| **`robot-water-dirty-full`** | `solid`, `outline`, `black`, `white` | Dirty water recovery canister at max capacity | `schmutzwasser`, `voll`, `dirty water` |
| **`robot-water-clean-empty`** | `solid`, `outline`, `black`, `white` | Fresh clean water tank empty notification | `frischwasser`, `leer`, `clean water` |
| **`robot-dustbin-empty`** | `solid`, `outline`, `black`, `white` | Dustbin drop trapdoor evacuation arrow | `staubbehälter`, `leeren`, `dustbin` |

### ♨️ HVAC, Hydronics & Plumbing (Heizung & Sanitär)
| Icon Name | Variants (`ci:*`) | Description | Keywords |
| :--- | :--- | :--- | :--- |
| **`underfloor-heating-manifold`** | `solid`, `outline`, `black`, `white` | Manifold with 3 flow tubes / Topmeters | `fußbodenheizung`, `verteiler`, `manifold` |
| **`circulation-pump`** | `solid`, `outline`, `black`, `white` | Centrifugal circulation pump with flow arrow | `umwälzpumpe`, `pumpe`, `pump`, `flow` |
| **`buffer-tank-stratified`** | `solid`, `outline`, `black`, `white` | Stratified storage tank with 3 heat zones | `pufferspeicher`, `schichtspeicher`, `tank` |
| **`mixing-valve-3way`** | `solid`, `outline`, `black`, `white` | 3-way hydronic valve with rotary actuator | `mischer`, `3wege`, `mixing valve`, `bypass` |
| **`hydraulic-balancing`** | `solid`, `outline`, `black`, `white` | Balancing valve with dual differential ports | `hydraulischer abgleich`, `flow meter` |
| **`heat-pump-outdoor-unit`** | `solid`, `outline`, `black`, `white` | Monobloc heat pump with fan louvre & fins | `wärmepumpe`, `außeneinheit`, `heat pump` |
| **`radiator-valve-smart`** | `solid`, `outline`, `black`, `white` | Smart TRV head with digital setpoint display | `thermostat`, `heizung`, `ventil`, `trv` |

### 🪟 Windows, Doors & Smart Sensors
| Icon Name | Variants (`ci:*`) | Description | Keywords |
| :--- | :--- | :--- | :--- |
| **`window-handle-closed`** | `solid`, `outline`, `black`, `white` | Window handle pointing down (0° locked) | `fenstergriff`, `geschlossen`, `window` |
| **`window-handle-tilted`** | `solid`, `outline`, `black`, `white` | Window tilted inward with handle raised (45°) | `fenstergriff`, `gekippt`, `tilt` |
| **`window-handle-open`** | `solid`, `outline`, `black`, `white` | Window casement swung wide open (90°) | `fenstergriff`, `offen`, `opened` |
| **`presence-mmwave-radar`** | `solid`, `outline`, `black`, `white` | Microstrip radar emitting high-frequency arcs | `präsenz`, `mmwave`, `radar`, `sensor` |
| **`mailbox-letter-delivered`** | `solid`, `outline`, `black`, `white` | Mailbox with raised flap and delivered letter | `briefkasten`, `post`, `mailbox`, `letter` |
| **`water-leakage-floor-probe`** | `solid`, `outline`, `black`, `white` | Floor sensor puck with dual metal contact pins | `wasserleck`, `leckage`, `water leak` |
| **`roller-shutter-tilt`** | `solid`, `outline`, `black`, `white` | External blinds with louvres tilted at 45° | `raffstore`, `jalousie`, `lamellen`, `tilt` |

### ⚡ Infrastructure, Energy, Multimedia & System
| Icon Name | Variants (`ci:*`) | Description | Keywords |
| :--- | :--- | :--- | :--- |
| **`light-cove-strip`** | `solid`, `outline`, `black`, `white` | Ceiling cove lighting with indirect LED glow | `beleuchtung`, `led`, `voute`, `cove` |
| **`power-meter-grid`** | `solid`, `outline`, `black`, `white` | Bidirectional utility meter (import / feed-in) | `stromzähler`, `grid`, `netz`, `energie` |
| **`smart-plug-meter`** | `solid`, `outline`, `black`, `white` | Smart plug with power metering lightning badge | `steckdose`, `smart plug`, `watt`, `meter` |
| **`home-battery-storage`** | `solid`, `outline`, `black`, `white` | Home storage battery showing tiered charge bars | `speicher`, `batteriespeicher`, `solar` |
| **`subwoofer-speaker`** | `solid`, `outline`, `black`, `white` | Subwoofer with large driver cone & reflex port | `subwoofer`, `bass`, `lfe`, `audio` |
| **`av-receiver-amplifier`** | `solid`, `outline`, `black`, `white` | AV receiver fascia with large master volume dial | `receiver`, `denon`, `verstärker`, `audio` |
| **`nas-server-rack`** | `solid`, `outline`, `black`, `white` | Storage server chassis with 4 hot-swap bays | `nas`, `server`, `datengrab`, `rack` |
| **`docker-container-cube`** | `solid`, `outline`, `black`, `white` | Software container cube with reinforcement ribs | `docker`, `container`, `virtualization` |
| **`soil-moisture-probe`** | `solid`, `outline`, `black`, `white` | Two-prong capacitive soil probe with sprout | `bodenfeuchte`, `pflanze`, `soil`, `probe` |
| **`co2-air-quality-meter`** | `solid`, `outline`, `black`, `white` | Indoor air quality monitor displaying CO2 | `co2`, `luftgüte`, `air quality`, `ppm` |
| **`smartwatch-charging`** | `solid`, `outline`, `black`, `white` | Round smartwatch resting on magnetic puck | `smartwatch`, `laden`, `charging`, `akku` |
| **`system-health-pulse`** | `solid`, `outline`, `black`, `white` | Heartbeat ECG waveform across central chip | `diagnose`, `system`, `health`, `pulse` |

---

## 🚀 Installation

### Method 1: Via HACS (Recommended)

1. Open **HACS** in your Home Assistant sidebar.
2. Click the three dots `⋮` in the top right corner and select **Custom repositories**.
3. Add the repository URL:
   ```
   https://github.com/adromir/ha-custom-icons
   ```
4. Select Type: **Plugin / Lovelace**.
5. Click **Add**, find **Custom Home Assistant Icons**, and click **Download**.
6. Refresh your browser window.

### Method 2: Manual Installation

1. Download [`ha-custom-icons.js`](https://raw.githubusercontent.com/adromir/ha-custom-icons/main/ha-custom-icons.js).
2. Copy `ha-custom-icons.js` into your `<config>/www/` folder.
3. In Home Assistant, go to **Settings ➔ Dashboards ➔ More Options (⋮) ➔ Resources**.
4. Add resource URL: `/local/ha-custom-icons.js` with Resource Type: **JavaScript Module**.
5. Refresh your browser.

---

## 💡 Usage Examples

### 1. In Lovelace Entities Cards

```yaml
type: entities
title: Laundry Status
entities:
  - entity: sensor.waschmaschine_status
    name: Current Cycle
    icon: ci:washing-machine-spin
  - entity: binary_sensor.waschmaschine_vorwasche
    name: Prewash Stage
    icon: ci:washing-machine-prewash-outline
  - entity: binary_sensor.trockner_flusensieb
    name: Lint Screen Maintenance
    icon: ci:filter-lint-clean
```

### 2. In Button & Tile Cards

```yaml
type: tile
entity: climate.better_thermostat_wohnzimmer
name: Floor Heating Circuit
icon: ci:underfloor-heating-manifold
```

```yaml
type: button
name: Single Espresso
tap_action:
  action: call-service
  service: script.brew_single_espresso
icon: ci:coffee-espresso-single
```

### 3. In Entity Registry & Helper Configuration

You can type the icon name directly into any Home Assistant entity settings dialog or icon field:
- `ci:window-handle-closed`
- `ci:window-handle-tilted`
- `ci:window-handle-open`
- `custom:presence-mmwave-radar`
- `ci:circulation-pump`
- `ci:subwoofer-speaker`

---

## 🖼️ Built-in Lovelace Gallery Card

Need a handy cheat sheet inside your dashboard? Add the included gallery card to any Lovelace view:

```yaml
type: custom:ha-custom-icons-gallery
title: Smart Home Custom Icons
```

**Features of the Gallery Card**:
- 🔍 Live search by name, German, or English keywords
- 📂 Filter by category (*Appliances*, *Climate*, *Security*, *Energy*, *Multimedia*, *Infrastructure*, etc.)
- 🎭 Switch between variants (*Solid*, *Outline*, *Black*, *White*, or *All*)
- 📋 Click on any icon tile to instantly copy `ci:<icon-name>` to your clipboard!

---

## 🛠️ Local Development & SVG Build

To rebuild the SVG files and bundle from source:

```bash
git clone https://github.com/adromir/ha-custom-icons.git
cd ha-custom-icons
npm run build
```

This updates all standalone SVGs in `icons/solid/`, `icons/outline/`, `icons/black/`, and `icons/white/` and compiles the optimized `ha-custom-icons.js`.

---

## ⚠️ Disclaimer

This is a community-developed custom frontend icon pack and is not affiliated with or endorsed by Home Assistant, Nabu Casa, or Material Design Icons. All trademarks belong to their respective owners.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more details.

**Author**: [Adromir](https://github.com/adromir)  
**Website**: [https://github.com/adromir](https://github.com/adromir)
