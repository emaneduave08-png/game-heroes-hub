const hokHeroes = [
  {
    name: "Lu Bu",
    role: "Fighter",
    info: "Strong duelist with high sustain.",
    id: "lubu"
  },
  {
    name: "Diao Chan",
    role: "Mage",
    info: "Has freeze and slow skills.",
    id: "diaochan"
  }
];

// 🔎 SEARCH
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

// 👉 REDIRECT
function openHOKHero(heroId) {
  window.location.href = "hok-hero.html?hero=" + heroId;
}

// 📄 LOAD PROFILE
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
