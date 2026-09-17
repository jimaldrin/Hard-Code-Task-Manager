import { tasks } from "./tasks.js";

const filterButtons = document.querySelectorAll(".filter");

export function filter() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      filterButtons.forEach((button) => {
        button.classList.remove("active");
      });

      event.currentTarget.classList.add("active");
    });
  });
}

const allCount = document.querySelector("#all-number");
const inProgressCount = document.querySelector("#progress-number");
const completedCount = document.querySelector("#completed-number");
const categoryCount = document.querySelector("#category-number");

const completedTask = tasks.filter((task) => task.completed === true).length;

const inProgressTask = tasks.filter((task) => task.completed === false).length;

export function updateFilterCount() {
  const completedTask = tasks.filter((task) => task.completed === true).length;

  const inProgressTask = tasks.filter(
    (task) => task.completed === false,
  ).length;
  
  allCount.textContent = `${tasks.length}`;

  inProgressCount.textContent = `${inProgressTask}`;

  completedCount.textContent = `${completedTask}`;
}
