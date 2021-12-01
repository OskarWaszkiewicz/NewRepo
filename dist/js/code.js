const resultBox = document.querySelector(".calc__resultBox");
let currentNumber = 0;
let number1 = 0;
let number2 = 0;
let currentOperation = "";
let afterEqual = false;
let i = 0;
let tooBigNumb = false;
resultBox.value = currentNumber;

function Reset() {
    currentNumber = 0;
    number1 = 0;
    number2 = 0;
    currentOperation = "";
    afterEqual = false;
    tooBigNumb = false;
    resultBox.value = currentNumber;
}

function PickedNumberOrDot(numbButt) {
    if (afterEqual == true) {
        currentNumber = 0;
        afterEqual = false;
    }
    if (tooBigNumb == true) {
        Reset();
    }
    if (currentNumber == "0")
        currentNumber = ""
    currentNumber += numbButt.innerHTML;
    if (currentOperation == "")
        number1 = currentNumber;
    else
        number2 = currentNumber;
    resultBox.value = currentNumber;
}

function PickedOperation(opButt) {
    if (tooBigNumb == true) {
        Reset();
    }
    if (currentOperation != "") {
        EqualsButtonFunc();
        afterEqual == true;
    }
    currentOperation = opButt.innerHTML;
    number1 = currentNumber;
    if (afterEqual == false) {
        currentNumber = 0;
        resultBox.value = currentNumber;
    }

}

function EqualsButtonFunc() {
    if (tooBigNumb == true) {
        Reset();
    }
    switch (currentOperation) {
        case "+":
            currentNumber = parseFloat(number1) + parseFloat(number2);
            break;
        case "-":
            currentNumber = parseFloat(number1) - parseFloat(number2);
            break;
        case "x":
            currentNumber = parseFloat(number1) * parseFloat(number2);
            break;
        case "÷":
            if (parseFloat(number2) != 0)
                currentNumber = parseFloat(number1) / parseFloat(number2);
            break;
        default:
            numebr1 = number2;
            number2 = 0;
            break;
    }
    resultBox.value = currentNumber;
    resultBox.value = RoundResult(resultBox.value.length);
    currentNumber = resultBox.value;
    currentOperation = "";
    afterEqual = true;
}

function BackspaceButt() {
    if (currentNumber != "0")
        currentNumber = currentNumber.slice(0, -1);
    resultBox.value = currentNumber;
    if (currentOperation == "")
        number1 = currentNumber;
    else
        number2 = currentNumber;
}

function SquareRootButt() {
    currentNumber = Math.sqrt(parseFloat(currentNumber));
    resultBox.value = currentNumber;
    resultBox.value = RoundResult(resultBox.value.length);
    currentNumber = resultBox.value;
    if (resultBox.value.includes("...")) {
        setTimeout(() => { currentNumber = 0; resultBox.value = currentNumber; }, 2000);
    }
    number1 = 0;
    number2 = 0;
    afterEqual = true;
}

function RoundResult(ResultLength) {
    console.log(ResultLength);
    console.log(resultBox.value);
    console.log(resultBox.value.length);
    if (ResultLength > 10 && resultBox.value.includes("."))
        return Math.round(parseFloat(resultBox.value) * Math.pow(10, resultBox.value.length - 10)) / Math.pow(10, resultBox.value.length - 10);
    else if (ResultLength > 10) {
        tooBigNumb = true;
        return resultBox.value.substring(0, 8) + "...";
    }
    else
        return resultBox.value;
}

function ZoomInButt() {
    if (i < 4)
        i++;
    document.getElementsByTagName("body")[0].style.transform = "scale(1." + i + ")";
}
function ZoomOutButt() {
    if (i > 0)
        i--;
    document.getElementsByTagName("body")[0].style.transform = "scale(1." + i + ")";
}