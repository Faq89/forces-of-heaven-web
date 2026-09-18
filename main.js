/**
 * FORCES OF HEAVEN: AIR ASSAULT — OFFICIAL LANDING PAGE LOGIC
 * Features:
 *  - Centralized Download URL & Clipboard Copy
 *  - Tactical Web Audio SFX Synthesizer
 *  - Interactive Gallery Lightbox Modal with Localization
 *  - Background Tactical Flight Simulation Layer (Z-Index: 2, GPU Composited)
 *  - Secret Aircraft Easter Egg Timers (Marilu @ 8m, Dan @ 9m, Gordalf @ 10m + 10m recurring)
 *  - Click-to-Inspect Pilot Dossier Modal with Live Telemetry (Responsive for Mobile & Desktop)
 *  - Interactive Aircraft Roster & Secret Aircraft Click-to-Inspect
 *  - Bilingual Localization System (Español / English) with Tactical Selection Modal
 *  - Mobile Navigation Drawer with Touch Controls
 */

// ==========================================================================
// CONFIGURACIÓN CENTRALIZADA // ENLACE DE DESCARGA
// ==========================================================================
const CONFIG = {
  DOWNLOAD_URL: "https://mega.nz/file/zPI1gawA#y-E0MLB6tqI3Soen1IjRFvXBdAELtG8m9sJut92jWoo",
  FILENAME: "ForcesOfHeaven_Setup.exe",
  VERSION: "1.0.0",
  FILE_SIZE: "466 MB"
};

