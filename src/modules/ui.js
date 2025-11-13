import Todo from "./todo";
import Project from "./project";
import Storage from "./storage";
import DOM from "./dom";

export default function UIManager(projects, currentProject) {
  const UI = DOM();

  // DOM Elements
  const addTodoBtn = document.getElementById("addTodoBtn");
  const addProjectBtn = document.getElementById("addProjectBtn");

  const todoDialog = document.getElementById("todoDialog");
  const todoForm = document.getElementById("todoForm");
  const cancelTodoBtn = document.getElementById("cancelTodoBtn");

  const projectDialog = document.getElementById("projectDialog");
  const projectForm = document.getElementById("projectForm");
  const cancelProjectBtn = document.getElementById("cancelProjectBtn");

  const currentProjectTitle = document.getElementById("currentProjectTitle");

  function updateUI() {
    UI.renderProjects(projects);
    UI.renderTodos(currentProject.getTodos());
    currentProjectTitle.textContent = currentProject.name;
    Storage.save(projects);
  }

  function setupEventListeners() {
    // Add Todo
    addTodoBtn.addEventListener("click", () => todoDialog.showModal());
    cancelTodoBtn.addEventListener("click", () => todoDialog.close());

    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("todoTitle").value;
      const description = document.getElementById("todoDesc").value;
      const dueDate = document.getElementById("todoDate").value;
      const priority = document.getElementById("todoPriority").value;

      const newTodo = Todo(title, description, dueDate, priority);
      currentProject.addTodo(newTodo);

      todoForm.reset();
      todoDialog.close();
      updateUI();
    });

    // Add Project
    addProjectBtn.addEventListener("click", () => projectDialog.showModal());
    cancelProjectBtn.addEventListener("click", () => projectDialog.close());

    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const projectName = document.getElementById("projectTitle").value;
      const newProject = Project(projectName);
      projects.push(newProject);

      projectForm.reset();
      projectDialog.close();
      currentProject = newProject;
      updateUI();
    });

    // Switch project
    document.getElementById("projectList").addEventListener("click", (e) => {
      if (e.target.classList.contains("project-btn")) {
        const index = e.target.dataset.index;
        currentProject = projects[index];
        updateUI();
      }
    });
  }

  return { updateUI, setupEventListeners };
}
