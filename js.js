"use strict";

document.querySelector("#generate").addEventListener("click", generate);

function generate() {
  let options = document.querySelector("#options");

  const input = document.querySelector("#input");
  let inputValue = input.value;
  let output = document.querySelector("#output");
  let outputValue = output.value;

  let input2;

  if (options == "firstname") {
    output.value =
      input2.charAt(0).toUpperCase() + input2.substring(1).toLowerCase();
    console.log("hej");
  }
}
