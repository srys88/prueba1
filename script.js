const loremShort = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const loremMedium = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const loremLong = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const characters = {
    agua: {
        id: 'agua',
        name: 'ISABELLA',
        subtitle: 'GUARDIANA LOREM IPSUM',
        roleIcon: '💧',
        roleName: 'CLASE LOREM IPSUM',
        tagline: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        portrait: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fantasy%20water%20elemental%20female%20warrior%20queen%20with%20flowing%20blue%20hair%20made%20of%20water%20wearing%20elegant%20ocean%20armor%20with%20pearls%20and%20coral%2C%20mystical%20aqua%20magical%20powers%20glowing%20eyes%2C%20cinematic%20dramatic%20lighting%2C%20underwater%20ruins%20background%2C%20epic%20fantasy%20art%20style%2C%20ultra%20detailed&image_size=square_hd',
        heroPortrait: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fantasy%20water%20elemental%20female%20warrior%20queen%20with%20flowing%20blue%20hair%20made%20of%20water%20wearing%20elegant%20ocean%20armor%20with%20pearls%20and%20coral%2C%20mystical%20aqua%20magical%20powers%20glowing%20eyes%2C%20cinematic%20dramatic%20lighting%2C%20underwater%20ruins%20background%2C%20epic%20fantasy%20art%20style%2C%20ultra%20detailed&image_size=portrait_16_9',
        loreDropCap: 'L',
        lore: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        stats: { dificultad: 70, poder: 90, magia: 95, resistencia: 60 },
        elementName: 'AGUA',
        elementSubtitle: 'LOREM IPSUM ELEMENTUM',
        elementSymbol: '💧',
        elementColor: '#00d4ff',
        elementDarkColor: '#005580',
        elementGlow: 'rgba(0, 212, 255, 0.5)',
        elementDescription: loremMedium,
        abilities: [
            { icon: '🌊', name: 'HABILIDAS PRIMA', desc: loremShort },
            { icon: '🫧', name: 'HABILIDAS SECUNDA', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { icon: '💧', name: 'HABILIDAS TERTIA', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
        ],
        weaponIcon: '🔱',
        weaponName: 'ARMA LOREM IPSUM',
        weaponDesc: loremMedium,
        worldName: 'REGIO AQUARUM',
        worldSubtitle: 'TERRA LOREM IPSUM',
        worldImage: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=stunning%20underwater%20fantasy%20kingdom%20city%20of%20atlantis%20with%20crystal%20towers%20bioluminescent%20coral%2C%20schools%20of%20exotic%20fish%2C%20sea%20turtles%2C%20bubbles%2C%20sunken%20ruins%2C%20dramatic%20divine%20lighting%20rays%20through%20water%2C%20epic%20cinematic%20fantasy%20art%2C%20ultra%20detailed%204k&image_size=landscape_16_9',
        worldDescription: loremLong,
        worldFacts: [
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' }
        ],
        heroGradient: 'radial-gradient(ellipse at 80% 50%, rgba(0, 212, 255, 0.18) 0%, transparent 60%)',
        orbBgColor: '#00d4ff',
        worldBgGradient: 'radial-gradient(ellipse at 30% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)'
    },
    fuego: {
        id: 'fuego',
        name: 'MAJO',
        subtitle: 'SENHORA LOREM IPSUM',
        roleIcon: '🔥',
        roleName: 'CLASE LOREM IPSUM',
        tagline: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        portrait: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fantasy%20fire%20elemental%20female%20warrior%20queen%20with%20burning%20flaming%20red%20hair%20made%20of%20fire%2C%20wearing%20dark%20elegant%20volcanic%20armor%20with%20lava%20veins%2C%20crimson%20glowing%20eyes%2C%20fire%20magical%20powers%2C%20burning%20castle%20volcano%20background%2C%20epic%20cinematic%20fantasy%20art%2C%20ultra%20detailed&image_size=square_hd',
        heroPortrait: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fantasy%20fire%20elemental%20female%20warrior%20queen%20with%20burning%20flaming%20red%20hair%20made%20of%20fire%2C%20wearing%20dark%20elegant%20volcanic%20armor%20with%20lava%20veins%2C%20crimson%20glowing%20eyes%2C%20fire%20magical%20powers%2C%20burning%20castle%20volcano%20background%2C%20epic%20cinematic%20fantasy%20art%2C%20ultra%20detailed&image_size=portrait_16_9',
        loreDropCap: 'L',
        lore: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        stats: { dificultad: 60, poder: 95, magia: 75, resistencia: 90 },
        elementName: 'FUEGO',
        elementSubtitle: 'LOREM IPSUM ELEMENTUM',
        elementSymbol: '🔥',
        elementColor: '#ff5500',
        elementDarkColor: '#801a00',
        elementGlow: 'rgba(255, 85, 0, 0.5)',
        elementDescription: loremMedium,
        abilities: [
            { icon: '🌋', name: 'HABILIDAS PRIMA', desc: loremShort },
            { icon: '🛡️', name: 'HABILIDAS SECUNDA', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { icon: '⚡', name: 'HABILIDAS TERTIA', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
        ],
        weaponIcon: '⚔️',
        weaponName: 'ARMA LOREM IPSUM',
        weaponDesc: loremMedium,
        worldName: 'REGIO IGNIS',
        worldSubtitle: 'TERRA LOREM IPSUM',
        worldImage: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=epic%20fantasy%20volcanic%20kingdom%20city%20built%20on%20active%20volcanoes%20with%20lava%20rivers%2C%20obsidian%20towers%20with%20fire%2C%20dragons%20flying%20in%20red%20dramatic%20sky%2C%20ash%20falling%2C%20molten%20rock%2C%20cinematic%20dramatic%20lighting%20sunset%2C%20ultra%20detailed%204k&image_size=landscape_16_9',
        worldDescription: loremLong,
        worldFacts: [
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' }
        ],
        heroGradient: 'radial-gradient(ellipse at 80% 50%, rgba(255, 85, 0, 0.2) 0%, transparent 60%)',
        orbBgColor: '#ff5500',
        worldBgGradient: 'radial-gradient(ellipse at 30% 50%, rgba(255, 85, 0, 0.08) 0%, transparent 60%)'
    },
    aire: {
        id: 'aire',
        name: 'JUANJOSE',
        subtitle: 'SENHOR LOREM IPSUM',
        roleIcon: '🌪️',
        roleName: 'CLASE LOREM IPSUM',
        tagline: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        portrait: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fantasy%20air%20wind%20elemental%20male%20elf%20warrior%20archer%20with%20flowing%20silver%20white%20hair%20wearing%20elegant%20light%20feather%20armor%20with%20wings%20made%20of%20air%2C%20mystical%20wind%20magical%20powers%20aura%2C%20pale%20blue%20glowing%20eyes%2C%20clouds%20and%20floating%20sky%20islands%20background%2C%20epic%20cinematic%20fantasy%20art%2C%20ultra%20detailed&image_size=square_hd',
        heroPortrait: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fantasy%20air%20wind%20elemental%20male%20elf%20warrior%20archer%20with%20flowing%20silver%20white%20hair%20wearing%20elegant%20light%20feather%20armor%20with%20wings%20made%20of%20air%2C%20mystical%20wind%20magical%20powers%20aura%2C%20pale%20blue%20glowing%20eyes%2C%20clouds%20and%20floating%20sky%20islands%20background%2C%20epic%20cinematic%20fantasy%20art%2C%20ultra%20detailed&image_size=portrait_16_9',
        loreDropCap: 'L',
        lore: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        stats: { dificultad: 85, poder: 80, magia: 85, resistencia: 50 },
        elementName: 'AIRE',
        elementSubtitle: 'LOREM IPSUM ELEMENTUM',
        elementSymbol: '🌪️',
        elementColor: '#b5ffff',
        elementDarkColor: '#4da6a6',
        elementGlow: 'rgba(181, 255, 255, 0.5)',
        elementDescription: loremMedium,
        abilities: [
            { icon: '🏹', name: 'HABILIDAS PRIMA', desc: loremShort },
            { icon: '🪶', name: 'HABILIDAS SECUNDA', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { icon: '💨', name: 'HABILIDAS TERTIA', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
        ],
        weaponIcon: '🏹',
        weaponName: 'ARMA LOREM IPSUM',
        weaponDesc: loremMedium,
        worldName: 'REGIO AERIS',
        worldSubtitle: 'TERRA LOREM IPSUM',
        worldImage: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=breathtaking%20floating%20sky%20islands%20fantasy%20kingdom%20above%20the%20clouds%20with%20crystal%20white%20towers%2C%20waterfalls%20falling%20from%20the%20sky%2C%20dragons%20and%20pegasus%20flying%2C%20dramatic%20golden%20hour%20clouds%2C%20airships%2C%20divine%20sunset%20lighting%2C%20epic%20cinematic%20fantasy%20art%2C%20ultra%20detailed%204k&image_size=landscape_16_9',
        worldDescription: loremLong,
        worldFacts: [
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' }
        ],
        heroGradient: 'radial-gradient(ellipse at 80% 50%, rgba(181, 255, 255, 0.18) 0%, transparent 60%)',
        orbBgColor: '#b5ffff',
        worldBgGradient: 'radial-gradient(ellipse at 30% 50%, rgba(181, 255, 255, 0.07) 0%, transparent 60%)'
    },
    tierra: {
        id: 'tierra',
        name: 'SARAY',
        subtitle: 'COLOSA LOREM IPSUM',
        roleIcon: '⛰️',
        roleName: 'CLASE LOREM IPSUM',
        tagline: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        portrait: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fantasy%20earth%20stone%20elemental%20female%20giant%20dwarf%20warrior%20extremely%20muscular%20with%20stone%20crystal%20skin%20texture%2C%20wearing%20heavy%20mountain%20rock%20armor%20with%20gems%20crystals%2C%20holding%20a%20massive%20hammer%2C%20mountain%20canyon%20background%2C%20dramatic%20sun%20rays%2C%20epic%20cinematic%20fantasy%20art%2C%20ultra%20detailed&image_size=square_hd',
        heroPortrait: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fantasy%20earth%20stone%20elemental%20female%20giant%20dwarf%20warrior%20extremely%20muscular%20with%20stone%20crystal%20skin%20texture%2C%20wearing%20heavy%20mountain%20rock%20armor%20with%20gems%20crystals%2C%20holding%20a%20massive%20hammer%2C%20mountain%20canyon%20background%2C%20dramatic%20sun%20rays%2C%20epic%20cinematic%20fantasy%20art%2C%20ultra%20detailed&image_size=portrait_16_9',
        loreDropCap: 'L',
        lore: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        stats: { dificultad: 50, poder: 85, magia: 60, resistencia: 98 },
        elementName: 'TIERRA',
        elementSubtitle: 'LOREM IPSUM ELEMENTUM',
        elementSymbol: '⛰️',
        elementColor: '#c9a05a',
        elementDarkColor: '#6b4e1e',
        elementGlow: 'rgba(201, 160, 90, 0.5)',
        elementDescription: loremMedium,
        abilities: [
            { icon: '🔨', name: 'HABILIDAS PRIMA', desc: loremShort },
            { icon: '🏔️', name: 'HABILIDAS SECUNDA', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { icon: '💎', name: 'HABILIDAS TERTIA', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
        ],
        weaponIcon: '🔨',
        weaponName: 'ARMA LOREM IPSUM',
        weaponDesc: loremMedium,
        worldName: 'REGIO TERRAE',
        worldSubtitle: 'TERRA LOREM IPSUM',
        worldImage: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=majestic%20mountain%20valley%20fantasy%20kingdom%20of%20dwarves%20and%20giants%20with%20stone%20cities%20built%20into%20cliffs%2C%20dams%2C%20rivers%2C%20emerald%20green%20forests%2C%20waterfalls%2C%20crystal%20mines%2C%20dramatic%20snow%20peaks%20with%20golden%20sunrise%20rays%2C%20epic%20cinematic%20fantasy%20art%2C%20ultra%20detailed%204k&image_size=landscape_16_9',
        worldDescription: loremLong,
        worldFacts: [
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' },
            { num: '???', label: 'LOREM IPSUM' }
        ],
        heroGradient: 'radial-gradient(ellipse at 80% 50%, rgba(201, 160, 90, 0.2) 0%, transparent 60%)',
        orbBgColor: '#c9a05a',
        worldBgGradient: 'radial-gradient(ellipse at 30% 50%, rgba(201, 160, 90, 0.09) 0%, transparent 60%)'
    }
};

let currentChar = 'agua';

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initOrbParticles();
    initScrollReveal();
    initScrollEffects();
    initCharacterSelector();
    renderExploreCards();
    initNavLinks();
    animateStats();
});

function initParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 10 + 's';
        p.style.animationDuration = (8 + Math.random() * 8) + 's';
        p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
        const colors = ['#c8aa6e', '#e8d5a8', '#785a28', '#ffffff'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.boxShadow = '0 0 ' + (3 + Math.random() * 6) + 'px ' + p.style.background;
        container.appendChild(p);
    }
}

function initOrbParticles() {
    const container = document.getElementById('orbParticles');
    for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.className = 'orb-particle';
        const angle = (i / 10) * Math.PI * 2;
        const r1 = 80 + Math.random() * 40;
        const r2 = 140 + Math.random() * 80;
        p.style.left = '50%';
        p.style.top = '50%';
        p.style.setProperty('--dx1', (Math.cos(angle) * r1 * 0.4) + 'px');
        p.style.setProperty('--dy1', (Math.sin(angle) * r1 * 0.4) + 'px');
        p.style.setProperty('--dx2', (Math.cos(angle) * r2) + 'px');
        p.style.setProperty('--dy2', (Math.sin(angle) * r2) + 'px');
        p.style.animationDelay = (i * 0.4) + 's';
        container.appendChild(p);
    }
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.closest('.character-section')) {
                    animateStats();
                }
            }
        });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
}

