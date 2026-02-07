const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    // 1. Forward movement: Triggered when a character is entered
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 0) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    // 2. Backward movement: Triggered on Backspace
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            // If the current input is empty, move focus to the previous one
            if (input.value === '' && index > 0) {
                // We use a tiny timeout to ensure the focus shift happens 
                // correctly after the key event is processed
                setTimeout(() => inputs[index - 1].focus(), 0);
            }
        }
    });
});

// Initial focus for the first test case requirement
inputs[0].focus();