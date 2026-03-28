const mlHeroes = [
  {
    name: "Alucard",
    role: "Fighter",
    info: "Lifesteal hero, strong in 1v1.",
    id: "alucard"
  },
  {
    name: "Miya",
    role: "Marksman",
    info: "Fast attack speed, strong late game.",
    id: "miya"
  },
  {
    name: "Layla",
    role: "Marksman",
    info: "Long range damage dealer.",
    id: "layla"
  }
];

// 🔎 SEARCH + SUGGESTIONS
function searchHero() {
  let input = document.getElementById("search").value.toLowerCase();
  let suggestions = document.getElementById("suggestions");

  suggestions.innerHTML = "";

  mlHeroes.forEach(hero => {
    if (hero.name.toLowerCase().includes(input) && input !== "") {
      suggestions.innerHTML += `
        <p onclick="openHero('${hero.id}')">${hero.name}</p>
      `;
    }
  });
}

// 👉 REDIRECT TO PROFILE PAGE
function openHero(heroId) {
  window.location.href = "hero.html?hero=" + heroId;
}

// 📄 LOAD HERO INFO
function showHeroPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const heroId = urlParams.get("hero");

  const hero = mlHeroes.find(h => h.id === heroId);

  if (hero) {
    document.getElementById("heroInfo").innerHTML = `
      <h2>${hero.name}</h2>
      <p><b>Role:</b> ${hero.role}</p>
      <p>${hero.info}</p>
    `;
  }
}
