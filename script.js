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
