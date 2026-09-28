import { categories } from './categories.js';
import { tasks } from './tasks.js';

const addCategory = document.querySelector('#add-category');
const categoryModal = document.querySelector('.category-modal');
const categoryCancel = document.querySelector('#category-cancel');
const saveCategoryBtn = document.querySelector('#save-category');

const categoryTemplate = document.querySelector('#category-template');
const categoryGrid =
  document.querySelector('#category-grid') ||
  document.querySelector('.category-grid');

const categorySelection = document.querySelector('#add-task-category');

export function renderCategories() {
  if (!categoryGrid || !categoryTemplate) return;

  categoryGrid.innerHTML = '';

  categories.forEach((category) => {
    const categoryCard = categoryTemplate.content.cloneNode(true);

    const categoryName = categoryCard.querySelector('.category-name');
    const lockEl = categoryCard.querySelector('.category-lock');
    const percentEl = categoryCard.querySelector('.category-percentage');
    const countEl = categoryCard.querySelector('.category-count');
    const progressFill = categoryCard.querySelector('.progress-fill');

    if (categoryName) {
      categoryName.textContent = category.name;
      categoryName.title = category.name;
    }

    // Remove lock icon for user-created categories
    if (lockEl && !category.isDefault) {
      lockEl.remove();
    }

    // Task completion progress for this category
    const catTasks = tasks.filter(
      (t) =>
        (t.category || 'General').toLowerCase() === category.name.toLowerCase(),
    );
    const total = catTasks.length;
    const completed = catTasks.filter((t) => t.completed).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    if (countEl) countEl.textContent = `${completed}/${total}`;
    if (percentEl) percentEl.textContent = `${percentage}%`;
    if (progressFill) progressFill.style.width = `${percentage}%`;

    categoryGrid.append(categoryCard);
  });

  // Add "+" button card at the end
  const addCardBtn = document.createElement('button');
  addCardBtn.type = 'button';
  addCardBtn.className = 'category-add-card';
  addCardBtn.id = 'category-add-card';
  addCardBtn.setAttribute('aria-label', 'Add category');
  addCardBtn.innerHTML = '<i class="ph ph-plus"></i>';

  addCardBtn.addEventListener('click', () => {
    if (categoryModal) {
      categoryModal.classList.remove('hidden');
    }
  });

  categoryGrid.append(addCardBtn);
}

if (addCategory) {
  addCategory.addEventListener('click', () => {
    categoryModal.classList.remove('hidden');
  });
}

if (categoryCancel) {
  categoryCancel.addEventListener('click', () => {
    categoryModal.classList.add('hidden');
  });
}

export function openTaskForm() {
  modal.classList.remove('hidden');
}

export function renderCategoryOpt() {
  categorySelection.innerHTML = '';

  categories.forEach((category) => {
    const option = document.createElement('option');

    option.value = category.name;
    option.textContent = category.name;

    categorySelection.append(option);
  });
}
