"use strict";

document.querySelector("#generate").addEventListener("click", generate);

function generate() {
  let options = document.querySelector("#options");
  let optionsValue = document.querySelector("#options").value;
  const input = document.querySelector("#input");
  let inputValue = document.querySelector("#input").value;
  let output = document.querySelector("#output");
  let outputValue = output.value;

  let input2 = "";

  if (optionsValue == "firstname") {
    let result =
      inputValue.charAt(0).toUpperCase() +
      inputValue.substring(1).toLowerCase();
    output.textContent = result;
  } else if (optionsValue == "filename") {
    let result = inputValue.includes(".jpg") || inputValue.includes(".png");
    output.textContent = result;
  } else if (optionsValue == "fullname") {
    let result = inputValue.split(" ")[1];
    //    let result = inputValue.substring(0, inputValue.indexOf(" ")) Could also be used
    output.textContent = result;
  } else if (optionsValue == "fullnamelenght") {
    let result = inputValue.substring(0, inputValue.indexOf(" ")).length;
    output.textContent = result;
  } else if (optionsValue == "fullnamemiddle") {
    let result = inputValue.substring(
      inputValue.indexOf(" ") + 1,
      inputValue.lastIndexOf(" ")
    );
    output.textContent = result;
  } else if (optionsValue == "passw") {
    //let result = inputValue.
  } else if (optionsValue == "thirdupper") {
    // let result = inputValue.
  } else if (optionsValue == "hyphen") {
  }
}
