(function(){
  "use strict";
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clock = (typeof THREE !== 'undefined') ? new THREE.Clock() : { getElapsedTime: function(){ return performance.now() * 0.001; } };

  /* ---------- AMBIENT LIVE-FIRE SOUNDSCAPE (SYNTHESIZED WEB AUDIO) ---------- */
  var soundBtn = document.getElementById('soundToggle');
  var audioCtx = null;
  var isSoundActive = false;

  function initHearthAudio(){
    try {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      audioCtx = new AudioContextClass();

      var bufferSize = audioCtx.sampleRate * 2;
      var buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      var data = buffer.getChannelData(0);
      var b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (var i = 0; i < bufferSize; i++) {
        var white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
        b6 = white * 0.115926;
      }

      var noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      var filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, audioCtx.currentTime);

      var gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.09, audioCtx.currentTime);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      noise.start();
    } catch(err) {
      console.warn('AudioContext not supported or blocked:', err);
    }
  }

  if (soundBtn){
    soundBtn.addEventListener('click', function(){
      if (!isSoundActive){
        if (!audioCtx) initHearthAudio();
        else if (audioCtx.state === 'suspended') audioCtx.resume();
        isSoundActive = true;
        soundBtn.classList.add('playing');
        var onIcon = soundBtn.querySelector('.sound-icon-on');
        var offIcon = soundBtn.querySelector('.sound-icon-off');
        if (onIcon) onIcon.style.display = 'block';
        if (offIcon) offIcon.style.display = 'none';
        soundBtn.setAttribute('aria-label', 'Mute ambient soundscape');
      } else {
        if (audioCtx) audioCtx.suspend();
        isSoundActive = false;
        soundBtn.classList.remove('playing');
        var onIcon2 = soundBtn.querySelector('.sound-icon-on');
        var offIcon2 = soundBtn.querySelector('.sound-icon-off');
        if (onIcon2) onIcon2.style.display = 'none';
        if (offIcon2) offIcon2.style.display = 'block';
        soundBtn.setAttribute('aria-label', 'Play ambient soundscape');
      }
    });
  }

  /* ---------- NAV scroll state ---------- */
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ---------- MOBILE NAV (hamburger) ---------- */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  hamburger.addEventListener('click', function(){
    var open = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- MENU TABS ---------- */
  var tabs = document.querySelectorAll('.menu-tab');
  var courses = document.querySelectorAll('.menu-course');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.classList.remove('active'); });
      courses.forEach(function(c){ c.classList.remove('active'); });
      tab.classList.add('active');
      document.querySelector('.menu-course[data-course="'+tab.dataset.course+'"]').classList.add('active');
    });
  });

  /* ---------- EMBER RATINGS ---------- */
  var emberSVG = '<svg viewBox="0 0 24 24"><path d="M12 2c1.2 3.6-2.4 4.8-2.4 8.4a2.4 2.4 0 0 0 4.8 0c1.2 1.8 1.2 3.8 1.2 3.8A6 6 0 1 1 9.6 15.6S10.8 12 10.8 9.6c0 0 2.4-1.2 1.2-7.6Z" fill="#E05C21"/></svg>';
  var emptyEmberSVG = '<svg viewBox="0 0 24 24"><path d="M12 2c1.2 3.6-2.4 4.8-2.4 8.4a2.4 2.4 0 0 0 4.8 0c1.2 1.8 1.2 3.8 1.2 3.8A6 6 0 1 1 9.6 15.6S10.8 12 10.8 9.6c0 0 2.4-1.2 1.2-7.6Z" fill="none" stroke="#8F8679" stroke-width="1"/></svg>';
  document.querySelectorAll('.embers-rating').forEach(function(el){
    var count = parseInt(el.dataset.count, 10) || 5;
    var html = '';
    for (var i=0; i<5; i++){ html += (i < count) ? emberSVG : emptyEmberSVG; }
    el.innerHTML = html;
  });

  /* ---------- FLOATING SOCIAL FAB ---------- */
  var fabWrap = document.getElementById('fabWrap');
  var fabMain = document.getElementById('fabMain');
  fabMain.addEventListener('click', function(){
    var open = fabWrap.classList.toggle('open');
    fabMain.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', function(e){
    if (!fabWrap.contains(e.target)) fabWrap.classList.remove('open');
  });

  /* ---------- ROOM CARD 3D TILT ---------- */
  if (!reduced){
    document.querySelectorAll('.room-card').forEach(function(card){
      card.addEventListener('mousemove', function(e){
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(700px) rotateY('+(x*8)+'deg) rotateX('+(-y*8)+'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function(){
        card.style.transform = 'perspective(700px) rotateY(0) rotateX(0) translateY(0)';
      });
    });
  }

  /* ---------- SCROLL-DRIVEN BACKGROUND STAGES ---------- */
  var stages = [
    {r:20, g:15, b:11},   // dawn prep — warm dark amber
    {r:26, g:14, b:9},    // service begins — deepening ember
    {r:14, g:10, b:9},    // full night — charcoal
    {r:10, g:8, b:9}      // late close — near black, cool ember
  ];
  function lerp(a,b,t){ return a + (b-a)*t; }
  function updateStage(progress){
    var seg = progress * (stages.length - 1);
    var i = Math.min(Math.floor(seg), stages.length - 2);
    var t = seg - i;
    var a = stages[i], b = stages[i+1];
    var r = Math.round(lerp(a.r,b.r,t));
    var g = Math.round(lerp(a.g,b.g,t));
    var bl = Math.round(lerp(a.b,b.b,t));
    document.documentElement.style.setProperty('--bg-r', r);
    document.documentElement.style.setProperty('--bg-g', g);
    document.documentElement.style.setProperty('--bg-b', bl);
  }

  /* ---------- SCROLL-REVEAL MOTION ---------- */
  if (!reduced && 'IntersectionObserver' in window){
    var revealItems = document.querySelectorAll('[data-reveal]');
    document.querySelectorAll('.reveal-stagger').forEach(function(group){
      Array.prototype.forEach.call(group.querySelectorAll('[data-reveal]'), function(el, i){
        el.style.setProperty('--reveal-i', i);
      });
    });
    var revealObserver = new IntersectionObserver(function(entries, observer){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -7% 0px'});
    revealItems.forEach(function(el){ revealObserver.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function(el){ el.classList.add('is-visible'); });
  }

  /* ---------- CONTACT FORM DEMO ---------- */
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');
  if (contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      if (!contactForm.checkValidity()){
        formStatus.textContent = 'Please fill in your name, email and message.';
        var firstInvalid = contactForm.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      formStatus.textContent = 'Thanks — your enquiry is ready to send. This demo form does not transmit data.';
      contactForm.reset();
    });
  }

  /* ---------- MINI 3D BRAND EMBLEM ---------- */
  var brandCanvas = document.getElementById('brand-logo-canvas');
  var brandRenderer, brandScene, brandCamera, brandRing;
  function initBrandLogo(){
    if (!brandCanvas || !window.THREE) return;
    brandScene = new THREE.Scene();
    brandCamera = new THREE.PerspectiveCamera(35, 1, 0.1, 20);
    brandCamera.position.set(0,0,8);
    brandRenderer = new THREE.WebGLRenderer({canvas:brandCanvas, alpha:true, antialias:true});
    brandRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    brandRenderer.setSize(34,34,false);
    var g = new THREE.TorusKnotGeometry(1.7, 0.15, 96, 8, 2, 3);
    var m = new THREE.MeshStandardMaterial({color:0x2a2016,metalness:0.75,roughness:0.32,emissive:0x3a1a08,emissiveIntensity:0.48});
    brandRing = new THREE.Mesh(g,m);
    brandScene.add(brandRing);
    var l1 = new THREE.PointLight(0xE0752D,2.2,20); l1.position.set(3,2,4); brandScene.add(l1);
    var l2 = new THREE.PointLight(0xC49C5A,1.1,20); l2.position.set(-3,-1,3); brandScene.add(l2);
    brandScene.add(new THREE.AmbientLight(0x201812,1.1));
    renderBrandLogo();
  }
  function renderBrandLogo(){
    if (!brandRenderer || !brandRing) return;
    brandRing.rotation.y = clock.getElapsedTime() * 0.32 + scrollProgress * Math.PI * 1.4;
    brandRing.rotation.x = clock.getElapsedTime() * 0.16;
    brandRenderer.render(brandScene, brandCamera);
    if (!document.hidden) requestAnimationFrame(renderBrandLogo);
  }

  /* ---------- THREE.JS EMBER FIELD ---------- */
  var canvas = document.getElementById('ember-canvas');
  var scene, camera, renderer, points, ring, scrollProgress = 0, mouseX = 0, mouseY = 0;

  function makeGlowTexture(){
    var c = document.createElement('canvas'); c.width = 64; c.height = 64;
    var ctx = c.getContext('2d');
    var g = ctx.createRadialGradient(32,32,0,32,32,32);
    g.addColorStop(0, 'rgba(255,200,140,1)');
    g.addColorStop(0.4, 'rgba(224,92,33,0.8)');
    g.addColorStop(1, 'rgba(224,92,33,0)');
    ctx.fillStyle = g; ctx.fillRect(0,0,64,64);
    return new THREE.CanvasTexture(c);
  }

  function initThree(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 12);

    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ember particles
    var count = reduced ? 0 : 260;
    var geo = new THREE.BufferGeometry();
    var positions = new Float32Array(count * 3);
    var speeds = new Float32Array(count);
    var flick = new Float32Array(count);
    for (var i = 0; i < count; i++){
      positions[i*3] = (Math.random()-0.5) * 22;
      positions[i*3+1] = (Math.random()-0.5) * 16;
      positions[i*3+2] = (Math.random()-0.5) * 18;
      speeds[i] = 0.006 + Math.random()*0.014;
      flick[i] = Math.random()*Math.PI*2;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    var mat = new THREE.PointsMaterial({
      size: 0.32, map: makeGlowTexture(), transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, color: 0xE0752D
    });
    points = new THREE.Points(geo, mat);
    points.userData.speeds = speeds;
    points.userData.flick = flick;
    scene.add(points);

    // abstract rotating ring — the "3D emblem"
    var ringGeo = new THREE.TorusKnotGeometry(2.6, 0.22, 160, 12, 2, 3);
    var ringMat = new THREE.MeshStandardMaterial({
      color: 0x2a2016, metalness: 0.75, roughness: 0.32, emissive: 0x3a1a08, emissiveIntensity: 0.4
    });
    ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(0, 0, -4);
    scene.add(ring);

    var key = new THREE.PointLight(0xE0752D, 3.2, 40);
    key.position.set(4, 3, 6);
    scene.add(key);
    var fill = new THREE.PointLight(0xC49C5A, 1.4, 40);
    fill.position.set(-6, -2, 4);
    scene.add(fill);
    scene.add(new THREE.AmbientLight(0x201812, 1.2));

    window.addEventListener('resize', onResize);
    if (!reduced){
      window.addEventListener('mousemove', function(e){
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
      });
    }
    animate();
  }

  function onResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  var clock = new THREE.Clock();
  function animate(){
    requestAnimationFrame(animate);
    if (document.hidden) return;
    var t = clock.getElapsedTime();

    if (points && !reduced){
      var pos = points.geometry.attributes.position;
      var speeds = points.userData.speeds;
      for (var i = 0; i < speeds.length; i++){
        var y = pos.getY(i) + speeds[i];
        if (y > 9) y = -9;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
      points.material.opacity = 0.55 + Math.sin(t*1.4) * 0.15;
    }

    if (ring){
      ring.rotation.y = t * 0.18 + scrollProgress * Math.PI * 1.4;
      ring.rotation.x = t * 0.09;
      ring.material.emissiveIntensity = 0.3 + (0.4 * (1 - scrollProgress*0.6));
    }

    // scroll dolly + subtle mouse parallax
    camera.position.z = 12 - scrollProgress * 6;
    camera.position.x += ((mouseX * 1.4) - camera.position.x) * 0.04;
    camera.position.y += ((-mouseY * 1.0) - camera.position.y) * 0.04;
    camera.lookAt(0,0,-2);

    renderer.render(scene, camera);
  }

  window.addEventListener('scroll', function(){
    var max = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    updateStage(scrollProgress);
  }, { passive: true });

  if (window.THREE){ initThree(); initBrandLogo(); }
  updateStage(0);
})();