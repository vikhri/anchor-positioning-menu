const items = document.querySelectorAll("li");
let activeItem = items[0];

function setActive(newActiveItem) {
  activeItem.classList.remove('active');
  newActiveItem.classList.add('active');
  activeItem = newActiveItem;
}

items.forEach((item) => {
  item.addEventListener('click', () => setActive(item));
});
