// Import readline module for user input
const readline = require('readline');

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get the current position based on user inputs
function getPosition() {
    // Initialize our starting position variables x, y, and z to 0
    let x = 0;
    let y = 0;
    let z = 0;

    // Loop to continuously prompt user for inputs until they type 'exit'
    const loop = () => {
        rl.question('Enter a command (forward, backward, left, right, up, down, reset, exit, location): ', (input) => {
            // Use a switch statement to determine which direction the character is moving in
            switch (input) {
                case 'forward':
                    // If the input is 'forward', increase the y position by 1
                    y += 1;
                    break;
                case 'backward':
                    // If the input is 'backward', decrease the y position by 1
                    y -= 1;
                    break;
                case 'left':
                    // If the input is 'left', decrease the x position by 1
                    x -= 1;
                    break;
                case 'right':
                    // If the input is 'right', increase the x position by 1
                    x += 1;
                    break;
                case 'up':
                    // if the input is 'up, increase z position by 1
                    z += 1;
                    break;
                case 'down':
                    // if the input is 'down, increase z position by 1
                    z -= 1;
                    break;
                case 'reset':
                    // if user selects reset
                    x = 0; y = 0; z = 0;
                    break;
                case 'location':
                    // get location
                    console.log(x,y,z);
                    break;
                case 'exit':
                    // If the input is 'exit', close the readline interface and return the final position
                    console.log(`Final position: x = ${x}, y = ${y}, z = ${z}`);
                    rl.close();
                    return;
                default:
                    // If the input is not one of the recognized values, throw an error
                    console.log(`Invalid input: ${input}`);
            }
            // Recursively call the loop function to continuously prompt user for input
            loop();
        });
    }
    loop();
}

module.exports = { getPosition };