const menuDate = [
  {
    text: "Книги",
    children: [
      {
        text: "Отечественные",
        children: [
          { text: "Классика", link: "#" },
          { text: "Фантастика", link: "#" },
          { text: "Исторические", link: "#" },
        ],
      },
      {
        text: "Зарубежные",
        children: [
          { text: "Классика", link: "#" },
          { text: "Фантастика", link: "#" },
          { text: "Исторические", link: "#" },
        ],
      },
    ],
  },
  {
    text: "DVD",
    children: [
      {
        text: "Отечественные",
        children: [
          { text: "Классика", link: "#" },
          { text: "Фантастика", link: "#" },
          { text: "Исторические", link: "#" },
        ],
      },
      {
        text: "Зарубежные",
        children: [
          { text: "Классика", link: "#" },
          { text: "Фантастика", link: "#" },
          { text: "Исторические", link: "#" },
        ],
      },
    ],
  },
];

function createMenuItems(item) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = item.text;
  li.appendChild(span);

  if (item.link) {
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.text;
    a.addEventListener("click", (event) => {
      event.stopPropagation();
      alert("Вы можете перейти по этой ссылке!");
    });
    li.replaceChild(a, span);
  }

  if (item.children) {
    const ul = document.createElement("ul");
    item.children.forEach((child) => ul.appendChild(createMenuItems(child)));
    li.append(ul);

    li.addEventListener("click", function (event) {
      event.stopPropagation();
      ul.style.display = ul.style.display === "none" ? "block" : "none";
    });
  }

  return li;
}

const menu = document.getElementById("menu");
menuDate.forEach((item) => menu.appendChild(createMenuItems(item)));
