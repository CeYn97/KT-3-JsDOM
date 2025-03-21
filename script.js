document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      name: "Книги",
      children: [
        { name: "Отечественные", children: [] },
        {
          name: "Зарубежные",
          children: [
            { name: "Детективы" },
            { name: "Научная фантастика" },
            { name: "Исторические" },
          ],
        },
      ],
    },
    {
      name: "DVD",
      children: [
        {
          name: "Отечественные",
          children: [
            { name: "Детективы" },
            { name: "Научная фантастика" },
            { name: "Исторические" },
          ],
        },
        { name: "Зарубежные", children: [] },
      ],
    },
  ];

  function createMenuItem(item) {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.classList.add("menu-item", "always-active");

    if (item.children && item.children.length > 0) {
      const ul = document.createElement("ul");
      ul.classList.add("submenu");

      item.children.forEach((child) => ul.appendChild(createMenuItem(child)));
      li.appendChild(ul);

      li.addEventListener("click", (event) => {
        event.stopPropagation();
        ul.classList.toggle("open");
      });
    } else {
      li.addEventListener("click", (event) => {
        event.stopPropagation();
        alert("Вы можете перейти по ссылке");
      });
    }

    return li;
  }

  const menuContainer = document.createElement("ul");
  menuContainer.classList.add("menu-container");

  data.forEach((item) => menuContainer.appendChild(createMenuItem(item)));
  document.body.appendChild(menuContainer);

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      document.querySelectorAll(".menu-item").forEach((el) => {
        el.classList.remove("hover-darken");
      });
      event.target.classList.add("hover-darken");
    });
  });
});