// ==========================================================================
// DICCIONARIO DE TRADUCCIONES BILINGÜES (ES / EN)
// ==========================================================================
const TRANSLATIONS = {
  es: {
    "page.title": "Forces of Heaven: Air Assault — Página Oficial // Descarga PC",
    "page.description": "Forces of Heaven: Air Assault. Shmup arcade 2.5D de combate aeroespacial con relieve volumétrico, alabeo cinemático 3D, bosses colosales y cazas personalizables. Descarga el instalador oficial para Windows.",
    "nav.home": "INICIO",
    "nav.systems": "SISTEMAS",
    "nav.gallery": "CAPTURAS",
    "nav.hangar": "HANGAR",
    "nav.requirements": "REQUISITOS",
    "nav.download": "DESCARGAR",
    "nav.download_full": "DESCARGAR INSTALADOR",
    "nav.sfx_on": "SFX: ON",
    "nav.sfx_off": "SFX: OFF",
    "nav.mobile_lang": "IDIOMA: ESPAÑOL (ES)",

    "hero.tag": "SISTEMA DE DESPLIEGUE OPERACIONAL // VERSIÓN 1.0.0",
    "hero.tagline": "El shmup arcade 2.5D de combate aeroespacial de última generación. Pilota cazas de asalto con física de vuelo vectorial, aniquila flotas imperiales y enfrenta fortalezas volantes clase Leviatán en un festín de acción y sintetizadores.",

    "dl.single_file": "📦 ARCHIVO ÚNICO",
    "dl.ready": "● LISTO PARA DESPLIEGUE",
    "dl.btn_main": "DESCARGAR INSTALADOR (MEGA)",
    "dl.btn_sub": "EJECUTABLE TODO-EN-UNO // DESPLIEGUE INMEDIATO",
    "dl.aux_label": "ENLACE MEGA:",
    "dl.copy_btn": "COPIAR",
    "dl.copied": "¡COPIADO!",
    "dl.qr_title": "📱 ESCANEAR CÓDIGO QR",
    "dl.qr_sub": "Accede a la descarga o guarda el enlace directamente en tu dispositivo móvil",
    "dl.trust_1": "🛡️ 100% Libre de Virus & Adware",
    "dl.trust_2": "⚡ Sin Descompresores Externos",
    "dl.trust_3": "🎮 Soporte para Teclado, Ratón & Mando",

    "nav.support": "APOYAR",
    "support.badge": "// SUMINISTROS & APOYO AL DESARROLLO",
    "support.title": "CONTRIBUIR A LA MISIÓN",
    "support.desc": "Forces of Heaven es un desarrollo indie apasionado e independiente. Si disfrutas la experiencia de combate y deseas apoyar nuevas actualizaciones, cazas de combate y expansiones, puedes contribuir directamente con combustible táctico:",
    "support.kofi_region": "INTERNACIONAL // USD",
    "support.kofi_types": "PayPal • Tarjetas • Moneda Global",
    "support.cafecito_region": "ARGENTINA // PESOS",
    "support.cafecito_types": "Mercado Pago • Débito • Pesos Argentinos",
    "support.thanks": "⚡ ¡Tu apoyo directo financia servidores, mejoras del motor y contenido continuo!",

    "feat.sub": "// ESPECIFICACIONES DE COMBATE",
    "feat.title": "TECNOLOGÍA ARCADE 2.5D",
    "feat.f1_title": "Alabeo Volumétrico 3D",
    "feat.f1_desc": "Física y colisiones de alta precisión en 2D puro sincronizadas con proyección volumétrica 3D, relieves de carlinga y alabeo dinámico en cada maniobra evasiva.",
    "feat.f2_title": "Daño Segmentado",
    "feat.f2_desc": "Cada componente cuenta: alas, blindaje, cabina y motores se desgastan y sufren averías críticas individualmente durante las refriegas aéreas.",
    "feat.f3_title": "Bosses Clase Leviatán",
    "feat.f3_desc": "Enfrenta fortalezas flotantes colosales con múltiples fases de combate, patrones balísticos de pesadilla y blindajes de plasma segmentados.",
    "feat.f4_title": "Arsenal Vectorial & Ultimates",
    "feat.f4_desc": "Dispara cañones vulcan rotativos, misiles guiados y desata devastadores ataques definitivos como Chrono Surge, Mirage Bloom y Titán Barrage.",
    "feat.f5_title": "Academia y Minijuegos",
    "feat.f5_desc": "Entrena con la Cadete Marilu en simuladores arcade retro (Galaga, Brick Breaker y Bubble Shooter) para desbloquear mejoras y suministros tácticos.",
    "feat.f6_title": "Banda Sonora Sintetizada",
    "feat.f6_desc": "Banda sonora retro-futurista con sintetizadores analógicos, ritmos de alta energía y efectos de sonido arcade masterizados en alta definición.",

    "gallery.sub": "// REGISTROS VISUALES IN-GAME",
    "gallery.title": "CAPTURAS Y EXPEDIENTES TÁCTICOS",
    "gallery.desc": "Haz clic sobre cualquier captura para inspeccionarla en resolución completa.",
    "gallery.zoom": "🔍 AMPLIAR",
    "gallery.index_prefix": "EXPEDIENTE",
    "gallery.index_of": "DE",

    "aircraft.sub": "// ESCUADRILLA OPERACIONAL",
    "aircraft.title": "FLOTA DE CAZAS DISPONIBLES",
    "aircraft.desc": "Cada aeronave posee atributos físicos y maniobrabilidad calibrados para diferentes doctrinas de combate. Haz clic o toca cualquier caza para ver su expediente táctico.",
    "aircraft.inspect_hint": "🔍 VER EXPEDIENTE",

    "ac.valkyrie_type": "VF-02 // INTERCEPTOR LIGERO",
    "ac.valkyrie_desc": "Ágil y con velocidad punta extrema. Ideal para esquivar ráfagas densas y flanquear formaciones enemigas.",
    "ac.corsair_type": "CR-03 // CAZA HÍBRIDO POLIVALENTE",
    "ac.corsair_desc": "El equilibrio táctico definitivo entre cadencia de fuego, resistencia estructural y aceleración.",
    "ac.shadowcase_type": "APX-01 // DREADNOUGHT PESADO",
    "ac.shadowcase_desc": "Fuselaje reforzado de titanio y cañones cinéticos pesados. Alta resistencia al impacto con cadencia moderada pero letal.",
    "ac.phantom_type": "PH-04 // CAÑONERO DE ASALTO",
    "ac.phantom_desc": "Batería de plasma devastadora y proyectiles de penetración diseñados para demoler armaduras pesadas.",
    "ac.stat_speed": "VELOCIDAD:",
    "ac.stat_power": "POTENCIA:",
    "ac.stat_armor": "BLINDAJE:",

    "unlock.badge": "🔒 CLASIFICADO // PROTOCOLO DE DESPLIEGUE",
    "unlock.title": "+3 AERONAVES DE ÉLITE DESBLOQUEABLES",
    "unlock.desc": "Cumple objetivos de campaña, entrena en la academia y supera misiones secretas para obtener los cazas más legendarios de la Coalición.",
    "unlock.c1_tag": "DESBLOQUEO: ACADEMIA DE VUELO",
    "unlock.c1_pilot": "PILOTO: CADETE MARILU",
    "unlock.c1_desc": "Célula biplano de aerodinámica clásica con hiper-maniobrabilidad vectorial. Capaz de girar en ángulos imposibles y esquivar cortinas balísticas densas.",
    "unlock.c2_tag": "DESBLOQUEO: CAMPAÑA SUPREMA",
    "unlock.c2_pilot": "PILOTO: GENERAL DAN",
    "unlock.c2_desc": "GB-06 Acorazado estratégico de la Coalición Terrestre. Blindaje hiperdenso multicapa y cañón de colapso gravitatorio de materia oscura.",
    "unlock.c3_tag": "DESBLOQUEO: OPERACIONES SECRETAS",
    "unlock.c3_pilot": "PILOTO: AGENTE GORDALF",
    "unlock.c3_desc": "SO-05 Caza sagrado de sigilo y reconocimiento táctico con blindaje compuesto, núcleo solar de fisión celestial y guerra electrónica.",

    "req.sub": "// PARÁMETROS TÉCNICOS",
    "req.title": "REQUISITOS DEL SISTEMA",
    "req.min_title": "ESPECIFICACIONES MÍNIMAS",
    "req.rec_title": "ESPECIFICACIONES RECOMENDADAS",
    "req.lbl_os": "Sistema Operativo:",
    "req.lbl_cpu": "Procesador:",
    "req.lbl_ram": "Memoria RAM:",
    "req.lbl_gpu": "Gráficos:",
    "req.lbl_hdd": "Almacenamiento:",
    "req.lbl_input": "Entrada:",
    "req.val_input": "Teclado, Ratón o Mando",
    "req.lbl_display": "Monitor:",

    "steps.title": "DESPLIEGUE EN 3 PASOS",
    "steps.s1_title": "Descarga el Instalador",
    "steps.s1_desc": "Obtén el ejecutable único ForcesOfHeaven_Setup.exe (466 MB) sin archivos adicionales.",
    "steps.s2_title": "Ejecuta la Instalación",
    "steps.s2_desc": "Haz doble clic sobre el archivo. El instalador arcade extraerá y preparará el juego con un solo clic.",
    "steps.s3_title": "¡Despega al Combate!",
    "steps.s3_desc": "Inicia el juego desde el instalador o mediante el acceso directo en tu escritorio. ¡Buena suerte, piloto!",

    "pilot.classified_regular": "🎯 TELEMETRÍA DE VUELO // ESCUADRÓN APEX COALICIÓN",
    "pilot.classified_secret": "🏆 TRANSMISIÓN CLASIFICADA // CAZA SECRETO INTERCEPTADO",
    "pilot.assigned_ship": "NAVE ASIGNADA:",
    "pilot.notice": "🎯 TELEMETRÍA DE VUELO EN TIEMPO REAL // ESCUADRÓN APEX",

    "lang.sub": "// SISTEMA DE COMUNICACIONES",
    "lang.title": "SELECCIONAR IDIOMA / SELECT LANGUAGE",
    "lang.desc": "Elige la frecuencia de transmisión operacional para la interfaz y expedientes tácticos.",
    "lang.es_name": "Español (Latinoamérica / España)",
    "lang.es_meta": "Mando Central de la Coalición Terrestre",
    "lang.en_name": "English (Global / International)",
    "lang.en_meta": "Global Allied Command & Orbit Defense",
    "lang.confirm": "CONFIRMAR // CONFIRM",

    "footer.copy": "© 2026 HotDogSxMachine. Todos los derechos reservados."
  },

  en: {
    "page.title": "Forces of Heaven: Air Assault — Official Landing // PC Download",
    "page.description": "Forces of Heaven: Air Assault. Next-generation 2.5D aerospace combat arcade shmup with volumetric relief, 3D banking, colossal bosses, and custom fighters. Download the official Windows installer.",
    "nav.home": "HOME",
    "nav.systems": "SYSTEMS",
    "nav.gallery": "GALLERY",
    "nav.hangar": "HANGAR",
    "nav.requirements": "SPECS",
    "nav.download": "DOWNLOAD",
    "nav.download_full": "DOWNLOAD INSTALLER",
    "nav.sfx_on": "SFX: ON",
    "nav.sfx_off": "SFX: OFF",
    "nav.mobile_lang": "LANGUAGE: ENGLISH (EN)",

    "hero.tag": "OPERATIONAL DEPLOYMENT SYSTEM // VERSION 1.0.0",
    "hero.tagline": "The next-generation 2.5D aerospace combat arcade shmup. Pilot assault fighters with vector flight physics, obliterate imperial fleets, and confront colossal Leviathan-class flying fortresses in a synthwave-fueled action spectacle.",

    "dl.single_file": "📦 SINGLE FILE",
    "dl.ready": "● DEPLOYMENT READY",
    "dl.btn_main": "DOWNLOAD INSTALLER (MEGA)",
    "dl.btn_sub": "ALL-IN-ONE EXECUTABLE // IMMEDIATE DEPLOYMENT",
    "dl.aux_label": "MEGA LINK:",
    "dl.copy_btn": "COPY",
    "dl.copied": "COPIED!",
    "dl.qr_title": "📱 SCAN QR CODE",
    "dl.qr_sub": "Access download or save the direct link on your mobile device",
    "dl.trust_1": "🛡️ 100% Free of Viruses & Adware",
    "dl.trust_2": "⚡ No External Extractors Required",
    "dl.trust_3": "🎮 Keyboard, Mouse & Gamepad Support",

    "nav.support": "SUPPORT",
    "support.badge": "// COMBAT RESUPPLY & DEV SUPPORT",
    "support.title": "CONTRIBUTE TO THE MISSION",
    "support.desc": "Forces of Heaven is a passionate independent project. If you enjoy the combat experience and want to support future updates, new fighters, and expansions, you can support the team directly via Ko-fi or Cafecito:",
    "support.kofi_region": "INTERNATIONAL // USD",
    "support.kofi_types": "PayPal • Credit Cards • Global Currency",
    "support.cafecito_region": "ARGENTINA // ARS",
    "support.cafecito_types": "Mercado Pago • Debit Cards • Argentine Pesos",
    "support.thanks": "⚡ Your direct support funds servers, engine enhancements, and continuous content!",

    "feat.sub": "// COMBAT SPECIFICATIONS",
    "feat.title": "2.5D ARCADE TECHNOLOGY",
    "feat.f1_title": "3D Volumetric Banking",
    "feat.f1_desc": "Pure 2D high-precision physics and collisions synchronized with 3D volumetric projection, cockpit relief, and dynamic banking during evasive maneuvers.",
    "feat.f2_title": "Segmented Component Damage",
    "feat.f2_desc": "Every component matters: wings, armor, cockpit, and thrusters degrade and suffer individual critical failures during intense dogfights.",
    "feat.f3_title": "Leviathan-Class Bosses",
    "feat.f3_desc": "Face colossal floating fortresses with multi-phase battles, nightmare bullet patterns, and segmented plasma shielding.",
    "feat.f4_title": "Vector Arsenal & Ultimates",
    "feat.f4_desc": "Fire rotary vulcan cannons, lock-on missiles, and unleash devastating ultimate attacks like Chrono Surge, Mirage Bloom, and Titan Barrage.",
    "feat.f5_title": "Flight Academy & Minigames",
    "feat.f5_desc": "Train alongside Cadet Marilu in retro arcade simulators (Galaga, Brick Breaker, and Bubble Shooter) to unlock tactical upgrades and munitions.",
    "feat.f6_title": "Synthesized Soundtrack",
    "feat.f6_desc": "Retro-futuristic synthwave soundtrack featuring analog synths, high-octane rhythms, and studio-mastered arcade audio effects.",

    "gallery.sub": "// IN-GAME VISUAL LOGS",
    "gallery.title": "SCREENSHOTS & TACTICAL DOSSIERS",
    "gallery.desc": "Click or tap any screenshot to inspect it in full high resolution.",
    "gallery.zoom": "🔍 EXPAND",
    "gallery.index_prefix": "DOSSIER",
    "gallery.index_of": "OF",

    "aircraft.sub": "// OPERATIONAL SQUADRON",
    "aircraft.title": "AVAILABLE FIGHTER FLEET",
    "aircraft.desc": "Each fighter aircraft features distinct aerospace physics and agility tailored for specific combat doctrines. Tap any fighter to view its tactical dossier.",
    "aircraft.inspect_hint": "🔍 VIEW DOSSIER",

    "ac.valkyrie_type": "VF-02 // LIGHT INTERCEPTOR",
    "ac.valkyrie_desc": "Ultra-nimble with extreme top speed. Ideal for weaving through dense bullet curtains and flanking enemy waves.",
    "ac.corsair_type": "CR-03 // MULTIROLE HYBRID FIGHTER",
    "ac.corsair_desc": "The definitive tactical balance between fire rate, structural endurance, and acceleration.",
    "ac.shadowcase_type": "APX-01 // HEAVY DREADNOUGHT",
    "ac.shadowcase_desc": "Reinforced titanium hull and heavy kinetic cannons. High impact resistance with measured yet devastating salvos.",
    "ac.phantom_type": "PH-04 // ASSAULT GUNSHIP",
    "ac.phantom_desc": "Devastating plasma battery and armor-piercing munitions engineered to demolish super-heavy hulls.",
    "ac.stat_speed": "SPEED:",
    "ac.stat_power": "FIREPOWER:",
    "ac.stat_armor": "ARMOR:",

    "unlock.badge": "🔒 CLASSIFIED // DEPLOYMENT PROTOCOL",
    "unlock.title": "+3 UNLOCKABLE ELITE FIGHTERS",
    "unlock.desc": "Complete campaign objectives, train in the flight academy, and clear classified sorties to unlock the Coalition's most legendary fighters.",
    "unlock.c1_tag": "UNLOCK: FLIGHT ACADEMY",
    "unlock.c1_pilot": "PILOT: CADET MARILU",
    "unlock.c1_desc": "Classic biplane airframe boosted by vector hyper-maneuverability. Turns on impossible angles and navigates dense firestorms with ease.",
    "unlock.c2_tag": "UNLOCK: SUPREME CAMPAIGN",
    "unlock.c2_pilot": "PILOT: GENERAL DAN",
    "unlock.c2_desc": "GB-06 Earth Coalition Strategic Dreadnought. Multi-layered hyperdense armor and dark matter gravitational collapse cannon.",
    "unlock.c3_tag": "UNLOCK: BLACK OPERATIONS",
    "unlock.c3_pilot": "PILOT: AGENT GORDALF",
    "unlock.c3_desc": "SO-05 Sacred stealth and reconnaissance fighter featuring composite shielding, celestial solar core, and electronic warfare.",

    "req.sub": "// TECHNICAL PARAMETERS",
    "req.title": "SYSTEM REQUIREMENTS",
    "req.min_title": "MINIMUM SPECIFICATIONS",
    "req.rec_title": "RECOMMENDED SPECIFICATIONS",
    "req.lbl_os": "Operating System:",
    "req.lbl_cpu": "Processor:",
    "req.lbl_ram": "RAM Memory:",
    "req.lbl_gpu": "Graphics:",
    "req.lbl_hdd": "Storage:",
    "req.lbl_input": "Input:",
    "req.val_input": "Keyboard, Mouse or Gamepad",
    "req.lbl_display": "Display:",

    "steps.title": "3-STEP DEPLOYMENT",
    "steps.s1_title": "Download Installer",
    "steps.s1_desc": "Obtain the standalone ForcesOfHeaven_Setup.exe (466 MB) with zero external downloads.",
    "steps.s2_title": "Run Installation",
    "steps.s2_desc": "Double-click the file. The arcade installer unpacks and preps the game in a single click.",
    "steps.s3_title": "Scramble to Combat!",
    "steps.s3_desc": "Launch the game from the installer or your desktop shortcut. Good luck, pilot!",

    "pilot.classified_regular": "🎯 FLIGHT TELEMETRY // COALITION APEX SQUADRON",
    "pilot.classified_secret": "🏆 CLASSIFIED TRANSMISSION // SECRET FIGHTER INTERCEPTED",
    "pilot.assigned_ship": "ASSIGNED SHIP:",
    "pilot.notice": "🎯 REAL-TIME FLIGHT TELEMETRY // APEX SQUADRON",

    "lang.sub": "// COMMUNICATIONS SUITE",
    "lang.title": "SELECT LANGUAGE // SELECCIONAR IDIOMA",
    "lang.desc": "Select your operational transmission language for interface and tactical telemetry.",
    "lang.es_name": "Español (Latinoamérica / España)",
    "lang.es_meta": "Coalition Central Command & Earth Defense",
    "lang.en_name": "English (Global / International)",
    "lang.en_meta": "Global Allied Command & Orbit Defense",
    "lang.confirm": "CONFIRM // CONFIRMAR",

    "footer.copy": "© 2026 HotDogSxMachine. All rights reserved."
  }
};

