//create an array of value pairs from input
//submit = mathematical operation + - * /
//return answer - capture this input

let num1 = "";
let num2 = "";
let operator = "";
let total = "";

function calcTotal(obj) {
  num1 = parseInt(obj.num1);
  num2 = parseInt(obj.num2);
  operator = obj.operator;

  switch (operator) {
    case "+":
      total = num1 + num2;
      // displayButton(total);
      break;
    case "-":
      total = num1 - num2;
      // displayButton(total);
      break;
    case "/":
      total = num1 / num2;
      // displayButton(total);
      break;
    case "X":
      total = num1 * num2;
      // displayButton(total);
      break;
  }
  return total;
  // updateCalculation();
}
// function displayButton(btn) {
//     $('.calc-result-input').text(btn);
// };

// function updateCalculation() {
//   num1 = total;
//   num2 = "";
// }

module.exports = calcTotal;
