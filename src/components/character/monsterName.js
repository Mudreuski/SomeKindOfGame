const firstPart = [
  'Ужасный',
  'Злобный',
  'Сопливый',
  'Сердитый',
  'Огромный',
  'Вонючий',
  'Маленький',
  'Свирепый',
  'Какой-то',
  'Грязный',
];

const secondPart = [
  ' Огр',
  ' Гном',
  ' Гоблин',
  ' Дворф',
  ' Великан',
  ' Гопник',
  ' Троль',
  ' Зомби',
  ' Орк',
  ' Кент',
  ' Кентавр',
];

const thirdPart = [
  ' Том',
  ' Макс',
  ' Дима',
  ' Вася',
  ' Витёк',
  ' Колян',
  ' Потап',
  ' Вова',
  ' Саша',
  ' Паша',
];

function randomName(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function getMonsterName() {
  return `${randomName(firstPart)}${randomName(secondPart)}${randomName(thirdPart)}`;
}