// ==========================================================================
// BASE DE DATOS CANÓNICA DE PILOTOS Y AERONAVES (BILINGÜE)
// ==========================================================================
const PILOTS_DATABASE = {
  tonio: {
    name: "TONIO",
    callsign: {
      es: "AS INTERCEPTOR // VANGUARDIA",
      en: "INTERCEPTOR ACE // VANGUARD"
    },
    ship: {
      es: "VALKYRIE INTERCEPTOR (VF-02)",
      en: "VALKYRIE INTERCEPTOR (VF-02)"
    },
    role: {
      es: "TENIENTE PRIMERO",
      en: "FIRST LIEUTENANT"
    },
    portrait: "assets/pilots/tonio.png",
    quote: {
      es: '"Mantengan los motores limpios de arena; la velocidad y el ángulo de ataque deciden la victoria."',
      en: '"Keep the engines clean of sand; speed and angle of attack determine victory."'
    },
    specialty: {
      es: "Maniobras de alta G, dogfight supersónico a velocidad Mach 4 y láser continuo.",
      en: "High-G maneuvers, Mach 4 supersonic dogfighting, and continuous beam laser."
    },
    stats: [
      { key: "reflexes", val: 98 },
      { key: "accuracy", val: 90 },
      { key: "gforce", val: 92 },
      { key: "vectorspeed", val: 99 }
    ]
  },
  chadmanzio: {
    name: "CHADMANZIO",
    callsign: {
      es: "ATACANTE TÁCTICO // DISCIPLINA",
      en: "TACTICAL STRIKER // DISCIPLINE"
    },
    ship: {
      es: "CORSAIR STRIKER (CR-03)",
      en: "CORSAIR STRIKER (CR-03)"
    },
    role: {
      es: "CAPITÁN DE ESCUADRA",
      en: "SQUADRON CAPTAIN"
    },
    portrait: "assets/pilots/chadmanzio.png",
    quote: {
      es: '"Disciplina balística innegociable. No dispares hasta tener el vector balístico asegurado al 100%."',
      en: '"Non-negotiable ballistic discipline. Hold fire until your firing vector is 100% locked."'
    },
    specialty: {
      es: "Disparo doble de plasma en hélice, soporte lateral y equilibrio táctico.",
      en: "Dual helical plasma fire, lateral support, and tactical equilibrium."
    },
    stats: [
      { key: "reflexes", val: 88 },
      { key: "accuracy", val: 94 },
      { key: "gforce", val: 92 },
      { key: "tacticalbalance", val: 95 }
    ]
  },
  sick: {
    name: "MAYOR SICK",
    callsign: {
      es: "TITÁN PESADO // KRONOS-IV",
      en: "HEAVY TITAN // KRONOS-IV"
    },
    ship: {
      es: "SHADOWCASE NEWTYPE (APX-01)",
      en: "SHADOWCASE NEWTYPE (APX-01)"
    },
    role: {
      es: "MAYOR CONDECORADO",
      en: "DECORATED MAJOR"
    },
    portrait: "assets/pilots/sick.png",
    quote: {
      es: '"La elegancia en combate no se negocia. Un giro limpio, una salva certera y volvemos al Hangar con estilo."',
      en: '"Combat elegance is non-negotiable. A clean banking turn, a precise salvo, and we return to Hangar in style."'
    },
    specialty: {
      es: "Cañones cinéticos pesados de tungsteno, blindaje de titanio y salvas destructivas.",
      en: "Heavy tungsten kinetic cannons, titanium armor plating, and devastating salvos."
    },
    stats: [
      { key: "reflexes", val: 88 },
      { key: "accuracy", val: 96 },
      { key: "gforce", val: 94 },
      { key: "titaniumarmor", val: 98 }
    ]
  },
  piro: {
    name: "PIRO",
    callsign: {
      es: "ARTILLERO DEL VACÍO // ENERGÍA PURA",
      en: "VOID GUNNER // PURE ENERGY"
    },
    ship: {
      es: "PHANTOM GUNSHIP (PH-04)",
      en: "PHANTOM GUNSHIP (PH-04)"
    },
    role: {
      es: "OFICIAL DE ASALTO PESADO",
      en: "HEAVY ASSAULT OFFICER"
    },
    portrait: "assets/pilots/piro.png",
    quote: {
      es: '"¡Woooo! ¡Mis cañones de plasma están que hierven! ¡Puro fuego y sobrecarga gravitacional!"',
      en: '"Woooo! My plasma batteries are boiling hot! Pure fire and gravitational overload!"'
    },
    specialty: {
      es: "Triple haz de antimateria con púas de plasma y demolición de blindaje.",
      en: "Triple antimatter beam with plasma spikes and super-armor demolition."
    },
    stats: [
      { key: "reflexes", val: 90 },
      { key: "accuracy", val: 86 },
      { key: "gforce", val: 89 },
      { key: "plasmaenergy", val: 97 }
    ]
  },
  marilu: {
    name: "CADETE MARILU",
    callsign: {
      es: "VANGUARDIA AÉREA // REPORTE",
      en: "AERIAL VANGUARD // DISPATCH"
    },
    ship: {
      es: "MR-07 AERO MIRAGE",
      en: "MR-07 AERO MIRAGE"
    },
    role: {
      es: "CADETE DE AVIACIÓN",
      en: "AVIATION CADET"
    },
    portrait: "assets/pilots/marilu.png",
    quote: {
      es: '"¡Aquí Cadete Marilu transmitiendo en directo desde el sector de combate! ¡La Coalición resiste con orgullo!"',
      en: '"Cadet Marilu broadcasting live from the battle sector! The Coalition holds the line with pride!"'
    },
    specialty: {
      es: "Abanico de sierras giratorias, hiper-maniobrabilidad vectorial y moral del escuadrón.",
      en: "Rotary saw fan fire, vector hyper-agility, and squadron combat morale."
    },
    stats: [
      { key: "reflexes", val: 94 },
      { key: "accuracy", val: 85 },
      { key: "gforce", val: 86 },
      { key: "maneuverability", val: 99 }
    ]
  },
  dan: {
    name: "GENERAL DAN",
    callsign: {
      es: "GENERAL DE ACORAZADO // MANDO SUPREMO",
      en: "DREADNOUGHT GENERAL // SUPREME COMMAND"
    },
    ship: {
      es: "GIGA B200 (GB-06)",
      en: "GIGA B200 (GB-06)"
    },
    role: {
      es: "GENERAL DE LA COALICIÓN",
      en: "COALITION GENERAL"
    },
    portrait: "assets/pilots/dan.png",
    quote: {
      es: '"En las Fuerzas del Cielo no hay lugar para la improvisación. La disciplina vence a cualquier imperio... y mi perro Chicho me espera en casa."',
      en: '"In the Forces of Heaven there is zero room for improvisation. Discipline conquers empires... and my dog Chicho awaits me at home."'
    },
    specialty: {
      es: "Mando estratégico global, blindaje hiperdenso y cañón de colapso gravitatorio.",
      en: "Global strategic command, hyperdense plating, and gravitational collapse cannon."
    },
    stats: [
      { key: "reflexes", val: 89 },
      { key: "accuracy", val: 98 },
      { key: "gforce", val: 95 },
      { key: "strategiccommand", val: 100 }
    ]
  },
  gordalf: {
    name: "AGENTE GORDALF",
    callsign: {
      es: "SABIO ENCUBIERTO // BLACK OPS",
      en: "COVERT SAGE // BLACK OPS"
    },
    ship: {
      es: "SOLARIS SERAPH (SO-05)",
      en: "SOLARIS SERAPH (SO-05)"
    },
    role: {
      es: "OPERACIONES ESPECIALES",
      en: "SPECIAL OPERATIONS"
    },
    portrait: "assets/pilots/gordalf.png",
    quote: {
      es: '"Transmisión cifrada desde las líneas enemigas. Sus escudos orbitales están saboteados... ataquen ahora."',
      en: '"Encrypted dispatch from behind enemy lines. Their orbital shields are compromised... strike now."'
    },
    specialty: {
      es: "Orbe solar de alta densidad, sigilo óptico activo y guerra electrónica.",
      en: "High-density solar orb, active optical stealth, and electronic warfare."
    },
    stats: [
      { key: "reflexes", val: 96 },
      { key: "accuracy", val: 95 },
      { key: "gforce", val: 91 },
      { key: "electronicwarfare", val: 99 }
    ]
  }
};

