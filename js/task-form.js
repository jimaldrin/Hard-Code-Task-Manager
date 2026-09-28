import { updateFilterCount } from './filter.js';
import { updateProgress } from './progress.js';
import { renderCategories } from './categoryUI.js';
import { tasks } from './tasks.js';
import { categories } from './categories.js';

const addForm = document.getElementById('add-form');
const taskName = document.getElementById('add-title');
const addNote = document.querySelector('#add-note');
const categorySelection = document.querySelector('#add-task-category');
const dateCreated = document.querySelector('#date-created');
const dueDate = document.querySelector('#due-date');

const modal = document.querySelector('.modal');

// Buttons
const addTask = document.querySelector('#add-task');
const cancelButton = document.getElementById('close-button');

export function initTaskForm() {
  // CANCEL BUTTON
  cancelButton.addEventListener('click', () => {
    addForm.reset();
    modal.classList.add('hidden');
  });

  //   ADD TASK BUTTON
  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = {
      title: taskName.value,
      note: addNote.value,
      category: categorySelection.value,
      dateCreated: dateCreated.value,
      dueDate: dueDate.value,
      completed: false,
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.log(tasks);

    addForm.reset();
    modal.classList.add('hidden');
    updateProgress();
    updateFilterCount();
    renderCategories();
  });
}

export function openTaskForm() {
  modal.classList.remove('hidden');
}

export function renderCategoryOpt() {
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = `${category.name}`;
    option.textContent = `${category.name}`;
    categorySelection.append(option);
  });
}
