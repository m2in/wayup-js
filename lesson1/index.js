console.log("add js");
/*
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе. Все данные необходимо записать в отдельную переменную.
    Информация о городе:
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
const myCity = {
  city: "Gomel",
  country: "Republic of Belarus",
  population: 500000,
  football_stadium: true,
};
console.log(myCity.city);
/*
    Задание 2:

    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/
let heightFigure = 40,
  widthFigure = 70;
squareFigure = heightFigure * widthFigure;
console.log(
  `площадь фигуры с высотой ${heightFigure}см и шириной ${widthFigure}см равна ${squareFigure}кв.см`
);
/*
    Задание 3:

    Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга и после всех вычеслений записать результат в переменную.

    Исходные данные:
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/

let time = 2,
  speedOfFirst = 95,
  speedOfSecond = 114,
  distance = (speedOfFirst + speedOfSecond) * time;
console.log(`города удалены друг от друга на ${distance}км`);

/*
    Задание 4:

    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"
*/
const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
  console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
  console.log("randomNumber больше 50");
} else {
  console.log("randomNumber больше 20, и меньше 50");
}
/*
    Задание 5:

    Условную конструкцию из задания 4, перепишите с помощью Switch Case
*/
switch (randomNumber) {
  case 0:
    console.log("randomNumber меньше 20");
    break;
  case 1:
    console.log("randomNumber меньше 20");
    break;
  case 2:
    console.log("randomNumber меньше 20");
    break;
  case 3:
    console.log("randomNumber меньше 20");
    break;
  case 4:
    console.log("randomNumber меньше 20");
    break;
  case 5:
    console.log("randomNumber меньше 20");
    break;
  case 6:
    console.log("randomNumber меньше 20");
    break;
  case 7:
    console.log("randomNumber меньше 20");
    break;
  case 8:
    console.log("randomNumber меньше 20");
    break;
  case 9:
    console.log("randomNumber меньше 20");
    break;
  case 10:
    console.log("randomNumber меньше 20");
    break;
  case 11:
    console.log("randomNumber меньше 20");
    break;
  case 12:
    console.log("randomNumber меньше 20");
    break;
  case 13:
    console.log("randomNumber меньше 20");
    break;
  case 14:
    console.log("randomNumber меньше 20");
    break;
  case 15:
    console.log("randomNumber меньше 20");
    break;
  case 16:
    console.log("randomNumber меньше 20");
    break;
  case 17:
    console.log("randomNumber меньше 20");
    break;
  case 18:
    console.log("randomNumber меньше 20");
    break;
  case 19:
    console.log("randomNumber меньше 20");
    break;
  case 51:
    console.log("randomNumber больше 50");
    break;
  case 52:
    console.log("randomNumber больше 50");
    break;
  case 53:
    console.log("randomNumber больше 50");
    break;
  case 54:
    console.log("randomNumber больше 50");
    break;
  case 55:
    console.log("randomNumber больше 50");
    break;
  case 56:
    console.log("randomNumber больше 50");
    break;
  case 57:
    console.log("randomNumber больше 50");
    break;
  case 58:
    console.log("randomNumber больше 50");
    break;
  case 59:
    console.log("randomNumber больше 50");
    break;
  case 60:
    console.log("randomNumber больше 50");
    break;
  case 61:
    console.log("randomNumber больше 50");
    break;
  case 62:
    console.log("randomNumber больше 50");
    break;
  case 63:
    console.log("randomNumber больше 50");
    break;
  case 64:
    console.log("randomNumber больше 50");
    break;
  case 65:
    console.log("randomNumber больше 50");
    break;
  case 66:
    console.log("randomNumber больше 50");
    break;
  case 67:
    console.log("randomNumber больше 50");
    break;
  case 68:
    console.log("randomNumber больше 50");
    break;
  case 69:
    console.log("randomNumber больше 50");
    break;
  case 70:
    console.log("randomNumber больше 50");
    break;
  case 71:
    console.log("randomNumber больше 50");
    break;
  case 72:
    console.log("randomNumber больше 50");
    break;
  case 73:
    console.log("randomNumber больше 50");
    break;
  case 74:
    console.log("randomNumber больше 50");
    break;
  case 75:
    console.log("randomNumber больше 50");
    break;
  case 76:
    console.log("randomNumber больше 50");
    break;
  case 77:
    console.log("randomNumber больше 50");
    break;
  case 78:
    console.log("randomNumber больше 50");
    break;
  case 79:
    console.log("randomNumber больше 50");
    break;
  case 80:
    console.log("randomNumber больше 50");
    break;
  case 81:
    console.log("randomNumber больше 50");
    break;
  case 82:
    console.log("randomNumber больше 50");
    break;
  case 83:
    console.log("randomNumber больше 50");
    break;
  case 84:
    console.log("randomNumber больше 50");
    break;
  case 85:
    console.log("randomNumber больше 50");
    break;
  case 86:
    console.log("randomNumber больше 50");
    break;
  case 87:
    console.log("randomNumber больше 50");
    break;
  case 88:
    console.log("randomNumber больше 50");
    break;
  case 89:
    console.log("randomNumber больше 50");
    break;
  case 90:
    console.log("randomNumber больше 50");
    break;
  case 91:
    console.log("randomNumber больше 50");
    break;
  case 92:
    console.log("randomNumber больше 50");
    break;
  case 93:
    console.log("randomNumber больше 50");
    break;
  case 94:
    console.log("randomNumber больше 50");
    break;
  case 95:
    console.log("randomNumber больше 50");
    break;
  case 96:
    console.log("randomNumber больше 50");
    break;
  case 97:
    console.log("randomNumber больше 50");
    break;
  case 98:
    console.log("randomNumber больше 50");
    break;
  case 99:
    console.log("randomNumber больше 50");
    break;
  case 100:
    console.log("randomNumber больше 50");
    break;
  default:
    console.log("randomNumber больше 20, и меньше 50");
}
