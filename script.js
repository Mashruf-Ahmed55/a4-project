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
let cardObj = [
  {
    smTitle: 'ShopEase',
    title: 'Fix Mobile Button Issue',
    description:
      'Debug using Chrome DevTools check for overlapping elements, and ensure onClick works',
    deadline: '21 March 2025',
  },
  {
    smTitle: 'ShopEase',
    title: 'Fix Mobile Button Issue',
    description:
      'Debug using Chrome DevTools check for overlapping elements, and ensure onClick works',
    deadline: '21 March 2025',
  },
  {
    smTitle: 'ShopEase',
    title: 'Fix Mobile Button Issue',
    description:
      'Debug using Chrome DevTools check for overlapping elements, and ensure onClick works',
    deadline: '21 March 2025',
  },
  {
    smTitle: 'ShopEase',
    title: 'Fix Mobile Button Issue',
    description:
      'Debug using Chrome DevTools check for overlapping elements, and ensure onClick works',
    deadline: '21 March 2025',
  },
  {
    smTitle: 'ShopEase',
    title: 'Fix Mobile Button Issue',
    description:
      'Debug using Chrome DevTools check for overlapping elements, and ensure onClick works',
    deadline: '21 March 2025',
  },
  {
    smTitle: 'ShopEase',
    title: 'Fix Mobile Button Issue',
    description:
      'Debug using Chrome DevTools check for overlapping elements, and ensure onClick works',
    deadline: '21 March 2025',
  },
];
let cardContainer = document.querySelector('#cardContainer');
cardContainer.innerHTML = cardObj.map((card) => {
  return `<div
  class="h-72 bg-[#f4f7ff] rounded-lg flex flex-col items-start shadow-sm px-6 py-5 w-[360px] mx-[3px] my-[6px]"
>
  <span class="px-3 py-2 bg-white rounded-lg">${card.smTitle}</span>
  <h1 class="text-2xl font-semibold text-gray-900 mt-3">
    ${card.title}
  </h1>
  <div class="bg-white p-3 mt-2 rounded-md">
    <p class="text-gray-600">
      ${card.description}
    </p>
  </div>
  <div class="flex gap-x-20 items-center mt-4">
    <div class="flex flex-col">
      <span class="text-gray-500 text-sm">Deadline</span>
      <span class="text-gray-900 font-semibold">${card.deadline}</span>
    </div>
    <button
      class="px-3 py-2 rounded-xl bg-blue-600 text-white font-medium"
    >
      Completed
    </button>
  </div>
</div>`;
});
