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

// Your function should:

// Check whether categoryGrid and categoryTemplate exist. If either doesn't, stop.
// Clear the existing category cards.
// Loop through every category.
// Clone categoryTemplate including everything inside it.
// Find these elements inside the cloned card:
// .category-name
// .category-lock
// .category-percentage
// .category-count
// .progress-fill
// Put category.name into the category name element.
// If the category isn't a default category, remove its lock.
// Find all tasks belonging to the current category.
// Tasks without a category should be treated as "General".
// Category matching should ignore capitalization.
// Calculate:
// total tasks
// completed tasks
// completion percentage
// avoid division by zero
// round the percentage
// Display the results:
// completed/total
// percentage
// progress bar width
// Append the category card to categoryGrid.
// Create the + button/card after all categories.
// Make the + button open categoryModal.

// export function renderCategories() {
//   if (!categoryGrid || !categoryTemplate) return;

//   categoryGrid.innerHTML = '';

//   categories.forEach((category) => {
//     const categoryCard = categoryTemplate.content.cloneNode(true);

//     const categoryName = categoryCard.querySelector('.category-name');
//     const lockEl = categoryCard.querySelector('.category-lock');
//     const percentEl = categoryCard.querySelector('.category-percentage');
//     const countEl = categoryCard.querySelector('.category-count');
//     const progressFill = categoryCard.querySelector('.progress-fill');

//     if (categoryName) {
//       categoryName.textContent = category.name;
//       categoryName.title = category.name;
//     }

//     // Remove lock icon for user-created categories
//     if (lockEl && !category.isDefault) {
//       lockEl.remove();
//     }

//     // Task completion progress for this category
//     const catTasks = tasks.filter(
//       (t) =>
//         (t.category || 'General').toLowerCase() === category.name.toLowerCase(),
//     );
//     const total = catTasks.length;
//     const completed = catTasks.filter((t) => t.completed).length;
//     const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

//     if (countEl) countEl.textContent = `${completed}/${total}`;
//     if (percentEl) percentEl.textContent = `${percentage}%`;
//     if (progressFill) progressFill.style.width = `${percentage}%`;

//     categoryGrid.append(categoryCard);
//   });

//   // Add "+" button card at the end
//   const addCardBtn = document.createElement('button');
//   addCardBtn.type = 'button';
//   addCardBtn.className = 'category-add-card';
//   addCardBtn.id = 'category-add-card';
//   addCardBtn.setAttribute('aria-label', 'Add category');
//   addCardBtn.innerHTML = '<i class="ph ph-plus"></i>';

//   addCardBtn.addEventListener('click', () => {
//     if (categoryModal) {
//       categoryModal.classList.remove('hidden');
//     }
//   });

//   categoryGrid.append(addCardBtn);
// }

const ICON_MAP = {
  dumbbell: 'ph-barbell',
};

function getPhosphorIconClass(icon) {
  if (!icon) return 'ph-folder';
  return ICON_MAP[icon] || (icon.startsWith('ph-') ? icon : `ph-${icon}`);
}

export function renderCategories() {
  if (!categoryGrid || !categoryTemplate) {
    return;
  }

  categoryGrid.innerHTML = '';

  categories.forEach((category) => {
    const categoryCard = categoryTemplate.content.cloneNode(true);

    const categoryName = categoryCard.querySelector('.category-name');
    const categoryIcon = categoryCard.querySelector('.category-icon');
    const percentEl = categoryCard.querySelector('.category-percentage');
    const countEl = categoryCard.querySelector('.category-count');
    const progressFill = categoryCard.querySelector('.progress-fill');

    if (categoryName) {
      categoryName.textContent = `${category.name}`;
      categoryName.title = `${category.name}`;
    }

    if (categoryIcon) {
      const iconClass = getPhosphorIconClass(category.icon);
      categoryIcon.classList.add('ph', iconClass);
    }

    const categoryTasks = tasks.filter(
      (task) =>
        (task.category || 'General').toLowerCase() ===
        category.name.toLowerCase(),
    );

    const total = categoryTasks.length;
    const completed = categoryTasks.filter((t) => t.completed).length;

    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    if (percentEl) percentEl.textContent = `${percentage}%`;
    if (countEl) countEl.textContent = `${completed}/${total}`;
    if (progressFill) progressFill.style.width = `${percentage}%`;

    categoryGrid.append(categoryCard);
  });
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
