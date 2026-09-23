import { renderCalendar } from './calendar.js';
import { initTaskForm, openTaskForm } from './task-form.js';
import { tasks } from './tasks.js';
import { filter, updateFilterCount } from './filter.js';
import { updateProgress } from './progress.js';

import './category.js';

import '@phosphor-icons/web/regular';

const createButton = document.querySelector('#create-button');

renderCalendar();

lucide.createIcons();

createButton.addEventListener('click', () => {
  openTaskForm();
});

filter();
updateFilterCount();
initTaskForm();
updateProgress();
