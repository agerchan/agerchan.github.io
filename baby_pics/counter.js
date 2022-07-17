var counterVal = -1;

function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-image").src = "pics/" + (val % 15 + 1) + ".jpg";
}
