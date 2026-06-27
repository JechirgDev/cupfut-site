const WALLPAPERS = [
  { name: 'Balón de Oro', rarity: 'special', color: 'cyan', image: '' },
  { name: 'Estadio Monumental', rarity: 'common', color: 'gold', image: '' },
  { name: 'Mundial 2026', rarity: 'premium', color: 'violet', image: '' },
  { name: 'Leyenda del Fútbol', rarity: 'ultimate', color: 'gold', image: '' },
  { name: 'La Copa', rarity: 'special', color: 'cyan', image: '' },
  { name: 'Celebración', rarity: 'common', color: 'gold', image: '' },
  { name: 'Guardia de Honor', rarity: 'premium', color: 'violet', image: '' },
  { name: 'El Capitán', rarity: 'ultimate', color: 'gold', image: '' },
];

const RARITY_CONFIG = {
  common: { badge: 'Común', badgeClass: 'badge-common', glow: '' },
  special: { badge: 'Especial', badgeClass: 'badge-special', glow: 'glow-cyan' },
  premium: { badge: 'Premium', badgeClass: 'badge-premium', glow: 'glow-violet' },
  ultimate: { badge: 'Ultimate', badgeClass: 'badge-ultimate', glow: 'glow-gold' },
};

function generateGradient(index) {
  const palettes = [
    ['#D4AF37', '#C9A84C', '#8B6914'],
    ['#00BFFF', '#0099CC', '#006699'],
    ['#8b5cf6', '#6d28d9', '#4c1d95'],
    ['#D4AF37', '#FFD700', '#FFA500'],
    ['#00BFFF', '#22d3ee', '#06b6d4'],
    ['#8b5cf6', '#a78bfa', '#7c3aed'],
    ['#D4AF37', '#fbbf24', '#f59e0b'],
    ['#8b5cf6', '#c084fc', '#9333ea'],
  ];
  return palettes[index % palettes.length];
}

function generateWpGradient(colors) {
  const angle = 135 + (Math.random() * 90 - 45);
  return `linear-gradient(${angle}deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`;
}

export function initSobres() {
  const btn = document.getElementById('btnUnbox');
  const preview = document.getElementById('sobresPreview');
  const placeholder = document.getElementById('sobresPlaceholder');
  const wpImg = document.getElementById('wallpaperImg');
  const badge = document.getElementById('sobresBadge');
  const nameEl = document.getElementById('sobresName');

  if (!btn) return;

  let isOpening = false;
  let currentRarity = '';

  btn.addEventListener('click', () => {
    if (isOpening) return;
    isOpening = true;
    btn.disabled = true;
    btn.innerHTML = 'Abriendo...';

    const idx = Math.floor(Math.random() * WALLPAPERS.length);
    const wp = WALLPAPERS[idx];
    currentRarity = wp.rarity;
    const rarity = RARITY_CONFIG[currentRarity];
    const colors = generateGradient(idx);

    // Reset
    placeholder.style.display = 'none';
    wpImg.classList.remove('active');
    badge.className = 'sobres-badge';
    preview.className = 'sobres-preview';
    nameEl.textContent = '';

    // Set the gradient wallpaper
    wpImg.style.background = generateWpGradient(colors);
    wpImg.style.display = 'block';
    wpImg.src = '';

    // Flash animation - reveal after delay
    setTimeout(() => {
      wpImg.classList.add('active');
      preview.classList.add(rarity.glow);

      badge.textContent = rarity.badge;
      badge.className = `sobres-badge active ${rarity.badgeClass}`;

      nameEl.textContent = wp.name;

      btn.innerHTML = 'Abrir otro sobre';
      btn.disabled = false;
      isOpening = false;
    }, 400);
  });
}
