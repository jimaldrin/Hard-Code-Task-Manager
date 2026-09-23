export let categories = JSON.parse(localStorage.getItem('categories')) || [
  {
    id: 1,
    name: 'General',
    isDefault: true,
  },
];

const addCategoryBtn = document.querySelector('#id-category');

function addCategory() {
  addCategoryBtn.addEventListener('click', (event) => {});
}
