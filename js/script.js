let inputDistance = document.querySelector(".content__block-values-distance-value");
let distanceTxt = document.querySelector(".content__block-values-distance-text");
let inputGasoline = document.querySelector(".content__block-values-price-gasoline-value");
let gasolineTxt = document.querySelector(".content__block-values-price-gasoline-txt");
let inputConsumption = document.querySelector(".content__block-values-consumption-value");
let consumptionTxt = document.querySelector(".content__block-values-consumption-txt");
let btn = document.querySelector(".content__block-cost-wrap-btn");
let price = document.querySelector(".content__block-cost-wrap-value");
let inputs = Array.from(document.querySelectorAll(".input"));
let errorBlock = document.querySelector(".error-block");
let errorBlockTxt = document.querySelector(".error-block-content");

btn.addEventListener("click", clickBtn);

function clickBtn() {
    checkAllValues();
}

function checkAllValues() {
    if (inputDistance.value == "" && inputDistance.value == 0) {
        errorBlock.classList.add("js-error-tr");
        errorBlockTxt.textContent = "fill in the distance field";
    } else if (inputGasoline.value == "" && inputGasoline.value == 0) {
        errorBlock.classList.add("js-error-tr");
        errorBlockTxt.textContent = "fill in the gasoline price field";
    } else if (inputGasoline.value == "" && inputGasoline.value == 0) {
        errorBlock.classList.add("js-error-tr");
        errorBlockTxt.textContent = "fill in the consumption field";
    } else {
        errorBlock.classList.remove("js-error-tr");
        calculate();
    }
}

function calculate() {
    let distanceValue = inputDistance.value;
    let gasolineValue = inputGasoline.value;
    let consumptionValue = inputConsumption.value;
    price.textContent = `${(distanceValue / 100) * consumptionValue * gasolineValue} ₽  `;
    price.classList.add("js-price-tr");
}

inputs.map((input) => {
    input.addEventListener("keydown", (event) => {
        let isNum = false;
        let isControl = false;
        if (event.key >= 0 && event.key <= 9) {
            isNum = true;
        } else if (event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Backspace") {
            isControl = true;
        } else {
            event.preventDefault();
        }
    });
})
