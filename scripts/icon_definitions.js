// Icon definitions for ha-custom-icons
// 48 specialized smart home icons in 4 variants (solid, outline, black, white)
// All paths designed for 0 0 24 24 standard Home Assistant / Material Design viewBox.

module.exports = [
  // ==========================================
  // GROUP 1: EUROPEAN WASHING & DRYER CYCLES
  // ==========================================
  {
    id: "washing-machine-prewash",
    name: "Washing Machine Prewash",
    category: "Appliances",
    keywords: ["waschmaschine", "vorwäsche", "prewash", "laundry", "wash", "soak"],
    description: "Washing machine tub with prewash indicator droplet and left soak arrow",
    solid: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 4a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 5.5l1.5 2h-3z",
    outline: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm-4-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
  },
  {
    id: "washing-machine-rinse",
    name: "Washing Machine Rinse",
    category: "Appliances",
    keywords: ["waschmaschine", "spülen", "rinse", "water", "laundry", "cycle"],
    description: "Washing machine tub with wavy water level indicating rinse cycle",
    solid: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm-4 6.5c.8 0 1.2-.5 2-.5s1.2.5 2 .5 1.2-.5 2-.5 1.2.5 2 .5v1c-.8 0-1.2-.5-2-.5s-1.2.5-2 .5-1.2-.5-2-.5-1.2.5-2 .5z",
    outline: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm-3.5 5.5c.7 0 1-.4 1.7-.4s1 .4 1.8.4 1-.4 1.7-.4 1 .4 1.8.4v1c-.8 0-1.2-.4-1.8-.4s-1 .4-1.7.4-1-.4-1.8-.4-1.1.4-1.7.4z"
  },
  {
    id: "washing-machine-spin",
    name: "Washing Machine Spin",
    category: "Appliances",
    keywords: ["waschmaschine", "schleudern", "spin", "centrifuge", "rpm", "laundry", "spirale"],
    description: "Washing machine drum with high-speed centrifugal whirlpool spiral",
    solid: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM8 4.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zM12 7.2a5.8 5.8 0 1 1-5.8 5.8 5.8 5.8 0 0 1 5.8-5.8zm0 1.2a4.6 4.6 0 1 0 4.6 4.6 4.6 4.6 0 0 0-4.6-4.6zM16.2 13A4.2 4.2 0 0 1 7.8 13A3.4 3.4 0 0 1 14.6 13A2.6 2.6 0 0 1 9.4 13A1.8 1.8 0 0 1 13 13A1 1 0 0 1 11 13a.7.7 0 0 1 1.4 0A.4.4 0 0 0 11.8 13A1.2 1.2 0 0 0 10.6 13A2 2 0 0 0 13.4 13A2.8 2.8 0 0 0 8.8 13A3.6 3.6 0 0 0 15.2 13a.7.7 0 0 1 1 0Z",
    outline: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zM8 4.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm3 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM12 7.2a5.8 5.8 0 1 1-5.8 5.8 5.8 5.8 0 0 1 5.8-5.8zm0 1.2a4.6 4.6 0 1 0 4.6 4.6 4.6 4.6 0 0 0-4.6-4.6zM16.2 13A4.2 4.2 0 0 1 7.8 13A3.4 3.4 0 0 1 14.6 13A2.6 2.6 0 0 1 9.4 13A1.8 1.8 0 0 1 13 13A1 1 0 0 1 11 13a.7.7 0 0 1 1.4 0A.4.4 0 0 0 11.8 13A1.2 1.2 0 0 0 10.6 13A2 2 0 0 0 13.4 13A2.8 2.8 0 0 0 8.8 13A3.6 3.6 0 0 0 15.2 13a.7.7 0 0 1 1 0Z"
  },
  {
    id: "washing-machine-drain",
    name: "Washing Machine Drain",
    category: "Appliances",
    keywords: ["waschmaschine", "abpumpen", "drain", "water pump", "laundry"],
    description: "Washing machine drum with downward drainage discharge arrow",
    solid: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3v4.5l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8V10z",
    outline: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm1 2v4.5l1.5-1.5 1.1 1.1-3.6 3.6-3.6-3.6 1.1-1.1 1.5 1.5V11z"
  },
  {
    id: "washing-machine-rinse-hold",
    name: "Washing Machine Rinse Hold",
    category: "Appliances",
    keywords: ["waschmaschine", "spülstopp", "rinse hold", "pause", "laundry"],
    description: "Washing tub filled with water with central pause indicator bars",
    solid: "M4 4h16v3h-1.5l-1.3 11.2A2.5 2.5 0 0 1 14.7 21H9.3a2.5 2.5 0 0 1-2.5-2.8L5.5 7H4V4zm6 5.5v7h1.8v-7H10zm2.2 0v7H14v-7h-1.8z",
    outline: "M4 4h16v3h-1.5l-1.3 11.2A2.5 2.5 0 0 1 14.7 21H9.3a2.5 2.5 0 0 1-2.5-2.8L5.5 7H4V4zm2 2l1.2 10.4a1 1 0 0 0 1 .9h5.6a1 1 0 0 0 1-.9L16 6H6zm4 3.5h1.5v6H10v-6zm2.5 0H14v6h-1.5v-6z"
  },
  {
    id: "dryer-iron-dry",
    name: "Dryer Iron Dry",
    category: "Appliances",
    keywords: ["trockner", "bügeltrocken", "iron dry", "laundry", "dryer", "iron"],
    description: "Dryer drum with integrated clothes iron silhouette",
    solid: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm4 7h-7a2 2 0 0 1-2-2v-1h9v3zm0-4.5h-5.5a1.5 1.5 0 0 1 1.5-1.5H16v1.5z",
    outline: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm3.5 5.5h-6a1.5 1.5 0 0 1-1.5-1.5v-.8h7.5v2.3zm0-3.5H12a1.2 1.2 0 0 1 1.2-1.2h2.3v1.2z"
  },
  {
    id: "dryer-cupboard-dry",
    name: "Dryer Cupboard Dry",
    category: "Appliances",
    keywords: ["trockner", "schranktrocken", "cupboard dry", "laundry", "hanger", "wardrobe"],
    description: "Dryer drum with clothes hanger symbol for cupboard-dry laundry",
    solid: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2.5a1.2 1.2 0 0 1 1.2 1.2c0 .4-.2.8-.5 1l2.8 2.3H8.5l2.8-2.3c-.3-.2-.5-.6-.5-1A1.2 1.2 0 0 1 12 9.5zm-3.5 6.5h7v1.2h-7z",
    outline: "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 2.2a1 1 0 0 1 1 1c0 .3-.1.6-.4.8l2.2 1.8H9.2l2.2-1.8c-.3-.2-.4-.5-.4-.8a1 1 0 0 1 1-1zm-3 5.3h6v1h-6z"
  },
  {
    id: "filter-lint-clean",
    name: "Filter Lint Clean",
    category: "Appliances",
    keywords: ["flusensieb", "filter", "lint", "reinigen", "dryer", "trockner", "maintenance"],
    description: "Dryer lint filter mesh with particulate dots and cleaning indicators",
    solid: "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm3 1v12h10V6H7zm2 2h2v2H9V8zm4 0h2v2h-2V8zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z",
    outline: "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm2 0v14h12V5H6zm3 3h2v2H9V8zm4 0h2v2h-2V8zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z"
  },

  // ==========================================
  // GROUP 2: COFFEE MACHINE (VOLLAUTOMAT)
  // ==========================================
  {
    id: "coffee-espresso-single",
    name: "Espresso Single",
    category: "Appliances",
    keywords: ["espresso", "single", "kaffee", "coffee", "crema", "shot"],
    description: "Espresso cup with a single rich droplet indicating a single shot",
    solid: "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-5-7c.7 1 2 2.3 2 3.5a2 2 0 0 1-4 0C9 5.3 10.3 4 11 3zM2 20h16v2H2z",
    outline: "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5H6zm10 0v5h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2zm-5-7c.7 1 2 2.3 2 3.5a2 2 0 0 1-4 0C9 5.3 10.3 4 11 3zM2 20h16v2H2z"
  },
  {
    id: "coffee-espresso-double",
    name: "Espresso Double",
    category: "Appliances",
    keywords: ["espresso", "doppio", "double", "kaffee", "coffee", "crema", "2shot"],
    description: "Espresso cup with two parallel droplets for a double shot",
    solid: "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-7-7c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0C7.5 4.8 8.5 3.8 9 3zm4 0c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0c0-.9 1-1.9 1.5-2.7zM2 20h16v2H2z",
    outline: "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5H6zm10 0v5h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2zm-7-7c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0C7.5 4.8 8.5 3.8 9 3zm4 0c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0c0-.9 1-1.9 1.5-2.7zM2 20h16v2H2z"
  },
  {
    id: "coffee-cappuccino",
    name: "Coffee Cappuccino",
    category: "Appliances",
    keywords: ["cappuccino", "kaffee", "schaum", "foam", "coffee", "cup"],
    description: "Wide cappuccino cup with rounded milk foam topping and cocoa dust",
    solid: "M3 9h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9zm14 2h2.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H17v-5zM10 4a6 6 0 0 1 6 4H4a6 6 0 0 1 6-4zm1 1.5a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm-2.5 1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm4.5 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zM2 21h18v1.8H2z",
    outline: "M3 9h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9zm2 2v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-4H5zm12 0v5h2.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H17zM10 4.5A5.5 5.5 0 0 1 15.2 8H4.8A5.5 5.5 0 0 1 10 4.5zM2 21h18v1.8H2z"
  },
  {
    id: "coffee-latte-macchiato",
    name: "Latte Macchiato",
    category: "Appliances",
    keywords: ["latte", "macchiato", "milchkaffee", "coffee", "glass", "layers"],
    description: "Tall latte glass displaying three characteristic stratified layers",
    solid: "M6 2h12l-1.5 17a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8L6 2zm1.6 4h8.8l-.4-2H8l-.4 2zm.3 4h8.1l-.3-3H8.2l.3 3zm.4 4.5h7.3l-.4-3.5H8.6l.3 3.5zm.4 4.5h6.5l-.3-3.5H9l.3 3.5zM5 22h14v1.8H5z",
    outline: "M6 2h12l-1.5 17a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8L6 2zm2 2l1.2 14.8c0 .1.1.2.3.2h5c.2 0 .3-.1.3-.2L16 4H8zm.5 4h7v1.5h-7V8zm.4 4.5h6.2V14H8.9v-1.5zM5 22h14v1.8H5z"
  },
  {
    id: "coffee-grounds-container-full",
    name: "Coffee Grounds Full",
    category: "Appliances",
    keywords: ["kaffeesatz", "trester", "tresterbehälter", "coffee puck", "waste", "voll"],
    description: "Coffee grounds waste container overflowing with spent espresso pucks",
    solid: "M4 7h16l-1.5 12a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 7zm4-4h8a1.5 1.5 0 0 1 1.5 1.5V6H6.5V4.5A1.5 1.5 0 0 1 8 3zm-1 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z",
    outline: "M4 7h16l-1.5 12a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 7zm2.2 2l1.2 9.8c0 .1.1.2.3.2h8.6c.2 0 .3-.1.3-.2L17.8 9H6.2zM8 3h8a1.5 1.5 0 0 1 1.5 1.5V6H6.5V4.5A1.5 1.5 0 0 1 8 3zm-1 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
  },
  {
    id: "water-tank-empty",
    name: "Water Tank Empty",
    category: "Appliances",
    keywords: ["wassertank", "leer", "water tank", "refill", "kaffeemaschine", "empty"],
    description: "Vertical water tank container with low-level mark and warning symbol",
    solid: "M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3zm3 3h6V4H9v2zm2 5v5h2v-5h-2zm0 7v2h2v-2h-2zm-3 2h8v-1H8v1z",
    outline: "M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3zm2 0v18h8V3H8zm1 1h6v2H9V4zm2 7h2v5h-2v-5zm0 7h2v2h-2v-2z"
  },
  {
    id: "coffee-decalcify",
    name: "Coffee Decalcify",
    category: "Appliances",
    keywords: ["entkalken", "decalcify", "descale", "limescale", "kalk", "clean", "service"],
    description: "Heating spiral and conduit with limescale crystals and purge cycle",
    solid: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4.5h-2V7h2v5zm4.5 1.5l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4zm-9 0l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4z",
    outline: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8zm1 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4.5h-2V7h2v5zm4.5 1.5l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4z"
  },

  // ==========================================
  // GROUP 3: DISHWASHER (GESCHIRRSPÜLER)
  // ==========================================
  {
    id: "dishwasher-cutlery-drawer",
    name: "Dishwasher Cutlery Drawer",
    category: "Appliances",
    keywords: ["besteckschublade", "cutlery", "geschirrspüler", "dishwasher", "fork", "knife", "spoon"],
    description: "Pullout dishwasher top cutlery tray holding fork, knife, and spoon",
    solid: "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 1v14h14V5H5zM7 7v3.5a1 1 0 0 0 .8.9v5.6h1.4v-5.6a1 1 0 0 0 .8-.9V7h-.8v2.5h-.7V7h-.8v2.5h-.7V7zm5 0v5a1.2 1.2 0 0 0 1 1v4h1.5v-4a1.2 1.2 0 0 0 1-1V9a2 2 0 0 0-2-2h-1.5zm4.5 0a1.5 2.5 0 0 0 0 5v5h1.5v-5a1.5 2.5 0 0 0 0-5z",
    outline: "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 0v16h14V4H5zm1 2h12v12H6V6zM7.5 7.5v3a.8.8 0 0 0 .6.7v4.8h1.2v-4.8a.8.8 0 0 0 .6-.7v-3H9.2v2h-.6v-2h-.6v2h-.5zM12 7.5v4.5a1 1 0 0 0 .8.8v3.2h1.2v-3.2a1 1 0 0 0 .8-.8V9a1.5 1.5 0 0 0-1.5-1.5H12zM16 7.5a1.2 2 0 0 0 0 4v4.5h1.2v-4.5a1.2 2 0 0 0 0-4z"
  },
  {
    id: "dishwasher-salt-refill",
    name: "Dishwasher Salt Refill",
    category: "Appliances",
    keywords: ["salz", "regeneriersalz", "salt", "spülmaschine", "dishwasher", "refill"],
    description: "Dishwasher salt container with funnel and twin intertwined 'S' arrows",
    solid: "M12 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm1 4.5c1.7 0 3 1.1 3 2.5a2.5 2.5 0 0 1-1.5 2.3l-2.5 1.2c-.8.4-1 .8-1 1.2 0 .7.7 1.3 1.7 1.3 1.2 0 2-.5 2.5-1.2l1.3 1.3c-.8 1-2.1 1.7-3.8 1.7-2 0-3.5-1.2-3.5-2.8a2.6 2.6 0 0 1 1.6-2.4l2.5-1.2c.7-.3 1-.7 1-1.1 0-.6-.6-1-1.4-1-1 0-1.8.4-2.3 1l-1.3-1.3c.9-1 2.2-1.4 3.7-1.4z",
    outline: "M12 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 2a7 7 0 1 1-7 7 7 7 0 0 1 7-7zm1 2.5c1.7 0 3 1.1 3 2.5a2.5 2.5 0 0 1-1.5 2.3l-2.5 1.2c-.8.4-1 .8-1 1.2 0 .7.7 1.3 1.7 1.3 1.2 0 2-.5 2.5-1.2l1.3 1.3c-.8 1-2.1 1.7-3.8 1.7-2 0-3.5-1.2-3.5-2.8a2.6 2.6 0 0 1 1.6-2.4l2.5-1.2c.7-.3 1-.7 1-1.1 0-.6-.6-1-1.4-1-1 0-1.8.4-2.3 1l-1.3-1.3c.9-1 2.2-1.4 3.7-1.4z"
  },
  {
    id: "dishwasher-rinse-aid",
    name: "Dishwasher Rinse Aid",
    category: "Appliances",
    keywords: ["klarspüler", "rinse aid", "glanz", "geschirrspüler", "dishwasher", "shine"],
    description: "Radiant 8-spoke sunburst icon indicating rinse aid shine dispenser",
    solid: "M12 5.5l1.6 3.8 4.1-1-1.8 3.7 3.6 1.8-3.6 1.8 1.8 3.7-4.1-1-1.6 3.8-1.6-3.8-4.1 1 1.8-3.7-3.6-1.8 3.6-1.8-1.8-3.7 4.1 1L12 5.5zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z",
    outline: "M12 2l2.2 5.3 5.7-1.4-2.5 5.2 5 2.5-5 2.5 2.5 5.2-5.7-1.4L12 22l-2.2-5.3-5.7 1.4 2.5-5.2-5-2.5 5-2.5-2.5-5.2 5.7 1.4L12 2zm0 4.2L10.7 9l-3.2-.8 1.4 3-2.8 1.4 2.8 1.4-1.4 3 3.2-.8 1.3 2.8 1.3-2.8 3.2.8-1.4-3 2.8-1.4-2.8-1.4 1.4-3-3.2.8L12 6.2z"
  },

  // ==========================================
  // GROUP 4: ROBOT VACUUM & MOP BASE
  // ==========================================
  {
    id: "robot-mop-washing",
    name: "Robot Mop Washing",
    category: "Appliances",
    keywords: ["saugroboter", "mop", "wischen", "station", "reinigung", "robot", "cleaning"],
    description: "Circular robot vacuum with LiDAR and dual rotating mop cleaning pads",
    solid: "M12 2a8 8 0 0 0-8 8c0 2.2.9 4.2 2.3 5.6l.8-.8A6.8 6.8 0 0 1 5.2 10a6.8 6.8 0 0 1 13.6 0c0 1.8-.7 3.5-1.9 4.8l.8.8A8 8 0 0 0 12 2zM12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4.5 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zM16.5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zm-5.5 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",
    outline: "M12 2a8 8 0 0 0-8 8c0 2.4 1 4.5 2.6 6l.9-.9A6.7 6.7 0 0 1 5.5 10a6.5 6.5 0 0 1 13 0c0 1.9-.8 3.7-2 5.1l.9.9A8 8 0 0 0 12 2zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 1.3a.7.7 0 1 1-.7.7.7.7 0 0 1 .7-.7zM7.5 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.3a1.7 1.7 0 1 1-1.7 1.7 1.7 1.7 0 0 1 1.7-1.7zm9-1.3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.3a1.7 1.7 0 1 1-1.7 1.7 1.7 1.7 0 0 1 1.7-1.7z"
  },
  {
    id: "robot-water-dirty-full",
    name: "Robot Dirty Water Full",
    category: "Appliances",
    keywords: ["schmutzwasser", "voll", "dirty water", "tank", "saugroboter", "station"],
    description: "Dirty water recovery canister filled to max line with float trigger",
    solid: "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 4v12h10V7H7zm2 2h6v2H9V9zm0 4h6v4H9v-4z",
    outline: "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 0v18h10V3H7zm2 4h6v2H9V7zm0 4h6v6H9v-6z"
  },
  {
    id: "robot-water-clean-empty",
    name: "Robot Clean Water Empty",
    category: "Appliances",
    keywords: ["frischwasser", "leer", "clean water", "empty", "refill", "saugroboter"],
    description: "Clean water reservoir showing minimum level warning",
    solid: "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm6 4c.8 1.2 2 2.7 2 4a2 2 0 0 1-4 0c0-1.3 1.2-2.8 2-4zm-4 10h10v2H7v-2z",
    outline: "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 0v18h10V3H7zm4 4c.8 1.2 2 2.7 2 4a2 2 0 0 1-4 0c0-1.3 1.2-2.8 2-4zm-4 10h10v1.5H7V17z"
  },
  {
    id: "robot-dustbin-empty",
    name: "Robot Dustbin Empty",
    category: "Appliances",
    keywords: ["staubbehälter", "leeren", "dustbin", "bag", "station", "saugroboter"],
    description: "Robot dustbin canister with drop trapdoor and dust evacuation arrow",
    solid: "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm7 12h2v3l2-2 1.4 1.4-4.4 4.4-4.4-4.4L9 20l2 2v-5zm-3-9h8v2H8V8z",
    outline: "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm2 0v9h12V5H6zm5 12h2v3l1.5-1.5 1.1 1.1-3.6 3.6-3.6-3.6 1.1-1.1 1.5 1.5v-3zm-3-9h8v1.8H8V8z"
  },

  // ==========================================
  // GROUP 5: HVAC, HYDRONICS & PLUMBING
  // ==========================================
  {
    id: "underfloor-heating-manifold",
    name: "Underfloor Heating Manifold",
    category: "Climate",
    keywords: ["fußbodenheizung", "verteiler", "manifold", "flow", "topmeter", "hydraulik", "heating"],
    description: "Underfloor heating manifold bar with three vertical circuit flow indicators",
    solid: "M3 4h18v3H3V4zm0 13h18v3H3v-3zm3-10h2v10H6V7zm5 0h2v10h-2V7zm5 0h2v10h-2V7zm-6 2h4v2h-4V9zm0 4h4v2h-4v-2z",
    outline: "M3 4h18v3H3V4zm2 1.5h14V5.5H5v0zm-2 11.5h18v3H3v-3zm2 1.5h14v-0H5v0zm1-10h2v10H6V7zm5 0h2v10h-2V7zm5 0h2v10h-2V7zm-6 3h4v1.5h-4V10z"
  },
  {
    id: "circulation-pump",
    name: "Circulation Pump",
    category: "Climate",
    keywords: ["umwälzpumpe", "pumpe", "pump", "circulation", "heizung", "flow", "water"],
    description: "Centrifugal hydronic circulation pump with central rotation symbol",
    solid: "M12 2a9 9 0 0 0-9 9c0 4.2 2.9 7.7 6.9 8.7L9 22h6l-.9-2.3c4-.9 6.9-4.5 6.9-8.7a9 9 0 0 0-9-9zm0 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm1.5 2.5l-3 2.5h3v2.5l3-2.5h-3V8.5z",
    outline: "M12 2a9 9 0 0 0-9 9c0 4.2 2.9 7.7 6.9 8.7L9 22h6l-.9-2.3c4-.9 6.9-4.5 6.9-8.7a9 9 0 0 0-9-9zm0 2a7 7 0 0 1 7 7c0 3.3-2.3 6.1-5.4 6.8L13 20h-2l-.6-2.2A6.9 6.9 0 0 1 5 11a7 7 0 0 1 7-7zm0 3a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm1 2l-2.5 2h2.5v2l2.5-2H13V9z"
  },
  {
    id: "buffer-tank-stratified",
    name: "Buffer Tank Stratified",
    category: "Climate",
    keywords: ["pufferspeicher", "schichtspeicher", "buffer tank", "storage", "heizung", "solar"],
    description: "Stratified thermal storage tank displaying hot, warm, and cool temperature zones",
    solid: "M7 4a5 5 0 0 1 10 0v16a5 5 0 0 1-10 0V4zm2 2h6V4a3 3 0 0 0-6 0v2zm0 5h6V8H9v3zm0 5h6v-3H9v3zm0 4a3 3 0 0 0 6 0v-2H9v2z",
    outline: "M7 4a5 5 0 0 1 10 0v16a5 5 0 0 1-10 0V4zm2 0a3 3 0 0 1 6 0v16a3 3 0 0 1-6 0V4zm0 4h6V6H9v2zm0 5h6v-2H9v2zm0 5h6v-2H9v2z"
  },
  {
    id: "mixing-valve-3way",
    name: "3-Way Mixing Valve",
    category: "Climate",
    keywords: ["mischer", "3wege", "mixing valve", "valve", "hydraulik", "vorlauf", "bypass"],
    description: "Three-way hydronic mixing valve with actuator head and flow ports",
    solid: "M3 10h5.2l2-3.5L8.4 3h7.2l-1.8 3.5 2 3.5H21v4h-5.2l-2 3.5 1.8 3.5H8.4l1.8-3.5-2-3.5H3v-4zm9-1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    outline: "M3 10h5.2l2-3.5L8.4 3h7.2l-1.8 3.5 2 3.5H21v4h-5.2l-2 3.5 1.8 3.5H8.4l1.8-3.5-2-3.5H3v-4zm2 2v0h4.3l2-3.5h1.4l2 3.5H19v0h-4.3l-2 3.5h-1.4l-2-3.5H5zm7-1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
  },
  {
    id: "hydraulic-balancing",
    name: "Hydraulic Balancing Valve",
    category: "Climate",
    keywords: ["hydraulischer abgleich", "balancing", "flow meter", "ventil", "valve", "differential"],
    description: "Hydraulic balancing valve with dual test nipples and pressure differential port",
    solid: "M4 10h4V6h2v4h4V6h2v4h4v4h-4v4h-2v-4h-4v4H8v-4H4v-4zm7-3h2V5h-2v2zm-4 0h2V5H7v2zm8 0h2V5h-2v2zm-3 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z",
    outline: "M4 10h4V6h2v4h4V6h2v4h4v4h-4v4h-2v-4h-4v4H8v-4H4v-4zm2 2v0h3v-4h2v4h4v-4h2v4h3v0h-3v4h-2v-4h-4v4h-2v-4H6zm1-5h2V5H7v2zm8 0h2V5h-2v2z"
  },
  {
    id: "heat-pump-outdoor-unit",
    name: "Heat Pump Outdoor Unit",
    category: "Climate",
    keywords: ["wärmepumpe", "außeneinheit", "heat pump", "hvac", "inverter", "lüfter"],
    description: "Outdoor heat pump chassis featuring axial fan louvre and heat exchanger fins",
    solid: "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm7 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 0 1 2.8 2H10V9.2a3 3 0 0 1 0 0zm0 4h2.8A3 3 0 0 1 10 14.8V13zm-2.8-1A3 3 0 0 1 10 9.2V11H7.2zm0 2H10v1.8A3 3 0 0 1 7.2 14zM16 7h2v10h-2V7z",
    outline: "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 0v16h14V4H5zm5 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 1.8a3.2 3.2 0 1 1-3.2 3.2A3.2 3.2 0 0 1 10 8.8zm6-1.8h1.8v10H16V7z"
  },
  {
    id: "radiator-valve-smart",
    name: "Smart Radiator Valve",
    category: "Climate",
    keywords: ["thermostat", "heizung", "ventil", "trv", "valve", "radiator", "smart"],
    description: "Smart radiator valve head with digital temperature display and RF waves",
    solid: "M4 9h5v6H4V9zm5-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9V7zm3 3h4v4h-4v-4zm-9 1l-1.5 1.5L2 13l2-2zm0 2l-1 1-1-1 1-1zM20 7a6 6 0 0 1 0 10v-1.8a4.2 4.2 0 0 0 0-6.4V7z",
    outline: "M4 9h5v6H4V9zm2 2v2h3v-2H6zm3-4h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9V7zm2 2v6h6V9h-6zm2 1.5h2v3h-2v-3zM20 7a6 6 0 0 1 0 10v-1.8a4.2 4.2 0 0 0 0-6.4V7z"
  },

  // ==========================================
  // GROUP 6: WINDOW HANDLES & SMART SENSORS
  // ==========================================
  {
    id: "window-handle-closed",
    name: "Window Handle Closed",
    category: "Security",
    keywords: ["fenstergriff", "geschlossen", "fenster", "window", "handle", "closed", "secusignal"],
    description: "Window frame with handle pointing downwards indicating fully locked window",
    solid: "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 2v14h12V5H6zm4 5h3a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-2 0v-4.5H10V10z",
    outline: "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 0v18h12V3H6zm2 2h8v14H8V5zm3 5h2a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-2 0v-4.5H11V10z"
  },
  {
    id: "window-handle-tilted",
    name: "Window Handle Tilted",
    category: "Security",
    keywords: ["fenstergriff", "gekippt", "tilt", "fenster", "window", "handle", "kipp"],
    description: "Window frame in inward-tilted posture with handle oriented upwards",
    solid: "M4 4l3-2h10l3 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v12h10V6L15 4H9L7 6zm4 5h1.5V6a1 1 0 0 1 2 0v5.5a1.5 1.5 0 0 1-1.5 1.5H11V11z",
    outline: "M4 4l3-2h10l3 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2 .8V20h12V4.8L15.3 3.5H8.7L6 4.8zm3 2.2h6v11H9V7zm2 4h1.5V6a1 1 0 0 1 2 0v5.5a1.5 1.5 0 0 1-1.5 1.5H11V11z"
  },
  {
    id: "window-handle-open",
    name: "Window Handle Open",
    category: "Security",
    keywords: ["fenstergriff", "offen", "open", "fenster", "window", "handle", "opened"],
    description: "Window sash swung wide open with horizontal handle position",
    solid: "M3 3h14v2h-2v14h2v2H3V3zm14 2l5 3v11l-5-2V5zm-8 6h4.5a1 1 0 0 1 0 2H9a1.5 1.5 0 0 1-1.5-1.5V10h2v1z",
    outline: "M3 3h14v2h-2v14h2v2H3V3zm2 2v14h8V5H5zm12 1.3l3.5 2.1v8.2L17 15V6.3zm-8 4.7h4.5a1 1 0 0 1 0 2H9a1.5 1.5 0 0 1-1.5-1.5V10h2v1z"
  },
  {
    id: "presence-mmwave-radar",
    name: "Presence mmWave Radar",
    category: "Presence",
    keywords: ["präsenz", "mmwave", "radar", "anwesenheit", "presence", "motion", "sensor"],
    description: "Radar transmitter emitting high-frequency wave arcs for micro-presence detection",
    solid: "M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-4-1a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0H6zm-4 0a10 10 0 0 1 20 0h-2a8 8 0 0 0-16 0H2zm10 4l-2 5h4l-2-5z",
    outline: "M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm0 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-2a6 6 0 0 1 12 0h-1.8a4.2 4.2 0 0 0-8.4 0H6zm-4 0a10 10 0 0 1 20 0h-1.8a8.2 8.2 0 0 0-16.4 0H2zm10 4l-2 5h4l-2-5z"
  },
  {
    id: "mailbox-letter-delivered",
    name: "Mailbox Letter Delivered",
    category: "Security",
    keywords: ["briefkasten", "post", "mailbox", "letter", "mail", "brief", "posteinwurf"],
    description: "Wall-mounted mailbox with raised delivery flap and mail envelope sticking out",
    solid: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm2 2v11h12V9H6zm2-6h8v2H8V3zm1 8h6v1.8H9V11zm0 3.5h4v1.8H9v-1.8z",
    outline: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm2 0v13h12V7H6zm2 2h8v9H8V9zm0-6h8v2H8V3zm1 8h6v1.5H9V11z"
  },
  {
    id: "water-leakage-floor-probe",
    name: "Water Leakage Floor Probe",
    category: "Security",
    keywords: ["wasserleck", "leckage", "water leak", "flood", "probe", "sensor", "boden"],
    description: "Floor-level leak detector puck with dual metal electrode prongs in water puddle",
    solid: "M12 2a4 4 0 0 1 4 4c0 2.2-2.5 5.5-4 7.2-1.5-1.7-4-5-4-7.2a4 4 0 0 1 4-4zm-5 13h10a1 1 0 0 1 1 1v2a4 4 0 0 1-8 0v-1H8v1a4 4 0 0 1-2-3.5V16a1 1 0 0 1 1-1zm3 3a2 2 0 0 0 4 0v-1h-4v1z",
    outline: "M12 2a4 4 0 0 1 4 4c0 2.2-2.5 5.5-4 7.2-1.5-1.7-4-5-4-7.2a4 4 0 0 1 4-4zm0 2.2a2 2 0 0 0-2 1.8c0 1.2 1.4 3.4 2 4.4.6-1 2-3.2 2-4.4a2 2 0 0 0-2-1.8zm-5 11h10a1 1 0 0 1 1 1v1.5a3.5 3.5 0 0 1-7 0v-.5h-2v.5a3.5 3.5 0 0 1-3-3.4V16a1 1 0 0 1 1-1z"
  },
  {
    id: "roller-shutter-tilt",
    name: "Roller Shutter Tilt",
    category: "Climate",
    keywords: ["raffstore", "jalousie", "lamellen", "shutter", "blinds", "tilt", "sonnenschutz"],
    description: "External window louvres/slats angled at 45 degrees for daylight glare control",
    solid: "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 3v12h12V6H6zm2 2.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5z",
    outline: "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm3 3.5l7-2.5.4 1.4-7 2.5L8 8.5zm0 3.5l7-2.5.4 1.4-7 2.5L8 12zm0 3.5l7-2.5.4 1.4-7 2.5L8 15.5z"
  },

  // ==========================================
  // GROUP 7: HOME ASSISTANT CATEGORIES & INFRA
  // ==========================================
  {
    id: "light-cove-strip",
    name: "Light Cove Strip",
    category: "Lighting",
    keywords: ["beleuchtung", "led", "stripe", "voute", "indirect", "cove", "light"],
    description: "Architectural ceiling light cove with concealed LED strip emitting downward glow",
    solid: "M3 4h18v3H7v5H3V4zm5 8h13v2H8v-2zm-5 4l1.5 2 1.5-2H3zm5 0l1.5 2 1.5-2H8zm5 0l1.5 2 1.5-2h-3zm5 0l1.5 2 1.5-2h-3z",
    outline: "M3 4h18v3H7v5H3V4zm2 2v4h2V6h12V5H5zm3 6h13v2H8v-2zm-5 4l1.5 2 1.5-2H3zm5 0l1.5 2 1.5-2H8zm5 0l1.5 2 1.5-2h-3zm5 0l1.5 2 1.5-2h-3z"
  },
  {
    id: "power-meter-grid",
    name: "Power Meter Grid",
    category: "Energy",
    keywords: ["stromzähler", "grid", "netz", "energie", "power meter", "kwh", "einspeisung"],
    description: "Utility power meter display with bidirectional import and feed-in arrows",
    solid: "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm3 3h10v4H7V6zm2 7l-2 2h3v3h2v-3h3l-2-2h-4zm-3 7h12v2H6z",
    outline: "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 0v14h12V3H6zm2 3h8v3H8V6zm1 6l-2 2h2.5v3h1V14H13l-2-2zm-3 8h12v1.8H6V20z"
  },
  {
    id: "smart-plug-meter",
    name: "Smart Plug Power Meter",
    category: "Energy",
    keywords: ["steckdose", "smart plug", "funksteckdose", "power", "watt", "energie", "meter"],
    description: "Smart switchable plug with energy metering flash badge",
    solid: "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V4zm2 0v3h8V4H8zm4 7l-2 3.5h2.5L11.5 19l4-4.5H13l1.5-3.5H12z",
    outline: "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V4zm2 0v3h8V4H8zm-3 5v9h14V9H5zm7 2l-1.5 2.5h2l-.8 3.5 3-3.5h-1.8l1.1-2.5H12z"
  },
  {
    id: "home-battery-storage",
    name: "Home Battery Storage",
    category: "Energy",
    keywords: ["speicher", "batteriespeicher", "battery", "home storage", "solar", "photovoltaik"],
    description: "Stationary home battery wall unit displaying state of charge tiers",
    solid: "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm3 4h8V5H8v2zm0 4h8V9H8v2zm0 4h8v-2H8v2zm0 4h5v-2H8v2z",
    outline: "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 0v18h10V3H7zm2 2h6v2H9V5zm0 4h6v2H9V9zm0 4h6v2H9v-2zm0 4h4v2H9v-2z"
  },
  {
    id: "subwoofer-speaker",
    name: "Subwoofer Speaker",
    category: "Multimedia",
    keywords: ["subwoofer", "bass", "lautsprecher", "audio", "multimedia", "lfe", "sound"],
    description: "Cubic subwoofer cabinet with prominent round cone driver and bass reflex port",
    solid: "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm8 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 9a1.8 1.8 0 1 0 1.8 1.8A1.8 1.8 0 0 0 12 17z",
    outline: "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 0v18h12V3H6zm6 3a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 1.8a3.2 3.2 0 1 0 3.2 3.2A3.2 3.2 0 0 0 12 7.8zm0 9.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8z"
  },
  {
    id: "av-receiver-amplifier",
    name: "AV Receiver Amplifier",
    category: "Multimedia",
    keywords: ["receiver", "denon", "verstärker", "av", "multimedia", "audio", "heimkino"],
    description: "Home theatre AV receiver front face with large master volume rotary dial",
    solid: "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm4 3h7v3H7V9zm10 0a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 17 9zm-10 6h2v1.5H7V15zm4 0h2v1.5h-2V15z",
    outline: "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm2 0v12h14V6H5zm3 3h5v3H8V9zm8.5 0a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 16.5 9zm-8.5 6h2v1.5H8V15zm3.5 0h2v1.5h-2V15z"
  },
  {
    id: "nas-server-rack",
    name: "NAS Server Rack",
    category: "Infrastructure",
    keywords: ["nas", "server", "datengrab", "rack", "festplatte", "storage", "infrastruktur"],
    description: "Network attached storage chassis with four hard drive caddies and status LEDs",
    solid: "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v2h10V6H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7z",
    outline: "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2 0v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
  },
  {
    id: "docker-container-cube",
    name: "Docker Container Cube",
    category: "Infrastructure",
    keywords: ["docker", "container", "virtualization", "cube", "datengrab", "leafwiki"],
    description: "Isometric software container cube with side reinforcement ribs",
    solid: "M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2zm0 2.3L5.4 8.1l6.6 3.8 6.6-3.8L12 4.3zM4.5 9.7v7.5l6.5 3.7v-7.5L4.5 9.7zm8.5 11.2l6.5-3.7V9.7L13 13.4v7.5z",
    outline: "M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2zm0 2.3L5.4 8.1l6.6 3.8 6.6-3.8L12 4.3zM4.5 9.7v7.5l6.5 3.7v-7.5L4.5 9.7zm8.5 11.2l6.5-3.7V9.7L13 13.4v7.5z"
  },
  {
    id: "soil-moisture-probe",
    name: "Soil Moisture Probe",
    category: "Environment",
    keywords: ["bodenfeuchte", "pflanze", "soil", "moisture", "garten", "probe", "sensor"],
    description: "Two-pronged soil capacitive moisture probe with emerging plant sprout",
    solid: "M11 2a4 4 0 0 1 4 4c0 1.2-.5 2.3-1.4 3.1l.4.9H8v-1.5A3.5 3.5 0 0 1 11 2zM7 11h10v2H7v-2zm1 3h2v8H8v-8zm6 0h2v8h-2v-8z",
    outline: "M11 2a4 4 0 0 1 4 4c0 1.2-.5 2.3-1.4 3.1l.4.9H8v-1.5A3.5 3.5 0 0 1 11 2zm0 2a1.8 1.8 0 0 0-1.8 1.8V7h2.2a2 2 0 0 0 .8-1.4A1.8 1.8 0 0 0 11 4zM7 11h10v2H7v-2zm1 3h2v8H8v-8zm6 0h2v8h-2v-8z"
  },
  {
    id: "co2-air-quality-meter",
    name: "CO2 Air Quality Meter",
    category: "Environment",
    keywords: ["co2", "luftgüte", "air quality", "ppm", "umwelt", "sensor", "lüften"],
    description: "Indoor air quality monitor unit indicating CO2 parts per million",
    solid: "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm4 4a3 3 0 0 0 3 3h2a3 3 0 0 0 0-6h-2a3 3 0 0 0-3 3zm6 6H8v2h6v-2zm2 3H8v2h8v-2z",
    outline: "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2 0v16h12V4H6zm3 4a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2zm-1 6h8v1.5H8V14zm0 3h8v1.5H8V17z"
  },
  {
    id: "smartwatch-charging",
    name: "Smartwatch Charging",
    category: "Devices",
    keywords: ["smartwatch", "laden", "charging", "akku", "wearable", "uhr", "watch"],
    description: "Round smartwatch resting on a magnetic wireless induction charging puck",
    solid: "M10 2h4l.5 3h-5l.5-3zm0 20h4l-.5-3h-3l-.5 3zM12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3.5l-2.5 3.5h2l-.5 3 2.5-3.5h-2l.5-3z",
    outline: "M10 2h4l.5 3h-5l.5-3zm0 20h4l-.5-3h-3l-.5 3zM12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm1 1.5l-2.5 3.5h2l-.5 3 2.5-3.5h-2l.5-3z"
  },
  {
    id: "system-health-pulse",
    name: "System Health Pulse",
    category: "System",
    keywords: ["diagnose", "gesundheit", "system", "health", "ekg", "pulse", "vital"],
    description: "Heartbeat pulse waveform across a system CPU activity monitor",
    solid: "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm1 8h4.2l1.6-3.5 2.4 7 1.8-4.5 1.4 1H19v-2h-3l-1.6 3.8-2.4-7-1.8 4.2H4v1z",
    outline: "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 0v16h14V4H5zm-1 8h4.2l1.6-3.5 2.4 7 1.8-4.5 1.4 1H19v-2h-3l-1.6 3.8-2.4-7-1.8 4.2H4v1z"
  }
];
