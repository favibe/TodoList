import "./style.css";
import Project from "./modules/project.js";
import Storage from "./modules/storage.js";
import UIManager from "./modules/ui.js";

// Load projects from storage or create default
let projects = Storage.load() || [Project("Default")];
let currentProject = projects[0];

// Initialize UI Manager
const UI = UIManager(projects, currentProject);
UI.setupEventListeners();
UI.updateUI();
