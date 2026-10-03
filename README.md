# 🏨 Cinder House — Luxury Boutique Stay & Live-Fire Kitchen

<div align="center">

  <a href="https://aaddi1.github.io/Cinder-House/">
    <img src="https://img.shields.io/badge/LIVE_NOW-https%3A%2F%2Faaddi1.github.io%2FCinder--House%2F-E05C21?style=for-the-badge&logo=safari&logoColor=white" alt="Live Website Now Available" />
  </a>
  <a href="https://aaddi1.github.io/Cinder-House/">
    <img src="https://img.shields.io/badge/Production_Deployment-GitHub_Pages_Live-238636?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages Live" />
  </a>
  <a href="https://threejs.org/">
    <img src="https://img.shields.io/badge/3D_Engine-Three.js_WebGL-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js Engine" />
  </a>
  <a href="https://www.linkedin.com/in/aryan-sharma11/">
    <img src="https://img.shields.io/badge/Architect-Aryan_Sharma-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Aryan Sharma LinkedIn" />
  </a>

  <br /><br />

  <p align="center">
    <strong>🔥 Live Production Website: <a href="https://aaddi1.github.io/Cinder-House/">https://aaddi1.github.io/Cinder-House/</a></strong>
  </p>

</div>

---

## 📑 Table of Contents
1. [🌐 Live Production Experience](#-live-production-experience)
2. [🛰️ System & Architectural Overview](#️-system--architectural-overview)
3. [🛠️ How It's Made: Deep Engineering Breakdown](#️-how-its-made-deep-engineering-breakdown)
   - [1. Real-Time 3D WebGL & GPU Ember Particle Physics](#1-real-time-3d-webgl--gpu-ember-particle-physics)
   - [2. Apple-Inspired Liquid Glass Design System](#2-apple-inspired-liquid-glass-design-system)
   - [3. Synthesized Web Audio API Live-Fire Soundscape](#3-synthesized-web-audio-api-live-fire-soundscape)
   - [4. Kinematic Interactions, 3D Tilt & Scroll Stages](#4-kinematic-interactions-3d-tilt--scroll-stages)
   - [5. Zero-Bloat Modular File Architecture](#5-zero-bloat-modular-file-architecture)
4. [🛎️ Interactive Hospitality Suite & Culinary Platform](#️-interactive-hospitality-suite--culinary-platform)
5. [📜 Official Copyright & Legal Terms Certificate](#-official-copyright--legal-terms-certificate)
6. [👨💻 Creator & Contact Details Matrix](#-creator--contact-details-matrix)

---

## 🌐 Live Production Experience

> **Cinder House** is an immersive, modern boutique hotel and live-fire culinary platform set in Tundla, Uttar Pradesh, India 283204. Deployed and **live now** at **[https://aaddi1.github.io/Cinder-House/](https://aaddi1.github.io/Cinder-House/)**, the entire platform is engineered from scratch with a custom **Three.js WebGL particle engine**, **Apple-inspired Liquid Glass UI**, procedural **Web Audio soundscape**, fluid camera kinematics, and interactive booking components.
>
> 🚀 **Explore the live platform directly in your browser:** [https://aaddi1.github.io/Cinder-House/](https://aaddi1.github.io/Cinder-House/)

---

## 🛰️ System & Architectural Overview

```yaml
system_spec:
  project: "Cinder House"
  type: "Luxury Boutique Hotel & Live-Fire Culinary Web Experience"
  status: "Live in Production"
  production_url: "https://aaddi1.github.io/Cinder-House/"
  creator: "Aryan Sharma"
  location: "Tundla, Uttar Pradesh, India 283204 🇮🇳"
  contact_email: "aaddisharmarkczw@gmail.com"
  
core_engineering:
  rendering_engine: "Three.js (r128) / WebGL GPU Buffer Geometry"
  interface_paradigm: "Apple Liquid Glassmorphism (Frosted Specular Glass)"
  audio_architecture: "Synthesized Web Audio API (Zero External Asset Overhead)"
  kinematics: "Scroll Matrix Transformation & 3D Perspective Mouse Tilt"
  modularity: "Decoupled CSS/JS Architecture (~91% HTML Footprint Reduction)"
  hosting: "GitHub Pages Global Edge CDN"
```

---

## 🛠️ How It's Made: Deep Engineering Breakdown

Cinder House is built without templates, pre-packaged UI libraries, or heavy runtime frameworks. Every component, 3D shader, audio synthesizer, and layout interaction is handcrafted in pure modern HTML5, CSS3, and ESNext JavaScript.

### 1. Real-Time 3D WebGL & GPU Ember Particle Physics
The background of Cinder House is a continuous, GPU-accelerated 3D WebGL spatial viewport powered by Three.js:
* **Ember Physics Simulation:** Generates 260+ physics particles across a 3D bounding box (`positions = new Float32Array(count * 3)`). Each particle maintains an individual upward convection speed vector and oscillating flicker phase (`Math.sin(t * 1.4)`).
* **Canvas Radial Glow Shader Texture:** Uses dynamically generated HTML5 canvas radial gradients with additive blending (`THREE.AdditiveBlending`) to produce glowing, natural embers without external texture dependencies.
* **Metallic 3D Torus Knot Emblem:** Features high-precision metallic PBR mesh geometry (`THREE.TorusKnotGeometry`) illuminated by warm amber and brass point lights (`0xE0752D` & `0xC49C5A`). The mesh rotation matrix links dynamically to continuous time and scroll progress (`clock.getElapsedTime() * 0.18 + scrollProgress * Math.PI * 1.4`).
* **Frame-Interpolated Camera Kinematics:** As the user navigates down the page, the camera executes a smooth dolly zoom (`camera.position.z = 12 - scrollProgress * 6`) combined with lerped mouse parallax coordinates.

```javascript
// Frame-interpolated 3D viewport camera kinematics
camera.position.z = 12 - scrollProgress * 6;
camera.position.x += ((mouseX * 1.4) - camera.position.x) * 0.04;
camera.position.y += ((-mouseY * 1.0) - camera.position.y) * 0.04;
camera.lookAt(0, 0, -2);
```

### 2. Apple-Inspired Liquid Glass Design System
The visual language mimics the optical depth, refraction, and specular lighting of Apple's Liquid Glass interface:
* **Deep Backdrop Diffusion:** Employs multi-layer hardware-accelerated diffusion (`backdrop-filter: blur(28px) saturate(180%) contrast(104%)`) to produce clean, frosted glass cards that legibly overlay the dynamic 3D ember background.
* **Dual Specular Rim Reflections:** Combines top-rim frosted highlight reflections (`inset 0 1.5px 1.5px rgba(255,255,255,0.22)`) with warm bottom-rim brass reflections (`inset 0 -1px 1px rgba(196,156,90,0.10)`).
* **Angular Gloss Sheen Overlays:** Every glass container utilizes an absolute pseudo-element (`.glass::before`) with a 125-degree specular gradient sweep that brightens on hover.

```css
/* Apple Liquid Glassmorphism Specification */
.glass {
  position: relative;
  background: linear-gradient(135deg, rgba(255,255,255,0.115), rgba(255,255,255,0.035) 45%, rgba(224,92,33,0.05));
  border: 1px solid rgba(255,255,255,0.16);
  box-shadow:
    inset 0 1.5px 1.5px rgba(255,255,255,0.22),
    inset 0 -1px 1px rgba(196,156,90,0.10),
    0 20px 60px rgba(0,0,0,0.35),
    0 4px 12px rgba(0,0,0,0.20);
  backdrop-filter: blur(28px) saturate(180%) contrast(104%);
  -webkit-backdrop-filter: blur(28px) saturate(180%) contrast(104%);
}
```

### 3. Synthesized Web Audio API Live-Fire Soundscape
Rather than streaming heavy audio files that cause buffering or broken assets, Cinder House features a **real-time procedural audio synthesizer** built on the Web Audio API:
* **Pink Noise Algorithm:** Generates randomized white noise filtered through a 6-pole filter cascade to produce the deep, calming baseline rumble of a wood-fired hearth.
* **Biquad Low-Pass Filtering:** Low-pass filter set at a 380 Hz cutoff frequency to simulate realistic room acoustics and cozy acoustic resonance.
* **Sound Toggle Controller:** Accessible via the frosted glass `#soundToggle` button in the navigation bar with dynamic SVG state switching.

### 4. Kinematic Interactions, 3D Tilt & Scroll Stages
* **Room Card 3D Perspective Tilt:** Mouse movements over boutique room cards compute normalized offsets (`(clientX - left) / width - 0.5`) to calculate real-time 3D rotation (`perspective(700px) rotateY(...) rotateX(...)`).
* **Scroll-Driven Atmospheric Color Stages:** The background linearly interpolates (`lerp`) across 4 distinct color temperatures as the user scrolls (Dawn Prep `#140F0B` → Service Begins `#1A0E09` → Full Night `#0E0A09` → Late Close `#0A0809`).
* **IntersectionObserver Reveal System:** Elements tagged with `data-reveal` enter with hardware-accelerated stagger delays (`--reveal-i`).

### 5. Zero-Bloat Modular File Architecture
The codebase has been refactored for maximum production performance:

| File | Purpose | Size |
| :--- | :--- | :--- |
| `index.html` | Semantic, lightweight HTML5 structure | **~34 KB** *(Reduced from 381 KB)* |
| `css/style.css` | Modular stylesheet, Apple Liquid Glass, animations | **~31 KB** |
| `js/main.js` | Modular JavaScript, Three.js engine, Web Audio synth | **~14 KB** |
| `assets/owner-portrait.png` | Extracted high-resolution owner portrait asset | **~231 KB** |
| `favicon.svg` | Crisp glowing vector ember favicon | **~1.1 KB** |
| `Cinder_House_Copyright_Legal_Terms.pdf` | Official Copyright & Intellectual Property Certificate | **~267 KB** |

---

## 🛎️ Interactive Hospitality Suite & Culinary Platform

* **Five Curated Rooms Upstairs:** Complete interactive visual showcase of *The Hearth Room*, *The Copper Suite*, *The Ember Loft*, *The Smoke House*, and *The Lantern Room*, featuring 3D perspective mouse tilt and pricing.
* **Live-Fire Kitchen Dining:** Tabbed culinary showcase with real-time course switching for *Fire Starters*, *From the Coals*, *Embers & Sweets*, and *The Cellar*.
* **Interactive Guest Testimonials & Reviews:** Star/ember rating system, guest quotes, and review cards.
* **Embedded Location Map:** Integrated Google Maps iframe displaying the venue location in Tundla, Uttar Pradesh, India 283204.
* **Radial Floating Action Button (FAB):** Expandable radial menu in the bottom-right viewport with instant links to Instagram, LinkedIn, WhatsApp, Email, and X (Twitter).

---

## 📜 Official Copyright & Legal Terms Certificate

All 3D WebGL animations, Three.js shaders, ember physics algorithms, Apple Liquid Glass UI design, and codebase architecture of Cinder House are the exclusive intellectual property created and engineered by **Aryan Sharma**.

* 📄 **Official PDF Document:** [Cinder_House_Copyright_Legal_Terms.pdf](https://github.com/aaddi1/Cinder-House/blob/main/Cinder_House_Copyright_Legal_Terms.pdf)
* 🏅 **Authentication:** Features an official **Golden Holographic Seal** (*Authentic Seal · 2026*) and cryptographic digital signature hash.
* 🔒 **Protection:** Registered digital authorship, proprietary UI mechanics, and intellectual property rights.

---

## 👨💻 Creator & Contact Details Matrix

<div align="center">

### **Aryan Sharma**
*3D Creative Engineer & Full-Stack Systems Architect*

| Channel | Contact & Verified Link |
| :--- | :--- |
| 🌐 **Live Website** | [https://aaddi1.github.io/Cinder-House/](https://aaddi1.github.io/Cinder-House/) |
| 💼 **LinkedIn** | [linkedin.com/in/aryan-sharma11/](https://www.linkedin.com/in/aryan-sharma11/) |
| 🐙 **GitHub** | [@aaddi1](https://github.com/aaddi1) |
| 📸 **Instagram** | [@aryansharma.dev](https://www.instagram.com/aryansharma.dev/) |
| 𝕏 **X (Twitter)** | [@aryan56710](https://x.com/aryan56710) |
| 📬 **Direct Email** | [aaddisharmarkczw@gmail.com](mailto:aaddisharmarkczw@gmail.com) |
| ✨ **3D Portfolio** | [https://aaddi1.github.io/My-Portfolio/](https://aaddi1.github.io/My-Portfolio/) |
| 📍 **Location** | Tundla, Uttar Pradesh, India 283204 🇮🇳 |

<br />

```
© 2026 Cinder House. All Rights Reserved.
Whole animation and 3D spatial design is designed and developed by Aryan Sharma.
```

</div>
