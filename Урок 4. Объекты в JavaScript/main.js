//1 задание
function createObject(num) {
  numArr = String(num).split("");
  if (num.length <= 1) {
    numArr.unshift('0');
    numArr.unshift('0');
  } else if (num.length <= 2) {
    numArr.unshift('0');
  } else if (num.length > 3) {
    createObject(prompt("Надо было ввести число от 0 до 999, попробуйте ещё раз"));
  }
  output = {
    hundered: numArr[0],
    ten: numArr[1],
    one: numArr[2],
  }
  alert('В вашем числе сотен ' + output.hundered + '; десятков ' + output.ten + '; единиц ' + output.one);
}

createObject(prompt("Введите число от 0 до 999"));



//2 задание
var basket = [{
  name: 'Холодильник',
  price: 1000,
  count: 2
}, {
  name: 'Стиралка',
  price: 500,
  count: 4
}, {
  name: 'Пылесос',
  price: 700,
  count: 3
}];

function totalOrder(basket) {
  var sum = 0;
  for (i = 0; i < basket.length; i++) {
    sum += basket[i].price * basket[i].count;
  };
  return sum;
}

console.log(totalOrder(basket));
