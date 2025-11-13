export default function DOM() {
  const projectList = document.getElementById("projectList"); // use correct ID
  const todoList = document.getElementById("todoList");

  const renderProjects = (projects) => {
    projectList.innerHTML = "";
    projects.forEach((project, i) => {
      const div = document.createElement("div");
      div.classList.add("project-item");

      const btn = document.createElement("button");
      btn.textContent = project.name;
      btn.classList.add("project-btn");
      btn.dataset.index = i;

      const delBtn = document.createElement("button");
      delBtn.textContent = "🗑️";
      delBtn.classList.add("delete-project-btn");
      delBtn.dataset.index = i;

      div.append(btn, delBtn);
      projectList.appendChild(div);
    });
  };

  const renderTodos = (todos) => {
    todoList.innerHTML = "";
    todos.forEach((todo, i) => {
      const div = document.createElement("div");
      div.classList.add("todo-item");

      const text = document.createElement("span");
      text.textContent = `${todo.title} - ${todo.dueDate}`;

      const delBtn = document.createElement("button");
      delBtn.textContent = "🗑️";
      delBtn.classList.add("delete-todo-btn");
      delBtn.dataset.index = i;

      div.append(text, delBtn);
      todoList.appendChild(div);
    });
  };

  return { renderProjects, renderTodos };
}
