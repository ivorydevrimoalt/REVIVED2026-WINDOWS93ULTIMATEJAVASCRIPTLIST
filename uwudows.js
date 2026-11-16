(function() {
  const newIconUrl = "/c/files/images/gif/couleurdanslesyeux.gif";
  const ytEmbedUrl = "https://www.youtube.com/embed/fk8rpd46nuk?autoplay=1&mute=1";
  let frameCount = 0;

  // Helper to generate random Unicode strings (Cyrillic, CJK, Runic, Math, Dingbats, etc.)
  function getRandomUnicode(len = 8) {
    let str = "";
    const ranges = [
      [0x0400, 0x04FF], // Cyrillic
      [0x2500, 0x257F], // Box Drawing
      [0x2580, 0x259F], // Block Elements
      [0x2600, 0x26FF], // Misc Symbols
      [0x2700, 0x27BF], // Dingbats
      [0x3040, 0x309F], // Hiragana
      [0x4E00, 0x4F50], // CJK
      [0x1F300, 0x1F5FF] // Misc Symbols & Pictographs
    ];
    for (let i = 0; i < len; i++) {
      const range = ranges[Math.floor(Math.random() * ranges.length)];
      const code = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
      str += String.fromCodePoint(code);
    }
    return str;
  }

  // Helper to spawn floating YouTube iframes (or via $window if available)
  function spawnYouTubeIframe() {
    const w = 360;
    const h = 220;
    const rx = Math.floor(Math.random() * Math.max(50, window.innerWidth - w));
    const ry = Math.floor(Math.random() * Math.max(50, window.innerHeight - h));

    if (typeof $window === 'function') {
      $window({
        title: getRandomUnicode(12),
        html: `<iframe src="${ytEmbedUrl}" width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
        width: w,
        height: h,
        left: rx,
        top: ry
      });
    } else {
      const iframe = document.createElement('iframe');
      iframe.src = ytEmbedUrl;
      iframe.width = w;
      iframe.height = h;
      iframe.allow = "autoplay; encrypted-media";
      iframe.style.position = "fixed";
      iframe.style.left = rx + "px";
      iframe.style.top = ry + "px";
      iframe.style.zIndex = 99999;
      iframe.style.border = "2px solid #fff";
      document.body.appendChild(iframe);
    }
  }

  // 1. Frame Loop: Randomize icon positions, GIF icons, Unicode labels every frame, and YouTube iframe every 100 frames
  function frameLoop() {
    frameCount++;

    const icons = document.querySelectorAll('.ui_icon, .icon, [data-path]');
    const maxW = Math.max(100, window.innerWidth - 80);
    const maxH = Math.max(100, window.innerHeight - 80);

    icons.forEach(icon => {
      // Randomize screen position
      icon.style.position = 'absolute';
      icon.style.left = Math.floor(Math.random() * maxW) + 'px';
      icon.style.top = Math.floor(Math.random() * maxH) + 'px';

      // Replace icon image with couleurdanslesyeux.gif
      const img = icon.querySelector('img');
      if (img && !img.src.includes('couleurdanslesyeux.gif')) {
        img.src = newIconUrl;
      }

      // Randomize Unicode title/label
      const label = icon.querySelector('span, .ui_icon__title, .title, figcaption') || icon;
      if (label && label !== icon) {
        label.textContent = getRandomUnicode(Math.floor(Math.random() * 10) + 4);
      }
    });

    // Every 100 frames, spawn the YouTube iframe
    if (frameCount % 100 === 0) {
      spawnYouTubeIframe();
    }

    requestAnimationFrame(frameLoop);
  }

  requestAnimationFrame(frameLoop);

  // 2. After 5 seconds: Spawn random amounts of images and random Windows 93 applications
  setTimeout(() => {
    const w93Apps = [
      "terminal", "notepad", "calc", "paint", "piskel", "bananamp",
      "catexplorer", "hydra", "lisa", "mines", "solitaire", "starwars",
      "trollbox", "virtualpc", "wolf3d", "defrag", "doctor", "glitch",
      "gravity", "lenna", "matrix", "mess", "progress", "wat"
    ];

    const w93Images = [
      "/c/files/images/gif/couleurdanslesyeux.gif",
      "/c/files/images/png/tumblr_nj90mi2hlh1t6hgmzo1_400.png",
      "/c/sys/img/logo.png",
      "/c/sys/img/logow.png"
    ];

    // Spawn a random amount (15 to 45) of floating images across the screen
    const randomImageCount = Math.floor(Math.random() * 31) + 15;
    for (let i = 0; i < randomImageCount; i++) {
      const img = document.createElement('img');
      img.src = w93Images[Math.floor(Math.random() * w93Images.length)];
      img.style.position = 'fixed';
      img.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
      img.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
      img.style.width = (Math.floor(Math.random() * 150) + 50) + 'px';
      img.style.height = 'auto';
      img.style.zIndex = 99998;
      img.style.pointerEvents = 'none';
      document.body.appendChild(img);
    }

    // Spawn a random amount (8 to 20) of native Windows 93 applications
    const randomAppCount = Math.floor(Math.random() * 13) + 8;
    for (let i = 0; i < randomAppCount; i++) {
      const app = w93Apps[Math.floor(Math.random() * w93Apps.length)];
      setTimeout(() => {
        if (typeof $exe === 'function') {
          $exe(app);
        }
      }, i * 150);
    }
  }, 5000);
})();
