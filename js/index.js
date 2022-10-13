const form = document.querySelector("form");
const list = document.querySelector("#todos");
const completedTodo = document.querySelectorAll(".filter-completed");
const activeTodo = document.querySelectorAll(".filter-active");
const allTodo = document.querySelectorAll(".show-all");
const count = document.getElementById("count");

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
  count.innerHTML = `${list.childElementCount} items left`;
  if (list.childElementCount) {
    document.getElementById("clear-completed").disabled = false;
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    count.innerHTML = `${list.childElementCount} items left`;
    if (!list.childElementCount) {
      document.getElementById("clear-completed").disabled = true;
    }
  }
});

function getCompleted() {
  Array.from(list.children).forEach((todo) => {
    if (todo.children[0].checked) {
      todo.classList.remove("hidden");
    } else {
      todo.classList.add("hidden");
    }
  });
  completedTodo.forEach((elem) => {
    elem.classList.add("active");
  });
  activeTodo.forEach((elem) => {
    elem.classList.remove("active");
  });
  allTodo.forEach((elem) => {
    elem.classList.remove("active");
  });
}

function getactive() {
  Array.from(list.children).forEach((todo) => {
    if (!todo.children[0].checked) {
      todo.classList.remove("hidden");
    } else {
      todo.classList.add("hidden");
    }
  });
  completedTodo.forEach((elem) => {
    elem.classList.remove("active");
  });
  activeTodo.forEach((elem) => {
    elem.classList.add("active");
  });
  allTodo.forEach((elem) => {
    elem.classList.remove("active");
  });
}

function getAll() {
  Array.from(list.children).forEach((todo) => {
    todo.classList.remove("hidden");
  });
  completedTodo.forEach((elem) => {
    elem.classList.remove("active");
  });
  activeTodo.forEach((elem) => {
    elem.classList.remove("active");
  });
  allTodo.forEach((elem) => {
    elem.classList.add("active");
  });
}

function deleteComplete() {
  Array.from(list.children)
    .filter((todo) => todo.children[0].checked)
    .forEach((todo) => {
      todo.remove();
    });
  count.innerHTML = `${list.childElementCount} items left`;
  if (!list.childElementCount) {
    document.getElementById("clear-completed").disabled = true;
  }
}