const STAT_LABELS = {
  es: {
    reflexes: "REFLEJOS",
    accuracy: "PUNTERÍA",
    gforce: "RESISTENCIA FUERZA G",
    vectorspeed: "VELOCIDAD VECTORIAL",
    tacticalbalance: "EQUILIBRIO TÁCTICO",
    titaniumarmor: "BLINDAJE DE TITANIO",
    plasmaenergy: "ENERGÍA DE PLASMA",
    maneuverability: "MANIOBRABILIDAD",
    strategiccommand: "MANDO ESTRATÉGICO",
    electronicwarfare: "GUERRA ELECTRÓNICA"
  },
  en: {
    reflexes: "REFLEXES",
    accuracy: "ACCURACY",
    gforce: "G-FORCE TOLERANCE",
    vectorspeed: "VECTOR SPEED",
    tacticalbalance: "TACTICAL BALANCE",
    titaniumarmor: "TITANIUM ARMOR",
    plasmaenergy: "PLASMA ENERGY",
    maneuverability: "MANEUVERABILITY",
    strategiccommand: "STRATEGIC COMMAND",
    electronicwarfare: "ELECTRONIC WARFARE"
  }
};

const AIRCRAFT_CONFIG = {
  valkyrie: {
    name: "Valkyrie Interceptor",
    pilotKey: "tonio",
    sprite: "assets/aircraft/valkyrie.png",
    isSecret: false,
    speedFactor: 1.0
  },
  corsair: {
    name: "Corsair Striker",
    pilotKey: "chadmanzio",
    sprite: "assets/aircraft/corsair.png",
    isSecret: false,
    speedFactor: 0.95
  },
  shadowcase: {
    name: "Shadowcase Newtype",
    pilotKey: "sick",
    sprite: "assets/aircraft/shadowcase.png",
    isSecret: false,
    speedFactor: 0.9
  },
  phantom: {
    name: "Phantom Gunship",
    pilotKey: "piro",
    sprite: "assets/aircraft/phantom.png",
    isSecret: false,
    speedFactor: 1.05
  },
  marilu_biplane: {
    name: "MR-07 Aero Mirage",
    pilotKey: "marilu",
    sprite: "assets/aircraft/marilu_biplane.png",
    isSecret: true,
    speedFactor: 1.25
  },
  giga_b2000: {
    name: "Giga B200",
    pilotKey: "dan",
    sprite: "assets/aircraft/giga_b2000.png",
    isSecret: true,
    speedFactor: 1.15
  },
  gordalf: {
    name: "Solaris Seraph",
    pilotKey: "gordalf",
    sprite: "assets/aircraft/gordalf.png",
    isSecret: true,
    speedFactor: 1.3
  }
};

