import { renderCalendar } from "./calendar.js";
import { initTaskForm, openTaskForm } from "./task-form.js";
import { tasks } from "./tasks.js";
import { filter, updateFilterCount } from "./filter.js";
import { updateProgress } from "./progress.js";
import { renderCategories, renderCategoryOpt } from "./categoryUI.js";
import "@phosphor-icons/web/regular";
import "@phosphor-icons/web/bold";
import { saveCategory } from "./categories.js";

const createButton = document.querySelector("#create-button");

// FUNCTION CALLS
createButton.addEventListener("click", () => {
  openTaskForm();
});

lucide.createIcons();
renderCalendar();
filter();
updateFilterCount();
initTaskForm();
renderCategories();
renderCategoryOpt();
updateProgress();
saveCategory();

// Toggle task note description expansion on click
document.addEventListener("click", (event) => {
  const taskNote = event.target.closest("#task-note, .task-note");
  if (taskNote) {
    taskNote.classList.toggle("expanded");
  }
});
