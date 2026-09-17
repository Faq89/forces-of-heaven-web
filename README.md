# Forces of Heaven: Air Assault — Página Oficial & Landing Page

Sitio web oficial y portal de descarga para **Forces of Heaven: Air Assault**, un shoot 'em up arcade 2.5D de combate aeroespacial con relieve volumétrico, cinemática de alabeo 3D y batallas colosales contra jefes imperiales.

---

## 🚀 Características de la Web

- **Estética Cyber-Arcade Militar Táctica**: Interfaz responsiva con diseño glassmorphism, scanlines holográficas y paleta neón cian/oro.
- **Simulación de Vuelo en Fondo**: Aeronaves sobrevolando el fondo espacial con cinemática vectorial en 8 direcciones, estelas de postcombustión y retícula de apuntado *LOCK-ON*.
- **Intercepción Táctica & Dossiers de Pilotos**: Al interceptar cualquier caza en vuelo se despliega la ficha militar interactiva del piloto con telemetría en tiempo real y audio sintetizado mediante Web Audio API.
- **Easter Eggs de Vuelo Clasificado**: Apariciones cronometradas de cazas secretos (*Cadete Marilu*, *General Dan*, *Agente Gordalf*) en ciclos exactos de 10 minutos.
- **Galería Táctica**: Visor lightbox interactivo con capturas in-game en alta resolución.
- **Despliegue y Descarga Directa**: Enlaces centralizados para el instalador todo-en-uno de Windows con generador y visualizador de código QR.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico**: Optimizado con metaetiquetas OpenGraph y SEO para máxima visibilidad.
- **Vanilla CSS3**: Sistema de diseño con variables CSS, animaciones aceleradas por GPU (`transform`, `opacity`) y layout fluido (Grid & Flexbox).
- **JavaScript Moderno (ES6+)**:
  - `FlightSimulationEngine`: Cinemática de vuelo vectorial y gestión de temporizadores de alta precisión.
  - `TacticalAudio`: Sintetizador de efectos de sonido procedurales mediante Web Audio API.
  - Lightbox interactivo y navegación reactiva al scroll.

---

## 💻 Ejecución Local

Puedes visualizar la página localmente con cualquier servidor estático:

```bash
# Con Python 3:
python -m http.server 8080

# Con Node.js (npx serve):
npx serve .
```

Luego abre tu navegador en `http://localhost:8080`.

---

## 📄 Créditos y Autoría

- **Desarrollador & Creador**: HotDogSxMachine
- **Proyecto**: Forces of Heaven: Air Assault
- **Licencia**: Todos los derechos reservados © 2026 HotDogSxMachine.
