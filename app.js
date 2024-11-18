var display = document.getElementById("display");
var clear = document.getElementsById("clear");

function number(param) {
  display.value += param;
}

function operater(param) {
  if (
    display.value.at(-1) == "+" ||
    display.value.at(-1) == "-" ||
    display.value.at(-1) == "*" ||
    display.value.at(-1) == "/"
  ) {
    display.value = display.value.slice(0, -1) + param;
  } else {
    display.value += param;
  }
}

function clr() {
  display.value = "";
}
function cal() {
  display.value = eval(display.value);
}
function clearOne() {
  display.value = display.value.slice(0, -1);
}
