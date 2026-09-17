/**
 * FORCES OF HEAVEN: AIR ASSAULT — OFFICIAL LANDING PAGE LOGIC
 * Features:
 *  - Centralized Download URL & Clipboard Copy
 *  - Tactical Web Audio SFX Synthesizer
 *  - Interactive Gallery Lightbox Modal
 *  - Background Tactical Flight Simulation Layer (Z-Index: 2, GPU Composited)
 *  - Secret Aircraft Easter Egg Timers (Marilu @ 8m, Dan @ 9m, Gordalf @ 10m + 10m recurring)
 *  - Click-to-Inspect Pilot Dossier Modal with Live Telemetry
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
// BASE DE DATOS CANÓNICA DE PILOTOS Y AERONAVES
// ==========================================================================
const PILOTS_DATABASE = {
  tonio: {
    name: "TONIO",
    callsign: "AS INTERCEPTOR // VANGUARDIA",
    ship: "VALKYRIE INTERCEPTOR (VF-02)",
    role: "TENIENTE PRIMERO",
    portrait: "assets/pilots/tonio.png",
    quote: '"Mantengan los motores limpios de arena; la velocidad y el ángulo de ataque deciden la victoria."',
    specialty: "Maniobras de alta G, dogfight supersónico a velocidad Mach 4 y láser continuo.",
    stats: [
      { label: "REFLEJOS", val: 98 },
      { label: "PUNTERÍA", val: 90 },
      { label: "RESISTENCIA FUERZA G", val: 92 },
      { label: "VELOCIDAD VECTORIAL", val: 99 }
    ]
  },
  chadmanzio: {
    name: "CHADMANZIO",
    callsign: "ATACANTE TÁCTICO // DISCIPLINA",
    ship: "CORSAIR STRIKER (CR-03)",
    role: "CAPITÁN DE ESCUADRA",
    portrait: "assets/pilots/chadmanzio.png",
    quote: '"Disciplina balística innegociable. No dispares hasta tener el vector balístico asegurado al 100%."',
    specialty: "Disparo doble de plasma en hélice, soporte lateral y equilibrio táctico.",
    stats: [
      { label: "REFLEJOS", val: 88 },
      { label: "PUNTERÍA", val: 94 },
      { label: "RESISTENCIA FUERZA G", val: 92 },
      { label: "EQUILIBRIO TÁCTICO", val: 95 }
    ]
  },
  sick: {
    name: "MAYOR SICK",
    callsign: "TITÁN PESADO // KRONOS-IV",
    ship: "SHADOWCASE NEWTYPE (APX-01)",
    role: "MAYOR CONDECORADO",
    portrait: "assets/pilots/sick.png",
    quote: '"La elegancia en combate no se negocia. Un giro limpio, una salva certera y volvemos al Hangar con estilo."',
    specialty: "Cañones cinéticos pesados de tungsteno, blindaje de titanio y salvas destructivas.",
    stats: [
      { label: "REFLEJOS", val: 88 },
      { label: "PUNTERÍA", val: 96 },
      { label: "RESISTENCIA FUERZA G", val: 94 },
      { label: "BLINDAJE DE TITANIO", val: 98 }
    ]
  },
  piro: {
    name: "PIRO",
    callsign: "ARTILLERO DEL VACÍO // ENERGÍA PURA",
    ship: "PHANTOM GUNSHIP (PH-04)",
    role: "OFICIAL DE ASALTO PESADO",
    portrait: "assets/pilots/piro.png",
    quote: '"¡Woooo! ¡Mis cañones de plasma están que hierven! ¡Puro fuego y sobrecarga gravitacional!"',
    specialty: "Triple haz de antimateria con púas de plasma y demolición de blindaje.",
    stats: [
      { label: "REFLEJOS", val: 90 },
      { label: "PUNTERÍA", val: 86 },
      { label: "RESISTENCIA FUERZA G", val: 89 },
      { label: "ENERGÍA DE PLASMA", val: 97 }
    ]
  },
  marilu: {
    name: "CADETE MARILU",
    callsign: "VANGUARDIA AÉREA // REPORTE",
    ship: "MR-07 AERO MIRAGE",
    role: "CADETE DE AVIACIÓN",
    portrait: "assets/pilots/marilu.png",
    quote: '"¡Aquí Cadete Marilu transmitiendo en directo desde el sector de combate! ¡La Coalición resiste con orgullo!"',
    specialty: "Abanico de sierras giratorias, hiper-maniobrabilidad vectorial y moral del escuadrón.",
    stats: [
      { label: "REFLEJOS", val: 94 },
      { label: "PUNTERÍA", val: 85 },
      { label: "RESISTENCIA FUERZA G", val: 86 },
      { label: "MANIOBRABILIDAD", val: 99 }
    ]
  },
  dan: {
    name: "GENERAL DAN",
    callsign: "GENERAL DE ACORAZADO // MANDO SUPREMO",
    ship: "GIGA B200 (GB-06)",
    role: "GENERAL DE LA COALICIÓN",
    portrait: "assets/pilots/dan.png",
    quote: '"En las Fuerzas del Cielo no hay lugar para la improvisación. La disciplina vence a cualquier imperio... y mi perro Chicho me espera en casa."',
    specialty: "Mando estratégico global, blindaje hiperdenso y cañón de colapso gravitatorio.",
    stats: [
      { label: "REFLEJOS", val: 89 },
      { label: "PUNTERÍA", val: 98 },
      { label: "RESISTENCIA FUERZA G", val: 95 },
      { label: "MANDO ESTRATÉGICO", val: 100 }
    ]
  },
  gordalf: {
    name: "AGENTE GORDALF",
    callsign: "SABIO ENCUBIERTO // BLACK OPS",
    ship: "SOLARIS SERAPH (SO-05)",
    role: "OPERACIONES ESPECIALES",
    portrait: "assets/pilots/gordalf.png",
    quote: '"Transmisión cifrada desde las líneas enemigas. Sus escudos orbitales están saboteados... ataquen ahora."',
    specialty: "Orbe solar de alta densidad, sigilo óptico activo y guerra electrónica.",
    stats: [
      { label: "REFLEJOS", val: 96 },
      { label: "PUNTERÍA", val: 95 },
      { label: "RESISTENCIA FUERZA G", val: 91 },
      { label: "GUERRA ELECTRÓNICA", val: 99 }
    ]
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

    // Detección de clics por delegación pasiva (sin layout thrashing)
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

  /**
   * Genera el vuelo cinemático de una aeronave sin sobrecargar el DOM
   */
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

    // Calcular trayectoria (origen, destino, ángulo)
    const traj = this.calculateTrajectory();
    
    // Duración calculada según distancia
    const baseDuration = (traj.distance / (window.innerWidth < 768 ? 200 : 250)) * 1000;
    const duration = Math.max(5500, baseDuration / (cfg.speedFactor || 1.0));

    planeEl.style.left = "0px";
    planeEl.style.top = "0px";

    this.container.appendChild(planeEl);

    // Animación acelerada por hardware (transform translate3d + rotate)
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

    // Evento de clic directo sobre la aeronave
    planeEl.addEventListener("click", (e) => {
      e.stopPropagation();
      this.handleAircraftClick(cfg);
    });
  }

  /**
   * Cálculo de 8 rutas vectoriales rectas en todas las direcciones
   */
  calculateTrajectory() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pad = 140;

    const mode = Math.floor(Math.random() * 8);
    let startX = 0, startY = 0, endX = 0, endY = 0;

    switch (mode) {
      case 0: // Horizontal Izq -> Der
        startX = -pad;
        startY = Math.random() * (vh - 160) + 80;
        endX = vw + pad;
        endY = startY + (Math.random() * 80 - 40);
        break;

      case 1: // Horizontal Der -> Izq
        startX = vw + pad;
        startY = Math.random() * (vh - 160) + 80;
        endX = -pad;
        endY = startY + (Math.random() * 80 - 40);
        break;

      case 2: // Vertical Arriba -> Abajo
        startX = Math.random() * (vw - 160) + 80;
        startY = -pad;
        endX = startX + (Math.random() * 80 - 40);
        endY = vh + pad;
        break;

      case 3: // Vertical Abajo -> Arriba
        startX = Math.random() * (vw - 160) + 80;
        startY = vh + pad;
        endX = startX + (Math.random() * 80 - 40);
        endY = -pad;
        break;

      case 4: // Diagonal Sup-Izq -> Inf-Der
        startX = -pad;
        startY = Math.random() * (vh * 0.4);
        endX = vw + pad;
        endY = vh * 0.6 + Math.random() * (vh * 0.4) + pad;
        break;

      case 5: // Diagonal Inf-Izq -> Sup-Der
        startX = -pad;
        startY = vh * 0.6 + Math.random() * (vh * 0.4);
        endX = vw + pad;
        endY = Math.random() * (vh * 0.3) - pad;
        break;

      case 6: // Diagonal Sup-Der -> Inf-Izq
        startX = vw + pad;
        startY = Math.random() * (vh * 0.4);
        endX = -pad;
        endY = vh * 0.6 + Math.random() * (vh * 0.4) + pad;
        break;

      case 7: // Diagonal Inf-Der -> Sup-Izq
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

    // Como el sprite mira al Norte (0° arriba), sumamos 90° al ángulo de desplazamiento
    const angleDeg = (Math.atan2(dy, dx) * 180 / Math.PI) + 90;

    return { startX, startY, endX, endY, distance, angleDeg };
  }

  /**
   * Control temporal estricto de las 3 aeronaves secretas:
   *  - Marilu: Minuto 8:00 (480s), 18:00 (1080s), 28:00 (1680s)...
   *  - Dan:    Minuto 9:00 (540s), 19:00 (1140s), 29:00 (1740s)...
   *  - Gordalf: Minuto 10:00 (600s), 20:00 (1200s), 30:00 (1800s)...
   * Ciclo recursivo cada 10 minutos (600 segundos).
   */
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

  /**
   * Permite clickear los aviones incluso si están detrás de márgenes y secciones
   * SIN sobrecargar el procesador con listeners de mousemove.
   */
  initClickDetection() {
    window.addEventListener("click", (e) => {
      // Ignorar si se clickea un control interactivo (botón, enlace, entrada de texto, modal)
      if (e.target.closest("a, button, input, textarea, .lightbox-dialog, .pilot-modal-dialog, code")) {
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

// Instancia global del motor de vuelo
let flightEngine = null;

// ==========================================================================
// MODAL TÁCTICO DE PILOTO (INTERCEPCIÓN DE VUELO POR CLIC)
// ==========================================================================
function openPilotModal(pilotKey, isSecret = false) {
  const pilot = PILOTS_DATABASE[pilotKey];
  if (!pilot) return;

  const modal = document.getElementById("pilotModal");
  if (!modal) return;

  const pmPortrait = document.getElementById("pmPortrait");
  const pmRoleTag = document.getElementById("pmRoleTag");
  const pmClassifiedBadge = document.getElementById("pmClassifiedBadge");
  const pmPilotName = document.getElementById("pmPilotName");
  const pmCallsign = document.getElementById("pmCallsign");
  const pmShip = document.getElementById("pmShip");
  const pmQuote = document.getElementById("pmQuote");
  const pmStatsBlock = document.getElementById("pmStatsBlock");

  if (pmPortrait) pmPortrait.src = pilot.portrait;
  if (pmRoleTag) pmRoleTag.textContent = pilot.role;

  if (pmClassifiedBadge) {
    if (isSecret) {
      pmClassifiedBadge.textContent = "🏆 TRANSMISIÓN CLASIFICADA // CAZA SECRETO INTERCEPTADO";
      pmClassifiedBadge.style.color = "var(--neon-gold)";
    } else {
      pmClassifiedBadge.textContent = "🎯 TELEMETRÍA DE VUELO // ESCUADRÓN APEX COALICIÓN";
      pmClassifiedBadge.style.color = "var(--neon-cyan)";
    }
  }

  if (pmPilotName) pmPilotName.textContent = pilot.name;
  if (pmCallsign) pmCallsign.textContent = pilot.callsign;
  if (pmShip) pmShip.textContent = `NAVE ASIGNADA: ${pilot.ship}`;
  if (pmQuote) pmQuote.textContent = pilot.quote;

  if (pmStatsBlock && pilot.stats) {
    pmStatsBlock.innerHTML = pilot.stats.map(s => `
      <div class="pm-stat-row">
        <span>${s.label}:</span>
        <div class="pm-stat-bar">
          <div class="pm-stat-fill" style="width: ${s.val}%;"></div>
        </div>
        <span style="min-width: 32px; text-align: right; color: var(--text-cyan);">${s.val}%</span>
      </div>
    `).join("");
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePilotModal() {
  const modal = document.getElementById("pilotModal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
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
// DOM READY & INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initDownloadLinks();
  initSoundToggle();
  initLightbox();
  initCopyButton();
  initScrollNav();
  initPilotModalControls();

  // Iniciar el motor de vuelo en fondo
  flightEngine = new FlightSimulationEngine();
  flightEngine.init();

  // Funciones de conveniencia expuestas en window para pruebas y depuración
  window.FoHFlight = {
    spawn: (planeKey) => flightEngine.spawnAircraft(planeKey || "valkyrie"),
    spawnSick: () => flightEngine.spawnAircraft("shadowcase"),
    spawnChadmanzio: () => flightEngine.spawnAircraft("corsair"),
    spawnMarilu: () => flightEngine.spawnAircraft("marilu_biplane"),
    spawnDan: () => flightEngine.spawnAircraft("giga_b2000"),
    spawnGordalf: () => flightEngine.spawnAircraft("gordalf"),
    openDossier: (key, isSecret) => openPilotModal(key, isSecret),
    getElapsedTime: () => ((Date.now() - flightEngine.startTime) / 1000).toFixed(1) + "s"
  };
});

// 1. Configurar botones y enlaces de descarga
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

// 2. Botón de alternar audio SFX
function initSoundToggle() {
  const btn = document.getElementById("btnSoundToggle");
  if (!btn) return;

  const updateBtn = (state) => {
    const icon = btn.querySelector(".sound-icon");
    const text = btn.querySelector(".sound-text");
    if (state) {
      icon.textContent = "🔊";
      text.textContent = "SFX: ON";
      btn.style.borderColor = "var(--neon-cyan)";
      btn.style.color = "var(--neon-cyan)";
    } else {
      icon.textContent = "🔇";
      text.textContent = "SFX: OFF";
      btn.style.borderColor = "rgba(255,255,255,0.2)";
      btn.style.color = "var(--text-muted)";
    }
  };

  updateBtn(audio.enabled);

  btn.addEventListener("click", () => {
    const newState = audio.toggle();
    updateBtn(newState);
  });
}

// 3. Botón para copiar enlace de descarga
function initCopyButton() {
  const btnCopy = document.getElementById("btnCopyLink");
  if (!btnCopy) return;

  btnCopy.addEventListener("click", async () => {
    audio.playClick();
    try {
      await navigator.clipboard.writeText(CONFIG.DOWNLOAD_URL);
      const span = btnCopy.querySelector("span");
      const originalText = span.textContent;
      span.textContent = "¡COPIADO!";
      btnCopy.style.background = "var(--neon-green)";
      btnCopy.style.color = "#050811";

      setTimeout(() => {
        span.textContent = originalText;
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
      alert("Enlace copiado al portapapeles: " + CONFIG.DOWNLOAD_URL);
    }
  });
}

// 4. Galería Interactiva con Visor Modal (Lightbox)
function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const backdrop = document.getElementById("lightboxBackdrop");
  const closeBtn = document.getElementById("btnCloseLightbox");
  const prevBtn = document.getElementById("btnLightboxPrev");
  const nextBtn = document.getElementById("btnLightboxNext");
  const imgElement = document.getElementById("lightboxImg");
  const titleElement = document.getElementById("lightboxTitle");
  const descElement = document.getElementById("lightboxDesc");
  const indexElement = document.getElementById("lightboxIndex");

  const items = Array.from(document.querySelectorAll(".gallery-item"));
  if (!modal || items.length === 0) return;

  let currentIndex = 0;

  const showItem = (idx) => {
    if (idx < 0) idx = items.length - 1;
    if (idx >= items.length) idx = 0;
    currentIndex = idx;

    const item = items[currentIndex];
    const fullSrc = item.getAttribute("data-full");
    const title = item.getAttribute("data-title") || "";
    const desc = item.getAttribute("data-desc") || "";

    imgElement.src = fullSrc;
    titleElement.textContent = title;
    descElement.textContent = desc;
    indexElement.textContent = `EXPEDIENTE ${currentIndex + 1} DE ${items.length}`;

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
    imgElement.src = "";
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
      showItem(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showItem(currentIndex + 1);
    });
  }

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showItem(currentIndex - 1);
    if (e.key === "ArrowRight") showItem(currentIndex + 1);
  });
}

// 5. Barra de navegación con blur reactivo al scroll
function initScrollNav() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(5, 8, 17, 0.95)";
      navbar.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.8)";
    } else {
      navbar.style.background = "rgba(5, 8, 17, 0.85)";
      navbar.style.boxShadow = "none";
    }
  });
}