function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        if (scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');

        const heroPortrait = document.getElementById('heroPortrait');
        if (heroPortrait) {
            const factor = Math.min(scrollY / 800, 0.5);
            heroPortrait.style.transform = `translateY(${factor * 80}px) scale(${1 + factor * 0.05})`;
        }

        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-link[href="#${id}"]`);
                if (active) active.classList.add('active');
            }
        });
    });
}

function initCharacterSelector() {
    const dots = document.querySelectorAll('.char-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const charId = dot.dataset.char;
            if (charId !== currentChar) {
                switchCharacter(charId);
            }
        });
    });
}

function switchCharacter(charId) {
    const char = characters[charId];
    if (!char) return;
    currentChar = charId;

    document.querySelectorAll('.char-dot').forEach(d => d.classList.toggle('active', d.dataset.char === charId));

    const all = document.querySelectorAll('section .section-header, .character-main-grid, .element-content, .weapon-bubble-wrap, .world-content, #heroSubtitle, #heroTitle, #heroTagline, .hero-portrait, #heroGradient, #heroPortraitGlow, .portrait-ring, .world-bg-overlay');

    fadeThenUpdate(all, () => applyCharacterData(char));
}

function fadeThenUpdate(elements, cb) {
    let pending = 0;
    const targets = Array.from(elements);
    targets.forEach(el => {
        if (!el) return;
        pending++;
        el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        el.style.opacity = '0';
        if (el.classList.contains('character-main-grid') || el.classList.contains('element-content') || el.classList.contains('world-content')) {
            el.style.transform = 'translateY(20px)';
        }
    });

    setTimeout(() => {
        cb();
        requestAnimationFrame(() => {
            targets.forEach(el => {
                if (!el) return;
                el.style.opacity = '1';
                if (el.classList.contains('character-main-grid') || el.classList.contains('element-content') || el.classList.contains('world-content')) {
                    el.style.transform = 'translateY(0)';
                }
            });
        });
    }, 380);
}

function applyCharacterData(c) {
    const byId = id => document.getElementById(id);

    const heroSubtitle = byId('heroSubtitle');
    const heroTitle = byId('heroTitle');
    const heroTagline = byId('heroTagline');
    const heroGradient = byId('heroGradient');
    const heroPortrait = byId('heroPortrait');
    const heroPortraitGlow = byId('heroPortraitGlow');

    if (heroSubtitle) heroSubtitle.textContent = c.subtitle;
    if (heroTitle) heroTitle.textContent = c.name;
    if (heroTagline) heroTagline.textContent = c.tagline;
    if (heroGradient) heroGradient.style.background = c.heroGradient;
    if (heroPortrait) heroPortrait.src = c.heroPortrait;
    if (heroPortraitGlow) heroPortraitGlow.style.background = `radial-gradient(circle, ${c.elementGlow} 0%, transparent 60%)`;

    const charName = byId('charName');
    const roleIcon = byId('roleIcon');
    const roleName = byId('roleName');
    const charPortrait = byId('charPortrait');
    const charQuote = byId('charQuote');
    const charQuoteAuthor = byId('charQuoteAuthor');
    const loreDropCap = byId('loreDropCap');
    const loreText = byId('loreText');

    if (charName) charName.textContent = c.name;
    if (roleIcon) roleIcon.textContent = c.roleIcon;
    if (roleName) roleName.textContent = c.roleName;
    if (charPortrait) charPortrait.src = c.portrait;
    if (charQuote) charQuote.textContent = c.quote;
    if (charQuoteAuthor) charQuoteAuthor.textContent = `— ${c.name.split('')[0] + c.name.slice(1).toLowerCase()}`;
    if (loreDropCap) loreDropCap.textContent = c.loreDropCap;
    if (loreText) loreText.textContent = c.lore;

    const statFills = document.querySelectorAll('.stat-fill');
    const statValues = [c.stats.dificultad, c.stats.poder, c.stats.magia, c.stats.resistencia];
    statFills.forEach((fill, i) => {
        fill.className = `stat-fill ${c.id}`;
        fill.style.width = (statValues[i] || 0) + '%';
    });

    const elementName = byId('elementName');
    const elementSubtitle = byId('elementSubtitle');
    const elementSymbol = byId('elementSymbol');
    const elementDescription = byId('elementDescription');
    const elementOrbBg = byId('elementOrbBg');
    const elementOrb = byId('elementOrb');

    if (elementName) elementName.textContent = c.elementName;
    if (elementSubtitle) elementSubtitle.textContent = c.elementSubtitle;
    if (elementSymbol) elementSymbol.textContent = c.elementSymbol;
    if (elementDescription) elementDescription.textContent = c.elementDescription;
    if (elementOrbBg) elementOrbBg.style.background = `radial-gradient(circle, ${c.elementGlow} 0%, transparent 60%)`;
    if (elementOrb) {
        elementOrb.style.background = `radial-gradient(circle at 30% 30%, ${c.elementColor}cc, ${c.elementDarkColor}99)`;
        elementOrb.style.boxShadow = `inset 0 -30px 60px rgba(0,0,0,0.4), inset 0 30px 60px rgba(255,255,255,0.1), 0 0 60px ${c.elementGlow}, 0 0 120px ${c.elementGlow}`;
    }

    const orbParticles = document.querySelectorAll('.orb-particle');
    orbParticles.forEach(p => {
        p.style.background = c.elementColor;
        p.style.boxShadow = `0 0 10px ${c.elementColor}`;
    });

    const abilitiesContainer = document.querySelector('.element-abilities');
    if (abilitiesContainer) {
        abilitiesContainer.innerHTML = '';
        c.abilities.forEach((ab, i) => {
            const delay = i === 0 ? '' : `delay-${i}`;
            const card = document.createElement('div');
            card.className = `ability-card reveal-up ${delay}`;
            card.style.opacity = '0';
            card.innerHTML = `
                <div class="ability-icon ${c.id}">${ab.icon}</div>
                <div class="ability-info">
                    <h4>${ab.name}</h4>
                    <p>${ab.desc}</p>
                </div>`;
            abilitiesContainer.appendChild(card);
            requestAnimationFrame(() => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.classList.add('visible');
                }, 50 + i * 100);
            });
        });
    }

    const weaponIcon = byId('weaponIcon');
    const weaponName = byId('weaponName');
    const weaponDesc = byId('weaponDesc');
    const weaponGlow = byId('weaponGlow');
    const weaponIconWrap = document.querySelector('.weapon-icon-wrap');

    if (weaponIcon) weaponIcon.textContent = c.weaponIcon;
    if (weaponName) weaponName.textContent = c.weaponName;
    if (weaponDesc) weaponDesc.textContent = c.weaponDesc;
    if (weaponGlow) weaponGlow.style.background = `radial-gradient(circle, ${c.elementGlow} 0%, transparent 70%)`;
    if (weaponIconWrap) {
        weaponIconWrap.style.background = `linear-gradient(145deg, ${c.elementColor}26, ${c.elementDarkColor}40)`;
        weaponIconWrap.style.boxShadow = `inset 0 0 30px ${c.elementColor}1a, 0 0 40px ${c.elementGlow}`;
    }

    const worldName = byId('worldName');
    const worldSubtitle = byId('worldSubtitle');
    const worldImage = byId('worldImage');
    const worldDescription = byId('worldDescription');
    const worldBgOverlay = document.querySelector('.world-bg-overlay');

    if (worldName) worldName.textContent = c.worldName;
    if (worldSubtitle) worldSubtitle.textContent = c.worldSubtitle;
    if (worldImage) worldImage.src = c.worldImage;
    if (worldDescription) worldDescription.textContent = c.worldDescription;
    if (worldBgOverlay) worldBgOverlay.style.background = c.worldBgGradient;

    const factsContainer = document.querySelector('.world-facts');
    if (factsContainer) {
        factsContainer.innerHTML = '';
        c.worldFacts.forEach(f => {
            const card = document.createElement('div');
            card.className = 'fact-card';
            card.innerHTML = `<span class="fact-number">${f.num}</span><span class="fact-label">${f.label}</span>`;
            factsContainer.appendChild(card);
        });
    }

    renderExploreCards();
    animateStats();
}

function renderExploreCards() {
    const grid = document.getElementById('exploreGrid');
    if (!grid) return;
    const others = Object.values(characters).filter(c => c.id !== currentChar);
    grid.innerHTML = '';
    others.forEach(c => {
        const card = document.createElement('div');
        card.className = 'explore-card';
        card.addEventListener('click', () => switchCharacter(c.id));
        const glowMap = {
            agua: 'var(--agua-glow)',
            fuego: 'var(--fuego-glow)',
            aire: 'var(--aire-glow)',
            tierra: 'var(--tierra-glow)'
        };
        card.innerHTML = `
            <img class="explore-card-img" src="${c.portrait}" alt="${c.name}">
            <div class="explore-card-glow" style="background: radial-gradient(ellipse at 50% 80%, ${glowMap[c.id]} 0%, transparent 50%);"></div>
            <div class="explore-card-content">
                <span class="explore-card-element">${c.elementName.toUpperCase()}</span>
                <h3 class="explore-card-name">${c.name}</h3>
                <p class="explore-card-region">${c.worldSubtitle}</p>
                <a href="#personaje" class="explore-card-btn" onclick="event.preventDefault();">EXPLORAR →</a>
            </div>`;
        grid.appendChild(card);
    });
}

function initNavLinks() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 60;
                    window.scrollTo({
                        top: target.offsetTop - offset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function animateStats() {
    const fills = document.querySelectorAll('.stat-fill');
    fills.forEach(fill => {
        const target = fill.style.width;
        fill.style.width = '0';
        requestAnimationFrame(() => {
            setTimeout(() => {
                fill.style.width = target;
            }, 200);
        });
    });
}