// ==========================================================================
// REGISTROS DE LA GALERÍA CON LOCALIZACIÓN
// ==========================================================================
const GALLERY_DATA = [
  {
    full: "assets/screenshots/01_hangar_selection.png",
    title: {
      es: "Hangar de Cazas // Bahía de Inspección Táctica",
      en: "Fighter Hangar // Tactical Inspection Bay"
    },
    desc: {
      es: "Revisión pre-vuelo de estadísticas, blindaje y equipamiento de armamento secundario antes del despegue.",
      en: "Pre-flight inspection of stats, armor plating, and secondary armament calibration before launch."
    },
    sub: {
      es: "Inspección Táctica 3D",
      en: "3D Tactical Inspection"
    },
    shortTitle: {
      es: "Hangar de Cazas",
      en: "Fighter Hangar"
    }
  },
  {
    full: "assets/screenshots/02_combat_hud.png",
    title: {
      es: "Combate Aéreo Vectorial // HUD Táctico Militar",
      en: "Vector Aerial Combat // Military Tactical HUD"
    },
    desc: {
      es: "Espectrograma de amenazas, indicador de acelerómetro, barra de integridad segmentada y calibración balística.",
      en: "Threat spectrogram, accelerometer indicator, segmented integrity gauge, and ballistic calibration."
    },
    sub: {
      es: "Combate en Órbita",
      en: "Orbital Dogfight"
    },
    shortTitle: {
      es: "HUD Táctico Militar",
      en: "Military Tactical HUD"
    }
  },
  {
    full: "assets/screenshots/03_boss_colossus.png",
    title: {
      es: "Duelo Titánico // Boss Colossus Clase Leviatán",
      en: "Titanic Duel // Boss Colossus Leviathan-Class"
    },
    desc: {
      es: "Enfrentamiento aéreo de alta intensidad con patrones de metralla pesada y núcleos de energía blindados.",
      en: "High-intensity aerial clash featuring heavy shrapnel bullet curtains and armored energy cores."
    },
    sub: {
      es: "Fortaleza Volante Clase Leviatán",
      en: "Leviathan-Class Flying Fortress"
    },
    shortTitle: {
      es: "Boss Colossus",
      en: "Boss Colossus"
    }
  },
  {
    full: "assets/screenshots/05_marilu_academy.png",
    title: {
      es: "Academia de Combate // Sesión con Cadete Marilu",
      en: "Combat Academy // Session with Cadet Marilu"
    },
    desc: {
      es: "Sistema de rangos de piloto, recompensas operacionales y evaluaciones de desempeño balístico.",
      en: "Pilot ranking progression, operational bounties, and ballistic performance evaluations."
    },
    sub: {
      es: "Evaluación y Rango Operacional",
      en: "Operational Rank & Assessment"
    },
    shortTitle: {
      es: "Academia de Vuelo",
      en: "Flight Academy"
    }
  },
  {
    full: "assets/screenshots/06_marilu_minigame.png",
    title: {
      es: "Simulador Arcade Retro // Entrenamiento de Reflejos",
      en: "Retro Arcade Simulator // Reflex Calibration"
    },
    desc: {
      es: "Minijuegos arcade clásicos integrados para entrenar agilidad y desbloquear créditos de hangares.",
      en: "Integrated retro arcade minigames to hone reflexes and unlock valuable hangar credits."
    },
    sub: {
      es: "Simulador de Reflejos y Puntería",
      en: "Reflex & Aim Simulator"
    },
    shortTitle: {
      es: "Entrenamiento Retro",
      en: "Retro Training"
    }
  },
  {
    full: "assets/screenshots/07_dreadnought_blueprint.jpg",
    title: {
      es: "Plano Holográfico // Dreadnought Abyssal Sovereign",
      en: "Holographic Blueprint // Dreadnought Abyssal Sovereign"
    },
    desc: {
      es: "Esquema estructural del buque insignia del Imperio: blindaje cerámico y doble torreta de plasma orbital.",
      en: "Structural schematic of the Empire's flagship: composite ceramic hull and dual orbital plasma turrets."
    },
    sub: {
      es: "Buque Insignia Imperial",
      en: "Imperial Flagship"
    },
    shortTitle: {
      es: "Plano Dreadnought",
      en: "Dreadnought Blueprint"
    }
  },
  {
    full: "assets/screenshots/08_nebula_dogfight.jpg",
    title: {
      es: "Sector Coronal // Dogfight en la Nebulosa",
      en: "Coronal Sector // Nebula Dogfight"
    },
    desc: {
      es: "El artillero Piro surcando nubes ionizadas en intercepción de escuadrones de cazas espaciales.",
      en: "Gunner Piro streaking across ionized nebulas intercepting waves of enemy space fighters."
    },
    sub: {
      es: "Phantom Gunship en Acción",
      en: "Phantom Gunship in Action"
    },
    shortTitle: {
      es: "Dogfight Coronal",
      en: "Coronal Dogfight"
    }
  },
  {
    full: "assets/screenshots/09_apex_squadron.jpg",
    title: {
      es: "Escuadrón Apex // Briefing en Base de Selva",
      en: "Apex Squadron // Jungle Outpost Briefing"
    },
    desc: {
      es: "Sick, Tonio y Chadmanzio preparando la estrategia de incursión nocturna en el sector rebelde.",
      en: "Sick, Tonio, and Chadmanzio finalizing night sortie tactics over the contested rebel sector."
    },
    sub: {
      es: "Briefing y Moral de Combate",
      en: "Briefing & Combat Morale"
    },
    shortTitle: {
      es: "Escuadrón Apex",
      en: "Apex Squadron"
    }
  },
  {
    full: "assets/screenshots/10_marilu_biplane.jpg",
    title: {
      es: "Vanguardia Aérea // Cadete Marilu en Formación",
      en: "Aerial Vanguard // Cadet Marilu in Formation"
    },
    desc: {
      es: "Rindiendo honores en pista antes del despegue para la defensa metropolitana de la Coalición.",
      en: "Rendering runway salutes before scramble launch for the Coalition metropolitan defense."
    },
    sub: {
      es: "Defensa Metropolitana",
      en: "Metropolitan Defense"
    },
    shortTitle: {
      es: "Vanguardia Aérea",
      en: "Aerial Vanguard"
    }
  }
];

// Estado global de idioma
let currentLang = "es";
let currentOpenPilot = null;
let currentLightboxIndex = 0;

// ==========================================================================
// SISTEMA DE INTERNACIONALIZACIÓN (i18n)
// ==========================================================================
function setLanguage(lang, playSfx = true) {
  if (lang !== "es" && lang !== "en") lang = "es";
  currentLang = lang;
  localStorage.setItem("foh_lang", currentLang);

  document.documentElement.lang = currentLang;

  // Actualizar metadatos del documento
  if (TRANSLATIONS[currentLang]["page.title"]) {
    document.title = TRANSLATIONS[currentLang]["page.title"];
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && TRANSLATIONS[currentLang]["page.description"]) {
    metaDesc.content = TRANSLATIONS[currentLang]["page.description"];
  }

  // Actualizar todos los elementos con atributo data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      el.textContent = TRANSLATIONS[currentLang][key];
    }
  });

  // Actualizar badges de la barra de navegación
  const currentLangLabel = document.getElementById("currentLangLabel");
  if (currentLangLabel) {
    currentLangLabel.textContent = currentLang.toUpperCase();
  }

  const mobileLangLabel = document.getElementById("mobileLangLabel");
  if (mobileLangLabel) {
    mobileLangLabel.textContent = currentLang === "es" ? "IDIOMA: ESPAÑOL (ES)" : "LANGUAGE: ENGLISH (EN)";
  }

  // Actualizar tarjetas de la galería
  GALLERY_DATA.forEach((item, idx) => {
    const titleEl = document.getElementById(`galTitle${idx}`);
    const subEl = document.getElementById(`galSub${idx}`);
    if (titleEl && item.shortTitle) {
      titleEl.textContent = item.shortTitle[currentLang] || item.shortTitle.es;
    }
    if (subEl && item.sub) {
      subEl.textContent = item.sub[currentLang] || item.sub.es;
    }
  });

  // Actualizar estado activo en el modal de idioma
  const optEs = document.getElementById("langOptEs");
  const optEn = document.getElementById("langOptEn");
  if (optEs && optEn) {
    optEs.classList.toggle("active", currentLang === "es");
    optEn.classList.toggle("active", currentLang === "en");
  }

  // Si el modal del piloto está activo, refrescarlo en el nuevo idioma
  if (currentOpenPilot) {
    renderPilotModal(currentOpenPilot.pilotKey, currentOpenPilot.isSecret);
  }

  // Si la galería está activa, refrescar el pie de foto
  const lightboxModal = document.getElementById("lightboxModal");
  if (lightboxModal && lightboxModal.classList.contains("active")) {
    renderLightboxCaption(currentLightboxIndex);
  }

  if (playSfx && audio) {
    audio.playClick();
  }
}

function initLanguage() {
  const saved = localStorage.getItem("foh_lang");
  if (saved && (saved === "es" || saved === "en")) {
    setLanguage(saved, false);
  } else {
    // Detección inicial suave
    const browserLang = (navigator.language || navigator.userLanguage || "es").toLowerCase();
    if (browserLang.startsWith("en")) {
      setLanguage("en", false);
    } else {
      setLanguage("es", false);
    }
  }
}

