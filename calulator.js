const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome!\n--------------------------------------");
console.log("-------------------CALCULATOR-------------------");
console.log("------------------------------------\n");


rl.question("Insert First Number: ", (firstNumber) => {
    rl.question("Insert Secons Number: ", (secondNumber) => {
        rl.question("Enter\n 1, For Addition\n 2, For Subtraction\n 3, For Multiplication\n 4, For Division: ", (operation) => {

            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);
            operation = parseInt(operation);

            console.log(operation);

            switch (operation) {
                case 1:
                    console.log(`\nResult: ${firstNumber + secondNumber}`);
                    break;
                case 2:
                    console.log(`\nResult: ${firstNumber - secondNumber}`);
                    break;
                case 3:
                    console.log(`\nResult: ${firstNumber * secondNumber}`);
                    break;
                case 4:
                    console.log(`\nResult: ${firstNumber / secondNumber}`);
                    break;
                default:
                    console.log(`\nOops! Invalid operator chosen.`);
            }
            rl.close();
        })
    })
})

rl.on("close", function () {
    console.log("\nThank You For Using The Program!");
    process.exit(0);
});


