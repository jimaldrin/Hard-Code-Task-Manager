import { renderCalendar } from './calendar.js';

const focusRing = document.querySelector('#focus-ring');

const progressPercentage = document.querySelector('#progress-percentage');

const completedCount = document.querySelector('#completed-count');

const totalCount = document.querySelector('#total-count');

renderCalendar();

lucide.createIcons();

function updateProgress() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [
    {
      title: 'Code',
      completed: false,
    },
    {
      title: 'Vibe',
      completed: true,
    },
    {
      title: 'Vibe',
      completed: true,
    },
  ];

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

updateProgress();