// ==========================================================================
// SINTETIZADOR DE EFECTOS DE SONIDO TÁCTICOS (WEB AUDIO API)
// ==========================================================================
class TacticalAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initStorage();
  }

  initStorage() {
    const saved = localStorage.getItem("foh_sfx_enabled");
    if (saved !== null) {
      this.enabled = saved === "true";
    }
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playBeep(freq = 880, duration = 0.08, type = "sine", gainVal = 0.05) {
    if (!this.enabled) return;
    try {
      this.ensureContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.7, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Fallback silencioso
    }
  }

  playClick() {
    this.playBeep(1200, 0.06, "triangle", 0.06);
  }

  playOpenModal() {
    this.playBeep(640, 0.12, "sine", 0.08);
  }

  playCloseModal() {
    this.playBeep(420, 0.1, "sine", 0.06);
  }

  playIntercept() {
    if (!this.enabled) return;
    this.playBeep(880, 0.07, "triangle", 0.08);
    setTimeout(() => {
      this.playBeep(1320, 0.09, "sine", 0.1);
    }, 60);
  }

  playSecretAlert() {
    if (!this.enabled) return;
    this.playBeep(587, 0.07, "sawtooth", 0.06);
    setTimeout(() => this.playBeep(880, 0.07, "sine", 0.08), 65);
    setTimeout(() => this.playBeep(1174, 0.14, "sine", 0.1), 130);
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("foh_sfx_enabled", this.enabled);
    if (this.enabled) {
      this.playBeep(980, 0.1, "sine", 0.08);
    }
    return this.enabled;
  }
}

const audio = new TacticalAudio();

// ==========================================================================
// MOTOR DE VUELO EN FONDO (SIMULACIÓN TÁCTICA & TIMER SECRETO)
// ==========================================================================
class FlightSimulationEngine {
  constructor() {
    this.container = document.getElementById("flightLayer");
    this.regularPool = ["valkyrie", "corsair", "shadowcase", "phantom"];
    this.startTime = Date.now();
    this.timerInterval = null;
    this.spawnTimeout = null;
    this.isPlaneInAir = false;
    this.lastSecretCycle = {
      marilu: -1,
      dan: -1,
      gordalf: -1
    };
  }

  init() {
    if (!this.container) return;

    // Primer despegue regular tras 2.5s
    setTimeout(() => {
      this.spawnRandomRegular();
    }, 2500);

    // Bucle continuo para aeronaves regulares
    this.scheduleNextRegular();

    // Monitor de tiempo exacto para las 3 aeronaves secretas (Marilu, Dan, Gordalf)
    this.startSecretTimers();

    // Detección de clics por delegación pasiva
    this.initClickDetection();
  }

  scheduleNextRegular() {
    const delay = Math.random() * 6000 + 12000; // 12 a 18 segundos
    this.spawnTimeout = setTimeout(() => {
      if (!this.isPlaneInAir) {
        this.spawnRandomRegular();
      }
      this.scheduleNextRegular();
    }, delay);
  }

  spawnRandomRegular() {
    const randomKey = this.regularPool[Math.floor(Math.random() * this.regularPool.length)];
    this.spawnAircraft(randomKey);
  }

  spawnAircraft(aircraftKey) {
    const cfg = AIRCRAFT_CONFIG[aircraftKey];
    if (!cfg || !this.container) return;

    this.isPlaneInAir = true;

    const planeEl = document.createElement("div");
    planeEl.className = "flying-aircraft" + (cfg.isSecret ? " secret" : "");
    planeEl.setAttribute("data-pilot", cfg.pilotKey);
    planeEl.setAttribute("data-aircraft", aircraftKey);

    const img = document.createElement("img");
    img.src = cfg.sprite;
    img.alt = cfg.name;

    const badge = document.createElement("span");
    badge.className = "lockon-badge";
    badge.textContent = cfg.isSecret ? "⚠️ CLASIFICADO" : "🎯 LOCK-ON";

    const thruster = document.createElement("div");
    thruster.className = "thruster-trail";

    planeEl.appendChild(img);
    planeEl.appendChild(badge);
    planeEl.appendChild(thruster);

    // Calcular trayectoria
    const traj = this.calculateTrajectory();
    
    // Duración calculada según distancia y viewport
    const baseDuration = (traj.distance / (window.innerWidth < 768 ? 180 : 250)) * 1000;
    const duration = Math.max(5500, baseDuration / (cfg.speedFactor || 1.0));

    planeEl.style.left = "0px";
    planeEl.style.top = "0px";

    this.container.appendChild(planeEl);

    // Animación acelerada por hardware
    const anim = planeEl.animate([
      { transform: `translate3d(${traj.startX}px, ${traj.startY}px, 0) rotate(${traj.angleDeg}deg)` },
      { transform: `translate3d(${traj.endX}px, ${traj.endY}px, 0) rotate(${traj.angleDeg}deg)` }
    ], {
      duration: duration,
      easing: "linear"
    });

    anim.onfinish = () => {
      planeEl.remove();
      this.isPlaneInAir = false;
    };

    // Evento de clic directo sobre la aeronave voladora
    planeEl.addEventListener("click", (e) => {
      e.stopPropagation();
      this.handleAircraftClick(cfg);
    });
  }

  calculateTrajectory() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pad = 120;

    const mode = Math.floor(Math.random() * 8);
    let startX = 0, startY = 0, endX = 0, endY = 0;

    switch (mode) {
      case 0:
        startX = -pad;
        startY = Math.random() * (vh - 160) + 80;
        endX = vw + pad;
        endY = startY + (Math.random() * 80 - 40);
        break;

      case 1:
        startX = vw + pad;
        startY = Math.random() * (vh - 160) + 80;
        endX = -pad;
        endY = startY + (Math.random() * 80 - 40);
        break;

      case 2:
        startX = Math.random() * (vw - 160) + 80;
        startY = -pad;
        endX = startX + (Math.random() * 80 - 40);
        endY = vh + pad;
        break;

      case 3:
        startX = Math.random() * (vw - 160) + 80;
        startY = vh + pad;
        endX = startX + (Math.random() * 80 - 40);
        endY = -pad;
        break;

      case 4:
        startX = -pad;
        startY = Math.random() * (vh * 0.4);
        endX = vw + pad;
        endY = vh * 0.6 + Math.random() * (vh * 0.4) + pad;
        break;

      case 5:
        startX = -pad;
        startY = vh * 0.6 + Math.random() * (vh * 0.4);
        endX = vw + pad;
        endY = Math.random() * (vh * 0.3) - pad;
        break;

      case 6:
        startX = vw + pad;
        startY = Math.random() * (vh * 0.4);
        endX = -pad;
        endY = vh * 0.6 + Math.random() * (vh * 0.4) + pad;
        break;

      case 7:
      default:
        startX = vw + pad;
        startY = vh * 0.6 + Math.random() * (vh * 0.4);
        endX = -pad;
        endY = Math.random() * (vh * 0.3) - pad;
        break;
    }

    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.hypot(dx, dy);
    const angleDeg = (Math.atan2(dy, dx) * 180 / Math.PI) + 90;

    return { startX, startY, endX, endY, distance, angleDeg };
  }

  startSecretTimers() {
    this.timerInterval = setInterval(() => {
      const elapsedSeconds = (Date.now() - this.startTime) / 1000;
      const currentCycle = Math.floor(elapsedSeconds / 600);
      const secondInCycle = elapsedSeconds % 600;

      // 1. Cadete Marilu: Minuto 8 (480s)
      if (secondInCycle >= 480 && secondInCycle < 484) {
        if (this.lastSecretCycle.marilu !== currentCycle) {
          this.lastSecretCycle.marilu = currentCycle;
          this.spawnAircraft("marilu_biplane");
        }
      }

      // 2. General Dan: Minuto 9 (540s)
      if (secondInCycle >= 540 && secondInCycle < 544) {
        if (this.lastSecretCycle.dan !== currentCycle) {
          this.lastSecretCycle.dan = currentCycle;
          this.spawnAircraft("giga_b2000");
        }
      }

      // 3. Agente Gordalf: Minuto 10 (600s)
      if ((secondInCycle >= 596 || secondInCycle < 4) && elapsedSeconds >= 590) {
        if (this.lastSecretCycle.gordalf !== currentCycle) {
          this.lastSecretCycle.gordalf = currentCycle;
          this.spawnAircraft("gordalf");
        }
      }
    }, 1000);
  }

  initClickDetection() {
    window.addEventListener("click", (e) => {
      if (e.target.closest("a, button, input, textarea, .lightbox-dialog, .pilot-modal-dialog, .lang-modal-dialog, .mobile-nav-content, code, .aircraft-card, .unlockable-card")) {
        return;
      }

      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      const hitPlane = elements.find(el => el.classList && el.classList.contains("flying-aircraft"));
      
      if (hitPlane) {
        const aircraftKey = hitPlane.getAttribute("data-aircraft");
        const cfg = AIRCRAFT_CONFIG[aircraftKey];
        if (cfg) {
          this.handleAircraftClick(cfg);
        }
      }
    });
  }

  handleAircraftClick(cfg) {
    if (cfg.isSecret) {
      audio.playSecretAlert();
      openPilotModal(cfg.pilotKey, true);
    } else {
      audio.playIntercept();
      openPilotModal(cfg.pilotKey, false);
    }
  }
}

