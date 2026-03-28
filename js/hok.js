const heroes = [
  "Li Bai",
  "Sun Wukong",
  "Diaochan",
  "Zhao Yun",
  "Angela",
  "Guan Yu"
];

const searchBar = document.getElementById("searchBar");
const suggestions = document.getElementById("suggestions");

searchBar.addEventListener("input", function() {
  let input = this.value.toLowerCase();
  suggestions.innerHTML = "";

  if (input === "") return;

  heroes.forEach(hero => {
    if (hero.toLowerCase().includes(input)) {
      let li = document.createElement("li");
      li.textContent = hero;

      li.addEventListener("click", function() {
        window.location.href = "heroes/" + hero.replace(" ", "").toLowerCase() + ".html";
      });

      suggestions.appendChild(li);
    }
  });
});
