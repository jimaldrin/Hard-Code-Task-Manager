import { renderCalendar } from "./calendar.js";
import { initTaskForm, openTaskForm } from "./task-form.js";
import { tasks } from "./tasks.js";

import "@phosphor-icons/web/regular";

const focusRing = document.querySelector("#focus-ring");

const progressPercentage = document.querySelector("#progress-percentage");

const completedCount = document.querySelector("#completed-count");

const totalCount = document.querySelector("#total-count");

const createButton = document.querySelector("#create-button");

renderCalendar();

lucide.createIcons();

function updateProgress() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;

  let percentage;

  if (total === 0) {
    percentage = 0;
  } else {
    percentage = Math.round((completed / total) * 100);
  }

  focusRing.style.background = `
    conic-gradient(
    #ffffff 0 ${percentage}%,
    rgba(255, 255, 255, 0.26) ${percentage}% 100%
  )`;

  progressPercentage.textContent = percentage;

  completedCount.textContent = completed;
  totalCount.textContent = total;
}

createButton.addEventListener("click", () => {
  openTaskForm();
});

initTaskForm();
updateProgress();
