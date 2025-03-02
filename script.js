// Theme section
let body = document.querySelector('body');
const themeColors = [
  'aliceblue',
  'antiquewhite',
  'azure',
  'bisque',
  'ghostwhite',
  'lavender',
  'honeydew',
  'lightcyan',
  'paleturquoise',
  'palegreen',
];

function themeButton() {
  let chosenColor = themeColors[Math.floor(Math.random() * themeColors.length)];
  body.style.backgroundColor = chosenColor;
}

function chengePage() {
  window.location = './pages/questionPage.html';
}

// Data Section
let day = document.querySelector('#day');
let fullDate = document.querySelector('#fullDate');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = new Date();
day.innerHTML = `${days[date.getDay()]},`;
fullDate.innerHTML = `${months[date.getMonth()]} ${
  date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
} ${date.getFullYear()}`;

//

let allButtons = document.querySelectorAll('.isCompleteBtn');
let allTasks = document.querySelectorAll('.taskCard');
let compleTask = document.querySelector('#completedTask');
let totalTasks = document.querySelector('#taskCount');
let notificationBox = document.querySelector('#notificationBox');

// Initial tasks count
let taskCount = allTasks.length;
totalTasks.innerHTML = taskCount < 10 ? `0${taskCount}` : taskCount;

// Completed tasks count
let completeTasksCount = 24;
compleTask.innerHTML = completeTasksCount;

let taskDatas = [];

allButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    alert('Board updated successfully');
    this.setAttribute('disabled', true);
    this.classList.add('bg-blue-200', 'cursor-not-allowed');
    this.classList.remove('bg-blue-600');
    let getTitle = this.closest('.taskCard').querySelector('.title').innerText;
    completeTasksCount++;
    compleTask.innerHTML = completeTasksCount;
    taskCount = Math.max(0, taskCount - 1);
    totalTasks.innerHTML = taskCount < 10 ? `0${taskCount}` : taskCount;
    let taskData = {
      title: getTitle,
      date: new Date().toLocaleTimeString(),
    };
    taskDatas.push(taskData);
    notificationBox.innerHTML = taskDatas
      .map(
        (task) => `
        <div class="w-full bg-[#f4f7ff] p-3 rounded-lg">
          <h1 class="text-base font-normal">
            ${'You have Complete The Task is' + task.title} at
            <span>${task.date}</span>
          </h1>
        </div>
      `
      )
      .join('');

    let allDisabled = [...allButtons].every((btn) => btn.disabled);
    if (allDisabled) {
      alert('All tasks are completed!');
    }
  });
});

function clearHistory() {
  taskDatas.length = 0;
  notificationBox.innerHTML = '';
  allButtons.forEach((btn) => {
    btn.removeAttribute('disabled');
    btn.classList.remove('bg-blue-200', 'cursor-not-allowed');
    btn.classList.add('bg-blue-600');
  });
  completeTasksCount = 24;
  compleTask.innerHTML = completeTasksCount;
  taskCount = allTasks.length;
  totalTasks.innerHTML = taskCount < 10 ? `0${taskCount}` : taskCount;
}
