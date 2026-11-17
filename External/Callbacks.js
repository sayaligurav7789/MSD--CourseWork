// function add(a, b, display){
//     let sum = a + b;
//     display(sum);
// }
// function display(sum){
//     console.log("Sum: ", sum);
// }

// let a = Number(prompt("Enter first number: "));
// let b = Number(prompt("Enter second number: "));

// add(a, b, display);
// console.log("Program Ended!");

function add(a, b, display){
    setTimeout(() => {
        let sum = a + b;
        display(sum);
    }, 2000);
}
function display(sum){
    console.log("Sum: ", sum);
}

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

add(a, b, display);
console.log("Program Ended!");