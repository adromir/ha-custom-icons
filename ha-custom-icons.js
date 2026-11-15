/**
 * Custom Home Assistant Icons (ha-custom-icons)
 * Version: 1.1.0
 * Author: Adromir (https://github.com/adromir)
 * 
 * Provides 48 custom smart home icons in 4 variants (Solid, Outline, Black, White).
 * Accessible via prefixes 'ci:<icon-name>' and 'custom:<icon-name>'.
 */

(function () {
  'use strict';

  const ICON_CATALOG = {
  "washing-machine-prewash": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 4a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 5.5l1.5 2h-3z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "vorwäsche",
      "prewash",
      "laundry",
      "wash",
      "soak",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-prewash"
  },
  "washing-machine-prewash-solid": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 4a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 5.5l1.5 2h-3z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "vorwäsche",
      "prewash",
      "laundry",
      "wash",
      "soak",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-prewash"
  },
  "washing-machine-prewash-outline": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm-4-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "vorwäsche",
      "prewash",
      "laundry",
      "wash",
      "soak",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "washing-machine-prewash"
  },
  "washing-machine-prewash-black": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 4a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 5.5l1.5 2h-3z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "vorwäsche",
      "prewash",
      "laundry",
      "wash",
      "soak",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "washing-machine-prewash"
  },
  "washing-machine-prewash-white": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 4a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 5.5l1.5 2h-3z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "vorwäsche",
      "prewash",
      "laundry",
      "wash",
      "soak",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "washing-machine-prewash"
  },
  "washing-machine-rinse": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm-4 6.5c.8 0 1.2-.5 2-.5s1.2.5 2 .5 1.2-.5 2-.5 1.2.5 2 .5v1c-.8 0-1.2-.5-2-.5s-1.2.5-2 .5-1.2-.5-2-.5-1.2.5-2 .5z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülen",
      "rinse",
      "water",
      "laundry",
      "cycle",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-rinse"
  },
  "washing-machine-rinse-solid": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm-4 6.5c.8 0 1.2-.5 2-.5s1.2.5 2 .5 1.2-.5 2-.5 1.2.5 2 .5v1c-.8 0-1.2-.5-2-.5s-1.2.5-2 .5-1.2-.5-2-.5-1.2.5-2 .5z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülen",
      "rinse",
      "water",
      "laundry",
      "cycle",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-rinse"
  },
  "washing-machine-rinse-outline": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm-3.5 5.5c.7 0 1-.4 1.7-.4s1 .4 1.8.4 1-.4 1.7-.4 1 .4 1.8.4v1c-.8 0-1.2-.4-1.8-.4s-1 .4-1.7.4-1-.4-1.8-.4-1.1.4-1.7.4z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülen",
      "rinse",
      "water",
      "laundry",
      "cycle",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "washing-machine-rinse"
  },
  "washing-machine-rinse-black": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm-4 6.5c.8 0 1.2-.5 2-.5s1.2.5 2 .5 1.2-.5 2-.5 1.2.5 2 .5v1c-.8 0-1.2-.5-2-.5s-1.2.5-2 .5-1.2-.5-2-.5-1.2.5-2 .5z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülen",
      "rinse",
      "water",
      "laundry",
      "cycle",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "washing-machine-rinse"
  },
  "washing-machine-rinse-white": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm-4 6.5c.8 0 1.2-.5 2-.5s1.2.5 2 .5 1.2-.5 2-.5 1.2.5 2 .5v1c-.8 0-1.2-.5-2-.5s-1.2.5-2 .5-1.2-.5-2-.5-1.2.5-2 .5z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülen",
      "rinse",
      "water",
      "laundry",
      "cycle",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "washing-machine-rinse"
  },
  "washing-machine-spin": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM8 4.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zM12 7.2a5.8 5.8 0 1 1-5.8 5.8 5.8 5.8 0 0 1 5.8-5.8zm0 1.2a4.6 4.6 0 1 0 4.6 4.6 4.6 4.6 0 0 0-4.6-4.6zM16.2 13A4.2 4.2 0 0 1 7.8 13A3.4 3.4 0 0 1 14.6 13A2.6 2.6 0 0 1 9.4 13A1.8 1.8 0 0 1 13 13A1 1 0 0 1 11 13a.7.7 0 0 1 1.4 0A.4.4 0 0 0 11.8 13A1.2 1.2 0 0 0 10.6 13A2 2 0 0 0 13.4 13A2.8 2.8 0 0 0 8.8 13A3.6 3.6 0 0 0 15.2 13a.7.7 0 0 1 1 0Z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "schleudern",
      "spin",
      "centrifuge",
      "rpm",
      "laundry",
      "spirale",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-spin"
  },
  "washing-machine-spin-solid": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM8 4.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zM12 7.2a5.8 5.8 0 1 1-5.8 5.8 5.8 5.8 0 0 1 5.8-5.8zm0 1.2a4.6 4.6 0 1 0 4.6 4.6 4.6 4.6 0 0 0-4.6-4.6zM16.2 13A4.2 4.2 0 0 1 7.8 13A3.4 3.4 0 0 1 14.6 13A2.6 2.6 0 0 1 9.4 13A1.8 1.8 0 0 1 13 13A1 1 0 0 1 11 13a.7.7 0 0 1 1.4 0A.4.4 0 0 0 11.8 13A1.2 1.2 0 0 0 10.6 13A2 2 0 0 0 13.4 13A2.8 2.8 0 0 0 8.8 13A3.6 3.6 0 0 0 15.2 13a.7.7 0 0 1 1 0Z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "schleudern",
      "spin",
      "centrifuge",
      "rpm",
      "laundry",
      "spirale",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-spin"
  },
  "washing-machine-spin-outline": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zM8 4.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm3 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM12 7.2a5.8 5.8 0 1 1-5.8 5.8 5.8 5.8 0 0 1 5.8-5.8zm0 1.2a4.6 4.6 0 1 0 4.6 4.6 4.6 4.6 0 0 0-4.6-4.6zM16.2 13A4.2 4.2 0 0 1 7.8 13A3.4 3.4 0 0 1 14.6 13A2.6 2.6 0 0 1 9.4 13A1.8 1.8 0 0 1 13 13A1 1 0 0 1 11 13a.7.7 0 0 1 1.4 0A.4.4 0 0 0 11.8 13A1.2 1.2 0 0 0 10.6 13A2 2 0 0 0 13.4 13A2.8 2.8 0 0 0 8.8 13A3.6 3.6 0 0 0 15.2 13a.7.7 0 0 1 1 0Z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "schleudern",
      "spin",
      "centrifuge",
      "rpm",
      "laundry",
      "spirale",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "washing-machine-spin"
  },
  "washing-machine-spin-black": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM8 4.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zM12 7.2a5.8 5.8 0 1 1-5.8 5.8 5.8 5.8 0 0 1 5.8-5.8zm0 1.2a4.6 4.6 0 1 0 4.6 4.6 4.6 4.6 0 0 0-4.6-4.6zM16.2 13A4.2 4.2 0 0 1 7.8 13A3.4 3.4 0 0 1 14.6 13A2.6 2.6 0 0 1 9.4 13A1.8 1.8 0 0 1 13 13A1 1 0 0 1 11 13a.7.7 0 0 1 1.4 0A.4.4 0 0 0 11.8 13A1.2 1.2 0 0 0 10.6 13A2 2 0 0 0 13.4 13A2.8 2.8 0 0 0 8.8 13A3.6 3.6 0 0 0 15.2 13a.7.7 0 0 1 1 0Z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "schleudern",
      "spin",
      "centrifuge",
      "rpm",
      "laundry",
      "spirale",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "washing-machine-spin"
  },
  "washing-machine-spin-white": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM8 4.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zM12 7.2a5.8 5.8 0 1 1-5.8 5.8 5.8 5.8 0 0 1 5.8-5.8zm0 1.2a4.6 4.6 0 1 0 4.6 4.6 4.6 4.6 0 0 0-4.6-4.6zM16.2 13A4.2 4.2 0 0 1 7.8 13A3.4 3.4 0 0 1 14.6 13A2.6 2.6 0 0 1 9.4 13A1.8 1.8 0 0 1 13 13A1 1 0 0 1 11 13a.7.7 0 0 1 1.4 0A.4.4 0 0 0 11.8 13A1.2 1.2 0 0 0 10.6 13A2 2 0 0 0 13.4 13A2.8 2.8 0 0 0 8.8 13A3.6 3.6 0 0 0 15.2 13a.7.7 0 0 1 1 0Z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "schleudern",
      "spin",
      "centrifuge",
      "rpm",
      "laundry",
      "spirale",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "washing-machine-spin"
  },
  "washing-machine-drain": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3v4.5l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8V10z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "abpumpen",
      "drain",
      "water pump",
      "laundry",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-drain"
  },
  "washing-machine-drain-solid": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3v4.5l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8V10z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "abpumpen",
      "drain",
      "water pump",
      "laundry",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-drain"
  },
  "washing-machine-drain-outline": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm1 2v4.5l1.5-1.5 1.1 1.1-3.6 3.6-3.6-3.6 1.1-1.1 1.5 1.5V11z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "abpumpen",
      "drain",
      "water pump",
      "laundry",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "washing-machine-drain"
  },
  "washing-machine-drain-black": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3v4.5l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8V10z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "abpumpen",
      "drain",
      "water pump",
      "laundry",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "washing-machine-drain"
  },
  "washing-machine-drain-white": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3v4.5l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8V10z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "abpumpen",
      "drain",
      "water pump",
      "laundry",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "washing-machine-drain"
  },
  "washing-machine-rinse-hold": {
    "path": "M4 4h16v3h-1.5l-1.3 11.2A2.5 2.5 0 0 1 14.7 21H9.3a2.5 2.5 0 0 1-2.5-2.8L5.5 7H4V4zm6 5.5v7h1.8v-7H10zm2.2 0v7H14v-7h-1.8z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülstopp",
      "rinse hold",
      "pause",
      "laundry",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-rinse-hold"
  },
  "washing-machine-rinse-hold-solid": {
    "path": "M4 4h16v3h-1.5l-1.3 11.2A2.5 2.5 0 0 1 14.7 21H9.3a2.5 2.5 0 0 1-2.5-2.8L5.5 7H4V4zm6 5.5v7h1.8v-7H10zm2.2 0v7H14v-7h-1.8z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülstopp",
      "rinse hold",
      "pause",
      "laundry",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "washing-machine-rinse-hold"
  },
  "washing-machine-rinse-hold-outline": {
    "path": "M4 4h16v3h-1.5l-1.3 11.2A2.5 2.5 0 0 1 14.7 21H9.3a2.5 2.5 0 0 1-2.5-2.8L5.5 7H4V4zm2 2l1.2 10.4a1 1 0 0 0 1 .9h5.6a1 1 0 0 0 1-.9L16 6H6zm4 3.5h1.5v6H10v-6zm2.5 0H14v6h-1.5v-6z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülstopp",
      "rinse hold",
      "pause",
      "laundry",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "washing-machine-rinse-hold"
  },
  "washing-machine-rinse-hold-black": {
    "path": "M4 4h16v3h-1.5l-1.3 11.2A2.5 2.5 0 0 1 14.7 21H9.3a2.5 2.5 0 0 1-2.5-2.8L5.5 7H4V4zm6 5.5v7h1.8v-7H10zm2.2 0v7H14v-7h-1.8z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülstopp",
      "rinse hold",
      "pause",
      "laundry",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "washing-machine-rinse-hold"
  },
  "washing-machine-rinse-hold-white": {
    "path": "M4 4h16v3h-1.5l-1.3 11.2A2.5 2.5 0 0 1 14.7 21H9.3a2.5 2.5 0 0 1-2.5-2.8L5.5 7H4V4zm6 5.5v7h1.8v-7H10zm2.2 0v7H14v-7h-1.8z",
    "category": "Appliances",
    "keywords": [
      "waschmaschine",
      "spülstopp",
      "rinse hold",
      "pause",
      "laundry",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "washing-machine-rinse-hold"
  },
  "dryer-iron-dry": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm4 7h-7a2 2 0 0 1-2-2v-1h9v3zm0-4.5h-5.5a1.5 1.5 0 0 1 1.5-1.5H16v1.5z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "bügeltrocken",
      "iron dry",
      "laundry",
      "dryer",
      "iron",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dryer-iron-dry"
  },
  "dryer-iron-dry-solid": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm4 7h-7a2 2 0 0 1-2-2v-1h9v3zm0-4.5h-5.5a1.5 1.5 0 0 1 1.5-1.5H16v1.5z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "bügeltrocken",
      "iron dry",
      "laundry",
      "dryer",
      "iron",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dryer-iron-dry"
  },
  "dryer-iron-dry-outline": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm3.5 5.5h-6a1.5 1.5 0 0 1-1.5-1.5v-.8h7.5v2.3zm0-3.5H12a1.2 1.2 0 0 1 1.2-1.2h2.3v1.2z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "bügeltrocken",
      "iron dry",
      "laundry",
      "dryer",
      "iron",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "dryer-iron-dry"
  },
  "dryer-iron-dry-black": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm4 7h-7a2 2 0 0 1-2-2v-1h9v3zm0-4.5h-5.5a1.5 1.5 0 0 1 1.5-1.5H16v1.5z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "bügeltrocken",
      "iron dry",
      "laundry",
      "dryer",
      "iron",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "dryer-iron-dry"
  },
  "dryer-iron-dry-white": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm4 7h-7a2 2 0 0 1-2-2v-1h9v3zm0-4.5h-5.5a1.5 1.5 0 0 1 1.5-1.5H16v1.5z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "bügeltrocken",
      "iron dry",
      "laundry",
      "dryer",
      "iron",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "dryer-iron-dry"
  },
  "dryer-cupboard-dry": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2.5a1.2 1.2 0 0 1 1.2 1.2c0 .4-.2.8-.5 1l2.8 2.3H8.5l2.8-2.3c-.3-.2-.5-.6-.5-1A1.2 1.2 0 0 1 12 9.5zm-3.5 6.5h7v1.2h-7z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "schranktrocken",
      "cupboard dry",
      "laundry",
      "hanger",
      "wardrobe",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dryer-cupboard-dry"
  },
  "dryer-cupboard-dry-solid": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2.5a1.2 1.2 0 0 1 1.2 1.2c0 .4-.2.8-.5 1l2.8 2.3H8.5l2.8-2.3c-.3-.2-.5-.6-.5-1A1.2 1.2 0 0 1 12 9.5zm-3.5 6.5h7v1.2h-7z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "schranktrocken",
      "cupboard dry",
      "laundry",
      "hanger",
      "wardrobe",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dryer-cupboard-dry"
  },
  "dryer-cupboard-dry-outline": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm6 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 2.2a1 1 0 0 1 1 1c0 .3-.1.6-.4.8l2.2 1.8H9.2l2.2-1.8c-.3-.2-.4-.5-.4-.8a1 1 0 0 1 1-1zm-3 5.3h6v1h-6z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "schranktrocken",
      "cupboard dry",
      "laundry",
      "hanger",
      "wardrobe",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "dryer-cupboard-dry"
  },
  "dryer-cupboard-dry-black": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2.5a1.2 1.2 0 0 1 1.2 1.2c0 .4-.2.8-.5 1l2.8 2.3H8.5l2.8-2.3c-.3-.2-.5-.6-.5-1A1.2 1.2 0 0 1 12 9.5zm-3.5 6.5h7v1.2h-7z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "schranktrocken",
      "cupboard dry",
      "laundry",
      "hanger",
      "wardrobe",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "dryer-cupboard-dry"
  },
  "dryer-cupboard-dry-white": {
    "path": "M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2.5a1.2 1.2 0 0 1 1.2 1.2c0 .4-.2.8-.5 1l2.8 2.3H8.5l2.8-2.3c-.3-.2-.5-.6-.5-1A1.2 1.2 0 0 1 12 9.5zm-3.5 6.5h7v1.2h-7z",
    "category": "Appliances",
    "keywords": [
      "trockner",
      "schranktrocken",
      "cupboard dry",
      "laundry",
      "hanger",
      "wardrobe",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "dryer-cupboard-dry"
  },
  "filter-lint-clean": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm3 1v12h10V6H7zm2 2h2v2H9V8zm4 0h2v2h-2V8zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z",
    "category": "Appliances",
    "keywords": [
      "flusensieb",
      "filter",
      "lint",
      "reinigen",
      "dryer",
      "trockner",
      "maintenance",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "filter-lint-clean"
  },
  "filter-lint-clean-solid": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm3 1v12h10V6H7zm2 2h2v2H9V8zm4 0h2v2h-2V8zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z",
    "category": "Appliances",
    "keywords": [
      "flusensieb",
      "filter",
      "lint",
      "reinigen",
      "dryer",
      "trockner",
      "maintenance",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "filter-lint-clean"
  },
  "filter-lint-clean-outline": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm2 0v14h12V5H6zm3 3h2v2H9V8zm4 0h2v2h-2V8zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z",
    "category": "Appliances",
    "keywords": [
      "flusensieb",
      "filter",
      "lint",
      "reinigen",
      "dryer",
      "trockner",
      "maintenance",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "filter-lint-clean"
  },
  "filter-lint-clean-black": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm3 1v12h10V6H7zm2 2h2v2H9V8zm4 0h2v2h-2V8zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z",
    "category": "Appliances",
    "keywords": [
      "flusensieb",
      "filter",
      "lint",
      "reinigen",
      "dryer",
      "trockner",
      "maintenance",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "filter-lint-clean"
  },
  "filter-lint-clean-white": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm3 1v12h10V6H7zm2 2h2v2H9V8zm4 0h2v2h-2V8zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z",
    "category": "Appliances",
    "keywords": [
      "flusensieb",
      "filter",
      "lint",
      "reinigen",
      "dryer",
      "trockner",
      "maintenance",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "filter-lint-clean"
  },
  "coffee-espresso-single": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-5-7c.7 1 2 2.3 2 3.5a2 2 0 0 1-4 0C9 5.3 10.3 4 11 3zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "single",
      "kaffee",
      "coffee",
      "crema",
      "shot",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-espresso-single"
  },
  "coffee-espresso-single-solid": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-5-7c.7 1 2 2.3 2 3.5a2 2 0 0 1-4 0C9 5.3 10.3 4 11 3zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "single",
      "kaffee",
      "coffee",
      "crema",
      "shot",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-espresso-single"
  },
  "coffee-espresso-single-outline": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5H6zm10 0v5h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2zm-5-7c.7 1 2 2.3 2 3.5a2 2 0 0 1-4 0C9 5.3 10.3 4 11 3zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "single",
      "kaffee",
      "coffee",
      "crema",
      "shot",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "coffee-espresso-single"
  },
  "coffee-espresso-single-black": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-5-7c.7 1 2 2.3 2 3.5a2 2 0 0 1-4 0C9 5.3 10.3 4 11 3zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "single",
      "kaffee",
      "coffee",
      "crema",
      "shot",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "coffee-espresso-single"
  },
  "coffee-espresso-single-white": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-5-7c.7 1 2 2.3 2 3.5a2 2 0 0 1-4 0C9 5.3 10.3 4 11 3zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "single",
      "kaffee",
      "coffee",
      "crema",
      "shot",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "coffee-espresso-single"
  },
  "coffee-espresso-double": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-7-7c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0C7.5 4.8 8.5 3.8 9 3zm4 0c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0c0-.9 1-1.9 1.5-2.7zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "doppio",
      "double",
      "kaffee",
      "coffee",
      "crema",
      "2shot",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-espresso-double"
  },
  "coffee-espresso-double-solid": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-7-7c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0C7.5 4.8 8.5 3.8 9 3zm4 0c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0c0-.9 1-1.9 1.5-2.7zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "doppio",
      "double",
      "kaffee",
      "coffee",
      "crema",
      "2shot",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-espresso-double"
  },
  "coffee-espresso-double-outline": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5H6zm10 0v5h2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2zm-7-7c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0C7.5 4.8 8.5 3.8 9 3zm4 0c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0c0-.9 1-1.9 1.5-2.7zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "doppio",
      "double",
      "kaffee",
      "coffee",
      "crema",
      "2shot",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "coffee-espresso-double"
  },
  "coffee-espresso-double-black": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-7-7c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0C7.5 4.8 8.5 3.8 9 3zm4 0c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0c0-.9 1-1.9 1.5-2.7zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "doppio",
      "double",
      "kaffee",
      "coffee",
      "crema",
      "2shot",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "coffee-espresso-double"
  },
  "coffee-espresso-double-white": {
    "path": "M4 8h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm12 2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v-5zm-7-7c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0C7.5 4.8 8.5 3.8 9 3zm4 0c.5.8 1.5 1.8 1.5 2.7a1.5 1.5 0 0 1-3 0c0-.9 1-1.9 1.5-2.7zM2 20h16v2H2z",
    "category": "Appliances",
    "keywords": [
      "espresso",
      "doppio",
      "double",
      "kaffee",
      "coffee",
      "crema",
      "2shot",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "coffee-espresso-double"
  },
  "coffee-cappuccino": {
    "path": "M3 9h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9zm14 2h2.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H17v-5zM10 4a6 6 0 0 1 6 4H4a6 6 0 0 1 6-4zm1 1.5a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm-2.5 1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm4.5 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zM2 21h18v1.8H2z",
    "category": "Appliances",
    "keywords": [
      "cappuccino",
      "kaffee",
      "schaum",
      "foam",
      "coffee",
      "cup",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-cappuccino"
  },
  "coffee-cappuccino-solid": {
    "path": "M3 9h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9zm14 2h2.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H17v-5zM10 4a6 6 0 0 1 6 4H4a6 6 0 0 1 6-4zm1 1.5a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm-2.5 1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm4.5 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zM2 21h18v1.8H2z",
    "category": "Appliances",
    "keywords": [
      "cappuccino",
      "kaffee",
      "schaum",
      "foam",
      "coffee",
      "cup",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-cappuccino"
  },
  "coffee-cappuccino-outline": {
    "path": "M3 9h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9zm2 2v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-4H5zm12 0v5h2.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H17zM10 4.5A5.5 5.5 0 0 1 15.2 8H4.8A5.5 5.5 0 0 1 10 4.5zM2 21h18v1.8H2z",
    "category": "Appliances",
    "keywords": [
      "cappuccino",
      "kaffee",
      "schaum",
      "foam",
      "coffee",
      "cup",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "coffee-cappuccino"
  },
  "coffee-cappuccino-black": {
    "path": "M3 9h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9zm14 2h2.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H17v-5zM10 4a6 6 0 0 1 6 4H4a6 6 0 0 1 6-4zm1 1.5a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm-2.5 1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm4.5 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zM2 21h18v1.8H2z",
    "category": "Appliances",
    "keywords": [
      "cappuccino",
      "kaffee",
      "schaum",
      "foam",
      "coffee",
      "cup",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "coffee-cappuccino"
  },
  "coffee-cappuccino-white": {
    "path": "M3 9h14v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9zm14 2h2.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H17v-5zM10 4a6 6 0 0 1 6 4H4a6 6 0 0 1 6-4zm1 1.5a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm-2.5 1a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm4.5 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zM2 21h18v1.8H2z",
    "category": "Appliances",
    "keywords": [
      "cappuccino",
      "kaffee",
      "schaum",
      "foam",
      "coffee",
      "cup",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "coffee-cappuccino"
  },
  "coffee-latte-macchiato": {
    "path": "M6 2h12l-1.5 17a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8L6 2zm1.6 4h8.8l-.4-2H8l-.4 2zm.3 4h8.1l-.3-3H8.2l.3 3zm.4 4.5h7.3l-.4-3.5H8.6l.3 3.5zm.4 4.5h6.5l-.3-3.5H9l.3 3.5zM5 22h14v1.8H5z",
    "category": "Appliances",
    "keywords": [
      "latte",
      "macchiato",
      "milchkaffee",
      "coffee",
      "glass",
      "layers",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-latte-macchiato"
  },
  "coffee-latte-macchiato-solid": {
    "path": "M6 2h12l-1.5 17a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8L6 2zm1.6 4h8.8l-.4-2H8l-.4 2zm.3 4h8.1l-.3-3H8.2l.3 3zm.4 4.5h7.3l-.4-3.5H8.6l.3 3.5zm.4 4.5h6.5l-.3-3.5H9l.3 3.5zM5 22h14v1.8H5z",
    "category": "Appliances",
    "keywords": [
      "latte",
      "macchiato",
      "milchkaffee",
      "coffee",
      "glass",
      "layers",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-latte-macchiato"
  },
  "coffee-latte-macchiato-outline": {
    "path": "M6 2h12l-1.5 17a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8L6 2zm2 2l1.2 14.8c0 .1.1.2.3.2h5c.2 0 .3-.1.3-.2L16 4H8zm.5 4h7v1.5h-7V8zm.4 4.5h6.2V14H8.9v-1.5zM5 22h14v1.8H5z",
    "category": "Appliances",
    "keywords": [
      "latte",
      "macchiato",
      "milchkaffee",
      "coffee",
      "glass",
      "layers",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "coffee-latte-macchiato"
  },
  "coffee-latte-macchiato-black": {
    "path": "M6 2h12l-1.5 17a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8L6 2zm1.6 4h8.8l-.4-2H8l-.4 2zm.3 4h8.1l-.3-3H8.2l.3 3zm.4 4.5h7.3l-.4-3.5H8.6l.3 3.5zm.4 4.5h6.5l-.3-3.5H9l.3 3.5zM5 22h14v1.8H5z",
    "category": "Appliances",
    "keywords": [
      "latte",
      "macchiato",
      "milchkaffee",
      "coffee",
      "glass",
      "layers",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "coffee-latte-macchiato"
  },
  "coffee-latte-macchiato-white": {
    "path": "M6 2h12l-1.5 17a2 2 0 0 1-2 1.8H9.5a2 2 0 0 1-2-1.8L6 2zm1.6 4h8.8l-.4-2H8l-.4 2zm.3 4h8.1l-.3-3H8.2l.3 3zm.4 4.5h7.3l-.4-3.5H8.6l.3 3.5zm.4 4.5h6.5l-.3-3.5H9l.3 3.5zM5 22h14v1.8H5z",
    "category": "Appliances",
    "keywords": [
      "latte",
      "macchiato",
      "milchkaffee",
      "coffee",
      "glass",
      "layers",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "coffee-latte-macchiato"
  },
  "coffee-grounds-container-full": {
    "path": "M4 7h16l-1.5 12a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 7zm4-4h8a1.5 1.5 0 0 1 1.5 1.5V6H6.5V4.5A1.5 1.5 0 0 1 8 3zm-1 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z",
    "category": "Appliances",
    "keywords": [
      "kaffeesatz",
      "trester",
      "tresterbehälter",
      "coffee puck",
      "waste",
      "voll",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-grounds-container-full"
  },
  "coffee-grounds-container-full-solid": {
    "path": "M4 7h16l-1.5 12a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 7zm4-4h8a1.5 1.5 0 0 1 1.5 1.5V6H6.5V4.5A1.5 1.5 0 0 1 8 3zm-1 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z",
    "category": "Appliances",
    "keywords": [
      "kaffeesatz",
      "trester",
      "tresterbehälter",
      "coffee puck",
      "waste",
      "voll",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-grounds-container-full"
  },
  "coffee-grounds-container-full-outline": {
    "path": "M4 7h16l-1.5 12a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 7zm2.2 2l1.2 9.8c0 .1.1.2.3.2h8.6c.2 0 .3-.1.3-.2L17.8 9H6.2zM8 3h8a1.5 1.5 0 0 1 1.5 1.5V6H6.5V4.5A1.5 1.5 0 0 1 8 3zm-1 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z",
    "category": "Appliances",
    "keywords": [
      "kaffeesatz",
      "trester",
      "tresterbehälter",
      "coffee puck",
      "waste",
      "voll",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "coffee-grounds-container-full"
  },
  "coffee-grounds-container-full-black": {
    "path": "M4 7h16l-1.5 12a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 7zm4-4h8a1.5 1.5 0 0 1 1.5 1.5V6H6.5V4.5A1.5 1.5 0 0 1 8 3zm-1 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z",
    "category": "Appliances",
    "keywords": [
      "kaffeesatz",
      "trester",
      "tresterbehälter",
      "coffee puck",
      "waste",
      "voll",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "coffee-grounds-container-full"
  },
  "coffee-grounds-container-full-white": {
    "path": "M4 7h16l-1.5 12a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 7zm4-4h8a1.5 1.5 0 0 1 1.5 1.5V6H6.5V4.5A1.5 1.5 0 0 1 8 3zm-1 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-3 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z",
    "category": "Appliances",
    "keywords": [
      "kaffeesatz",
      "trester",
      "tresterbehälter",
      "coffee puck",
      "waste",
      "voll",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "coffee-grounds-container-full"
  },
  "water-tank-empty": {
    "path": "M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3zm3 3h6V4H9v2zm2 5v5h2v-5h-2zm0 7v2h2v-2h-2zm-3 2h8v-1H8v1z",
    "category": "Appliances",
    "keywords": [
      "wassertank",
      "leer",
      "water tank",
      "refill",
      "kaffeemaschine",
      "empty",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "water-tank-empty"
  },
  "water-tank-empty-solid": {
    "path": "M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3zm3 3h6V4H9v2zm2 5v5h2v-5h-2zm0 7v2h2v-2h-2zm-3 2h8v-1H8v1z",
    "category": "Appliances",
    "keywords": [
      "wassertank",
      "leer",
      "water tank",
      "refill",
      "kaffeemaschine",
      "empty",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "water-tank-empty"
  },
  "water-tank-empty-outline": {
    "path": "M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3zm2 0v18h8V3H8zm1 1h6v2H9V4zm2 7h2v5h-2v-5zm0 7h2v2h-2v-2z",
    "category": "Appliances",
    "keywords": [
      "wassertank",
      "leer",
      "water tank",
      "refill",
      "kaffeemaschine",
      "empty",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "water-tank-empty"
  },
  "water-tank-empty-black": {
    "path": "M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3zm3 3h6V4H9v2zm2 5v5h2v-5h-2zm0 7v2h2v-2h-2zm-3 2h8v-1H8v1z",
    "category": "Appliances",
    "keywords": [
      "wassertank",
      "leer",
      "water tank",
      "refill",
      "kaffeemaschine",
      "empty",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "water-tank-empty"
  },
  "water-tank-empty-white": {
    "path": "M6 3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3zm3 3h6V4H9v2zm2 5v5h2v-5h-2zm0 7v2h2v-2h-2zm-3 2h8v-1H8v1z",
    "category": "Appliances",
    "keywords": [
      "wassertank",
      "leer",
      "water tank",
      "refill",
      "kaffeemaschine",
      "empty",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "water-tank-empty"
  },
  "coffee-decalcify": {
    "path": "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4.5h-2V7h2v5zm4.5 1.5l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4zm-9 0l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4z",
    "category": "Appliances",
    "keywords": [
      "entkalken",
      "decalcify",
      "descale",
      "limescale",
      "kalk",
      "clean",
      "service",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-decalcify"
  },
  "coffee-decalcify-solid": {
    "path": "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4.5h-2V7h2v5zm4.5 1.5l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4zm-9 0l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4z",
    "category": "Appliances",
    "keywords": [
      "entkalken",
      "decalcify",
      "descale",
      "limescale",
      "kalk",
      "clean",
      "service",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "coffee-decalcify"
  },
  "coffee-decalcify-outline": {
    "path": "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8zm1 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4.5h-2V7h2v5zm4.5 1.5l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4z",
    "category": "Appliances",
    "keywords": [
      "entkalken",
      "decalcify",
      "descale",
      "limescale",
      "kalk",
      "clean",
      "service",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "coffee-decalcify"
  },
  "coffee-decalcify-black": {
    "path": "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4.5h-2V7h2v5zm4.5 1.5l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4zm-9 0l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4z",
    "category": "Appliances",
    "keywords": [
      "entkalken",
      "decalcify",
      "descale",
      "limescale",
      "kalk",
      "clean",
      "service",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "coffee-decalcify"
  },
  "coffee-decalcify-white": {
    "path": "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4.5h-2V7h2v5zm4.5 1.5l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4zm-9 0l1.4 1.4-1.4 1.4-1.4-1.4 1.4-1.4z",
    "category": "Appliances",
    "keywords": [
      "entkalken",
      "decalcify",
      "descale",
      "limescale",
      "kalk",
      "clean",
      "service",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "coffee-decalcify"
  },
  "dishwasher-cutlery-drawer": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 1v14h14V5H5zM7 7v3.5a1 1 0 0 0 .8.9v5.6h1.4v-5.6a1 1 0 0 0 .8-.9V7h-.8v2.5h-.7V7h-.8v2.5h-.7V7zm5 0v5a1.2 1.2 0 0 0 1 1v4h1.5v-4a1.2 1.2 0 0 0 1-1V9a2 2 0 0 0-2-2h-1.5zm4.5 0a1.5 2.5 0 0 0 0 5v5h1.5v-5a1.5 2.5 0 0 0 0-5z",
    "category": "Appliances",
    "keywords": [
      "besteckschublade",
      "cutlery",
      "geschirrspüler",
      "dishwasher",
      "fork",
      "knife",
      "spoon",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dishwasher-cutlery-drawer"
  },
  "dishwasher-cutlery-drawer-solid": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 1v14h14V5H5zM7 7v3.5a1 1 0 0 0 .8.9v5.6h1.4v-5.6a1 1 0 0 0 .8-.9V7h-.8v2.5h-.7V7h-.8v2.5h-.7V7zm5 0v5a1.2 1.2 0 0 0 1 1v4h1.5v-4a1.2 1.2 0 0 0 1-1V9a2 2 0 0 0-2-2h-1.5zm4.5 0a1.5 2.5 0 0 0 0 5v5h1.5v-5a1.5 2.5 0 0 0 0-5z",
    "category": "Appliances",
    "keywords": [
      "besteckschublade",
      "cutlery",
      "geschirrspüler",
      "dishwasher",
      "fork",
      "knife",
      "spoon",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dishwasher-cutlery-drawer"
  },
  "dishwasher-cutlery-drawer-outline": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 0v16h14V4H5zm1 2h12v12H6V6zM7.5 7.5v3a.8.8 0 0 0 .6.7v4.8h1.2v-4.8a.8.8 0 0 0 .6-.7v-3H9.2v2h-.6v-2h-.6v2h-.5zM12 7.5v4.5a1 1 0 0 0 .8.8v3.2h1.2v-3.2a1 1 0 0 0 .8-.8V9a1.5 1.5 0 0 0-1.5-1.5H12zM16 7.5a1.2 2 0 0 0 0 4v4.5h1.2v-4.5a1.2 2 0 0 0 0-4z",
    "category": "Appliances",
    "keywords": [
      "besteckschublade",
      "cutlery",
      "geschirrspüler",
      "dishwasher",
      "fork",
      "knife",
      "spoon",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "dishwasher-cutlery-drawer"
  },
  "dishwasher-cutlery-drawer-black": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 1v14h14V5H5zM7 7v3.5a1 1 0 0 0 .8.9v5.6h1.4v-5.6a1 1 0 0 0 .8-.9V7h-.8v2.5h-.7V7h-.8v2.5h-.7V7zm5 0v5a1.2 1.2 0 0 0 1 1v4h1.5v-4a1.2 1.2 0 0 0 1-1V9a2 2 0 0 0-2-2h-1.5zm4.5 0a1.5 2.5 0 0 0 0 5v5h1.5v-5a1.5 2.5 0 0 0 0-5z",
    "category": "Appliances",
    "keywords": [
      "besteckschublade",
      "cutlery",
      "geschirrspüler",
      "dishwasher",
      "fork",
      "knife",
      "spoon",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "dishwasher-cutlery-drawer"
  },
  "dishwasher-cutlery-drawer-white": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 1v14h14V5H5zM7 7v3.5a1 1 0 0 0 .8.9v5.6h1.4v-5.6a1 1 0 0 0 .8-.9V7h-.8v2.5h-.7V7h-.8v2.5h-.7V7zm5 0v5a1.2 1.2 0 0 0 1 1v4h1.5v-4a1.2 1.2 0 0 0 1-1V9a2 2 0 0 0-2-2h-1.5zm4.5 0a1.5 2.5 0 0 0 0 5v5h1.5v-5a1.5 2.5 0 0 0 0-5z",
    "category": "Appliances",
    "keywords": [
      "besteckschublade",
      "cutlery",
      "geschirrspüler",
      "dishwasher",
      "fork",
      "knife",
      "spoon",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "dishwasher-cutlery-drawer"
  },
  "dishwasher-salt-refill": {
    "path": "M12 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm1 4.5c1.7 0 3 1.1 3 2.5a2.5 2.5 0 0 1-1.5 2.3l-2.5 1.2c-.8.4-1 .8-1 1.2 0 .7.7 1.3 1.7 1.3 1.2 0 2-.5 2.5-1.2l1.3 1.3c-.8 1-2.1 1.7-3.8 1.7-2 0-3.5-1.2-3.5-2.8a2.6 2.6 0 0 1 1.6-2.4l2.5-1.2c.7-.3 1-.7 1-1.1 0-.6-.6-1-1.4-1-1 0-1.8.4-2.3 1l-1.3-1.3c.9-1 2.2-1.4 3.7-1.4z",
    "category": "Appliances",
    "keywords": [
      "salz",
      "regeneriersalz",
      "salt",
      "spülmaschine",
      "dishwasher",
      "refill",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dishwasher-salt-refill"
  },
  "dishwasher-salt-refill-solid": {
    "path": "M12 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm1 4.5c1.7 0 3 1.1 3 2.5a2.5 2.5 0 0 1-1.5 2.3l-2.5 1.2c-.8.4-1 .8-1 1.2 0 .7.7 1.3 1.7 1.3 1.2 0 2-.5 2.5-1.2l1.3 1.3c-.8 1-2.1 1.7-3.8 1.7-2 0-3.5-1.2-3.5-2.8a2.6 2.6 0 0 1 1.6-2.4l2.5-1.2c.7-.3 1-.7 1-1.1 0-.6-.6-1-1.4-1-1 0-1.8.4-2.3 1l-1.3-1.3c.9-1 2.2-1.4 3.7-1.4z",
    "category": "Appliances",
    "keywords": [
      "salz",
      "regeneriersalz",
      "salt",
      "spülmaschine",
      "dishwasher",
      "refill",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dishwasher-salt-refill"
  },
  "dishwasher-salt-refill-outline": {
    "path": "M12 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 2a7 7 0 1 1-7 7 7 7 0 0 1 7-7zm1 2.5c1.7 0 3 1.1 3 2.5a2.5 2.5 0 0 1-1.5 2.3l-2.5 1.2c-.8.4-1 .8-1 1.2 0 .7.7 1.3 1.7 1.3 1.2 0 2-.5 2.5-1.2l1.3 1.3c-.8 1-2.1 1.7-3.8 1.7-2 0-3.5-1.2-3.5-2.8a2.6 2.6 0 0 1 1.6-2.4l2.5-1.2c.7-.3 1-.7 1-1.1 0-.6-.6-1-1.4-1-1 0-1.8.4-2.3 1l-1.3-1.3c.9-1 2.2-1.4 3.7-1.4z",
    "category": "Appliances",
    "keywords": [
      "salz",
      "regeneriersalz",
      "salt",
      "spülmaschine",
      "dishwasher",
      "refill",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "dishwasher-salt-refill"
  },
  "dishwasher-salt-refill-black": {
    "path": "M12 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm1 4.5c1.7 0 3 1.1 3 2.5a2.5 2.5 0 0 1-1.5 2.3l-2.5 1.2c-.8.4-1 .8-1 1.2 0 .7.7 1.3 1.7 1.3 1.2 0 2-.5 2.5-1.2l1.3 1.3c-.8 1-2.1 1.7-3.8 1.7-2 0-3.5-1.2-3.5-2.8a2.6 2.6 0 0 1 1.6-2.4l2.5-1.2c.7-.3 1-.7 1-1.1 0-.6-.6-1-1.4-1-1 0-1.8.4-2.3 1l-1.3-1.3c.9-1 2.2-1.4 3.7-1.4z",
    "category": "Appliances",
    "keywords": [
      "salz",
      "regeneriersalz",
      "salt",
      "spülmaschine",
      "dishwasher",
      "refill",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "dishwasher-salt-refill"
  },
  "dishwasher-salt-refill-white": {
    "path": "M12 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm1 4.5c1.7 0 3 1.1 3 2.5a2.5 2.5 0 0 1-1.5 2.3l-2.5 1.2c-.8.4-1 .8-1 1.2 0 .7.7 1.3 1.7 1.3 1.2 0 2-.5 2.5-1.2l1.3 1.3c-.8 1-2.1 1.7-3.8 1.7-2 0-3.5-1.2-3.5-2.8a2.6 2.6 0 0 1 1.6-2.4l2.5-1.2c.7-.3 1-.7 1-1.1 0-.6-.6-1-1.4-1-1 0-1.8.4-2.3 1l-1.3-1.3c.9-1 2.2-1.4 3.7-1.4z",
    "category": "Appliances",
    "keywords": [
      "salz",
      "regeneriersalz",
      "salt",
      "spülmaschine",
      "dishwasher",
      "refill",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "dishwasher-salt-refill"
  },
  "dishwasher-rinse-aid": {
    "path": "M12 5.5l1.6 3.8 4.1-1-1.8 3.7 3.6 1.8-3.6 1.8 1.8 3.7-4.1-1-1.6 3.8-1.6-3.8-4.1 1 1.8-3.7-3.6-1.8 3.6-1.8-1.8-3.7 4.1 1L12 5.5zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z",
    "category": "Appliances",
    "keywords": [
      "klarspüler",
      "rinse aid",
      "glanz",
      "geschirrspüler",
      "dishwasher",
      "shine",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dishwasher-rinse-aid"
  },
  "dishwasher-rinse-aid-solid": {
    "path": "M12 5.5l1.6 3.8 4.1-1-1.8 3.7 3.6 1.8-3.6 1.8 1.8 3.7-4.1-1-1.6 3.8-1.6-3.8-4.1 1 1.8-3.7-3.6-1.8 3.6-1.8-1.8-3.7 4.1 1L12 5.5zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z",
    "category": "Appliances",
    "keywords": [
      "klarspüler",
      "rinse aid",
      "glanz",
      "geschirrspüler",
      "dishwasher",
      "shine",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "dishwasher-rinse-aid"
  },
  "dishwasher-rinse-aid-outline": {
    "path": "M12 2l2.2 5.3 5.7-1.4-2.5 5.2 5 2.5-5 2.5 2.5 5.2-5.7-1.4L12 22l-2.2-5.3-5.7 1.4 2.5-5.2-5-2.5 5-2.5-2.5-5.2 5.7 1.4L12 2zm0 4.2L10.7 9l-3.2-.8 1.4 3-2.8 1.4 2.8 1.4-1.4 3 3.2-.8 1.3 2.8 1.3-2.8 3.2.8-1.4-3 2.8-1.4-2.8-1.4 1.4-3-3.2.8L12 6.2z",
    "category": "Appliances",
    "keywords": [
      "klarspüler",
      "rinse aid",
      "glanz",
      "geschirrspüler",
      "dishwasher",
      "shine",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "dishwasher-rinse-aid"
  },
  "dishwasher-rinse-aid-black": {
    "path": "M12 5.5l1.6 3.8 4.1-1-1.8 3.7 3.6 1.8-3.6 1.8 1.8 3.7-4.1-1-1.6 3.8-1.6-3.8-4.1 1 1.8-3.7-3.6-1.8 3.6-1.8-1.8-3.7 4.1 1L12 5.5zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z",
    "category": "Appliances",
    "keywords": [
      "klarspüler",
      "rinse aid",
      "glanz",
      "geschirrspüler",
      "dishwasher",
      "shine",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "dishwasher-rinse-aid"
  },
  "dishwasher-rinse-aid-white": {
    "path": "M12 5.5l1.6 3.8 4.1-1-1.8 3.7 3.6 1.8-3.6 1.8 1.8 3.7-4.1-1-1.6 3.8-1.6-3.8-4.1 1 1.8-3.7-3.6-1.8 3.6-1.8-1.8-3.7 4.1 1L12 5.5zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z",
    "category": "Appliances",
    "keywords": [
      "klarspüler",
      "rinse aid",
      "glanz",
      "geschirrspüler",
      "dishwasher",
      "shine",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "dishwasher-rinse-aid"
  },
  "robot-mop-washing": {
    "path": "M12 2a8 8 0 0 0-8 8c0 2.2.9 4.2 2.3 5.6l.8-.8A6.8 6.8 0 0 1 5.2 10a6.8 6.8 0 0 1 13.6 0c0 1.8-.7 3.5-1.9 4.8l.8.8A8 8 0 0 0 12 2zM12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4.5 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zM16.5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zm-5.5 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",
    "category": "Appliances",
    "keywords": [
      "saugroboter",
      "mop",
      "wischen",
      "station",
      "reinigung",
      "robot",
      "cleaning",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "robot-mop-washing"
  },
  "robot-mop-washing-solid": {
    "path": "M12 2a8 8 0 0 0-8 8c0 2.2.9 4.2 2.3 5.6l.8-.8A6.8 6.8 0 0 1 5.2 10a6.8 6.8 0 0 1 13.6 0c0 1.8-.7 3.5-1.9 4.8l.8.8A8 8 0 0 0 12 2zM12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4.5 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zM16.5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zm-5.5 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",
    "category": "Appliances",
    "keywords": [
      "saugroboter",
      "mop",
      "wischen",
      "station",
      "reinigung",
      "robot",
      "cleaning",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "robot-mop-washing"
  },
  "robot-mop-washing-outline": {
    "path": "M12 2a8 8 0 0 0-8 8c0 2.4 1 4.5 2.6 6l.9-.9A6.7 6.7 0 0 1 5.5 10a6.5 6.5 0 0 1 13 0c0 1.9-.8 3.7-2 5.1l.9.9A8 8 0 0 0 12 2zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 1.3a.7.7 0 1 1-.7.7.7.7 0 0 1 .7-.7zM7.5 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.3a1.7 1.7 0 1 1-1.7 1.7 1.7 1.7 0 0 1 1.7-1.7zm9-1.3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.3a1.7 1.7 0 1 1-1.7 1.7 1.7 1.7 0 0 1 1.7-1.7z",
    "category": "Appliances",
    "keywords": [
      "saugroboter",
      "mop",
      "wischen",
      "station",
      "reinigung",
      "robot",
      "cleaning",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "robot-mop-washing"
  },
  "robot-mop-washing-black": {
    "path": "M12 2a8 8 0 0 0-8 8c0 2.2.9 4.2 2.3 5.6l.8-.8A6.8 6.8 0 0 1 5.2 10a6.8 6.8 0 0 1 13.6 0c0 1.8-.7 3.5-1.9 4.8l.8.8A8 8 0 0 0 12 2zM12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4.5 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zM16.5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zm-5.5 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",
    "category": "Appliances",
    "keywords": [
      "saugroboter",
      "mop",
      "wischen",
      "station",
      "reinigung",
      "robot",
      "cleaning",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "robot-mop-washing"
  },
  "robot-mop-washing-white": {
    "path": "M12 2a8 8 0 0 0-8 8c0 2.2.9 4.2 2.3 5.6l.8-.8A6.8 6.8 0 0 1 5.2 10a6.8 6.8 0 0 1 13.6 0c0 1.8-.7 3.5-1.9 4.8l.8.8A8 8 0 0 0 12 2zM12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4.5 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zM16.5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8zm-5.5 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0z",
    "category": "Appliances",
    "keywords": [
      "saugroboter",
      "mop",
      "wischen",
      "station",
      "reinigung",
      "robot",
      "cleaning",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "robot-mop-washing"
  },
  "robot-water-dirty-full": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 4v12h10V7H7zm2 2h6v2H9V9zm0 4h6v4H9v-4z",
    "category": "Appliances",
    "keywords": [
      "schmutzwasser",
      "voll",
      "dirty water",
      "tank",
      "saugroboter",
      "station",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "robot-water-dirty-full"
  },
  "robot-water-dirty-full-solid": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 4v12h10V7H7zm2 2h6v2H9V9zm0 4h6v4H9v-4z",
    "category": "Appliances",
    "keywords": [
      "schmutzwasser",
      "voll",
      "dirty water",
      "tank",
      "saugroboter",
      "station",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "robot-water-dirty-full"
  },
  "robot-water-dirty-full-outline": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 0v18h10V3H7zm2 4h6v2H9V7zm0 4h6v6H9v-6z",
    "category": "Appliances",
    "keywords": [
      "schmutzwasser",
      "voll",
      "dirty water",
      "tank",
      "saugroboter",
      "station",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "robot-water-dirty-full"
  },
  "robot-water-dirty-full-black": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 4v12h10V7H7zm2 2h6v2H9V9zm0 4h6v4H9v-4z",
    "category": "Appliances",
    "keywords": [
      "schmutzwasser",
      "voll",
      "dirty water",
      "tank",
      "saugroboter",
      "station",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "robot-water-dirty-full"
  },
  "robot-water-dirty-full-white": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 4v12h10V7H7zm2 2h6v2H9V9zm0 4h6v4H9v-4z",
    "category": "Appliances",
    "keywords": [
      "schmutzwasser",
      "voll",
      "dirty water",
      "tank",
      "saugroboter",
      "station",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "robot-water-dirty-full"
  },
  "robot-water-clean-empty": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm6 4c.8 1.2 2 2.7 2 4a2 2 0 0 1-4 0c0-1.3 1.2-2.8 2-4zm-4 10h10v2H7v-2z",
    "category": "Appliances",
    "keywords": [
      "frischwasser",
      "leer",
      "clean water",
      "empty",
      "refill",
      "saugroboter",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "robot-water-clean-empty"
  },
  "robot-water-clean-empty-solid": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm6 4c.8 1.2 2 2.7 2 4a2 2 0 0 1-4 0c0-1.3 1.2-2.8 2-4zm-4 10h10v2H7v-2z",
    "category": "Appliances",
    "keywords": [
      "frischwasser",
      "leer",
      "clean water",
      "empty",
      "refill",
      "saugroboter",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "robot-water-clean-empty"
  },
  "robot-water-clean-empty-outline": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 0v18h10V3H7zm4 4c.8 1.2 2 2.7 2 4a2 2 0 0 1-4 0c0-1.3 1.2-2.8 2-4zm-4 10h10v1.5H7V17z",
    "category": "Appliances",
    "keywords": [
      "frischwasser",
      "leer",
      "clean water",
      "empty",
      "refill",
      "saugroboter",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "robot-water-clean-empty"
  },
  "robot-water-clean-empty-black": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm6 4c.8 1.2 2 2.7 2 4a2 2 0 0 1-4 0c0-1.3 1.2-2.8 2-4zm-4 10h10v2H7v-2z",
    "category": "Appliances",
    "keywords": [
      "frischwasser",
      "leer",
      "clean water",
      "empty",
      "refill",
      "saugroboter",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "robot-water-clean-empty"
  },
  "robot-water-clean-empty-white": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm6 4c.8 1.2 2 2.7 2 4a2 2 0 0 1-4 0c0-1.3 1.2-2.8 2-4zm-4 10h10v2H7v-2z",
    "category": "Appliances",
    "keywords": [
      "frischwasser",
      "leer",
      "clean water",
      "empty",
      "refill",
      "saugroboter",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "robot-water-clean-empty"
  },
  "robot-dustbin-empty": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm7 12h2v3l2-2 1.4 1.4-4.4 4.4-4.4-4.4L9 20l2 2v-5zm-3-9h8v2H8V8z",
    "category": "Appliances",
    "keywords": [
      "staubbehälter",
      "leeren",
      "dustbin",
      "bag",
      "station",
      "saugroboter",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "robot-dustbin-empty"
  },
  "robot-dustbin-empty-solid": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm7 12h2v3l2-2 1.4 1.4-4.4 4.4-4.4-4.4L9 20l2 2v-5zm-3-9h8v2H8V8z",
    "category": "Appliances",
    "keywords": [
      "staubbehälter",
      "leeren",
      "dustbin",
      "bag",
      "station",
      "saugroboter",
      "appliances",
      "solid"
    ],
    "variant": "solid",
    "base": "robot-dustbin-empty"
  },
  "robot-dustbin-empty-outline": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm2 0v9h12V5H6zm5 12h2v3l1.5-1.5 1.1 1.1-3.6 3.6-3.6-3.6 1.1-1.1 1.5 1.5v-3zm-3-9h8v1.8H8V8z",
    "category": "Appliances",
    "keywords": [
      "staubbehälter",
      "leeren",
      "dustbin",
      "bag",
      "station",
      "saugroboter",
      "appliances",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "robot-dustbin-empty"
  },
  "robot-dustbin-empty-black": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm7 12h2v3l2-2 1.4 1.4-4.4 4.4-4.4-4.4L9 20l2 2v-5zm-3-9h8v2H8V8z",
    "category": "Appliances",
    "keywords": [
      "staubbehälter",
      "leeren",
      "dustbin",
      "bag",
      "station",
      "saugroboter",
      "appliances",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "robot-dustbin-empty"
  },
  "robot-dustbin-empty-white": {
    "path": "M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5zm7 12h2v3l2-2 1.4 1.4-4.4 4.4-4.4-4.4L9 20l2 2v-5zm-3-9h8v2H8V8z",
    "category": "Appliances",
    "keywords": [
      "staubbehälter",
      "leeren",
      "dustbin",
      "bag",
      "station",
      "saugroboter",
      "appliances",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "robot-dustbin-empty"
  },
  "underfloor-heating-manifold": {
    "path": "M3 4h18v3H3V4zm0 13h18v3H3v-3zm3-10h2v10H6V7zm5 0h2v10h-2V7zm5 0h2v10h-2V7zm-6 2h4v2h-4V9zm0 4h4v2h-4v-2z",
    "category": "Climate",
    "keywords": [
      "fußbodenheizung",
      "verteiler",
      "manifold",
      "flow",
      "topmeter",
      "hydraulik",
      "heating",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "underfloor-heating-manifold"
  },
  "underfloor-heating-manifold-solid": {
    "path": "M3 4h18v3H3V4zm0 13h18v3H3v-3zm3-10h2v10H6V7zm5 0h2v10h-2V7zm5 0h2v10h-2V7zm-6 2h4v2h-4V9zm0 4h4v2h-4v-2z",
    "category": "Climate",
    "keywords": [
      "fußbodenheizung",
      "verteiler",
      "manifold",
      "flow",
      "topmeter",
      "hydraulik",
      "heating",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "underfloor-heating-manifold"
  },
  "underfloor-heating-manifold-outline": {
    "path": "M3 4h18v3H3V4zm2 1.5h14V5.5H5v0zm-2 11.5h18v3H3v-3zm2 1.5h14v-0H5v0zm1-10h2v10H6V7zm5 0h2v10h-2V7zm5 0h2v10h-2V7zm-6 3h4v1.5h-4V10z",
    "category": "Climate",
    "keywords": [
      "fußbodenheizung",
      "verteiler",
      "manifold",
      "flow",
      "topmeter",
      "hydraulik",
      "heating",
      "climate",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "underfloor-heating-manifold"
  },
  "underfloor-heating-manifold-black": {
    "path": "M3 4h18v3H3V4zm0 13h18v3H3v-3zm3-10h2v10H6V7zm5 0h2v10h-2V7zm5 0h2v10h-2V7zm-6 2h4v2h-4V9zm0 4h4v2h-4v-2z",
    "category": "Climate",
    "keywords": [
      "fußbodenheizung",
      "verteiler",
      "manifold",
      "flow",
      "topmeter",
      "hydraulik",
      "heating",
      "climate",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "underfloor-heating-manifold"
  },
  "underfloor-heating-manifold-white": {
    "path": "M3 4h18v3H3V4zm0 13h18v3H3v-3zm3-10h2v10H6V7zm5 0h2v10h-2V7zm5 0h2v10h-2V7zm-6 2h4v2h-4V9zm0 4h4v2h-4v-2z",
    "category": "Climate",
    "keywords": [
      "fußbodenheizung",
      "verteiler",
      "manifold",
      "flow",
      "topmeter",
      "hydraulik",
      "heating",
      "climate",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "underfloor-heating-manifold"
  },
  "circulation-pump": {
    "path": "M12 2a9 9 0 0 0-9 9c0 4.2 2.9 7.7 6.9 8.7L9 22h6l-.9-2.3c4-.9 6.9-4.5 6.9-8.7a9 9 0 0 0-9-9zm0 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm1.5 2.5l-3 2.5h3v2.5l3-2.5h-3V8.5z",
    "category": "Climate",
    "keywords": [
      "umwälzpumpe",
      "pumpe",
      "pump",
      "circulation",
      "heizung",
      "flow",
      "water",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "circulation-pump"
  },
  "circulation-pump-solid": {
    "path": "M12 2a9 9 0 0 0-9 9c0 4.2 2.9 7.7 6.9 8.7L9 22h6l-.9-2.3c4-.9 6.9-4.5 6.9-8.7a9 9 0 0 0-9-9zm0 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm1.5 2.5l-3 2.5h3v2.5l3-2.5h-3V8.5z",
    "category": "Climate",
    "keywords": [
      "umwälzpumpe",
      "pumpe",
      "pump",
      "circulation",
      "heizung",
      "flow",
      "water",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "circulation-pump"
  },
  "circulation-pump-outline": {
    "path": "M12 2a9 9 0 0 0-9 9c0 4.2 2.9 7.7 6.9 8.7L9 22h6l-.9-2.3c4-.9 6.9-4.5 6.9-8.7a9 9 0 0 0-9-9zm0 2a7 7 0 0 1 7 7c0 3.3-2.3 6.1-5.4 6.8L13 20h-2l-.6-2.2A6.9 6.9 0 0 1 5 11a7 7 0 0 1 7-7zm0 3a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm1 2l-2.5 2h2.5v2l2.5-2H13V9z",
    "category": "Climate",
    "keywords": [
      "umwälzpumpe",
      "pumpe",
      "pump",
      "circulation",
      "heizung",
      "flow",
      "water",
      "climate",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "circulation-pump"
  },
  "circulation-pump-black": {
    "path": "M12 2a9 9 0 0 0-9 9c0 4.2 2.9 7.7 6.9 8.7L9 22h6l-.9-2.3c4-.9 6.9-4.5 6.9-8.7a9 9 0 0 0-9-9zm0 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm1.5 2.5l-3 2.5h3v2.5l3-2.5h-3V8.5z",
    "category": "Climate",
    "keywords": [
      "umwälzpumpe",
      "pumpe",
      "pump",
      "circulation",
      "heizung",
      "flow",
      "water",
      "climate",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "circulation-pump"
  },
  "circulation-pump-white": {
    "path": "M12 2a9 9 0 0 0-9 9c0 4.2 2.9 7.7 6.9 8.7L9 22h6l-.9-2.3c4-.9 6.9-4.5 6.9-8.7a9 9 0 0 0-9-9zm0 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm1.5 2.5l-3 2.5h3v2.5l3-2.5h-3V8.5z",
    "category": "Climate",
    "keywords": [
      "umwälzpumpe",
      "pumpe",
      "pump",
      "circulation",
      "heizung",
      "flow",
      "water",
      "climate",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "circulation-pump"
  },
  "buffer-tank-stratified": {
    "path": "M7 4a5 5 0 0 1 10 0v16a5 5 0 0 1-10 0V4zm2 2h6V4a3 3 0 0 0-6 0v2zm0 5h6V8H9v3zm0 5h6v-3H9v3zm0 4a3 3 0 0 0 6 0v-2H9v2z",
    "category": "Climate",
    "keywords": [
      "pufferspeicher",
      "schichtspeicher",
      "buffer tank",
      "storage",
      "heizung",
      "solar",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "buffer-tank-stratified"
  },
  "buffer-tank-stratified-solid": {
    "path": "M7 4a5 5 0 0 1 10 0v16a5 5 0 0 1-10 0V4zm2 2h6V4a3 3 0 0 0-6 0v2zm0 5h6V8H9v3zm0 5h6v-3H9v3zm0 4a3 3 0 0 0 6 0v-2H9v2z",
    "category": "Climate",
    "keywords": [
      "pufferspeicher",
      "schichtspeicher",
      "buffer tank",
      "storage",
      "heizung",
      "solar",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "buffer-tank-stratified"
  },
  "buffer-tank-stratified-outline": {
    "path": "M7 4a5 5 0 0 1 10 0v16a5 5 0 0 1-10 0V4zm2 0a3 3 0 0 1 6 0v16a3 3 0 0 1-6 0V4zm0 4h6V6H9v2zm0 5h6v-2H9v2zm0 5h6v-2H9v2z",
    "category": "Climate",
    "keywords": [
      "pufferspeicher",
      "schichtspeicher",
      "buffer tank",
      "storage",
      "heizung",
      "solar",
      "climate",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "buffer-tank-stratified"
  },
  "buffer-tank-stratified-black": {
    "path": "M7 4a5 5 0 0 1 10 0v16a5 5 0 0 1-10 0V4zm2 2h6V4a3 3 0 0 0-6 0v2zm0 5h6V8H9v3zm0 5h6v-3H9v3zm0 4a3 3 0 0 0 6 0v-2H9v2z",
    "category": "Climate",
    "keywords": [
      "pufferspeicher",
      "schichtspeicher",
      "buffer tank",
      "storage",
      "heizung",
      "solar",
      "climate",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "buffer-tank-stratified"
  },
  "buffer-tank-stratified-white": {
    "path": "M7 4a5 5 0 0 1 10 0v16a5 5 0 0 1-10 0V4zm2 2h6V4a3 3 0 0 0-6 0v2zm0 5h6V8H9v3zm0 5h6v-3H9v3zm0 4a3 3 0 0 0 6 0v-2H9v2z",
    "category": "Climate",
    "keywords": [
      "pufferspeicher",
      "schichtspeicher",
      "buffer tank",
      "storage",
      "heizung",
      "solar",
      "climate",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "buffer-tank-stratified"
  },
  "mixing-valve-3way": {
    "path": "M3 10h5.2l2-3.5L8.4 3h7.2l-1.8 3.5 2 3.5H21v4h-5.2l-2 3.5 1.8 3.5H8.4l1.8-3.5-2-3.5H3v-4zm9-1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    "category": "Climate",
    "keywords": [
      "mischer",
      "3wege",
      "mixing valve",
      "valve",
      "hydraulik",
      "vorlauf",
      "bypass",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "mixing-valve-3way"
  },
  "mixing-valve-3way-solid": {
    "path": "M3 10h5.2l2-3.5L8.4 3h7.2l-1.8 3.5 2 3.5H21v4h-5.2l-2 3.5 1.8 3.5H8.4l1.8-3.5-2-3.5H3v-4zm9-1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    "category": "Climate",
    "keywords": [
      "mischer",
      "3wege",
      "mixing valve",
      "valve",
      "hydraulik",
      "vorlauf",
      "bypass",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "mixing-valve-3way"
  },
  "mixing-valve-3way-outline": {
    "path": "M3 10h5.2l2-3.5L8.4 3h7.2l-1.8 3.5 2 3.5H21v4h-5.2l-2 3.5 1.8 3.5H8.4l1.8-3.5-2-3.5H3v-4zm2 2v0h4.3l2-3.5h1.4l2 3.5H19v0h-4.3l-2 3.5h-1.4l-2-3.5H5zm7-1a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
    "category": "Climate",
    "keywords": [
      "mischer",
      "3wege",
      "mixing valve",
      "valve",
      "hydraulik",
      "vorlauf",
      "bypass",
      "climate",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "mixing-valve-3way"
  },
  "mixing-valve-3way-black": {
    "path": "M3 10h5.2l2-3.5L8.4 3h7.2l-1.8 3.5 2 3.5H21v4h-5.2l-2 3.5 1.8 3.5H8.4l1.8-3.5-2-3.5H3v-4zm9-1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    "category": "Climate",
    "keywords": [
      "mischer",
      "3wege",
      "mixing valve",
      "valve",
      "hydraulik",
      "vorlauf",
      "bypass",
      "climate",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "mixing-valve-3way"
  },
  "mixing-valve-3way-white": {
    "path": "M3 10h5.2l2-3.5L8.4 3h7.2l-1.8 3.5 2 3.5H21v4h-5.2l-2 3.5 1.8 3.5H8.4l1.8-3.5-2-3.5H3v-4zm9-1a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    "category": "Climate",
    "keywords": [
      "mischer",
      "3wege",
      "mixing valve",
      "valve",
      "hydraulik",
      "vorlauf",
      "bypass",
      "climate",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "mixing-valve-3way"
  },
  "hydraulic-balancing": {
    "path": "M4 10h4V6h2v4h4V6h2v4h4v4h-4v4h-2v-4h-4v4H8v-4H4v-4zm7-3h2V5h-2v2zm-4 0h2V5H7v2zm8 0h2V5h-2v2zm-3 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z",
    "category": "Climate",
    "keywords": [
      "hydraulischer abgleich",
      "balancing",
      "flow meter",
      "ventil",
      "valve",
      "differential",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "hydraulic-balancing"
  },
  "hydraulic-balancing-solid": {
    "path": "M4 10h4V6h2v4h4V6h2v4h4v4h-4v4h-2v-4h-4v4H8v-4H4v-4zm7-3h2V5h-2v2zm-4 0h2V5H7v2zm8 0h2V5h-2v2zm-3 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z",
    "category": "Climate",
    "keywords": [
      "hydraulischer abgleich",
      "balancing",
      "flow meter",
      "ventil",
      "valve",
      "differential",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "hydraulic-balancing"
  },
  "hydraulic-balancing-outline": {
    "path": "M4 10h4V6h2v4h4V6h2v4h4v4h-4v4h-2v-4h-4v4H8v-4H4v-4zm2 2v0h3v-4h2v4h4v-4h2v4h3v0h-3v4h-2v-4h-4v4h-2v-4H6zm1-5h2V5H7v2zm8 0h2V5h-2v2z",
    "category": "Climate",
    "keywords": [
      "hydraulischer abgleich",
      "balancing",
      "flow meter",
      "ventil",
      "valve",
      "differential",
      "climate",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "hydraulic-balancing"
  },
  "hydraulic-balancing-black": {
    "path": "M4 10h4V6h2v4h4V6h2v4h4v4h-4v4h-2v-4h-4v4H8v-4H4v-4zm7-3h2V5h-2v2zm-4 0h2V5H7v2zm8 0h2V5h-2v2zm-3 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z",
    "category": "Climate",
    "keywords": [
      "hydraulischer abgleich",
      "balancing",
      "flow meter",
      "ventil",
      "valve",
      "differential",
      "climate",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "hydraulic-balancing"
  },
  "hydraulic-balancing-white": {
    "path": "M4 10h4V6h2v4h4V6h2v4h4v4h-4v4h-2v-4h-4v4H8v-4H4v-4zm7-3h2V5h-2v2zm-4 0h2V5H7v2zm8 0h2V5h-2v2zm-3 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z",
    "category": "Climate",
    "keywords": [
      "hydraulischer abgleich",
      "balancing",
      "flow meter",
      "ventil",
      "valve",
      "differential",
      "climate",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "hydraulic-balancing"
  },
  "heat-pump-outdoor-unit": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm7 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 0 1 2.8 2H10V9.2a3 3 0 0 1 0 0zm0 4h2.8A3 3 0 0 1 10 14.8V13zm-2.8-1A3 3 0 0 1 10 9.2V11H7.2zm0 2H10v1.8A3 3 0 0 1 7.2 14zM16 7h2v10h-2V7z",
    "category": "Climate",
    "keywords": [
      "wärmepumpe",
      "außeneinheit",
      "heat pump",
      "hvac",
      "inverter",
      "lüfter",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "heat-pump-outdoor-unit"
  },
  "heat-pump-outdoor-unit-solid": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm7 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 0 1 2.8 2H10V9.2a3 3 0 0 1 0 0zm0 4h2.8A3 3 0 0 1 10 14.8V13zm-2.8-1A3 3 0 0 1 10 9.2V11H7.2zm0 2H10v1.8A3 3 0 0 1 7.2 14zM16 7h2v10h-2V7z",
    "category": "Climate",
    "keywords": [
      "wärmepumpe",
      "außeneinheit",
      "heat pump",
      "hvac",
      "inverter",
      "lüfter",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "heat-pump-outdoor-unit"
  },
  "heat-pump-outdoor-unit-outline": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 0v16h14V4H5zm5 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 1.8a3.2 3.2 0 1 1-3.2 3.2A3.2 3.2 0 0 1 10 8.8zm6-1.8h1.8v10H16V7z",
    "category": "Climate",
    "keywords": [
      "wärmepumpe",
      "außeneinheit",
      "heat pump",
      "hvac",
      "inverter",
      "lüfter",
      "climate",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "heat-pump-outdoor-unit"
  },
  "heat-pump-outdoor-unit-black": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm7 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 0 1 2.8 2H10V9.2a3 3 0 0 1 0 0zm0 4h2.8A3 3 0 0 1 10 14.8V13zm-2.8-1A3 3 0 0 1 10 9.2V11H7.2zm0 2H10v1.8A3 3 0 0 1 7.2 14zM16 7h2v10h-2V7z",
    "category": "Climate",
    "keywords": [
      "wärmepumpe",
      "außeneinheit",
      "heat pump",
      "hvac",
      "inverter",
      "lüfter",
      "climate",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "heat-pump-outdoor-unit"
  },
  "heat-pump-outdoor-unit-white": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm7 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 0 1 2.8 2H10V9.2a3 3 0 0 1 0 0zm0 4h2.8A3 3 0 0 1 10 14.8V13zm-2.8-1A3 3 0 0 1 10 9.2V11H7.2zm0 2H10v1.8A3 3 0 0 1 7.2 14zM16 7h2v10h-2V7z",
    "category": "Climate",
    "keywords": [
      "wärmepumpe",
      "außeneinheit",
      "heat pump",
      "hvac",
      "inverter",
      "lüfter",
      "climate",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "heat-pump-outdoor-unit"
  },
  "radiator-valve-smart": {
    "path": "M4 9h5v6H4V9zm5-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9V7zm3 3h4v4h-4v-4zm-9 1l-1.5 1.5L2 13l2-2zm0 2l-1 1-1-1 1-1zM20 7a6 6 0 0 1 0 10v-1.8a4.2 4.2 0 0 0 0-6.4V7z",
    "category": "Climate",
    "keywords": [
      "thermostat",
      "heizung",
      "ventil",
      "trv",
      "valve",
      "radiator",
      "smart",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "radiator-valve-smart"
  },
  "radiator-valve-smart-solid": {
    "path": "M4 9h5v6H4V9zm5-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9V7zm3 3h4v4h-4v-4zm-9 1l-1.5 1.5L2 13l2-2zm0 2l-1 1-1-1 1-1zM20 7a6 6 0 0 1 0 10v-1.8a4.2 4.2 0 0 0 0-6.4V7z",
    "category": "Climate",
    "keywords": [
      "thermostat",
      "heizung",
      "ventil",
      "trv",
      "valve",
      "radiator",
      "smart",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "radiator-valve-smart"
  },
  "radiator-valve-smart-outline": {
    "path": "M4 9h5v6H4V9zm2 2v2h3v-2H6zm3-4h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9V7zm2 2v6h6V9h-6zm2 1.5h2v3h-2v-3zM20 7a6 6 0 0 1 0 10v-1.8a4.2 4.2 0 0 0 0-6.4V7z",
    "category": "Climate",
    "keywords": [
      "thermostat",
      "heizung",
      "ventil",
      "trv",
      "valve",
      "radiator",
      "smart",
      "climate",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "radiator-valve-smart"
  },
  "radiator-valve-smart-black": {
    "path": "M4 9h5v6H4V9zm5-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9V7zm3 3h4v4h-4v-4zm-9 1l-1.5 1.5L2 13l2-2zm0 2l-1 1-1-1 1-1zM20 7a6 6 0 0 1 0 10v-1.8a4.2 4.2 0 0 0 0-6.4V7z",
    "category": "Climate",
    "keywords": [
      "thermostat",
      "heizung",
      "ventil",
      "trv",
      "valve",
      "radiator",
      "smart",
      "climate",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "radiator-valve-smart"
  },
  "radiator-valve-smart-white": {
    "path": "M4 9h5v6H4V9zm5-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9V7zm3 3h4v4h-4v-4zm-9 1l-1.5 1.5L2 13l2-2zm0 2l-1 1-1-1 1-1zM20 7a6 6 0 0 1 0 10v-1.8a4.2 4.2 0 0 0 0-6.4V7z",
    "category": "Climate",
    "keywords": [
      "thermostat",
      "heizung",
      "ventil",
      "trv",
      "valve",
      "radiator",
      "smart",
      "climate",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "radiator-valve-smart"
  },
  "window-handle-closed": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 2v14h12V5H6zm4 5h3a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-2 0v-4.5H10V10z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "geschlossen",
      "fenster",
      "window",
      "handle",
      "closed",
      "secusignal",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "window-handle-closed"
  },
  "window-handle-closed-solid": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 2v14h12V5H6zm4 5h3a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-2 0v-4.5H10V10z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "geschlossen",
      "fenster",
      "window",
      "handle",
      "closed",
      "secusignal",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "window-handle-closed"
  },
  "window-handle-closed-outline": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 0v18h12V3H6zm2 2h8v14H8V5zm3 5h2a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-2 0v-4.5H11V10z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "geschlossen",
      "fenster",
      "window",
      "handle",
      "closed",
      "secusignal",
      "security",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "window-handle-closed"
  },
  "window-handle-closed-black": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 2v14h12V5H6zm4 5h3a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-2 0v-4.5H10V10z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "geschlossen",
      "fenster",
      "window",
      "handle",
      "closed",
      "secusignal",
      "security",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "window-handle-closed"
  },
  "window-handle-closed-white": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 2v14h12V5H6zm4 5h3a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 0 1-2 0v-4.5H10V10z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "geschlossen",
      "fenster",
      "window",
      "handle",
      "closed",
      "secusignal",
      "security",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "window-handle-closed"
  },
  "window-handle-tilted": {
    "path": "M4 4l3-2h10l3 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v12h10V6L15 4H9L7 6zm4 5h1.5V6a1 1 0 0 1 2 0v5.5a1.5 1.5 0 0 1-1.5 1.5H11V11z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "gekippt",
      "tilt",
      "fenster",
      "window",
      "handle",
      "kipp",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "window-handle-tilted"
  },
  "window-handle-tilted-solid": {
    "path": "M4 4l3-2h10l3 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v12h10V6L15 4H9L7 6zm4 5h1.5V6a1 1 0 0 1 2 0v5.5a1.5 1.5 0 0 1-1.5 1.5H11V11z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "gekippt",
      "tilt",
      "fenster",
      "window",
      "handle",
      "kipp",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "window-handle-tilted"
  },
  "window-handle-tilted-outline": {
    "path": "M4 4l3-2h10l3 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2 .8V20h12V4.8L15.3 3.5H8.7L6 4.8zm3 2.2h6v11H9V7zm2 4h1.5V6a1 1 0 0 1 2 0v5.5a1.5 1.5 0 0 1-1.5 1.5H11V11z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "gekippt",
      "tilt",
      "fenster",
      "window",
      "handle",
      "kipp",
      "security",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "window-handle-tilted"
  },
  "window-handle-tilted-black": {
    "path": "M4 4l3-2h10l3 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v12h10V6L15 4H9L7 6zm4 5h1.5V6a1 1 0 0 1 2 0v5.5a1.5 1.5 0 0 1-1.5 1.5H11V11z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "gekippt",
      "tilt",
      "fenster",
      "window",
      "handle",
      "kipp",
      "security",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "window-handle-tilted"
  },
  "window-handle-tilted-white": {
    "path": "M4 4l3-2h10l3 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v12h10V6L15 4H9L7 6zm4 5h1.5V6a1 1 0 0 1 2 0v5.5a1.5 1.5 0 0 1-1.5 1.5H11V11z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "gekippt",
      "tilt",
      "fenster",
      "window",
      "handle",
      "kipp",
      "security",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "window-handle-tilted"
  },
  "window-handle-open": {
    "path": "M3 3h14v2h-2v14h2v2H3V3zm14 2l5 3v11l-5-2V5zm-8 6h4.5a1 1 0 0 1 0 2H9a1.5 1.5 0 0 1-1.5-1.5V10h2v1z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "offen",
      "open",
      "fenster",
      "window",
      "handle",
      "opened",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "window-handle-open"
  },
  "window-handle-open-solid": {
    "path": "M3 3h14v2h-2v14h2v2H3V3zm14 2l5 3v11l-5-2V5zm-8 6h4.5a1 1 0 0 1 0 2H9a1.5 1.5 0 0 1-1.5-1.5V10h2v1z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "offen",
      "open",
      "fenster",
      "window",
      "handle",
      "opened",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "window-handle-open"
  },
  "window-handle-open-outline": {
    "path": "M3 3h14v2h-2v14h2v2H3V3zm2 2v14h8V5H5zm12 1.3l3.5 2.1v8.2L17 15V6.3zm-8 4.7h4.5a1 1 0 0 1 0 2H9a1.5 1.5 0 0 1-1.5-1.5V10h2v1z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "offen",
      "open",
      "fenster",
      "window",
      "handle",
      "opened",
      "security",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "window-handle-open"
  },
  "window-handle-open-black": {
    "path": "M3 3h14v2h-2v14h2v2H3V3zm14 2l5 3v11l-5-2V5zm-8 6h4.5a1 1 0 0 1 0 2H9a1.5 1.5 0 0 1-1.5-1.5V10h2v1z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "offen",
      "open",
      "fenster",
      "window",
      "handle",
      "opened",
      "security",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "window-handle-open"
  },
  "window-handle-open-white": {
    "path": "M3 3h14v2h-2v14h2v2H3V3zm14 2l5 3v11l-5-2V5zm-8 6h4.5a1 1 0 0 1 0 2H9a1.5 1.5 0 0 1-1.5-1.5V10h2v1z",
    "category": "Security",
    "keywords": [
      "fenstergriff",
      "offen",
      "open",
      "fenster",
      "window",
      "handle",
      "opened",
      "security",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "window-handle-open"
  },
  "presence-mmwave-radar": {
    "path": "M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-4-1a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0H6zm-4 0a10 10 0 0 1 20 0h-2a8 8 0 0 0-16 0H2zm10 4l-2 5h4l-2-5z",
    "category": "Presence",
    "keywords": [
      "präsenz",
      "mmwave",
      "radar",
      "anwesenheit",
      "presence",
      "motion",
      "sensor",
      "presence",
      "solid"
    ],
    "variant": "solid",
    "base": "presence-mmwave-radar"
  },
  "presence-mmwave-radar-solid": {
    "path": "M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-4-1a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0H6zm-4 0a10 10 0 0 1 20 0h-2a8 8 0 0 0-16 0H2zm10 4l-2 5h4l-2-5z",
    "category": "Presence",
    "keywords": [
      "präsenz",
      "mmwave",
      "radar",
      "anwesenheit",
      "presence",
      "motion",
      "sensor",
      "presence",
      "solid"
    ],
    "variant": "solid",
    "base": "presence-mmwave-radar"
  },
  "presence-mmwave-radar-outline": {
    "path": "M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm0 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-2a6 6 0 0 1 12 0h-1.8a4.2 4.2 0 0 0-8.4 0H6zm-4 0a10 10 0 0 1 20 0h-1.8a8.2 8.2 0 0 0-16.4 0H2zm10 4l-2 5h4l-2-5z",
    "category": "Presence",
    "keywords": [
      "präsenz",
      "mmwave",
      "radar",
      "anwesenheit",
      "presence",
      "motion",
      "sensor",
      "presence",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "presence-mmwave-radar"
  },
  "presence-mmwave-radar-black": {
    "path": "M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-4-1a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0H6zm-4 0a10 10 0 0 1 20 0h-2a8 8 0 0 0-16 0H2zm10 4l-2 5h4l-2-5z",
    "category": "Presence",
    "keywords": [
      "präsenz",
      "mmwave",
      "radar",
      "anwesenheit",
      "presence",
      "motion",
      "sensor",
      "presence",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "presence-mmwave-radar"
  },
  "presence-mmwave-radar-white": {
    "path": "M10 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-4-1a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0H6zm-4 0a10 10 0 0 1 20 0h-2a8 8 0 0 0-16 0H2zm10 4l-2 5h4l-2-5z",
    "category": "Presence",
    "keywords": [
      "präsenz",
      "mmwave",
      "radar",
      "anwesenheit",
      "presence",
      "motion",
      "sensor",
      "presence",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "presence-mmwave-radar"
  },
  "mailbox-letter-delivered": {
    "path": "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm2 2v11h12V9H6zm2-6h8v2H8V3zm1 8h6v1.8H9V11zm0 3.5h4v1.8H9v-1.8z",
    "category": "Security",
    "keywords": [
      "briefkasten",
      "post",
      "mailbox",
      "letter",
      "mail",
      "brief",
      "posteinwurf",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "mailbox-letter-delivered"
  },
  "mailbox-letter-delivered-solid": {
    "path": "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm2 2v11h12V9H6zm2-6h8v2H8V3zm1 8h6v1.8H9V11zm0 3.5h4v1.8H9v-1.8z",
    "category": "Security",
    "keywords": [
      "briefkasten",
      "post",
      "mailbox",
      "letter",
      "mail",
      "brief",
      "posteinwurf",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "mailbox-letter-delivered"
  },
  "mailbox-letter-delivered-outline": {
    "path": "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm2 0v13h12V7H6zm2 2h8v9H8V9zm0-6h8v2H8V3zm1 8h6v1.5H9V11z",
    "category": "Security",
    "keywords": [
      "briefkasten",
      "post",
      "mailbox",
      "letter",
      "mail",
      "brief",
      "posteinwurf",
      "security",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "mailbox-letter-delivered"
  },
  "mailbox-letter-delivered-black": {
    "path": "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm2 2v11h12V9H6zm2-6h8v2H8V3zm1 8h6v1.8H9V11zm0 3.5h4v1.8H9v-1.8z",
    "category": "Security",
    "keywords": [
      "briefkasten",
      "post",
      "mailbox",
      "letter",
      "mail",
      "brief",
      "posteinwurf",
      "security",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "mailbox-letter-delivered"
  },
  "mailbox-letter-delivered-white": {
    "path": "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm2 2v11h12V9H6zm2-6h8v2H8V3zm1 8h6v1.8H9V11zm0 3.5h4v1.8H9v-1.8z",
    "category": "Security",
    "keywords": [
      "briefkasten",
      "post",
      "mailbox",
      "letter",
      "mail",
      "brief",
      "posteinwurf",
      "security",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "mailbox-letter-delivered"
  },
  "water-leakage-floor-probe": {
    "path": "M12 2a4 4 0 0 1 4 4c0 2.2-2.5 5.5-4 7.2-1.5-1.7-4-5-4-7.2a4 4 0 0 1 4-4zm-5 13h10a1 1 0 0 1 1 1v2a4 4 0 0 1-8 0v-1H8v1a4 4 0 0 1-2-3.5V16a1 1 0 0 1 1-1zm3 3a2 2 0 0 0 4 0v-1h-4v1z",
    "category": "Security",
    "keywords": [
      "wasserleck",
      "leckage",
      "water leak",
      "flood",
      "probe",
      "sensor",
      "boden",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "water-leakage-floor-probe"
  },
  "water-leakage-floor-probe-solid": {
    "path": "M12 2a4 4 0 0 1 4 4c0 2.2-2.5 5.5-4 7.2-1.5-1.7-4-5-4-7.2a4 4 0 0 1 4-4zm-5 13h10a1 1 0 0 1 1 1v2a4 4 0 0 1-8 0v-1H8v1a4 4 0 0 1-2-3.5V16a1 1 0 0 1 1-1zm3 3a2 2 0 0 0 4 0v-1h-4v1z",
    "category": "Security",
    "keywords": [
      "wasserleck",
      "leckage",
      "water leak",
      "flood",
      "probe",
      "sensor",
      "boden",
      "security",
      "solid"
    ],
    "variant": "solid",
    "base": "water-leakage-floor-probe"
  },
  "water-leakage-floor-probe-outline": {
    "path": "M12 2a4 4 0 0 1 4 4c0 2.2-2.5 5.5-4 7.2-1.5-1.7-4-5-4-7.2a4 4 0 0 1 4-4zm0 2.2a2 2 0 0 0-2 1.8c0 1.2 1.4 3.4 2 4.4.6-1 2-3.2 2-4.4a2 2 0 0 0-2-1.8zm-5 11h10a1 1 0 0 1 1 1v1.5a3.5 3.5 0 0 1-7 0v-.5h-2v.5a3.5 3.5 0 0 1-3-3.4V16a1 1 0 0 1 1-1z",
    "category": "Security",
    "keywords": [
      "wasserleck",
      "leckage",
      "water leak",
      "flood",
      "probe",
      "sensor",
      "boden",
      "security",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "water-leakage-floor-probe"
  },
  "water-leakage-floor-probe-black": {
    "path": "M12 2a4 4 0 0 1 4 4c0 2.2-2.5 5.5-4 7.2-1.5-1.7-4-5-4-7.2a4 4 0 0 1 4-4zm-5 13h10a1 1 0 0 1 1 1v2a4 4 0 0 1-8 0v-1H8v1a4 4 0 0 1-2-3.5V16a1 1 0 0 1 1-1zm3 3a2 2 0 0 0 4 0v-1h-4v1z",
    "category": "Security",
    "keywords": [
      "wasserleck",
      "leckage",
      "water leak",
      "flood",
      "probe",
      "sensor",
      "boden",
      "security",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "water-leakage-floor-probe"
  },
  "water-leakage-floor-probe-white": {
    "path": "M12 2a4 4 0 0 1 4 4c0 2.2-2.5 5.5-4 7.2-1.5-1.7-4-5-4-7.2a4 4 0 0 1 4-4zm-5 13h10a1 1 0 0 1 1 1v2a4 4 0 0 1-8 0v-1H8v1a4 4 0 0 1-2-3.5V16a1 1 0 0 1 1-1zm3 3a2 2 0 0 0 4 0v-1h-4v1z",
    "category": "Security",
    "keywords": [
      "wasserleck",
      "leckage",
      "water leak",
      "flood",
      "probe",
      "sensor",
      "boden",
      "security",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "water-leakage-floor-probe"
  },
  "roller-shutter-tilt": {
    "path": "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 3v12h12V6H6zm2 2.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5z",
    "category": "Climate",
    "keywords": [
      "raffstore",
      "jalousie",
      "lamellen",
      "shutter",
      "blinds",
      "tilt",
      "sonnenschutz",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "roller-shutter-tilt"
  },
  "roller-shutter-tilt-solid": {
    "path": "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 3v12h12V6H6zm2 2.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5z",
    "category": "Climate",
    "keywords": [
      "raffstore",
      "jalousie",
      "lamellen",
      "shutter",
      "blinds",
      "tilt",
      "sonnenschutz",
      "climate",
      "solid"
    ],
    "variant": "solid",
    "base": "roller-shutter-tilt"
  },
  "roller-shutter-tilt-outline": {
    "path": "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm3 3.5l7-2.5.4 1.4-7 2.5L8 8.5zm0 3.5l7-2.5.4 1.4-7 2.5L8 12zm0 3.5l7-2.5.4 1.4-7 2.5L8 15.5z",
    "category": "Climate",
    "keywords": [
      "raffstore",
      "jalousie",
      "lamellen",
      "shutter",
      "blinds",
      "tilt",
      "sonnenschutz",
      "climate",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "roller-shutter-tilt"
  },
  "roller-shutter-tilt-black": {
    "path": "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 3v12h12V6H6zm2 2.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5z",
    "category": "Climate",
    "keywords": [
      "raffstore",
      "jalousie",
      "lamellen",
      "shutter",
      "blinds",
      "tilt",
      "sonnenschutz",
      "climate",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "roller-shutter-tilt"
  },
  "roller-shutter-tilt-white": {
    "path": "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 3v12h12V6H6zm2 2.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5zm0 3.5l7-2.5.5 1.5-7 2.5-.5-1.5z",
    "category": "Climate",
    "keywords": [
      "raffstore",
      "jalousie",
      "lamellen",
      "shutter",
      "blinds",
      "tilt",
      "sonnenschutz",
      "climate",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "roller-shutter-tilt"
  },
  "light-cove-strip": {
    "path": "M3 4h18v3H7v5H3V4zm5 8h13v2H8v-2zm-5 4l1.5 2 1.5-2H3zm5 0l1.5 2 1.5-2H8zm5 0l1.5 2 1.5-2h-3zm5 0l1.5 2 1.5-2h-3z",
    "category": "Lighting",
    "keywords": [
      "beleuchtung",
      "led",
      "stripe",
      "voute",
      "indirect",
      "cove",
      "light",
      "lighting",
      "solid"
    ],
    "variant": "solid",
    "base": "light-cove-strip"
  },
  "light-cove-strip-solid": {
    "path": "M3 4h18v3H7v5H3V4zm5 8h13v2H8v-2zm-5 4l1.5 2 1.5-2H3zm5 0l1.5 2 1.5-2H8zm5 0l1.5 2 1.5-2h-3zm5 0l1.5 2 1.5-2h-3z",
    "category": "Lighting",
    "keywords": [
      "beleuchtung",
      "led",
      "stripe",
      "voute",
      "indirect",
      "cove",
      "light",
      "lighting",
      "solid"
    ],
    "variant": "solid",
    "base": "light-cove-strip"
  },
  "light-cove-strip-outline": {
    "path": "M3 4h18v3H7v5H3V4zm2 2v4h2V6h12V5H5zm3 6h13v2H8v-2zm-5 4l1.5 2 1.5-2H3zm5 0l1.5 2 1.5-2H8zm5 0l1.5 2 1.5-2h-3zm5 0l1.5 2 1.5-2h-3z",
    "category": "Lighting",
    "keywords": [
      "beleuchtung",
      "led",
      "stripe",
      "voute",
      "indirect",
      "cove",
      "light",
      "lighting",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "light-cove-strip"
  },
  "light-cove-strip-black": {
    "path": "M3 4h18v3H7v5H3V4zm5 8h13v2H8v-2zm-5 4l1.5 2 1.5-2H3zm5 0l1.5 2 1.5-2H8zm5 0l1.5 2 1.5-2h-3zm5 0l1.5 2 1.5-2h-3z",
    "category": "Lighting",
    "keywords": [
      "beleuchtung",
      "led",
      "stripe",
      "voute",
      "indirect",
      "cove",
      "light",
      "lighting",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "light-cove-strip"
  },
  "light-cove-strip-white": {
    "path": "M3 4h18v3H7v5H3V4zm5 8h13v2H8v-2zm-5 4l1.5 2 1.5-2H3zm5 0l1.5 2 1.5-2H8zm5 0l1.5 2 1.5-2h-3zm5 0l1.5 2 1.5-2h-3z",
    "category": "Lighting",
    "keywords": [
      "beleuchtung",
      "led",
      "stripe",
      "voute",
      "indirect",
      "cove",
      "light",
      "lighting",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "light-cove-strip"
  },
  "power-meter-grid": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm3 3h10v4H7V6zm2 7l-2 2h3v3h2v-3h3l-2-2h-4zm-3 7h12v2H6z",
    "category": "Energy",
    "keywords": [
      "stromzähler",
      "grid",
      "netz",
      "energie",
      "power meter",
      "kwh",
      "einspeisung",
      "energy",
      "solid"
    ],
    "variant": "solid",
    "base": "power-meter-grid"
  },
  "power-meter-grid-solid": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm3 3h10v4H7V6zm2 7l-2 2h3v3h2v-3h3l-2-2h-4zm-3 7h12v2H6z",
    "category": "Energy",
    "keywords": [
      "stromzähler",
      "grid",
      "netz",
      "energie",
      "power meter",
      "kwh",
      "einspeisung",
      "energy",
      "solid"
    ],
    "variant": "solid",
    "base": "power-meter-grid"
  },
  "power-meter-grid-outline": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 0v14h12V3H6zm2 3h8v3H8V6zm1 6l-2 2h2.5v3h1V14H13l-2-2zm-3 8h12v1.8H6V20z",
    "category": "Energy",
    "keywords": [
      "stromzähler",
      "grid",
      "netz",
      "energie",
      "power meter",
      "kwh",
      "einspeisung",
      "energy",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "power-meter-grid"
  },
  "power-meter-grid-black": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm3 3h10v4H7V6zm2 7l-2 2h3v3h2v-3h3l-2-2h-4zm-3 7h12v2H6z",
    "category": "Energy",
    "keywords": [
      "stromzähler",
      "grid",
      "netz",
      "energie",
      "power meter",
      "kwh",
      "einspeisung",
      "energy",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "power-meter-grid"
  },
  "power-meter-grid-white": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm3 3h10v4H7V6zm2 7l-2 2h3v3h2v-3h3l-2-2h-4zm-3 7h12v2H6z",
    "category": "Energy",
    "keywords": [
      "stromzähler",
      "grid",
      "netz",
      "energie",
      "power meter",
      "kwh",
      "einspeisung",
      "energy",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "power-meter-grid"
  },
  "smart-plug-meter": {
    "path": "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V4zm2 0v3h8V4H8zm4 7l-2 3.5h2.5L11.5 19l4-4.5H13l1.5-3.5H12z",
    "category": "Energy",
    "keywords": [
      "steckdose",
      "smart plug",
      "funksteckdose",
      "power",
      "watt",
      "energie",
      "meter",
      "energy",
      "solid"
    ],
    "variant": "solid",
    "base": "smart-plug-meter"
  },
  "smart-plug-meter-solid": {
    "path": "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V4zm2 0v3h8V4H8zm4 7l-2 3.5h2.5L11.5 19l4-4.5H13l1.5-3.5H12z",
    "category": "Energy",
    "keywords": [
      "steckdose",
      "smart plug",
      "funksteckdose",
      "power",
      "watt",
      "energie",
      "meter",
      "energy",
      "solid"
    ],
    "variant": "solid",
    "base": "smart-plug-meter"
  },
  "smart-plug-meter-outline": {
    "path": "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V4zm2 0v3h8V4H8zm-3 5v9h14V9H5zm7 2l-1.5 2.5h2l-.8 3.5 3-3.5h-1.8l1.1-2.5H12z",
    "category": "Energy",
    "keywords": [
      "steckdose",
      "smart plug",
      "funksteckdose",
      "power",
      "watt",
      "energie",
      "meter",
      "energy",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "smart-plug-meter"
  },
  "smart-plug-meter-black": {
    "path": "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V4zm2 0v3h8V4H8zm4 7l-2 3.5h2.5L11.5 19l4-4.5H13l1.5-3.5H12z",
    "category": "Energy",
    "keywords": [
      "steckdose",
      "smart plug",
      "funksteckdose",
      "power",
      "watt",
      "energie",
      "meter",
      "energy",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "smart-plug-meter"
  },
  "smart-plug-meter-white": {
    "path": "M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V4zm2 0v3h8V4H8zm4 7l-2 3.5h2.5L11.5 19l4-4.5H13l1.5-3.5H12z",
    "category": "Energy",
    "keywords": [
      "steckdose",
      "smart plug",
      "funksteckdose",
      "power",
      "watt",
      "energie",
      "meter",
      "energy",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "smart-plug-meter"
  },
  "home-battery-storage": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm3 4h8V5H8v2zm0 4h8V9H8v2zm0 4h8v-2H8v2zm0 4h5v-2H8v2z",
    "category": "Energy",
    "keywords": [
      "speicher",
      "batteriespeicher",
      "battery",
      "home storage",
      "solar",
      "photovoltaik",
      "energy",
      "solid"
    ],
    "variant": "solid",
    "base": "home-battery-storage"
  },
  "home-battery-storage-solid": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm3 4h8V5H8v2zm0 4h8V9H8v2zm0 4h8v-2H8v2zm0 4h5v-2H8v2z",
    "category": "Energy",
    "keywords": [
      "speicher",
      "batteriespeicher",
      "battery",
      "home storage",
      "solar",
      "photovoltaik",
      "energy",
      "solid"
    ],
    "variant": "solid",
    "base": "home-battery-storage"
  },
  "home-battery-storage-outline": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm2 0v18h10V3H7zm2 2h6v2H9V5zm0 4h6v2H9V9zm0 4h6v2H9v-2zm0 4h4v2H9v-2z",
    "category": "Energy",
    "keywords": [
      "speicher",
      "batteriespeicher",
      "battery",
      "home storage",
      "solar",
      "photovoltaik",
      "energy",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "home-battery-storage"
  },
  "home-battery-storage-black": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm3 4h8V5H8v2zm0 4h8V9H8v2zm0 4h8v-2H8v2zm0 4h5v-2H8v2z",
    "category": "Energy",
    "keywords": [
      "speicher",
      "batteriespeicher",
      "battery",
      "home storage",
      "solar",
      "photovoltaik",
      "energy",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "home-battery-storage"
  },
  "home-battery-storage-white": {
    "path": "M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3zm3 4h8V5H8v2zm0 4h8V9H8v2zm0 4h8v-2H8v2zm0 4h5v-2H8v2z",
    "category": "Energy",
    "keywords": [
      "speicher",
      "batteriespeicher",
      "battery",
      "home storage",
      "solar",
      "photovoltaik",
      "energy",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "home-battery-storage"
  },
  "subwoofer-speaker": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm8 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 9a1.8 1.8 0 1 0 1.8 1.8A1.8 1.8 0 0 0 12 17z",
    "category": "Multimedia",
    "keywords": [
      "subwoofer",
      "bass",
      "lautsprecher",
      "audio",
      "multimedia",
      "lfe",
      "sound",
      "multimedia",
      "solid"
    ],
    "variant": "solid",
    "base": "subwoofer-speaker"
  },
  "subwoofer-speaker-solid": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm8 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 9a1.8 1.8 0 1 0 1.8 1.8A1.8 1.8 0 0 0 12 17z",
    "category": "Multimedia",
    "keywords": [
      "subwoofer",
      "bass",
      "lautsprecher",
      "audio",
      "multimedia",
      "lfe",
      "sound",
      "multimedia",
      "solid"
    ],
    "variant": "solid",
    "base": "subwoofer-speaker"
  },
  "subwoofer-speaker-outline": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm2 0v18h12V3H6zm6 3a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 1.8a3.2 3.2 0 1 0 3.2 3.2A3.2 3.2 0 0 0 12 7.8zm0 9.2a1.8 1.8 0 1 1-1.8 1.8 1.8 1.8 0 0 1 1.8-1.8z",
    "category": "Multimedia",
    "keywords": [
      "subwoofer",
      "bass",
      "lautsprecher",
      "audio",
      "multimedia",
      "lfe",
      "sound",
      "multimedia",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "subwoofer-speaker"
  },
  "subwoofer-speaker-black": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm8 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 9a1.8 1.8 0 1 0 1.8 1.8A1.8 1.8 0 0 0 12 17z",
    "category": "Multimedia",
    "keywords": [
      "subwoofer",
      "bass",
      "lautsprecher",
      "audio",
      "multimedia",
      "lfe",
      "sound",
      "multimedia",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "subwoofer-speaker"
  },
  "subwoofer-speaker-white": {
    "path": "M4 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3zm8 3a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 9a1.8 1.8 0 1 0 1.8 1.8A1.8 1.8 0 0 0 12 17z",
    "category": "Multimedia",
    "keywords": [
      "subwoofer",
      "bass",
      "lautsprecher",
      "audio",
      "multimedia",
      "lfe",
      "sound",
      "multimedia",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "subwoofer-speaker"
  },
  "av-receiver-amplifier": {
    "path": "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm4 3h7v3H7V9zm10 0a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 17 9zm-10 6h2v1.5H7V15zm4 0h2v1.5h-2V15z",
    "category": "Multimedia",
    "keywords": [
      "receiver",
      "denon",
      "verstärker",
      "av",
      "multimedia",
      "audio",
      "heimkino",
      "multimedia",
      "solid"
    ],
    "variant": "solid",
    "base": "av-receiver-amplifier"
  },
  "av-receiver-amplifier-solid": {
    "path": "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm4 3h7v3H7V9zm10 0a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 17 9zm-10 6h2v1.5H7V15zm4 0h2v1.5h-2V15z",
    "category": "Multimedia",
    "keywords": [
      "receiver",
      "denon",
      "verstärker",
      "av",
      "multimedia",
      "audio",
      "heimkino",
      "multimedia",
      "solid"
    ],
    "variant": "solid",
    "base": "av-receiver-amplifier"
  },
  "av-receiver-amplifier-outline": {
    "path": "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm2 0v12h14V6H5zm3 3h5v3H8V9zm8.5 0a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 16.5 9zm-8.5 6h2v1.5H8V15zm3.5 0h2v1.5h-2V15z",
    "category": "Multimedia",
    "keywords": [
      "receiver",
      "denon",
      "verstärker",
      "av",
      "multimedia",
      "audio",
      "heimkino",
      "multimedia",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "av-receiver-amplifier"
  },
  "av-receiver-amplifier-black": {
    "path": "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm4 3h7v3H7V9zm10 0a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 17 9zm-10 6h2v1.5H7V15zm4 0h2v1.5h-2V15z",
    "category": "Multimedia",
    "keywords": [
      "receiver",
      "denon",
      "verstärker",
      "av",
      "multimedia",
      "audio",
      "heimkino",
      "multimedia",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "av-receiver-amplifier"
  },
  "av-receiver-amplifier-white": {
    "path": "M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6zm4 3h7v3H7V9zm10 0a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 17 9zm-10 6h2v1.5H7V15zm4 0h2v1.5h-2V15z",
    "category": "Multimedia",
    "keywords": [
      "receiver",
      "denon",
      "verstärker",
      "av",
      "multimedia",
      "audio",
      "heimkino",
      "multimedia",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "av-receiver-amplifier"
  },
  "nas-server-rack": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v2h10V6H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7z",
    "category": "Infrastructure",
    "keywords": [
      "nas",
      "server",
      "datengrab",
      "rack",
      "festplatte",
      "storage",
      "infrastruktur",
      "infrastructure",
      "solid"
    ],
    "variant": "solid",
    "base": "nas-server-rack"
  },
  "nas-server-rack-solid": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v2h10V6H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7z",
    "category": "Infrastructure",
    "keywords": [
      "nas",
      "server",
      "datengrab",
      "rack",
      "festplatte",
      "storage",
      "infrastruktur",
      "infrastructure",
      "solid"
    ],
    "variant": "solid",
    "base": "nas-server-rack"
  },
  "nas-server-rack-outline": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2 0v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2zm0 4h8v2H8v-2z",
    "category": "Infrastructure",
    "keywords": [
      "nas",
      "server",
      "datengrab",
      "rack",
      "festplatte",
      "storage",
      "infrastruktur",
      "infrastructure",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "nas-server-rack"
  },
  "nas-server-rack-black": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v2h10V6H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7z",
    "category": "Infrastructure",
    "keywords": [
      "nas",
      "server",
      "datengrab",
      "rack",
      "festplatte",
      "storage",
      "infrastruktur",
      "infrastructure",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "nas-server-rack"
  },
  "nas-server-rack-white": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm3 2v2h10V6H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7zm0 4v2h10v-2H7z",
    "category": "Infrastructure",
    "keywords": [
      "nas",
      "server",
      "datengrab",
      "rack",
      "festplatte",
      "storage",
      "infrastruktur",
      "infrastructure",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "nas-server-rack"
  },
  "docker-container-cube": {
    "path": "M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2zm0 2.3L5.4 8.1l6.6 3.8 6.6-3.8L12 4.3zM4.5 9.7v7.5l6.5 3.7v-7.5L4.5 9.7zm8.5 11.2l6.5-3.7V9.7L13 13.4v7.5z",
    "category": "Infrastructure",
    "keywords": [
      "docker",
      "container",
      "virtualization",
      "cube",
      "datengrab",
      "leafwiki",
      "infrastructure",
      "solid"
    ],
    "variant": "solid",
    "base": "docker-container-cube"
  },
  "docker-container-cube-solid": {
    "path": "M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2zm0 2.3L5.4 8.1l6.6 3.8 6.6-3.8L12 4.3zM4.5 9.7v7.5l6.5 3.7v-7.5L4.5 9.7zm8.5 11.2l6.5-3.7V9.7L13 13.4v7.5z",
    "category": "Infrastructure",
    "keywords": [
      "docker",
      "container",
      "virtualization",
      "cube",
      "datengrab",
      "leafwiki",
      "infrastructure",
      "solid"
    ],
    "variant": "solid",
    "base": "docker-container-cube"
  },
  "docker-container-cube-outline": {
    "path": "M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2zm0 2.3L5.4 8.1l6.6 3.8 6.6-3.8L12 4.3zM4.5 9.7v7.5l6.5 3.7v-7.5L4.5 9.7zm8.5 11.2l6.5-3.7V9.7L13 13.4v7.5z",
    "category": "Infrastructure",
    "keywords": [
      "docker",
      "container",
      "virtualization",
      "cube",
      "datengrab",
      "leafwiki",
      "infrastructure",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "docker-container-cube"
  },
  "docker-container-cube-black": {
    "path": "M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2zm0 2.3L5.4 8.1l6.6 3.8 6.6-3.8L12 4.3zM4.5 9.7v7.5l6.5 3.7v-7.5L4.5 9.7zm8.5 11.2l6.5-3.7V9.7L13 13.4v7.5z",
    "category": "Infrastructure",
    "keywords": [
      "docker",
      "container",
      "virtualization",
      "cube",
      "datengrab",
      "leafwiki",
      "infrastructure",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "docker-container-cube"
  },
  "docker-container-cube-white": {
    "path": "M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2zm0 2.3L5.4 8.1l6.6 3.8 6.6-3.8L12 4.3zM4.5 9.7v7.5l6.5 3.7v-7.5L4.5 9.7zm8.5 11.2l6.5-3.7V9.7L13 13.4v7.5z",
    "category": "Infrastructure",
    "keywords": [
      "docker",
      "container",
      "virtualization",
      "cube",
      "datengrab",
      "leafwiki",
      "infrastructure",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "docker-container-cube"
  },
  "soil-moisture-probe": {
    "path": "M11 2a4 4 0 0 1 4 4c0 1.2-.5 2.3-1.4 3.1l.4.9H8v-1.5A3.5 3.5 0 0 1 11 2zM7 11h10v2H7v-2zm1 3h2v8H8v-8zm6 0h2v8h-2v-8z",
    "category": "Environment",
    "keywords": [
      "bodenfeuchte",
      "pflanze",
      "soil",
      "moisture",
      "garten",
      "probe",
      "sensor",
      "environment",
      "solid"
    ],
    "variant": "solid",
    "base": "soil-moisture-probe"
  },
  "soil-moisture-probe-solid": {
    "path": "M11 2a4 4 0 0 1 4 4c0 1.2-.5 2.3-1.4 3.1l.4.9H8v-1.5A3.5 3.5 0 0 1 11 2zM7 11h10v2H7v-2zm1 3h2v8H8v-8zm6 0h2v8h-2v-8z",
    "category": "Environment",
    "keywords": [
      "bodenfeuchte",
      "pflanze",
      "soil",
      "moisture",
      "garten",
      "probe",
      "sensor",
      "environment",
      "solid"
    ],
    "variant": "solid",
    "base": "soil-moisture-probe"
  },
  "soil-moisture-probe-outline": {
    "path": "M11 2a4 4 0 0 1 4 4c0 1.2-.5 2.3-1.4 3.1l.4.9H8v-1.5A3.5 3.5 0 0 1 11 2zm0 2a1.8 1.8 0 0 0-1.8 1.8V7h2.2a2 2 0 0 0 .8-1.4A1.8 1.8 0 0 0 11 4zM7 11h10v2H7v-2zm1 3h2v8H8v-8zm6 0h2v8h-2v-8z",
    "category": "Environment",
    "keywords": [
      "bodenfeuchte",
      "pflanze",
      "soil",
      "moisture",
      "garten",
      "probe",
      "sensor",
      "environment",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "soil-moisture-probe"
  },
  "soil-moisture-probe-black": {
    "path": "M11 2a4 4 0 0 1 4 4c0 1.2-.5 2.3-1.4 3.1l.4.9H8v-1.5A3.5 3.5 0 0 1 11 2zM7 11h10v2H7v-2zm1 3h2v8H8v-8zm6 0h2v8h-2v-8z",
    "category": "Environment",
    "keywords": [
      "bodenfeuchte",
      "pflanze",
      "soil",
      "moisture",
      "garten",
      "probe",
      "sensor",
      "environment",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "soil-moisture-probe"
  },
  "soil-moisture-probe-white": {
    "path": "M11 2a4 4 0 0 1 4 4c0 1.2-.5 2.3-1.4 3.1l.4.9H8v-1.5A3.5 3.5 0 0 1 11 2zM7 11h10v2H7v-2zm1 3h2v8H8v-8zm6 0h2v8h-2v-8z",
    "category": "Environment",
    "keywords": [
      "bodenfeuchte",
      "pflanze",
      "soil",
      "moisture",
      "garten",
      "probe",
      "sensor",
      "environment",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "soil-moisture-probe"
  },
  "co2-air-quality-meter": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm4 4a3 3 0 0 0 3 3h2a3 3 0 0 0 0-6h-2a3 3 0 0 0-3 3zm6 6H8v2h6v-2zm2 3H8v2h8v-2z",
    "category": "Environment",
    "keywords": [
      "co2",
      "luftgüte",
      "air quality",
      "ppm",
      "umwelt",
      "sensor",
      "lüften",
      "environment",
      "solid"
    ],
    "variant": "solid",
    "base": "co2-air-quality-meter"
  },
  "co2-air-quality-meter-solid": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm4 4a3 3 0 0 0 3 3h2a3 3 0 0 0 0-6h-2a3 3 0 0 0-3 3zm6 6H8v2h6v-2zm2 3H8v2h8v-2z",
    "category": "Environment",
    "keywords": [
      "co2",
      "luftgüte",
      "air quality",
      "ppm",
      "umwelt",
      "sensor",
      "lüften",
      "environment",
      "solid"
    ],
    "variant": "solid",
    "base": "co2-air-quality-meter"
  },
  "co2-air-quality-meter-outline": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm2 0v16h12V4H6zm3 4a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2zm-1 6h8v1.5H8V14zm0 3h8v1.5H8V17z",
    "category": "Environment",
    "keywords": [
      "co2",
      "luftgüte",
      "air quality",
      "ppm",
      "umwelt",
      "sensor",
      "lüften",
      "environment",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "co2-air-quality-meter"
  },
  "co2-air-quality-meter-black": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm4 4a3 3 0 0 0 3 3h2a3 3 0 0 0 0-6h-2a3 3 0 0 0-3 3zm6 6H8v2h6v-2zm2 3H8v2h8v-2z",
    "category": "Environment",
    "keywords": [
      "co2",
      "luftgüte",
      "air quality",
      "ppm",
      "umwelt",
      "sensor",
      "lüften",
      "environment",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "co2-air-quality-meter"
  },
  "co2-air-quality-meter-white": {
    "path": "M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm4 4a3 3 0 0 0 3 3h2a3 3 0 0 0 0-6h-2a3 3 0 0 0-3 3zm6 6H8v2h6v-2zm2 3H8v2h8v-2z",
    "category": "Environment",
    "keywords": [
      "co2",
      "luftgüte",
      "air quality",
      "ppm",
      "umwelt",
      "sensor",
      "lüften",
      "environment",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "co2-air-quality-meter"
  },
  "smartwatch-charging": {
    "path": "M10 2h4l.5 3h-5l.5-3zm0 20h4l-.5-3h-3l-.5 3zM12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3.5l-2.5 3.5h2l-.5 3 2.5-3.5h-2l.5-3z",
    "category": "Devices",
    "keywords": [
      "smartwatch",
      "laden",
      "charging",
      "akku",
      "wearable",
      "uhr",
      "watch",
      "devices",
      "solid"
    ],
    "variant": "solid",
    "base": "smartwatch-charging"
  },
  "smartwatch-charging-solid": {
    "path": "M10 2h4l.5 3h-5l.5-3zm0 20h4l-.5-3h-3l-.5 3zM12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3.5l-2.5 3.5h2l-.5 3 2.5-3.5h-2l.5-3z",
    "category": "Devices",
    "keywords": [
      "smartwatch",
      "laden",
      "charging",
      "akku",
      "wearable",
      "uhr",
      "watch",
      "devices",
      "solid"
    ],
    "variant": "solid",
    "base": "smartwatch-charging"
  },
  "smartwatch-charging-outline": {
    "path": "M10 2h4l.5 3h-5l.5-3zm0 20h4l-.5-3h-3l-.5 3zM12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm1 1.5l-2.5 3.5h2l-.5 3 2.5-3.5h-2l.5-3z",
    "category": "Devices",
    "keywords": [
      "smartwatch",
      "laden",
      "charging",
      "akku",
      "wearable",
      "uhr",
      "watch",
      "devices",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "smartwatch-charging"
  },
  "smartwatch-charging-black": {
    "path": "M10 2h4l.5 3h-5l.5-3zm0 20h4l-.5-3h-3l-.5 3zM12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3.5l-2.5 3.5h2l-.5 3 2.5-3.5h-2l.5-3z",
    "category": "Devices",
    "keywords": [
      "smartwatch",
      "laden",
      "charging",
      "akku",
      "wearable",
      "uhr",
      "watch",
      "devices",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "smartwatch-charging"
  },
  "smartwatch-charging-white": {
    "path": "M10 2h4l.5 3h-5l.5-3zm0 20h4l-.5-3h-3l-.5 3zM12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm1 3.5l-2.5 3.5h2l-.5 3 2.5-3.5h-2l.5-3z",
    "category": "Devices",
    "keywords": [
      "smartwatch",
      "laden",
      "charging",
      "akku",
      "wearable",
      "uhr",
      "watch",
      "devices",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "smartwatch-charging"
  },
  "system-health-pulse": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm1 8h4.2l1.6-3.5 2.4 7 1.8-4.5 1.4 1H19v-2h-3l-1.6 3.8-2.4-7-1.8 4.2H4v1z",
    "category": "System",
    "keywords": [
      "diagnose",
      "gesundheit",
      "system",
      "health",
      "ekg",
      "pulse",
      "vital",
      "system",
      "solid"
    ],
    "variant": "solid",
    "base": "system-health-pulse"
  },
  "system-health-pulse-solid": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm1 8h4.2l1.6-3.5 2.4 7 1.8-4.5 1.4 1H19v-2h-3l-1.6 3.8-2.4-7-1.8 4.2H4v1z",
    "category": "System",
    "keywords": [
      "diagnose",
      "gesundheit",
      "system",
      "health",
      "ekg",
      "pulse",
      "vital",
      "system",
      "solid"
    ],
    "variant": "solid",
    "base": "system-health-pulse"
  },
  "system-health-pulse-outline": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2 0v16h14V4H5zm-1 8h4.2l1.6-3.5 2.4 7 1.8-4.5 1.4 1H19v-2h-3l-1.6 3.8-2.4-7-1.8 4.2H4v1z",
    "category": "System",
    "keywords": [
      "diagnose",
      "gesundheit",
      "system",
      "health",
      "ekg",
      "pulse",
      "vital",
      "system",
      "outline",
      "kontur"
    ],
    "variant": "outline",
    "base": "system-health-pulse"
  },
  "system-health-pulse-black": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm1 8h4.2l1.6-3.5 2.4 7 1.8-4.5 1.4 1H19v-2h-3l-1.6 3.8-2.4-7-1.8 4.2H4v1z",
    "category": "System",
    "keywords": [
      "diagnose",
      "gesundheit",
      "system",
      "health",
      "ekg",
      "pulse",
      "vital",
      "system",
      "black",
      "dark"
    ],
    "variant": "black",
    "base": "system-health-pulse"
  },
  "system-health-pulse-white": {
    "path": "M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm1 8h4.2l1.6-3.5 2.4 7 1.8-4.5 1.4 1H19v-2h-3l-1.6 3.8-2.4-7-1.8 4.2H4v1z",
    "category": "System",
    "keywords": [
      "diagnose",
      "gesundheit",
      "system",
      "health",
      "ekg",
      "pulse",
      "vital",
      "system",
      "white",
      "light"
    ],
    "variant": "white",
    "base": "system-health-pulse"
  }
,
  "occupancy-helper": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.84 0 8.87-3.44 9.8-8h-2.06c-.89 3.45-4.01 6-7.74 6-4.42 0-8-3.58-8-8s3.58-8 8-8c2.21 0 4.21.9 5.66 2.34L15 9h7V2l-2.93 2.93C17.26 3.12 14.76 2 12 2z M6.8 10.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 1 0 0-3.2z M9.6 8.8l-1.1 1.1c.65.55 1.05 1.3 1.05 2.1s-.4 1.55-1.05 2.1l1.1 1.1c.95-.85 1.55-2 1.55-3.2s-.6-2.35-1.55-3.2z M11.8 6.6l-1.1 1.1c1.2 1.05 1.95 2.6 1.95 4.3s-.75 3.25-1.95 4.3l1.1 1.1c1.5-1.35 2.45-3.25 2.45-5.4s-.95-4.05-2.45-5.4z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "belegung",
        "occupancy",
        "anwesenheit",
        "bewegung",
        "sensor",
        "helper",
        "helper",
        "system"
    ],
    "base": "occupancy-helper",
    "variant": "solid"
},
  "occupancy-helper-solid": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.84 0 8.87-3.44 9.8-8h-2.06c-.89 3.45-4.01 6-7.74 6-4.42 0-8-3.58-8-8s3.58-8 8-8c2.21 0 4.21.9 5.66 2.34L15 9h7V2l-2.93 2.93C17.26 3.12 14.76 2 12 2z M6.8 10.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 1 0 0-3.2z M9.6 8.8l-1.1 1.1c.65.55 1.05 1.3 1.05 2.1s-.4 1.55-1.05 2.1l1.1 1.1c.95-.85 1.55-2 1.55-3.2s-.6-2.35-1.55-3.2z M11.8 6.6l-1.1 1.1c1.2 1.05 1.95 2.6 1.95 4.3s-.75 3.25-1.95 4.3l1.1 1.1c1.5-1.35 2.45-3.25 2.45-5.4s-.95-4.05-2.45-5.4z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "belegung",
        "occupancy",
        "anwesenheit",
        "bewegung",
        "sensor",
        "helper",
        "helper",
        "system"
    ],
    "base": "occupancy-helper",
    "variant": "solid"
},
  "occupancy-helper-outline": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.84 0 8.87-3.44 9.8-8h-2.06c-.89 3.45-4.01 6-7.74 6-4.42 0-8-3.58-8-8s3.58-8 8-8c2.21 0 4.21.9 5.66 2.34L15 9h7V2l-2.93 2.93C17.26 3.12 14.76 2 12 2z M6.8 10.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 1 0 0-3.2z M9.6 8.8l-1.1 1.1c.65.55 1.05 1.3 1.05 2.1s-.4 1.55-1.05 2.1l1.1 1.1c.95-.85 1.55-2 1.55-3.2s-.6-2.35-1.55-3.2z M11.8 6.6l-1.1 1.1c1.2 1.05 1.95 2.6 1.95 4.3s-.75 3.25-1.95 4.3l1.1 1.1c1.5-1.35 2.45-3.25 2.45-5.4s-.95-4.05-2.45-5.4z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "belegung",
        "occupancy",
        "anwesenheit",
        "bewegung",
        "sensor",
        "helper",
        "helper",
        "system"
    ],
    "base": "occupancy-helper",
    "variant": "outline"
},
  "occupancy-helper-black": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.84 0 8.87-3.44 9.8-8h-2.06c-.89 3.45-4.01 6-7.74 6-4.42 0-8-3.58-8-8s3.58-8 8-8c2.21 0 4.21.9 5.66 2.34L15 9h7V2l-2.93 2.93C17.26 3.12 14.76 2 12 2z M6.8 10.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 1 0 0-3.2z M9.6 8.8l-1.1 1.1c.65.55 1.05 1.3 1.05 2.1s-.4 1.55-1.05 2.1l1.1 1.1c.95-.85 1.55-2 1.55-3.2s-.6-2.35-1.55-3.2z M11.8 6.6l-1.1 1.1c1.2 1.05 1.95 2.6 1.95 4.3s-.75 3.25-1.95 4.3l1.1 1.1c1.5-1.35 2.45-3.25 2.45-5.4s-.95-4.05-2.45-5.4z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "belegung",
        "occupancy",
        "anwesenheit",
        "bewegung",
        "sensor",
        "helper",
        "helper",
        "system"
    ],
    "base": "occupancy-helper",
    "variant": "black"
},
  "occupancy-helper-white": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c4.84 0 8.87-3.44 9.8-8h-2.06c-.89 3.45-4.01 6-7.74 6-4.42 0-8-3.58-8-8s3.58-8 8-8c2.21 0 4.21.9 5.66 2.34L15 9h7V2l-2.93 2.93C17.26 3.12 14.76 2 12 2z M6.8 10.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 1 0 0-3.2z M9.6 8.8l-1.1 1.1c.65.55 1.05 1.3 1.05 2.1s-.4 1.55-1.05 2.1l1.1 1.1c.95-.85 1.55-2 1.55-3.2s-.6-2.35-1.55-3.2z M11.8 6.6l-1.1 1.1c1.2 1.05 1.95 2.6 1.95 4.3s-.75 3.25-1.95 4.3l1.1 1.1c1.5-1.35 2.45-3.25 2.45-5.4s-.95-4.05-2.45-5.4z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "belegung",
        "occupancy",
        "anwesenheit",
        "bewegung",
        "sensor",
        "helper",
        "helper",
        "system"
    ],
    "base": "occupancy-helper",
    "variant": "white"
},
  "wake-up-light": {
    "path": "M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM6.5 14.5h11v1.5H6.5zM8.5 14a3.5 3.5 0 0 1 7 0H8.5zM11.25 7.5h1.5v2h-1.5zM7.8 9.1l1.06-1.06 1.41 1.41L9.21 10.51zM14.7 9.1l1.41-1.41 1.06 1.06-1.41 1.41zM6.5 19.5l-1.5 2 1.6 1.2 1.5-2-1.6-1.2zm11 0l-1.6 1.2 1.5 2 1.6-1.2-1.5-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "wecker",
        "sonnenaufgang",
        "sunrise",
        "alarm",
        "licht",
        "wake-up",
        "light",
        "helper",
        "system"
    ],
    "base": "wake-up-light",
    "variant": "solid"
},
  "wake-up-light-solid": {
    "path": "M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM6.5 14.5h11v1.5H6.5zM8.5 14a3.5 3.5 0 0 1 7 0H8.5zM11.25 7.5h1.5v2h-1.5zM7.8 9.1l1.06-1.06 1.41 1.41L9.21 10.51zM14.7 9.1l1.41-1.41 1.06 1.06-1.41 1.41zM6.5 19.5l-1.5 2 1.6 1.2 1.5-2-1.6-1.2zm11 0l-1.6 1.2 1.5 2 1.6-1.2-1.5-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "wecker",
        "sonnenaufgang",
        "sunrise",
        "alarm",
        "licht",
        "wake-up",
        "light",
        "helper",
        "system"
    ],
    "base": "wake-up-light",
    "variant": "solid"
},
  "wake-up-light-outline": {
    "path": "M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM6.5 14.5h11v1.5H6.5zM8.5 14a3.5 3.5 0 0 1 7 0H8.5zM11.25 7.5h1.5v2h-1.5zM7.8 9.1l1.06-1.06 1.41 1.41L9.21 10.51zM14.7 9.1l1.41-1.41 1.06 1.06-1.41 1.41zM6.5 19.5l-1.5 2 1.6 1.2 1.5-2-1.6-1.2zm11 0l-1.6 1.2 1.5 2 1.6-1.2-1.5-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "wecker",
        "sonnenaufgang",
        "sunrise",
        "alarm",
        "licht",
        "wake-up",
        "light",
        "helper",
        "system"
    ],
    "base": "wake-up-light",
    "variant": "outline"
},
  "wake-up-light-black": {
    "path": "M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM6.5 14.5h11v1.5H6.5zM8.5 14a3.5 3.5 0 0 1 7 0H8.5zM11.25 7.5h1.5v2h-1.5zM7.8 9.1l1.06-1.06 1.41 1.41L9.21 10.51zM14.7 9.1l1.41-1.41 1.06 1.06-1.41 1.41zM6.5 19.5l-1.5 2 1.6 1.2 1.5-2-1.6-1.2zm11 0l-1.6 1.2 1.5 2 1.6-1.2-1.5-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "wecker",
        "sonnenaufgang",
        "sunrise",
        "alarm",
        "licht",
        "wake-up",
        "light",
        "helper",
        "system"
    ],
    "base": "wake-up-light",
    "variant": "black"
},
  "wake-up-light-white": {
    "path": "M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM6.5 14.5h11v1.5H6.5zM8.5 14a3.5 3.5 0 0 1 7 0H8.5zM11.25 7.5h1.5v2h-1.5zM7.8 9.1l1.06-1.06 1.41 1.41L9.21 10.51zM14.7 9.1l1.41-1.41 1.06 1.06-1.41 1.41zM6.5 19.5l-1.5 2 1.6 1.2 1.5-2-1.6-1.2zm11 0l-1.6 1.2 1.5 2 1.6-1.2-1.5-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "wecker",
        "sonnenaufgang",
        "sunrise",
        "alarm",
        "licht",
        "wake-up",
        "light",
        "helper",
        "system"
    ],
    "base": "wake-up-light",
    "variant": "white"
},
  "theme-switch-engine": {
    "path": "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8v16z M6.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M9.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M14.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z M17.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "theme",
        "palette",
        "dark",
        "light",
        "engine",
        "farben",
        "switch",
        "helper",
        "system"
    ],
    "base": "theme-switch-engine",
    "variant": "solid"
},
  "theme-switch-engine-solid": {
    "path": "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8v16z M6.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M9.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M14.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z M17.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "theme",
        "palette",
        "dark",
        "light",
        "engine",
        "farben",
        "switch",
        "helper",
        "system"
    ],
    "base": "theme-switch-engine",
    "variant": "solid"
},
  "theme-switch-engine-outline": {
    "path": "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8v16z M6.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M9.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M14.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z M17.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "theme",
        "palette",
        "dark",
        "light",
        "engine",
        "farben",
        "switch",
        "helper",
        "system"
    ],
    "base": "theme-switch-engine",
    "variant": "outline"
},
  "theme-switch-engine-black": {
    "path": "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8v16z M6.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M9.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M14.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z M17.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "theme",
        "palette",
        "dark",
        "light",
        "engine",
        "farben",
        "switch",
        "helper",
        "system"
    ],
    "base": "theme-switch-engine",
    "variant": "black"
},
  "theme-switch-engine-white": {
    "path": "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8v16z M6.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M9.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z M14.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z M17.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "theme",
        "palette",
        "dark",
        "light",
        "engine",
        "farben",
        "switch",
        "helper",
        "system"
    ],
    "base": "theme-switch-engine",
    "variant": "white"
},
  "annual-date-period": {
    "path": "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "kalender",
        "annual",
        "datum",
        "jahr",
        "period",
        "zeitraum",
        "helper",
        "system"
    ],
    "base": "annual-date-period",
    "variant": "solid"
},
  "annual-date-period-solid": {
    "path": "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "kalender",
        "annual",
        "datum",
        "jahr",
        "period",
        "zeitraum",
        "helper",
        "system"
    ],
    "base": "annual-date-period",
    "variant": "solid"
},
  "annual-date-period-outline": {
    "path": "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "kalender",
        "annual",
        "datum",
        "jahr",
        "period",
        "zeitraum",
        "helper",
        "system"
    ],
    "base": "annual-date-period",
    "variant": "outline"
},
  "annual-date-period-black": {
    "path": "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "kalender",
        "annual",
        "datum",
        "jahr",
        "period",
        "zeitraum",
        "helper",
        "system"
    ],
    "base": "annual-date-period",
    "variant": "black"
},
  "annual-date-period-white": {
    "path": "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "kalender",
        "annual",
        "datum",
        "jahr",
        "period",
        "zeitraum",
        "helper",
        "system"
    ],
    "base": "annual-date-period",
    "variant": "white"
},
  "limit-helper": {
    "path": "M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7 3.87 0 7 3.13 7 7 0 3.87-3.13 7-7 7zm1-12h-2v5h2V7zm0 7h-2v2h2v-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "limit",
        "grenzwert",
        "hysterese",
        "gauge",
        "schwellwert",
        "helper",
        "system"
    ],
    "base": "limit-helper",
    "variant": "solid"
},
  "limit-helper-solid": {
    "path": "M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7 3.87 0 7 3.13 7 7 0 3.87-3.13 7-7 7zm1-12h-2v5h2V7zm0 7h-2v2h2v-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "limit",
        "grenzwert",
        "hysterese",
        "gauge",
        "schwellwert",
        "helper",
        "system"
    ],
    "base": "limit-helper",
    "variant": "solid"
},
  "limit-helper-outline": {
    "path": "M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7 3.87 0 7 3.13 7 7 0 3.87-3.13 7-7 7zm1-12h-2v5h2V7zm0 7h-2v2h2v-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "limit",
        "grenzwert",
        "hysterese",
        "gauge",
        "schwellwert",
        "helper",
        "system"
    ],
    "base": "limit-helper",
    "variant": "outline"
},
  "limit-helper-black": {
    "path": "M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7 3.87 0 7 3.13 7 7 0 3.87-3.13 7-7 7zm1-12h-2v5h2V7zm0 7h-2v2h2v-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "limit",
        "grenzwert",
        "hysterese",
        "gauge",
        "schwellwert",
        "helper",
        "system"
    ],
    "base": "limit-helper",
    "variant": "black"
},
  "limit-helper-white": {
    "path": "M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7 3.87 0 7 3.13 7 7 0 3.87-3.13 7-7 7zm1-12h-2v5h2V7zm0 7h-2v2h2v-2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "limit",
        "grenzwert",
        "hysterese",
        "gauge",
        "schwellwert",
        "helper",
        "system"
    ],
    "base": "limit-helper",
    "variant": "white"
},
  "range-helper": {
    "path": "M3 17h18v2H3v-2zm0-7h18v2H3v-2zm0-7h18v2H3V3z M8 5h8v6H8V5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "range",
        "bereich",
        "slider",
        "intervall",
        "spanne",
        "helper",
        "system"
    ],
    "base": "range-helper",
    "variant": "solid"
},
  "range-helper-solid": {
    "path": "M3 17h18v2H3v-2zm0-7h18v2H3v-2zm0-7h18v2H3V3z M8 5h8v6H8V5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "range",
        "bereich",
        "slider",
        "intervall",
        "spanne",
        "helper",
        "system"
    ],
    "base": "range-helper",
    "variant": "solid"
},
  "range-helper-outline": {
    "path": "M3 17h18v2H3v-2zm0-7h18v2H3v-2zm0-7h18v2H3V3z M8 5h8v6H8V5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "range",
        "bereich",
        "slider",
        "intervall",
        "spanne",
        "helper",
        "system"
    ],
    "base": "range-helper",
    "variant": "outline"
},
  "range-helper-black": {
    "path": "M3 17h18v2H3v-2zm0-7h18v2H3v-2zm0-7h18v2H3V3z M8 5h8v6H8V5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "range",
        "bereich",
        "slider",
        "intervall",
        "spanne",
        "helper",
        "system"
    ],
    "base": "range-helper",
    "variant": "black"
},
  "range-helper-white": {
    "path": "M3 17h18v2H3v-2zm0-7h18v2H3v-2zm0-7h18v2H3V3z M8 5h8v6H8V5z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "range",
        "bereich",
        "slider",
        "intervall",
        "spanne",
        "helper",
        "system"
    ],
    "base": "range-helper",
    "variant": "white"
},
  "invert-helper": {
    "path": "M7 10l5 5 5-5H7z M17 14l-5-5-5 5h10z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "invert",
        "umkehren",
        "invertieren",
        "negieren",
        "toggle",
        "helper",
        "system"
    ],
    "base": "invert-helper",
    "variant": "solid"
},
  "invert-helper-solid": {
    "path": "M7 10l5 5 5-5H7z M17 14l-5-5-5 5h10z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "invert",
        "umkehren",
        "invertieren",
        "negieren",
        "toggle",
        "helper",
        "system"
    ],
    "base": "invert-helper",
    "variant": "solid"
},
  "invert-helper-outline": {
    "path": "M7 10l5 5 5-5H7z M17 14l-5-5-5 5h10z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "invert",
        "umkehren",
        "invertieren",
        "negieren",
        "toggle",
        "helper",
        "system"
    ],
    "base": "invert-helper",
    "variant": "outline"
},
  "invert-helper-black": {
    "path": "M7 10l5 5 5-5H7z M17 14l-5-5-5 5h10z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "invert",
        "umkehren",
        "invertieren",
        "negieren",
        "toggle",
        "helper",
        "system"
    ],
    "base": "invert-helper",
    "variant": "black"
},
  "invert-helper-white": {
    "path": "M7 10l5 5 5-5H7z M17 14l-5-5-5 5h10z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "invert",
        "umkehren",
        "invertieren",
        "negieren",
        "toggle",
        "helper",
        "system"
    ],
    "base": "invert-helper",
    "variant": "white"
},
  "passive-device-tracker": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "tracker",
        "radar",
        "lan",
        "ble",
        "wlan",
        "device",
        "passive",
        "helper",
        "system"
    ],
    "base": "passive-device-tracker",
    "variant": "solid"
},
  "passive-device-tracker-solid": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "tracker",
        "radar",
        "lan",
        "ble",
        "wlan",
        "device",
        "passive",
        "helper",
        "system"
    ],
    "base": "passive-device-tracker",
    "variant": "solid"
},
  "passive-device-tracker-outline": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "tracker",
        "radar",
        "lan",
        "ble",
        "wlan",
        "device",
        "passive",
        "helper",
        "system"
    ],
    "base": "passive-device-tracker",
    "variant": "outline"
},
  "passive-device-tracker-black": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "tracker",
        "radar",
        "lan",
        "ble",
        "wlan",
        "device",
        "passive",
        "helper",
        "system"
    ],
    "base": "passive-device-tracker",
    "variant": "black"
},
  "passive-device-tracker-white": {
    "path": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "tracker",
        "radar",
        "lan",
        "ble",
        "wlan",
        "device",
        "passive",
        "helper",
        "system"
    ],
    "base": "passive-device-tracker",
    "variant": "white"
},
  "virtual-device-entities": {
    "path": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4h16V6H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "virtual",
        "device",
        "entities",
        "simuliert",
        "test",
        "virtuell",
        "helper",
        "system"
    ],
    "base": "virtual-device-entities",
    "variant": "solid"
},
  "virtual-device-entities-solid": {
    "path": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4h16V6H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "virtual",
        "device",
        "entities",
        "simuliert",
        "test",
        "virtuell",
        "helper",
        "system"
    ],
    "base": "virtual-device-entities",
    "variant": "solid"
},
  "virtual-device-entities-outline": {
    "path": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4h16V6H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "virtual",
        "device",
        "entities",
        "simuliert",
        "test",
        "virtuell",
        "helper",
        "system"
    ],
    "base": "virtual-device-entities",
    "variant": "outline"
},
  "virtual-device-entities-black": {
    "path": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4h16V6H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "virtual",
        "device",
        "entities",
        "simuliert",
        "test",
        "virtuell",
        "helper",
        "system"
    ],
    "base": "virtual-device-entities",
    "variant": "black"
},
  "virtual-device-entities-white": {
    "path": "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4h16V6H4v2zm0 4h16v-2H4v2zm0 4h16v-2H4v2z",
    "category": "Smart Home & Helpers",
    "keywords": [
        "virtual",
        "device",
        "entities",
        "simuliert",
        "test",
        "virtuell",
        "helper",
        "system"
    ],
    "base": "virtual-device-entities",
    "variant": "white"
}
};

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
    '%c HA-CUSTOM-ICONS %c v1.0.0 Loaded (48 icons in 4 variants: Solid, Outline, Black, White) ',
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

      this.shadowRoot.innerHTML = `
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
              <span>${title}</span>
              <span class="badge">${filtered.length} Icons</span>
            </div>
          </div>

          <div class="toolbar">
            <input class="search" type="text" placeholder="Search icons, keywords (e.g. waschmaschine, espresso, pump)..." value="${this._search}">
            <select class="select select-cat">
              ${categories.map(c => `<option value="${c}" ${this._category === c ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
            <select class="select select-var">
              <option value="all" ${this._variant === 'all' ? 'selected' : ''}>All Variants</option>
              <option value="solid" ${this._variant === 'solid' ? 'selected' : ''}>Solid</option>
              <option value="outline" ${this._variant === 'outline' ? 'selected' : ''}>Outline</option>
              <option value="black" ${this._variant === 'black' ? 'selected' : ''}>Black</option>
              <option value="white" ${this._variant === 'white' ? 'selected' : ''}>White</option>
            </select>
          </div>

          <div class="grid">
            ${filtered.map(([name, item]) => `
              <div class="icon-tile" data-name="ci:${name}" title="Click to copy ci:${name}">
                <svg viewBox="0 0 24 24"><path d="${item.path}"/></svg>
                <div class="icon-name">${name}</div>
                <div class="icon-tag">${item.variant}</div>
              </div>
            `).join('')}
          </div>

          <div class="toast" id="toast">Copied to clipboard!</div>
        </ha-card>
      `;

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
            toast.textContent = `Copied "${val}" to clipboard!`;
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
