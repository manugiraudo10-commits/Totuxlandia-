const search = document.getElementById("search");
const result = document.getElementById("searchResult");

const items = [
  "Flame",
  "Shadow",
  "Venom",
  "Dragon",
  "Yama",
  "Tushita",
  "Dark Blade",
  "Shark",
  "Ghoul",
  "Angel",
  "Mink",
  "First Sea",
  "Second Sea",
  "Third Sea"
];

search.addEventListener("input", () => {
  const text = search.value.toLowerCase().trim();

  if (text === "") {
    result.textContent = "";
    return;
  }

  const found = items.filter(item =>
    item.toLowerCase().includes(text)
  );

  if (found.length > 0) {
    result.innerHTML =
      "🔎 Encontrado: <strong>" +
      found.join(", ") +
      "</strong>";
  } else {
    result.textContent = "❌ No se encontró ningún resultado.";
  }
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navegando a " + link.textContent);
  });
});
