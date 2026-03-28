const hokHeroes = [
  {
    name: "Lu Bu",
    role: "Fighter",
    info: "Strong duelist with high sustain. Great in team fights.",
    id: "lubu"
  },
  {
    name: "Diao Chan",
    role: "Mage",
    info: "Has freeze and slow abilities. Strong combo damage.",
    id: "diaochan"
  },
  {
    name: "Zhao Yun",
    role: "Assassin/Fighter",
    info: "Highly mobile hero good for picking off enemies.",
    id: "zhaoyun"
  }
];

// 🔎 SEARCH + SUGGESTIONS
function searchHOKHero() {
  let input = document.getElementById("search").value.toLowerCase();
  let suggestions = document.getElementById("suggestions");

  suggestions.innerHTML = "";

  hokHeroes.forEach(hero => {
    if (hero.name.toLowerCase().includes(input) && input !== "") {
      suggestions.innerHTML += `
        <p onclick="openHOKHero('${hero.id}')">${hero.name}</p>
      `;
    }
  });
}

// 👉 REDIRECT TO PROFILE PAGE
function openHOKHero(heroId) {
  window.location.href = "hokhero.html?hero=" + heroId;
}

// 📄 LOAD HERO INFO
function showHOKHeroPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const heroId = urlParams.get("hero");

  const hero = hokHeroes.find(h => h.id === heroId);

  if (hero) {
    document.getElementById("heroInfo").innerHTML = `
      <h2>${hero.name}</h2>
      <p><b>Role:</b> ${hero.role}</p>
      <p>${hero.info}</p>
    `;
  }
}
