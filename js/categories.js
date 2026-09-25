// ============================================================
// STORAGE
// ============================================================

/**
 * Stores the application's category data.
 *
 * Categories are loaded from localStorage when available.
 * If no categories exist yet, a default "General" category
 * is created.
 */
export let categories = JSON.parse(localStorage.getItem('categories')) || [
  {
    id: crypto.randomUUID(),
    name: 'General',
    icon: null,
    isDefault: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
];

// ============================================================
// DOM SELECTORS
// ============================================================

const categoryForm = document.querySelector('#category-form');
const categoryName = document.querySelector('#category-name');
const categoryIcon = document.querySelector('#category-icon');

// ============================================================
// CATEGORY FUNCTIONS
// ============================================================

/**
 * Handles category form submission.
 *
 * Validates the user's input, creates a new category object,
 * adds it to the categories array, and persists the updated
 * categories to localStorage.
 */
export function saveCategory() {
  categoryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = categoryName.value.trim();

    // Normalize the category name before validation and storage.
    const formattedName = formatCategoryName(name);

    // Stop if the submitted category is invalid.
    const isValid = categoryFormValidation(name, formattedName);

    if (!isValid) {
      return;
    }

    const now = new Date().toISOString();

    const category = {
      id: crypto.randomUUID(),
      name: formattedName,
      icon: categoryIcon.value,
      isDefault: false,

      createdAt: now,
      updatedAt: now,
      deletedAt: null,
    };

    categories.push(category);

    localStorage.setItem('categories', JSON.stringify(categories));

    console.log(category);
    console.log(categories);
    categoryForm.reset();
  });
}

// ============================================================
// CATEGORY VALIDATION
// ============================================================

/**
 * Formats a category name into the application's naming convention.
 *
 * Example:
 * "  PERSONAL FINANCE  " → "Personal finance"
 *
 * @param {string} text - The category name entered by the user.
 * @returns {string} The formatted category name.
 */
function formatCategoryName(text) {
  text = text.trim().toLowerCase();

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Validates a category before it is created.
 *
 * Checks whether:
 * - The name is not empty.
 * - The name does not exceed 30 characters.
 * - A category with the same formatted name does not already exist.
 *
 * @param {string} name - The trimmed user input.
 * @param {string} formattedName - The normalized category name.
 * @returns {boolean} True when the category is valid, otherwise false.
 */
function categoryFormValidation(name, formattedName) {
  if (!name) {
    console.log('Category name is required.');
    return false;
  }

  if (name.length > 30) {
    console.log('Category name is too long.');
    return false;
  }

  const categoryExists = categories.some((category) => {
    return category.name === formattedName;
  });

  if (categoryExists) {
    console.log('Category name already exists.');
    return false;
  }

  return true;
}