let flightEngine = null;

// ==========================================================================
// MODAL TÁCTICO DE PILOTO (RENDERIZADO Y CONTROLES)
// ==========================================================================
function renderPilotModal(pilotKey, isSecret = false) {
  const pilot = PILOTS_DATABASE[pilotKey];
  if (!pilot) return;

  const pmPortrait = document.getElementById("pmPortrait");
  const pmRoleTag = document.getElementById("pmRoleTag");
  const pmClassifiedBadge = document.getElementById("pmClassifiedBadge");
  const pmPilotName = document.getElementById("pmPilotName");
  const pmCallsign = document.getElementById("pmCallsign");
  const pmShip = document.getElementById("pmShip");
  const pmQuote = document.getElementById("pmQuote");
  const pmStatsBlock = document.getElementById("pmStatsBlock");
  const pmNotice = document.getElementById("pmNotice");

  if (pmPortrait) pmPortrait.src = pilot.portrait;

  const roleText = typeof pilot.role === "object" ? (pilot.role[currentLang] || pilot.role.es) : pilot.role;
  if (pmRoleTag) pmRoleTag.textContent = roleText;

  if (pmClassifiedBadge) {
    if (isSecret) {
      pmClassifiedBadge.textContent = TRANSLATIONS[currentLang]["pilot.classified_secret"] || "🏆 TRANSMISIÓN CLASIFICADA // CAZA SECRETO INTERCEPTADO";
      pmClassifiedBadge.style.color = "var(--neon-gold)";
    } else {
      pmClassifiedBadge.textContent = TRANSLATIONS[currentLang]["pilot.classified_regular"] || "🎯 TELEMETRÍA DE VUELO // ESCUADRÓN APEX COALICIÓN";
      pmClassifiedBadge.style.color = "var(--neon-cyan)";
    }
  }

  if (pmPilotName) pmPilotName.textContent = pilot.name;

  const callsignText = typeof pilot.callsign === "object" ? (pilot.callsign[currentLang] || pilot.callsign.es) : pilot.callsign;
  if (pmCallsign) pmCallsign.textContent = callsignText;

  const shipText = typeof pilot.ship === "object" ? (pilot.ship[currentLang] || pilot.ship.es) : pilot.ship;
  const shipLabel = TRANSLATIONS[currentLang]["pilot.assigned_ship"] || "NAVE ASIGNADA:";
  if (pmShip) pmShip.textContent = `${shipLabel} ${shipText}`;

  const quoteText = typeof pilot.quote === "object" ? (pilot.quote[currentLang] || pilot.quote.es) : pilot.quote;
  if (pmQuote) pmQuote.textContent = quoteText;

  if (pmStatsBlock && pilot.stats) {
    const labels = STAT_LABELS[currentLang] || STAT_LABELS.es;
    pmStatsBlock.innerHTML = pilot.stats.map(s => {
      const lbl = labels[s.key] || s.label || s.key.toUpperCase();
      return `
        <div class="pm-stat-row">
          <span>${lbl}:</span>
          <div class="pm-stat-bar">
            <div class="pm-stat-fill" style="width: ${s.val}%;"></div>
          </div>
          <span style="min-width: 34px; text-align: right; color: var(--text-cyan);">${s.val}%</span>
        </div>
      `;
    }).join("");
  }

  if (pmNotice) {
    const noticeText = TRANSLATIONS[currentLang]["pilot.notice"] || "🎯 TELEMETRÍA DE VUELO EN TIEMPO REAL // ESCUADRÓN APEX";
    pmNotice.innerHTML = `<span>${noticeText}</span>`;
  }
}

function openPilotModal(pilotKey, isSecret = false) {
  currentOpenPilot = { pilotKey, isSecret };
  renderPilotModal(pilotKey, isSecret);

  const modal = document.getElementById("pilotModal");
  if (!modal) return;

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  audio.playOpenModal();
}

function closePilotModal() {
  const modal = document.getElementById("pilotModal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentOpenPilot = null;
  audio.playCloseModal();
}

function initPilotModalControls() {
  const modal = document.getElementById("pilotModal");
  const backdrop = document.getElementById("pilotModalBackdrop");
  const closeBtn = document.getElementById("btnClosePilotModal");

  if (closeBtn) closeBtn.addEventListener("click", closePilotModal);
  if (backdrop) backdrop.addEventListener("click", closePilotModal);

  window.addEventListener("keydown", (e) => {
    if (modal && modal.classList.contains("active") && e.key === "Escape") {
      closePilotModal();
    }
  });
}

// ==========================================================================
// CLIC EN TARJETAS DE AERONAVES (HANGAR & SECRETAS)
// ==========================================================================
function initAircraftCardClicks() {
  const cards = document.querySelectorAll(".aircraft-card, .unlockable-card");
  cards.forEach(card => {
    const trigger = () => {
      const planeKey = card.getAttribute("data-aircraft");
      const cfg = AIRCRAFT_CONFIG[planeKey];
      if (cfg) {
        if (cfg.isSecret) {
          audio.playSecretAlert();
        } else {
          audio.playClick();
        }
        openPilotModal(cfg.pilotKey, cfg.isSecret);
      }
    };

    card.addEventListener("click", trigger);

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger();
      }
    });
  });
}

// ==========================================================================
// MODAL DE SELECCIÓN DE IDIOMA
// ==========================================================================
function openLanguageModal() {
  const modal = document.getElementById("langModal");
  if (!modal) return;

  // Actualizar indicador visual
  const optEs = document.getElementById("langOptEs");
  const optEn = document.getElementById("langOptEn");
  if (optEs) optEs.classList.toggle("active", currentLang === "es");
  if (optEn) optEn.classList.toggle("active", currentLang === "en");

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  audio.playOpenModal();
}

