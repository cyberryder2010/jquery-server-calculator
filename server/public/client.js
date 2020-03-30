$(document).ready(init);

let operator = "";

function init() {
  console.log("DOM is Ready!!");
  $(".js-plus-btn").on("click", plusOperator);
  $(".js-minus-btn").on("click", minusOperator);
  $(".js-multi-btn").on("click", multiOperator);
  $(".js-divide-btn").on("click", divideOperator);
  $(".js-total-btn").on("click", clickTotal);
  $(".js-clear-btn").on("click", clickClear);
}

function plusOperator() {
  operator = "+";
  console.log("plusOperator");
}
function minusOperator() {
  operator = "-";
  console.log("minusOperator");
}
function multiOperator() {
  operator = "X";
  console.log("multiOperator");
}
function divideOperator() {
  operator = "/";
  console.log("divideOperator");
}
function clickTotal() {
  const equationInput = {
    num1: parseInt($("#num1").val()),
    num2: parseInt($("#num2").val()),
    operator: operator
  };
  console.log(equationInput);
  saveEquation(equationInput);
}

function clickClear() {
  $("#num1").val("");
  $("#num2").val("");
}
function saveEquation(calcTotal) {
  $.ajax({
    method: "POST",
    url: "/calcTotal",
    data: calcTotal
  })
    .then(response => {
      console.log(response);
      getHistory();
    })
    .catch(err => {
      console.log("Ut Oh!!!");
    });
}

function getHistory() {
  $.ajax({
    method: "GET",
    url: "/calcHistory"
  })
    .then(response => {
      render(response);
    })
    .catch(err => {
      console.log("Ut Oh!!!");
    });
}
function render(calcHistory) {
  console.log("RENDER HISTORY", calcHistory);
  $(".js-calcHistory-list").empty();

  $(".js-total").text(calcHistory[calcHistory.length - 1].total);

  for (let i = 0; i < calcHistory.length; i++) {
    const calcTotal = calcHistory[i];

    $(".js-calcHistory-list").append(`
      <p>${calcTotal.num1} ${calcTotal.operator} ${calcTotal.num2} = ${calcTotal.total}</p>`);
  }
}
