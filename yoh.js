// function calculate(num1, num2, operation){
//     let result = 0
//     if(operation === "add"){
//         let result = num1 + num2;
//     }else if(operation === '_'){
//         let result = num1 - num2;
//     }else if(operation === '*'){
//         let result = num1 * num2;
//     }else if(operation === '/'){
//         if (num2 === 0){
//             console.log("You cannot divide a number by 0");
//         }else{
//         result = num1 / num2;
//     };
// }else{console.log("Invalid Ooperation")}

//     return result;

// }
// console.log(calculate(12,4,'add'));

function calculate(num1, num2, operation){
    let result = 0
    if (operation === "add"){
        result = num1 + num2;
    }else if(operation === '-'){
        result = num1 - num2;
    }else if(operation === '*'){
        result = num1 * num2;
    }else if (operation === '/'){
        if (num2 === 0){
            console.log("You can't divide a number by 0");
        }else{
            result = num1 / num2;
        };
    }else{
        console.log("Invalid operation")
    }
    return result;
}
console.log(calculate(2,4, 'add'));
console.log(calculate(10,4, '-'));
console.log(calculate(6,0, '/'));
console.log(calculate(20,10, '*'));