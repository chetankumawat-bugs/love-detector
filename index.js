// Function to generate a random love percentage
function generateLovePercentage() {
    return (Math.random() * 100).toFixed(2);
}

// Prompt the user for the two names
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter the first name: ', (name1) => {
    readline.question('Please enter the second name: ', (name2) => {
        // Generate a random love percentage
        const lovePercentage = generateLovePercentage();

        // Display the result
        console.log(`The love percentage between ${name1} and ${name2} is: ${lovePercentage}%`);

        readline.close();
    });
});