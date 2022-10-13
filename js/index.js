const form = document.querySelector("form");
const list = document.querySelector("#todos");

const generateTemplate = (todo) => {
  const html = `          <li class="box border-b first:rounded-tr-md first:rounded-tl-md">
    <input type="checkbox" id="test" class="checkbox" />
    <span> ${todo} </span>
    <img src="./images/close.svg" alt="" class="block ml-auto delete"/>
  </li>`;

  list.innerHTML += html;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = form.todo.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    form.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (isChecked) => {
  Array.from(list.children)
    .filter((todo) => todo.children[0].checked === isChecked)
    .forEach((todo) => todo.classList.add("hidden"));
};

// filterTodos(false);
