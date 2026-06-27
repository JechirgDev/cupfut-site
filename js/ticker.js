const MATCHES = [
  { home: 'México', away: 'USA', homeScore: 2, awayScore: 1 },
  { home: 'Argentina', away: 'Brasil', homeScore: 1, awayScore: 0 },
  { home: 'España', away: 'Francia', homeScore: 1, awayScore: 1 },
  { home: 'Alemania', away: 'Inglaterra', homeScore: 3, awayScore: 2 },
  { home: 'Portugal', away: 'Países Bajos', homeScore: 0, awayScore: 0 },
  { home: 'Italia', away: 'Croacia', homeScore: 2, awayScore: 1 },
];

function createMatchHTML(match) {
  return `
    <div class="ticker-match">
      <span class="live-dot"></span>
      <span class="live-label">EN VIVO</span>
      <span class="teams">${match.home} vs ${match.away}</span>
      <span class="score">${match.homeScore} - ${match.awayScore}</span>
    </div>
  `;
}

export function initTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;

  const html = MATCHES.map(createMatchHTML).join('');
  const doubleHtml = html + html;
  track.innerHTML = doubleHtml;

  let intervalId = null;

  function updateScores() {
    const scoreEls = track.querySelectorAll('.ticker-match .score');
    const matchCount = MATCHES.length;
    MATCHES.forEach((match, i) => {
      if (Math.random() < 0.15) {
        match.homeScore += Math.random() < 0.5 ? 1 : 0;
        match.awayScore += Math.random() < 0.5 ? 1 : 0;
      }
      const text = `${match.homeScore} - ${match.awayScore}`;
      scoreEls[i].textContent = text;
      scoreEls[i + matchCount].textContent = text;
    });
  }

  function startTicker() {
    if (intervalId) return;
    intervalId = setInterval(updateScores, 4000);
  }

  function stopTicker() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopTicker();
    } else {
      startTicker();
    }
  });

  startTicker();
}
