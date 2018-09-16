// 1 задание
var a = 1 , b = 1 , c , d;
c = ++ a ; alert ( c ); // 2 //переменнная с из undifined стала ++а (2) и алерт выводит 2, но переменная а тоже увеличилась и стла равна 2 (почему?)
d = b ++; alert ( d ); // 1 //переменная d становится из undifined 1 как в переменной b, затем алерт выводит это значение (1) и только потом происходит увелечение переменной b (2)
c = ( 2 + ++ a ); alert ( c ); // 5 //в переменной с сейчас 2 затем сложение 2 + ++2 (но так как ++ перед а, то получается 2 + 3 = 5) алертом вовыдим 5
d = ( 2 + b ++); alert ( d ); // 4 //в переменной d сейчас 1 затем происходит присвоение (2 + b++, но так как ++после переменной то читать надо как 2 + 2 = 4) алертом выводим 4
alert ( a ); // 3 // так как на предыдущих строках бало ++а и а++ то а увелеичилась на единицу 2 раза и стала 3 алертом выодим 3
alert ( b ); // 3 / /так как на предыдущих строках бало b++ и ++b то b увелеичилась на единицу 2 раза и стала 3 алертом выодим 3


// 2 задание
var a = 2;
var x = 1 + ( a *= 2 ); // сначала происходит операция в скобках умножение и присвоение значения а(2) * 2 тоесть а = а * 2 итого получается 4 затем + 1 и х становится равен 5


// 3 задание
a = 2;
b = 5;
if (a > 0 && b > 0) {
  console.log(a - b)
} else if (a < 0 && b < 0) {
  console.log(a * b)
} else {
  console.log(a + b)
}


// 4 задание
a = 8;
switch(a) {
  case 0:
    console.log(0);
  case 1:
    console.log(1);
  case 2:
    console.log(2);
  case 3:
    console.log(3);
  case 4:
    console.log(4);
  case 5:
    console.log(5);
  case 6:
    console.log(6);
  case 7:
    console.log(7);
  case 8:
    console.log(8);
  case 9:
    console.log(9);
  case 10:
    console.log(10);
  case 11:
    console.log(11);
  case 12:
    console.log(12);
  case 13:
    console.log(13);
  case 14:
    console.log(15);
  default:
    console.log(15);
}

// 5 задание 
function addition(x, y) {
  var result = x + y;
  return result;
}
function subtraction(x, y) {
  var result = x - y;
  return result;
}
function multiplication(x, y) {
  var result = x * y;
  return result;
}
function division(x, y) {
  var result = x / y;
  return result;
}

var resultAddition = addition(11, 11);
console.log(resultAddition);

var resultSubtraction = subtraction(11, 11);
console.log(resultSubtraction);

var resultMultiplicationn = multiplication(11, 11);
console.log(resultMultiplicationn);

var resultDivision = division(11, 11);
console.log(resultDivision);


// 6 задание
function mathOperation(x, y, operation) {
  if (operation == addition) {
    var result = addition(x, y);
    return result; 
  } else if (operation == subtraction) {
    var result = subtraction(x, y);
    return result; 
  } else if (operation == multiplication) {
    var result = multiplication(x, y);
    return result; 
  } else if (operation == division) {
    var result = division(x, y);
    return result; 
  }
};

var res6 = mathOperation(8, 8, addition);
console.log(res6);


// 8 задание
function power(val, pow) {
  if (pow != 1) { 
    return val * power(val, pow - 1);
  } else {
    return val;
  }
} //решение подсмотрел в интернете но разобрался и понял что происходит

var res8 = power(2, 5);
console.log(res8);
