function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + "").split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

//  display generated pin
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// handle calculator event bubble

const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function(event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        //  handle backspace
        //  handle clear
        if (digit === 'C') {
            const typedInput = document.getElementById("typedPin");
            typedInput.value = '';
        }
    } else {
        const typedInput = document.getElementById("typedPin");
        typedInput.value = typedInput.value + digit;
    }
})

function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typed = document.getElementById("typedPin").value;
    if (pin === typed) {
        displayMatchResult('block', 'none');
    } else {
        displayMatchResult('none', 'block');
    }
}

function displayMatchResult(correct, incorrect) {
    const correctPin = document.getElementById('correct-pin');
    correctPin.style.display = correct;
    const incorrectPin = document.getElementById('incorrect-pin');
    incorrectPin.style.display = incorrect;
}