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
