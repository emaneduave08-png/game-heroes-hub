const gameButtons = document.querySelectorAll('.game-buttons button');
const gameInfoDiv = document.getElementById('game-info');
const heroInfoDiv = document.getElementById('hero-info');

let currentHeroes = [];
let heroButtonsDiv = null;

// Load hero HTML from separate file
async function loadHeroHTML(fileName) {
    try {
        const response = await fetch(Games/ml.json}`);
        if (!response.ok) throw new Error('File not found');
        const html = await response.text();
        heroInfoDiv.innerHTML = html;
    } catch(err) {
        heroInfoDiv.innerHTML = `<p>Error loading hero guide: ${err.message}</p>`;
    }
}

// Render hero buttons with search
function renderHeroButtons(filter="") {
    if (!heroButtonsDiv) return;
    heroButtonsDiv.innerHTML = "";
    currentHeroes.forEach(hero => {
        if(hero.name.toLowerCase().includes(filter.toLowerCase())){
            const btn = document.createElement('button');
            btn.textContent = hero.name;
            btn.addEventListener('click', () => loadHeroHTML(hero.file));
            heroButtonsDiv.appendChild(btn);
        }
    });
}

// Game button click
gameButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const gameKey = button.getAttribute('data-game');
        try {
            const response = await fetch(`games/${gameKey}.json`);
            if(!response.ok) throw new Error('Game data not found');
            const gameData = await response.json();

            currentHeroes = gameData.heroes;

            gameInfoDiv.innerHTML = `<h3>${gameData.title}</h3><p>${gameData.description}</p>`;

            // Search bar
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.id = 'hero-search';
            searchInput.placeholder = "Search heroes...";
            searchInput.addEventListener('input', ()=> renderHeroButtons(searchInput.value));
            gameInfoDiv.appendChild(searchInput);

            // Hero buttons div
            heroButtonsDiv = document.createElement('div');
            heroButtonsDiv.className = 'hero-buttons';
            gameInfoDiv.appendChild(heroButtonsDiv);

            renderHeroButtons();
            heroInfoDiv.innerHTML = '';
        } catch(err) {
            gameInfoDiv.innerHTML = `<p>Error loading game: ${err.message}</p>`;
        }
    });
});
