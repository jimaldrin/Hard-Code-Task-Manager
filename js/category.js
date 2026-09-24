import { saveCategory } from './categories';

const addCategory = document.querySelector('#add-category');
const categoryModal = document.querySelector('.category-modal');
const categoryCancel = document.querySelector('#category-cancel');
const saveCategoryBtn = document.querySelector('#save-category');

addCategory.addEventListener('click', () => {
  categoryModal.classList.remove('hidden');
});

categoryCancel.addEventListener('click', () => {
  categoryModal.classList.add('hidden');
});