function closeLanguageModal() {
  const modal = document.getElementById("langModal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  audio.playCloseModal();
}

function initLanguageModal() {
  const btnLangToggle = document.getElementById("btnLangToggle");
  const btnMobileLang = document.getElementById("btnMobileLang");
  const modal = document.getElementById("langModal");
  const backdrop = document.getElementById("langModalBackdrop");
  const closeBtn = document.getElementById("btnCloseLangModal");
  const confirmBtn = document.getElementById("btnConfirmLang");
  const optEs = document.getElementById("langOptEs");
  const optEn = document.getElementById("langOptEn");

  if (btnLangToggle) {
    btnLangToggle.addEventListener("click", () => {
      openLanguageModal();
    });
  }

  if (btnMobileLang) {
    btnMobileLang.addEventListener("click", () => {
      closeMobileDrawer();
      openLanguageModal();
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLanguageModal);
  if (backdrop) backdrop.addEventListener("click", closeLanguageModal);
  if (confirmBtn) confirmBtn.addEventListener("click", closeLanguageModal);

  if (optEs) {
    optEs.addEventListener("click", () => {
      setLanguage("es");
    });
  }

  if (optEn) {
    optEn.addEventListener("click", () => {
      setLanguage("en");
    });
  }

  window.addEventListener("keydown", (e) => {
    if (modal && modal.classList.contains("active") && e.key === "Escape") {
      closeLanguageModal();
    }
  });
}

// ==========================================================================
// NAVEGACIÓN MÓVIL (DRAWER Y BOTÓN HAMBURGUESA)
// ==========================================================================
function openMobileDrawer() {
  const drawer = document.getElementById("mobileNavDrawer");
  const btnToggle = document.getElementById("btnNavToggle");
  if (!drawer) return;

  drawer.classList.add("active");
  drawer.setAttribute("aria-hidden", "false");
  if (btnToggle) {
    btnToggle.classList.add("active");
    btnToggle.setAttribute("aria-expanded", "true");
  }
  document.body.style.overflow = "hidden";
  audio.playOpenModal();
}

function closeMobileDrawer() {
  const drawer = document.getElementById("mobileNavDrawer");
  const btnToggle = document.getElementById("btnNavToggle");
  if (!drawer) return;

  drawer.classList.remove("active");
  drawer.setAttribute("aria-hidden", "true");
  if (btnToggle) {
    btnToggle.classList.remove("active");
    btnToggle.setAttribute("aria-expanded", "false");
  }
  document.body.style.overflow = "";
  audio.playCloseModal();
}

function initMobileNavigation() {
  const btnNavToggle = document.getElementById("btnNavToggle");
  const btnCloseDrawer = document.getElementById("btnCloseMobileNav");
  const backdrop = document.getElementById("mobileNavBackdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  const mobileDownloadBtn = document.getElementById("mobileDownloadBtn");

  if (btnNavToggle) {
    btnNavToggle.addEventListener("click", () => {
      const drawer = document.getElementById("mobileNavDrawer");
      if (drawer && drawer.classList.contains("active")) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });
  }

  if (btnCloseDrawer) btnCloseDrawer.addEventListener("click", closeMobileDrawer);
  if (backdrop) backdrop.addEventListener("click", closeMobileDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMobileDrawer();
    });
  });

  if (mobileDownloadBtn) {
    mobileDownloadBtn.addEventListener("click", () => {
      closeMobileDrawer();
      audio.playClick();
    });
  }

  // Audio toggle en drawer móvil
  const btnMobileSound = document.getElementById("btnMobileSound");
  if (btnMobileSound) {
    btnMobileSound.addEventListener("click", () => {
      const newState = audio.toggle();
      syncSoundButtonUI(newState);
    });
  }
}

// ==========================================================================
// GALERÍA INTERACTIVA (LIGHTBOX)
// ==========================================================================
function renderLightboxCaption(idx) {
  const item = GALLERY_DATA[idx];
  if (!item) return;

  const titleElement = document.getElementById("lightboxTitle");
  const descElement = document.getElementById("lightboxDesc");
  const indexElement = document.getElementById("lightboxIndex");

  if (titleElement) {
    titleElement.textContent = item.title[currentLang] || item.title.es;
  }
  if (descElement) {
    descElement.textContent = item.desc[currentLang] || item.desc.es;
  }
  if (indexElement) {
    const prefix = TRANSLATIONS[currentLang]["gallery.index_prefix"] || "EXPEDIENTE";
    const ofText = TRANSLATIONS[currentLang]["gallery.index_of"] || "DE";
    indexElement.textContent = `${prefix} ${idx + 1} ${ofText} ${GALLERY_DATA.length}`;
  }
}

function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const backdrop = document.getElementById("lightboxBackdrop");
  const closeBtn = document.getElementById("btnCloseLightbox");
  const prevBtn = document.getElementById("btnLightboxPrev");
  const nextBtn = document.getElementById("btnLightboxNext");
  const imgElement = document.getElementById("lightboxImg");

  const items = Array.from(document.querySelectorAll(".gallery-item"));
  if (!modal || items.length === 0) return;

  const showItem = (idx) => {
    if (idx < 0) idx = GALLERY_DATA.length - 1;
    if (idx >= GALLERY_DATA.length) idx = 0;
    currentLightboxIndex = idx;

    const item = GALLERY_DATA[currentLightboxIndex];
    if (imgElement && item) {
      imgElement.src = item.full;
    }
    renderLightboxCaption(currentLightboxIndex);
    audio.playClick();
  };

  const openModal = (idx) => {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    showItem(idx);
    audio.playOpenModal();
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (imgElement) imgElement.src = "";
    audio.playCloseModal();
  };

  items.forEach((item, idx) => {
    item.addEventListener("click", () => openModal(idx));
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showItem(currentLightboxIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showItem(currentLightboxIndex + 1);
    });
  }

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showItem(currentLightboxIndex - 1);
    if (e.key === "ArrowRight") showItem(currentLightboxIndex + 1);
  });
}

// ==========================================================================
// BOTÓN SFX Y SINCRONIZACIÓN
// ==========================================================================
function syncSoundButtonUI(state) {
  const btn = document.getElementById("btnSoundToggle");
  const mobileSoundIcon = document.getElementById("mobileSoundIcon");
  const mobileSoundLabel = document.getElementById("mobileSoundLabel");

  if (btn) {
    const icon = btn.querySelector(".sound-icon");
    const text = document.getElementById("soundToggleText");
    const onLabel = TRANSLATIONS[currentLang]["nav.sfx_on"] || "SFX: ON";
    const offLabel = TRANSLATIONS[currentLang]["nav.sfx_off"] || "SFX: OFF";

    if (state) {
      if (icon) icon.textContent = "🔊";
      if (text) text.textContent = onLabel;
      btn.style.borderColor = "var(--neon-cyan)";
      btn.style.color = "var(--neon-cyan)";
    } else {
      if (icon) icon.textContent = "🔇";
      if (text) text.textContent = offLabel;
      btn.style.borderColor = "rgba(255,255,255,0.2)";
      btn.style.color = "var(--text-muted)";
    }
  }

  if (mobileSoundIcon && mobileSoundLabel) {
    mobileSoundIcon.textContent = state ? "🔊" : "🔇";
    mobileSoundLabel.textContent = state ? "SFX: ON" : "SFX: OFF";
  }
}

function initSoundToggle() {
  const btn = document.getElementById("btnSoundToggle");
  if (!btn) return;

  syncSoundButtonUI(audio.enabled);

  btn.addEventListener("click", () => {
    const newState = audio.toggle();
    syncSoundButtonUI(newState);
  });
}

// ==========================================================================
// ENLACE Y COPIA AL PORTAPAPELES
// ==========================================================================
function initDownloadLinks() {
  const mainDownloadBtn = document.getElementById("mainDownloadBtn");
  const displayDownloadUrl = document.getElementById("displayDownloadUrl");

  if (mainDownloadBtn) {
    mainDownloadBtn.href = CONFIG.DOWNLOAD_URL;
    mainDownloadBtn.addEventListener("click", () => {
      audio.playClick();
    });
  }

  if (displayDownloadUrl) {
    displayDownloadUrl.textContent = CONFIG.DOWNLOAD_URL;
  }
}

function initCopyButton() {
  const btnCopy = document.getElementById("btnCopyLink");
  if (!btnCopy) return;

  btnCopy.addEventListener("click", async () => {
    audio.playClick();
    const copiedText = TRANSLATIONS[currentLang]["dl.copied"] || "¡COPIADO!";
    const defaultText = TRANSLATIONS[currentLang]["dl.copy_btn"] || "COPIAR";

    try {
      await navigator.clipboard.writeText(CONFIG.DOWNLOAD_URL);
      const span = btnCopy.querySelector("span");
      if (span) span.textContent = copiedText;
      btnCopy.style.background = "var(--neon-green)";
      btnCopy.style.color = "#050811";

      setTimeout(() => {
        if (span) span.textContent = defaultText;
        btnCopy.style.background = "";
        btnCopy.style.color = "";
      }, 2000);
    } catch (err) {
      const dummy = document.createElement("textarea");
      dummy.value = CONFIG.DOWNLOAD_URL;
      document.body.appendChild(dummy);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      alert((currentLang === "es" ? "Enlace copiado: " : "Link copied: ") + CONFIG.DOWNLOAD_URL);
    }
  });
}

// ==========================================================================
// BARRA DE NAVEGACIÓN Y SCROLL
// ==========================================================================
function initScrollNav() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.background = "rgba(5, 8, 17, 0.96)";
      navbar.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.85)";
    } else {
      navbar.style.background = "rgba(5, 8, 17, 0.85)";
      navbar.style.boxShadow = "none";
    }
  });
}

// ==========================================================================
// DOM READY & INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initLanguageModal();
  initMobileNavigation();
  initAircraftCardClicks();
  initDownloadLinks();
  initSoundToggle();
  initLightbox();
  initCopyButton();
  initScrollNav();
  initPilotModalControls();

  // Iniciar el motor de vuelo táctico en fondo
  flightEngine = new FlightSimulationEngine();
  flightEngine.init();

  // Métodos expuestos para depuración y pruebas
  window.FoHFlight = {
    spawn: (planeKey) => flightEngine.spawnAircraft(planeKey || "valkyrie"),
    spawnSick: () => flightEngine.spawnAircraft("shadowcase"),
    spawnChadmanzio: () => flightEngine.spawnAircraft("corsair"),
    spawnMarilu: () => flightEngine.spawnAircraft("marilu_biplane"),
    spawnDan: () => flightEngine.spawnAircraft("giga_b2000"),
    spawnGordalf: () => flightEngine.spawnAircraft("gordalf"),
    openDossier: (key, isSecret) => openPilotModal(key, isSecret),
    setLang: (l) => setLanguage(l),
    getLang: () => currentLang,
    getElapsedTime: () => ((Date.now() - flightEngine.startTime) / 1000).toFixed(1) + "s"
  };
});
