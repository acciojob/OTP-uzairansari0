//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    // Handle typing a number
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 0 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Handle backspace
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (input.value === '' && index > 0) {
                // If current input is empty, move focus back and then the 
                // browser will handle the deletion in that previous box
                inputs[index - 1].focus();
            }
        }
    });
});