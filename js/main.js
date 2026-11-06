/* ============================================================
   CODING MANTIS GAMES — WEBSITE JS
   ============================================================ */

(function () {
  'use strict';

  // ============================================================
  // DATA
  // ============================================================
  const GAMES = [
    {
      id: 'wheel-you-drive',
      name: 'Wheel You Drive?',
      description: 'Grab a friend and take control of the same RC car in this chaotic 2-player co-op game! Each player controls a different part of the car.',
      image: 'assets/games/WheelYouDrive_hero.png',
      menuImage: 'assets/games/WheelYouDrive_menu-card.png',
      href: '#game',
      links: [
        { label: 'Game Page', url: '#game' },
        { label: 'Wishlist', url: 'https://store.steampowered.com/developer/cmg' }
      ]
    }
  ];

  const SOCIALS = [
    { label: 'Facebook',  icon: 'assets/icons/facebook.png',  href: 'https://www.facebook.com/CodingMantisGames' },
    { label: 'X (Twitter)', icon: 'assets/icons/x.png',      href: 'https://twitter.com/CodingMantis' },
    { label: 'Instagram', icon: 'assets/icons/instagram.png', href: 'https://www.instagram.com/codingmantisgames/' },
    { label: 'YouTube',   icon: 'assets/icons/youtube.png',   href: 'https://www.youtube.com/@CodingMantisGames' },
    { label: 'Discord',   icon: 'assets/icons/discord.png',   href: 'https://discord.gg/CodingMantisGames' },
    { label: 'Steam',     icon: 'assets/icons/steam.png',     href: 'https://store.steampowered.com/developer/cmg' },
    { label: 'LinkedIn',  icon: 'assets/icons/linkedin.png',  href: 'https://www.linkedin.com/company/coding-mantis-games' },
    { label: 'itch.io',   icon: 'assets/icons/itchio.png',    href: 'https://codingmantisgames.itch.io/' }
  ];

  const FOOTER_LINKS = [
    { label: 'Home',          href: '#home' },
    { label: 'Games',         href: '#game' },
    { label: 'Press Kit',     href: '#press' },
    { label: 'Careers',       href: '#careers' },
    { label: 'Contact',       href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' }
  ];

  const MENU_COLUMNS = [
    {
      title: 'Studio',
      links: [
        { label: 'Contact',  href: '#contact' },
        { label: 'Careers',  href: '#careers' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Press Kit',       href: '#press' },
        { label: 'Privacy Policy',  href: '#privacy' }
      ]
    }
  ];

  const SUBJECT_OPTIONS = [
    'Game enquiry',
    'Business / collaboration',
    'Press enquiry',
    'Creator program',
    'General'
  ];

  const PRESS_SUBJECTS = [
    'Creator program',
    'Press enquiry',
    'Game coverage',
    'Other'
  ];

  const LOGOS = [
    { label: 'Horiz Black', name: 'Horizontal black logo',   src: 'assets/company-logo/Logo_Horizontal_Black.svg', dark: false },
    { label: 'Horiz White', name: 'Horizontal white logo',   src: 'assets/company-logo/Logo_Horizontal_White.svg', dark: true  },
    { label: 'Vert Black',  name: 'Vertical black logo',     src: 'assets/company-logo/Logo_Vertical_Black.svg',   dark: false },
    { label: 'Vert White',  name: 'Vertical white logo',     src: 'assets/company-logo/Logo_Vertical_White.svg',   dark: true  },
    { label: 'Symbol Black', name: 'Symbol black logo',      src: 'assets/company-logo/Logo_Symbol_Black.svg',     dark: false },
    { label: 'Symbol White', name: 'Symbol white logo',      src: 'assets/company-logo/Logo_Symbol_White.svg',     dark: true  }
  ];

  const STUDIO_FACTS = [
    { label: 'Company',       value: 'Coding Mantis Games (OPC) Private Limited' },
    { label: 'Location',      value: 'Thiruvananthapuram, Kerala, India' },
    { label: 'Press Contact', value: 'studio@codingmantisgames.com' },
    { label: 'Phone',         value: '+91 9061279095' }
  ];

  const GAME_FACTS = [
    { label: 'Platforms', value: 'PC' },
    { label: 'Genres',    value: 'Casual, Indie, Adventure' },
    { label: 'Steam Tags', value: 'Co-op, Multiplayer, Platformer, Funny' },
    { label: 'Developer', value: 'Coding Mantis Games' },
    { label: 'Release',   value: 'Q1 2027' }
  ];

  const SCREENSHOTS = [
    { src: 'assets/games/Screenshots/WheelYouDrive_screenshot-1.jpg', alt: 'Screenshot 1' },
    { src: 'assets/games/Screenshots/WheelYouDrive_screenshot-2.jpg', alt: 'Screenshot 2' },
    { src: 'assets/games/Screenshots/WheelYouDrive_screenshot-3.jpg', alt: 'Screenshot 3' },
    { src: 'assets/games/Screenshots/WheelYouDrive_screenshot-5.jpg', alt: 'Screenshot 4' },
    { src: 'assets/games/Screenshots/WheelYouDrive_screenshot-6.jpg', alt: 'Screenshot 5' },
    { src: 'assets/games/Screenshots/WheelYouDrive_screenshot-7.jpg', alt: 'Screenshot 6' }
  ];

  const ASSET_SETS = {
    videos:      [],
    screenshots: SCREENSHOTS.map((s, i) => ({ ...s, label: `Screenshot 0${i+1}`, fit: 'cover' })),
    keyart:      [{ src: 'assets/games/WheelYouDrive_hero.png',        alt: 'Key art',       label: 'Key Art',     fit: 'cover' }],
    logos:       [{ src: 'assets/games/wheel-you-drive.png',           alt: 'Game logo',     label: 'Game Logo',   fit: 'contain' }],
    icons:       [{ src: 'assets/games/WheelYouDrive_icon.png.png',    alt: 'Game icon',     label: 'Game Icon',   fit: 'contain' }]
  };

  const ABOUT_BLOCKS = [
    {
      title: 'About Wheel You Drive?',
      body: 'Grab a friend and take control of the same RC car in this chaotic 2-player co-op game! Each player controls a different part of the car, so you\'ll need to communicate, coordinate your movement, and somehow make it through every obstacle together.'
    },
    {
      title: 'Two Players, One RC Car!',
      body: 'You and your friend share control of the same RC car. Work together, coordinate your movements, and try to reach the end of each level without driving straight off the track!'
    },
    {
      title: 'Drive Together!',
      body: 'Controlling the car is a team effort. Communicate with your friend, time your movements, and learn how to drive together.'
    },
    {
      title: 'Overcome Obstacles!',
      body: 'Make your way through ramps, narrow paths, jumps, moving obstacles, and other challenges designed to test your teamwork.'
    },
    {
      title: 'Mistakes Will Happen!',
      body: 'One wrong move can send your RC car flying off the course. Try again, improve your coordination, and see if you can finally make it to the end.'
    }
  ];

  const PRIVACY_SECTIONS = [
    { title: 'Who We Are', body: 'Coding Mantis Games (OPC) Private Limited operates this website. This policy explains how we handle personal data collected through the website and links to third-party services.' },
    { title: 'Information You Choose to Provide', body: 'If you contact us by email or through a form once that form is connected to a submission service, we may receive the information you provide, such as your name, email address, phone number, message, and any other details you include.' },
    { title: 'Current Form Status', body: 'At the date shown above, the contact, press, and careers forms on this website are not connected to a server-side submission service. Information entered into those forms is not sent to Coding Mantis Games through the website.' },
    { title: 'How We Use Information', body: 'When we receive personal information from you, we use it to respond to your enquiry, assess an application, discuss a collaboration, provide requested support, maintain our records, and comply with legal obligations. We do not sell personal information.' },
    { title: 'Cookies, Analytics, and Embedded Content', body: 'This website does not currently use its own analytics or advertising cookies. Some pages include YouTube videos using YouTube\'s privacy-enhanced embed domain.' },
    { title: 'Sharing and Service Providers', body: 'We may share personal information only with service providers that help us operate the website or respond to enquiries, when required by law, or when necessary to protect the rights, property, or safety of Coding Mantis Games.' },
    { title: 'Retention and Security', body: 'We keep personal information only for as long as it is reasonably needed for the purpose it was collected, including responding to your request or meeting legal requirements.' },
    { title: 'Your Choices and Rights', body: 'You can ask us to access, correct, update, or delete personal information you have provided, or withdraw consent where processing is based on consent. To make a request, email us using the contact details below.' },
    { title: "Children's Privacy", body: 'Our website is not directed to children. Please do not send us personal information relating to a child unless you are authorised to do so.' },
    { title: 'Changes to This Policy', body: 'We may update this policy when our website, data practices, or legal obligations change. The latest version will always be posted on this page with an updated date.' }
  ];

  // ============================================================
  // STATE
  // ============================================================
  let currentPage = 'home';
  let activeGame = 0;
  let openMenu = null; // 'games' | 'menu' | null
  let activeLogo = 0;
  let activeAssetTab = 'screenshots';
  let aboutOpen = false;
  let lightboxIndex = null;
  let lightboxItems = [];
  let mobileMenuOpen = false;
  let carouselTimer = null;

  // ============================================================
  // DOM HELPERS
  // ============================================================
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const el = (tag, attrs = {}, ...children) => {
    const e = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'className') e.className = v;
      else if (k === 'innerHTML') e.innerHTML = v;
      else if (k === 'textContent') e.textContent = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
      else e.setAttribute(k, v);
    });
    children.forEach(c => {
      if (typeof c === 'string') e.appendChild(document.createTextNode(c));
      else if (c) e.appendChild(c);
    });
    return e;
  };

  // ============================================================
  // RENDER: SOCIAL LINKS
  // ============================================================
  function renderSocialLinks(container, dark = false) {
    container.innerHTML = '';
    SOCIALS.forEach(s => {
      const a = el('a', { href: s.href, 'aria-label': s.label, target: '_blank', rel: 'noopener noreferrer' });
      const img = el('img', { src: s.icon, alt: '' });
      if (dark) img.style.filter = 'brightness(0)';
      a.appendChild(img);
      container.appendChild(a);
    });
  }

  // ============================================================
  // RENDER: FOOTER
  // ============================================================
  function renderFooter() {
    const footerNavEl = $('#footer-nav');
    if (footerNavEl) {
      footerNavEl.innerHTML = '';
      FOOTER_LINKS.forEach(l => {
        const a = el('a', { href: l.href, textContent: l.label });
        a.addEventListener('click', (e) => { e.preventDefault(); navigateTo(l.href.replace('#', '')); });
        footerNavEl.appendChild(a);
      });
    }

    const footerSocials = $('#footer-socials');
    if (footerSocials) renderSocialLinks(footerSocials, false);
  }

  // ============================================================
  // RENDER: MEGA MENU — GAMES
  // ============================================================
  function renderGamesMenu() {
    const grid = $('#games-menu-grid');
    if (!grid) return;
    grid.innerHTML = '';

    GAMES.forEach(g => {
      const card = el('a', { href: g.href, className: 'game-card' });
      card.addEventListener('click', (e) => { e.preventDefault(); closeAllMenus(); navigateTo(g.href.replace('#', '')); });

      const artImg = el('img', { src: g.menuImage || g.image, alt: g.name, className: 'card-art' });
      const scrim = el('div', { className: 'card-scrim' });
      const content = el('div', { className: 'card-content' });
      const title = el('h3', { className: 'card-title', textContent: g.name });
      content.appendChild(title);
      card.append(artImg, scrim, content);
      grid.appendChild(card);
    });

    // Coming soon card
    const soon = el('div', { className: 'coming-soon-card' });
    const kicker = el('span', { className: 'kicker tone-paper', textContent: 'In development' });
    const title = el('p', { innerHTML: '<strong>More games<br>coming soon</strong>' });
    title.style.cssText = 'margin:0; font: 800 clamp(20px,1.65vw,25px)/1.06 var(--font-headline); letter-spacing: var(--tracking-display); text-transform: uppercase;';
    const sub = el('span', { textContent: "Stay tuned for what's next." });
    sub.style.cssText = 'font: 400 var(--text-body-sm)/1.35 var(--font-body); color: var(--mantis-300);';
    soon.append(kicker, title, sub);
    grid.appendChild(soon);
  }

  // ============================================================
  // RENDER: MEGA MENU — SITE
  // ============================================================
  function renderSiteMenu() {
    const cols = $('#menu-cols');
    if (!cols) return;
    cols.innerHTML = '';

    MENU_COLUMNS.forEach(col => {
      const colEl = el('div', { className: 'menu-col' });
      const heading = el('h3', { textContent: col.title });
      colEl.appendChild(heading);
      col.links.forEach(l => {
        const a = el('a', { href: l.href, textContent: l.label });
        a.addEventListener('click', (e) => { e.preventDefault(); closeAllMenus(); navigateTo(l.href.replace('#', '')); });
        colEl.appendChild(a);
      });
      cols.appendChild(colEl);
    });

    const menuSocials = $('#menu-socials');
    if (menuSocials) renderSocialLinks(menuSocials, false);
  }

  // ============================================================
  // RENDER: HOME GAMES SECTION
  // ============================================================
  function renderHomeGames() {
    updateGameDisplay();
    startCarousel();
  }

  function updateGameDisplay() {
    const game = GAMES[activeGame];
    if (!game) return;

    const bgImg = $('#home-game-bg-img');
    if (bgImg) bgImg.src = game.image;

    const nameEl = $('#home-game-name');
    if (nameEl) nameEl.textContent = game.name;

    const descEl = $('#home-game-desc');
    if (descEl) descEl.textContent = game.description;

    const btnsEl = $('#home-game-btns');
    if (btnsEl) {
      btnsEl.innerHTML = '';
      game.links.forEach(l => {
        const a = el('a', { href: l.url, className: 'btn btn-paper', textContent: l.label });
        if (l.url.startsWith('#')) {
          a.addEventListener('click', (e) => { e.preventDefault(); navigateTo(l.url.replace('#', '')); });
        } else {
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
        }
        btnsEl.appendChild(a);
      });
    }
  }

  function startCarousel() {
    clearInterval(carouselTimer);
    if (GAMES.length <= 1) return;
    carouselTimer = setInterval(() => {
      activeGame = (activeGame + 1) % GAMES.length;
      updateGameDisplay();
    }, 6000);
  }

  function stopCarousel() { clearInterval(carouselTimer); }

  // ============================================================
  // RENDER: CONTACT FORM
  // ============================================================
  function renderContactForm(formId, subjects, successId) {
    const selectEl = $(`#${formId} select[name="subject"]`);
    if (selectEl) {
      selectEl.innerHTML = '<option value="" disabled selected>Choose one</option>';
      subjects.forEach(s => {
        selectEl.appendChild(el('option', { value: s, textContent: s }));
      });
    }

    const form = document.getElementById(formId);
    if (form) {
      const errorId = successId.replace('success', 'error');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const errorEl = document.getElementById(errorId);
        const required = form.querySelectorAll('[required]');
        const invalid = Array.from(required).some(f => !f.value.trim());
        if (invalid) {
          if (errorEl) errorEl.classList.add('visible');
          return;
        }
        if (errorEl) errorEl.classList.remove('visible');
        const data = new FormData(form);
        const submitBtn = form.querySelector('[type="submit"]');
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
        try {
          const res = await fetch('https://formspree.io/f/xyeevrbk', {
            method: 'POST', body: data, headers: { Accept: 'application/json' }
          });
          if (res.ok) {
            form.reset();
            const success = document.getElementById(successId);
            if (success) success.classList.add('visible');
            setTimeout(() => { if (success) success.classList.remove('visible'); }, 6000);
          } else {
            alert('Something went wrong. Please try again.');
          }
        } catch {
          alert('Network error. Please check your connection and try again.');
        } finally {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send'; }
        }
      });
    }
  }

  // ============================================================
  // RENDER: PRESS KIT LOGO SELECTOR
  // ============================================================
  function renderLogoSelector() {
    const picker = $('#logo-picker');
    const stageImg = $('#logo-stage-img');
    const stageWrap = $('#logo-stage-wrap');
    const dlBtn = $('#logo-dl-btn');
    const logoName = $('#logo-stage-name');

    if (!picker || !stageImg) return;

    function update(idx) {
      activeLogo = idx;
      const logo = LOGOS[idx];
      stageImg.src = logo.src;
      stageImg.alt = logo.name;
      if (stageWrap) stageWrap.classList.toggle('dark', logo.dark);
      if (dlBtn) {
        dlBtn.href = logo.src;
        dlBtn.download = logo.src.split('/').pop();
      }
      if (logoName) logoName.textContent = logo.name;

      $$('button', picker).forEach((b, i) => b.classList.toggle('active', i === idx));
    }

    picker.innerHTML = '';
    LOGOS.forEach((logo, i) => {
      const btn = el('button', { type: 'button', textContent: logo.label });
      btn.addEventListener('click', () => update(i));
      picker.appendChild(btn);
    });

    update(0);
  }

  // ============================================================
  // RENDER: STUDIO FACTS
  // ============================================================
  function renderStudioFacts(listId) {
    const list = document.getElementById(listId);
    if (!list) return;
    list.innerHTML = '';
    STUDIO_FACTS.forEach(f => {
      const li = el('li');
      li.innerHTML = `<span class="fact-label">${f.label}</span><span class="fact-value">${f.value}</span>`;
      list.appendChild(li);
    });
  }

  function renderGameFacts(listId) {
    const list = document.getElementById(listId);
    if (!list) return;
    list.innerHTML = '';
    GAME_FACTS.forEach(f => {
      const li = el('li');
      li.innerHTML = `<span class="fact-label">${f.label}</span><span class="fact-value">${f.value}</span>`;
      list.appendChild(li);
    });
  }

  // ============================================================
  // RENDER: SCREENSHOTS (game page)
  // ============================================================
  function renderScreenshots() {
    const grid = $('#game-screenshots-grid');
    if (!grid) return;
    grid.innerHTML = '';
    SCREENSHOTS.forEach((shot, i) => {
      const plate = el('div', { className: 'screenshot-plate', tabindex: '0', 'aria-label': `View ${shot.alt}` });
      const img = el('img', { src: shot.src, alt: shot.alt, loading: 'lazy' });
      plate.appendChild(img);
      plate.addEventListener('click', () => openLightbox(SCREENSHOTS, i));
      plate.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(SCREENSHOTS, i); });
      grid.appendChild(plate);
    });
  }

  // ============================================================
  // RENDER: ASSET TABS (game press kit)
  // ============================================================
  function renderAssetTabs() {
    const tabBar = $('#asset-tab-bar');
    if (!tabBar) return;

    const tabs = [
      { id: 'videos',      label: 'Videos (1)' },
      { id: 'screenshots', label: `Screenshots (${SCREENSHOTS.length})` },
      { id: 'keyart',      label: 'Key Art (1)' },
      { id: 'logos',       label: 'Logos (1)' },
      { id: 'icons',       label: 'Icons (1)' }
    ];

    tabBar.innerHTML = '';
    tabs.forEach(t => {
      const btn = el('button', { type: 'button', textContent: t.label });
      btn.classList.toggle('active', t.id === activeAssetTab);
      btn.addEventListener('click', () => switchAssetTab(t.id));
      tabBar.appendChild(btn);
    });

    renderAssetContent();
  }

  function switchAssetTab(tabId) {
    activeAssetTab = tabId;
    $$('#asset-tab-bar button').forEach(b => b.classList.remove('active'));
    const activeBtn = $(`#asset-tab-bar button:nth-child(${['videos','screenshots','keyart','logos','icons'].indexOf(tabId)+1})`);
    if (activeBtn) activeBtn.classList.add('active');
    renderAssetContent();
  }

  function renderAssetContent() {
    const content = $('#asset-content');
    if (!content) return;
    content.innerHTML = '';

    if (activeAssetTab === 'videos') {
      const frame = el('div', { className: 'video-frame' });
      frame.style.maxWidth = '100%';
      const placeholder = el('div', { className: 'video-placeholder' });
      const posterImg = el('img', { src: 'assets/games/WheelYouDrive_hero.png', alt: '' });
      const playBtn = el('div', { className: 'video-play-btn', innerHTML: '▶' });
      placeholder.append(posterImg, playBtn);
      placeholder.addEventListener('click', () => {
        frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/iHG69JuavUg?autoplay=1" title="Wheel You Drive? trailer" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      });
      frame.appendChild(placeholder);
      content.appendChild(frame);
      return;
    }

    const items = ASSET_SETS[activeAssetTab] || [];
    if (items.length === 0) {
      content.innerHTML = '<p style="color: var(--text-muted); padding: 20px 0;">No assets in this category yet.</p>';
      return;
    }

    const grid = el('div', { className: 'asset-grid' });
    items.forEach((item, i) => {
      const tile = el('div', { className: 'asset-tile' });
      const thumb = el('div', { className: 'asset-thumb' });
      const img = el('img', { src: item.src, alt: '', loading: 'lazy' });
      if (item.fit === 'contain') img.className = 'contain';
      const viewBtn = el('button', { type: 'button', className: 'view-btn', 'aria-label': `View ${item.label}` });
      viewBtn.innerHTML = `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><line x1="10.5" y1="7.6" x2="10.5" y2="13.4"/><line x1="7.6" y1="10.5" x2="13.4" y2="10.5"/><line x1="15.4" y1="15.4" x2="20" y2="20"/></svg>`;
      const dlBtn = el('a', { href: item.src, download: item.src.split('/').pop(), className: 'asset-dl', 'aria-label': `Download ${item.label}` });
      dlBtn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 3v12"/><path d="M6.5 10.5 12 16l5.5-5.5"/><path d="M4 20h16"/></svg>`;

      viewBtn.addEventListener('click', () => openLightbox(items, i));
      thumb.append(img, viewBtn, dlBtn);

      const label = el('p', { className: 'asset-label', textContent: item.label });
      tile.append(thumb, label);
      grid.appendChild(tile);
    });
    content.appendChild(grid);
  }

  // ============================================================
  // LIGHTBOX
  // ============================================================
  function openLightbox(items, index) {
    lightboxItems = items;
    lightboxIndex = index;
    updateLightbox();
    const lb = $('#lightbox');
    if (lb) {
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    const lb = $('#lightbox');
    if (lb) lb.classList.remove('open');
    document.body.style.overflow = '';
    lightboxIndex = null;
    lightboxItems = [];
  }

  function updateLightbox() {
    if (lightboxIndex === null || !lightboxItems.length) return;
    const item = lightboxItems[lightboxIndex];
    const img = $('#lightbox-img');
    const label = $('#lightbox-label');
    const meta = $('#lightbox-meta');
    const dlBtn = $('#lightbox-dl');
    const thumbs = $('#lightbox-thumbs');

    if (img) img.src = item.src || item.image || '';
    if (img) img.alt = item.alt || item.label || '';
    if (label) label.textContent = item.alt || item.label || '';
    if (meta) meta.textContent = (item.src || item.image || '').split('/').pop() || '';
    if (dlBtn) {
      dlBtn.href = item.src || item.image || '';
      dlBtn.download = (item.src || item.image || '').split('/').pop();
    }

    if (thumbs) {
      thumbs.innerHTML = '';
      lightboxItems.forEach((t, i) => {
        const btn = el('button', { type: 'button', 'aria-label': `View ${t.alt || t.label || ''}` });
        btn.classList.toggle('active', i === lightboxIndex);
        const tImg = el('img', { src: t.src || t.image || '', alt: '' });
        btn.appendChild(tImg);
        btn.addEventListener('click', () => { lightboxIndex = i; updateLightbox(); });
        thumbs.appendChild(btn);
      });
    }
  }

  // ============================================================
  // ABOUT GAME TOGGLE
  // ============================================================
  function renderAboutGame() {
    const container = $('#about-game-blocks');
    if (!container) return;

    function render() {
      container.innerHTML = '';
      const visible = aboutOpen ? ABOUT_BLOCKS : ABOUT_BLOCKS.slice(0, 2);
      visible.forEach(b => {
        const block = el('div', { className: 'about-block' });
        block.innerHTML = `<h3>${b.title}</h3><p>${b.body}</p>`;
        container.appendChild(block);
      });
      if (aboutOpen) {
        const callout = el('p');
        callout.style.cssText = 'margin: 0 0 var(--space-6); max-width: var(--width-prose); font: 700 var(--text-lead)/1.35 var(--font-heading); color: var(--text-strong); text-wrap: pretty;';
        callout.textContent = 'Grab a friend, take control of the RC car, and find out how good your teamwork really is. Two players. One RC car. Good luck!';
        container.appendChild(callout);
      }
    }

    render();

    const toggleBtn = $('#about-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = aboutOpen ? 'Show less' : 'Show more';
      toggleBtn.addEventListener('click', () => {
        aboutOpen = !aboutOpen;
        render();
        const btn = $('#about-toggle');
        if (btn) btn.textContent = aboutOpen ? 'Show less' : 'Show more';
      });
    }
  }

  // ============================================================
  // NAVIGATION (MENUS)
  // ============================================================
  function closeAllMenus() {
    openMenu = null;
    updateMenuState();
    updateHeaderStyle();
  }

  function toggleMenu(which) {
    openMenu = openMenu === which ? null : which;
    updateMenuState();
    updateHeaderStyle();
  }

  const PAGE_ACCENT = {
    home: 'friends', game: 'family', press: 'family',
    gamekit: 'good-times', careers: 'couples',
    contact: 'friends', privacy: 'family', '404': 'friends'
  };

  function updateMenuState() {
    const gamesMenu = $('#mega-menu-games');
    const siteMenu  = $('#mega-menu-site');
    const gamesBtn  = $('#btn-games-menu');
    const menuBtn   = $('#btn-site-menu');

    if (gamesMenu) gamesMenu.classList.toggle('open', openMenu === 'games');
    if (siteMenu)  siteMenu.classList.toggle('open', openMenu === 'menu');
    if (gamesBtn)  gamesBtn.setAttribute('aria-expanded', String(openMenu === 'games'));
    if (menuBtn)   menuBtn.setAttribute('aria-expanded', String(openMenu === 'menu'));

    if (siteMenu) {
      siteMenu.setAttribute('data-accent', PAGE_ACCENT[currentPage] || 'friends');
    }
  }

  function updateHeaderStyle() {
    const header = $('.site-header');
    if (!header) return;

    // Pages whose top section has a dark background — use white logo/text
    const darkTopPages = ['game', 'gamekit'];
    if (darkTopPages.includes(currentPage) || openMenu) {
      header.classList.add('over-dark');
    } else {
      header.classList.remove('over-dark');
    }

    if (openMenu) {
      header.classList.add('menu-open');
    } else {
      header.classList.remove('menu-open');
    }
  }

  // ============================================================
  // MOBILE MENU
  // ============================================================
  function renderMobileMenu() {
    const nav = $('#mobile-nav');
    if (!nav) return;
    nav.innerHTML = '';

    const allLinks = [
      { label: 'Home',         href: '#home' },
      { label: 'Games',        href: '#game' },
      { label: 'Press Kit',    href: '#press' },
      { label: 'Careers',      href: '#careers' },
      { label: 'Contact',      href: '#contact' },
      { label: 'Privacy',      href: '#privacy' }
    ];

    allLinks.forEach(l => {
      const a = el('a', { href: l.href, className: 'mobile-nav-link', textContent: l.label });
      a.addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        navigateTo(l.href.replace('#', ''));
      });
      nav.appendChild(a);
    });

    const mSocials = $('#mobile-socials');
    if (mSocials) renderSocialLinks(mSocials, false);
  }

  function openMobileMenu() {
    mobileMenuOpen = true;
    const menu = $('#mobile-menu');
    if (menu) menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    const menu = $('#mobile-menu');
    if (menu) menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ============================================================
  // PAGE ROUTING
  // ============================================================
  const PAGES = ['home', 'game', 'press', 'gamekit', 'careers', 'contact', 'privacy', '404'];
  // Section anchors that live inside pages — not page routes, so don't 404 on them
  const SECTION_ANCHORS = new Set(['games', 'about', 'apply', 'press-contact', 'presskit-games', 'creator-form-link']);

  function navigateTo(pageId) {
    if (!PAGES.includes(pageId)) pageId = '404';
    currentPage = pageId;

    // Hide all pages
    $$('.page').forEach(p => p.classList.remove('visible'));

    // Show active page
    const active = $(`#page-${pageId}`);
    if (active) active.classList.add('visible');

    // Update hash
    history.pushState(null, '', `#${pageId}`);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update header
    setTimeout(updateHeaderStyle, 50);

    // Page-specific setup
    if (pageId === 'home') renderHomeGames();
    else stopCarousel();

    if (pageId === 'press') {
      renderLogoSelector();
      renderStudioFacts('studio-facts-list');
    }

    if (pageId === 'gamekit') {
      renderAboutGame();
      renderAssetTabs();
      renderGameFacts('game-facts-list');
    }

    if (pageId === 'contact') {
      const contactSocials = $('#contact-socials');
      if (contactSocials && !contactSocials.hasChildNodes()) {
        renderSocialLinks(contactSocials, true);
      }
    }

    // Trigger scroll reveals on new page
    observeReveals();
  }

  function handleHashChange() {
    const hash = window.location.hash.replace('#', '') || 'home';
    if (PAGES.includes(hash)) {
      navigateTo(hash);
    } else if (hash && !SECTION_ANCHORS.has(hash)) {
      navigateTo('404');
    }
  }

  // ============================================================
  // SCROLL REVEAL (Intersection Observer)
  // ============================================================
  let revealObserver;

  function observeReveals() {
    const reveals = $$('.reveal');
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    }
    reveals.forEach(r => {
      if (!r.classList.contains('in-view')) {
        revealObserver.observe(r);
      }
    });
  }

  // ============================================================
  // PAGE SWITCHER
  // ============================================================
  // ============================================================
  // INIT FORMS
  // ============================================================
  function initForms() {
    renderContactForm('contact-form-home', SUBJECT_OPTIONS, 'contact-success-home');
    renderContactForm('contact-form-page', SUBJECT_OPTIONS, 'contact-success-page');
    renderContactForm('press-contact-form', PRESS_SUBJECTS, 'press-contact-success');

    // Careers form
    const careersForm = $('#careers-form');
    if (careersForm) {
      careersForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const errorEl = $('#careers-error');
        const required = careersForm.querySelectorAll('[required]');
        const invalid = Array.from(required).some(f => !f.value.trim());
        if (invalid) {
          if (errorEl) errorEl.classList.add('visible');
          return;
        }
        if (errorEl) errorEl.classList.remove('visible');
        const data = new FormData(careersForm);
        const submitBtn = careersForm.querySelector('[type="submit"]');
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
        try {
          const res = await fetch('https://formspree.io/f/xzeewnke', {
            method: 'POST', body: data, headers: { Accept: 'application/json' }
          });
          if (res.ok) {
            careersForm.reset();
            const success = $('#careers-success');
            if (success) success.classList.add('visible');
            setTimeout(() => { if (success) success.classList.remove('visible'); }, 6000);
          } else {
            alert('Something went wrong. Please try again.');
          }
        } catch {
          alert('Network error. Please check your connection and try again.');
        } finally {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Application'; }
        }
      });
    }
  }

  // ============================================================
  // INIT PRIVACY
  // ============================================================
  function renderPrivacy() {
    const article = $('#privacy-article');
    if (!article) return;
    article.innerHTML = '';
    PRIVACY_SECTIONS.forEach(sec => {
      const section = el('section', { className: 'policy-section' });
      section.innerHTML = `<h2>${sec.title}</h2><p>${sec.body}</p>`;
      article.appendChild(section);
    });
    // Add contact section
    const contactSec = el('section', { className: 'policy-section' });
    contactSec.innerHTML = `<h2>Contact Us</h2><p>For privacy questions or requests, email <a href="mailto:studio@codingmantisgames.com" style="color:var(--text-strong);font-weight:700;text-decoration:underline;text-decoration-color:var(--accent);text-decoration-thickness:2px;text-underline-offset:3px;">studio@codingmantisgames.com</a> or use our <a href="#contact" style="color:var(--text-strong);font-weight:700;text-decoration:underline;text-decoration-color:var(--accent);text-decoration-thickness:2px;text-underline-offset:3px;">contact page</a>.</p>`;
    $$('a', contactSec).forEach(a => {
      if (a.href.includes('#contact')) {
        a.addEventListener('click', (e) => { e.preventDefault(); navigateTo('contact'); });
      }
    });
    article.appendChild(contactSec);
  }

  // ============================================================
  // EVENT LISTENERS
  // ============================================================
  function bindEvents() {
    // Games menu button
    const gamesMenuBtn = $('#btn-games-menu');
    if (gamesMenuBtn) gamesMenuBtn.addEventListener('click', () => toggleMenu('games'));

    // Site menu button
    const siteMenuBtn = $('#btn-site-menu');
    if (siteMenuBtn) siteMenuBtn.addEventListener('click', () => toggleMenu('menu'));

    // Close menus on overlay click (click on main content)
    document.addEventListener('click', (e) => {
      if (openMenu && !e.target.closest('.mega-menu') && !e.target.closest('.site-header')) {
        closeAllMenus();
      }
    });

    // Escape key to close menus / lightbox / mobile menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) closeLightbox();
        else if (openMenu) closeAllMenus();
        else if (mobileMenuOpen) closeMobileMenu();
      }
    });

    // Mobile hamburger
    const hamburger = $('#hamburger');
    if (hamburger) hamburger.addEventListener('click', () => {
      if (mobileMenuOpen) closeMobileMenu();
      else openMobileMenu();
    });

    // Mobile menu close
    const mobileClose = $('#mobile-close');
    if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);

    // Hash change
    window.addEventListener('popstate', handleHashChange);

    // Home: pause carousel on hover
    const homeGames = $('.home-games');
    if (homeGames) {
      homeGames.addEventListener('mouseenter', stopCarousel);
      homeGames.addEventListener('mouseleave', () => { if (currentPage === 'home') startCarousel(); });
    }

    // Carousel prev/next
    const prevBtn = $('#carousel-prev');
    const nextBtn = $('#carousel-next');
    if (prevBtn) prevBtn.addEventListener('click', () => {
      stopCarousel();
      activeGame = (activeGame - 1 + GAMES.length) % GAMES.length;
      updateGameDisplay();
      startCarousel();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      stopCarousel();
      activeGame = (activeGame + 1) % GAMES.length;
      updateGameDisplay();
      startCarousel();
    });

    // Lightbox close/nav
    const lbClose = $('#lightbox-close');
    if (lbClose) lbClose.addEventListener('click', closeLightbox);

    const lbPrev = $('#lightbox-prev');
    if (lbPrev) lbPrev.addEventListener('click', () => {
      lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
      updateLightbox();
    });

    const lbNext = $('#lightbox-next');
    if (lbNext) lbNext.addEventListener('click', () => {
      lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
      updateLightbox();
    });

    // Game page trailer
    const trailerPlaceholder = $('#trailer-placeholder');
    const trailerFrame = $('#trailer-frame');
    if (trailerPlaceholder && trailerFrame) {
      trailerPlaceholder.addEventListener('click', () => {
        trailerFrame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/s7fbn5qViWA?autoplay=1" title="Wheel You Drive? trailer" allow="autoplay; encrypted-media" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>`;
        trailerPlaceholder.style.display = 'none';
      });
    }

    // Internal links
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a) {
        const hash = a.getAttribute('href').replace('#', '');
        if (PAGES.includes(hash)) {
          e.preventDefault();
          navigateTo(hash);
        }
      }
    });
  }

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    // Set up social links in footer
    renderFooter();

    // Set up mega menus
    renderGamesMenu();
    renderSiteMenu();

    // Set up mobile menu
    renderMobileMenu();

    // Set up privacy content
    renderPrivacy();

    // Init forms
    initForms();

    // Set up screenshots on game page
    renderScreenshots();

    // Bind all events
    bindEvents();

    // Navigate to initial page
    const hash = window.location.hash.replace('#', '');
    if (!hash || PAGES.includes(hash)) {
      navigateTo(hash || 'home');
    } else if (!SECTION_ANCHORS.has(hash)) {
      navigateTo('404');
    } else {
      navigateTo('home');
    }

    // Initial reveals
    setTimeout(observeReveals, 200);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
