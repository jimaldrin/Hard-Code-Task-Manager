const addCategory = document.querySelector('#add-category');
const categoryModal = document.querySelector('.category-modal');
const categoryCancel = document.querySelector('#category-cancel');

addCategory.addEventListener('click', () => {
  categoryModal.classList.remove('hidden');
});

categoryCancel.addEventListener('click', () => {
  categoryModal.classList.add('hidden');
});
