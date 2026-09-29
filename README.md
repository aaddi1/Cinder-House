# 🏨 Cinder House — Luxury Boutique Stay & Live-Fire Kitchen

[![Live Experience](https://img.shields.io/badge/Live_Website-Experience-E05C21?style=for-the-badge&logo=safari&logoColor=white)](https://aaddi1.github.io/Cinder-House/)
[![Three.js](https://img.shields.io/badge/3D_Engine-Three.js_r128-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![WebGL](https://img.shields.io/badge/WebGL-Real--Time_GPU-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable_%26_Offline-5A32A3?style=for-the-badge&logo=pwa&logoColor=white)](./manifest.json)
[![Author](https://img.shields.io/badge/Architect-Aryan_Sharma-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aryan-sharma11/)

> **Cinder House** is a bespoke web experience for an intimate boutique hotel and live-fire culinary kitchen in Taj Ganj, Agra. Engineered with a custom **Three.js WebGL particle & lighting engine**, an **Apple-inspired Liquid Glass UI**, and an interactive **3D spatial room floorplan viewer**.

---

## 🌟 Core Architecture & Engineering Highlights

```yaml
system_architecture:
  frontend_engine: "Semantic HTML5 • CSS3 Liquid Glassmorphism • Vanilla ESNext"
  graphics_pipeline: "Three.js r128 • WebGL Shaders • Particle Physics Buffer Arrays"
  audio_synthesizer: "Web Audio API (Procedural Real-Time Fireplace Acoustics)"
  interactivity: "3D Room Spatial Viewport • Interactive Nightly Rate Calculator • Touch Swipe"
  security_performance: "Client-Side Honeypot • Request Throttling • Service Worker PWA Caching"
  accessibility: "WCAG 2.1 AA Compliant • ARIA Controls • Full Keyboard Navigation"
```

### 1. 🌐 Real-Time 3D WebGL & Ember Particle Simulation
* **Kinematic Ember Engine:** GPU-accelerated particle buffer geometry simulating rising embers with random velocity vectors and opacity oscillations.
* **Abstract 3D Torus Knot Emblem:** High-precision metallic/roughness PBR mesh with dynamic point lights responding to user scroll progress and mouse coordinates.
* **Interactive 3D Room Viewer:** Modal spatial viewport allowing guests to inspect interactive 3D floorplan meshes with orbital camera controls.

### 2. 💎 Apple Clear Liquid Glass UI
* **Backdrop Filter Compositing:** Multi-layer frosted glass cards with specular gloss highlights (`backdrop-filter: blur(22px) saturate(125%)`).
* **Cross-Browser Fallbacks:** `@supports not (backdrop-filter)` stylesheets ensuring visual parity on legacy Firefox and Safari versions.
* **Circadian Atmosphere Switcher:** Dynamic transitions between **Dawn**, **Dusk**, and **Midnight** lighting modes.

### 3. 🔊 Procedural Web Audio API Soundscape
* Synthesizes real-time acoustic crackle and low-frequency warmth using brown noise and random pop harmonics—without external audio dependencies.
* Integrated mute/play controls with state persistence.

### 4. 📱 Progressive Web App & Offline Caching
* Complete `manifest.json` configuration and `sw.js` Service Worker caching core visual assets for instant load and offline stay details.

---

## 🛠️ Resolved Engineering Roadmap & Issues

This repository was systematically enhanced through 15 resolved technical issues:

| Issue | Category | Description | Status |
| :---: | :--- | :--- | :---: |
| **[#1](https://github.com/aaddi1/Cinder-House/issues/1)** | `perf(webgl)` | WebGL particle buffer disposal & memory leak prevention on resize | **Resolved** |
| **[#2](https://github.com/aaddi1/Cinder-House/issues/2)** | `feat(3d)` | Three.js interactive 3D spatial viewport with camera orbit controls | **Resolved** |
| **[#3](https://github.com/aaddi1/Cinder-House/issues/3)** | `feat(ui)` | Apple Liquid Glass styling with dynamic backdrop blur fallbacks | **Resolved** |
| **[#4](https://github.com/aaddi1/Cinder-House/issues/4)** | `a11y(nav)` | WCAG 2.1 AA keyboard navigation, ARIA attributes & modal trap | **Resolved** |
| **[#5](https://github.com/aaddi1/Cinder-House/issues/5)** | `feat(booking)`| Interactive reservation inquiry modal with date & rate validation | **Resolved** |
| **[#6](https://github.com/aaddi1/Cinder-House/issues/6)** | `perf(assets)` | Progressive image skeleton loaders and async decoding | **Resolved** |
| **[#7](https://github.com/aaddi1/Cinder-House/issues/7)** | `feat(audio)` | Ambient live-fire soundscape controller with Web Audio API | **Resolved** |
| **[#8](https://github.com/aaddi1/Cinder-House/issues/8)** | `feat(menu)` | Dynamic dietary filter tags (Vegan, GF, Veg, Smoke) on dining tabs | **Resolved** |
| **[#9](https://github.com/aaddi1/Cinder-House/issues/9)** | `feat(theme)`| Ambient circadian lighting transitions (Dawn, Dusk, Midnight) | **Resolved** |
| **[#10](https://github.com/aaddi1/Cinder-House/issues/10)** | `perf(canvas)`| `requestAnimationFrame` throttle & `devicePixelRatio` clamping | **Resolved** |
| **[#11](https://github.com/aaddi1/Cinder-House/issues/11)** | `seo(meta)` | OpenGraph, Twitter Cards, and Schema.org Hotel JSON-LD | **Resolved** |
| **[#12](https://github.com/aaddi1/Cinder-House/issues/12)** | `feat(reviews)`| Guest testimonial carousel with touch swipe gestures | **Resolved** |
| **[#13](https://github.com/aaddi1/Cinder-House/issues/13)** | `sec(forms)` | Honeypot anti-spam protection, rate limit cooldown & sanitization | **Resolved** |
| **[#14](https://github.com/aaddi1/Cinder-House/issues/14)** | `feat(pwa)` | Web App Manifest and offline service worker caching | **Resolved** |
| **[#15](https://github.com/aaddi1/Cinder-House/issues/15)** | `docs(readme)`| Comprehensive architecture documentation and technical breakdown | **Resolved** |

---

## 🚀 Quick Start & Local Preview

To explore and run Cinder House locally:

```bash
# 1. Clone the repository
git clone https://github.com/aaddi1/Cinder-House.git

# 2. Navigate to project root
cd Cinder-House

# 3. Start a local server (using Python or Node)
python3 -m http.server 8000
# or
npx serve .

# 4. Open in browser
open http://localhost:8000
```

---

## 👨💻 Engineering & Design

Designed and engineered by **Aryan Sharma**:
* **GitHub:** [@aaddi1](https://github.com/aaddi1)
* **LinkedIn:** [Aryan Sharma](https://www.linkedin.com/in/aryan-sharma11/)
* **Contact:** `aaddisharmarkczw@gmail.com`
* **Location:** Tundla, Uttar Pradesh, India 🇮🇳
