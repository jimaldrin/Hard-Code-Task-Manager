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

const categoryName = document.querySelector('#category-name');

const categoryIcon = document.querySelector('#category-icon');

const saveCategoryBtn = document.querySelector('#save-category');

export function saveCategory() {
  saveCategoryBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const name = categoryName.value.trim();

    if (!name) {
      console.log('Category name is required.');
      return;
    }

    if (name.length > 30) {
      console.log('Category name is too long');
      return;
    }

    // Validation: Duplicationc check
    const categoryExists = categories.some((category) => {
      return category.name === categoryName.value.trim().toLowerCase();
    });

    if (categoryExists) {
      console.log('Category name already exist.');
      return;
    }

    // Formatted user input name
    const formattedName =
      name.charAt(0).trim().toUpperCase() + name.slice(1).toLowerCase();

    const category = {
      id: crypto.randomUUID(),
      name: formattedName,
      icon: categoryIcon.value,
      isDefault: false,

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
    };

    categories.push(category);

    localStorage.setItem('categories', JSON.stringify(categories));

    console.log(category);
    console.log(categories);
  });
}

// FORM VALIDATIONS

function formatCategoryName(text) {
  text = text.trim().toLowerCase();

  return text.charAt(0).toUpperCase() + text.slice(1);
}
