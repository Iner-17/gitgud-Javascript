let prevNum = 0;
let currentNum = 1;
let nextNum; 

let array = [];

let num = prompt("Enter a number: ");
num = parseInt(num)

function fibonacci() {
    for (let i = 0; i < num - 2; i++) {
        nextNum = prevNum + currentNum;
        array.push(nextNum);
        prevNum = currentNum;
        currentNum = nextNum;
    }
    prevNum = 0;
    currentNum = 1;

    console.log(`${prevNum} ${currentNum} ${array.join(' ')}`);
}
//    2 3 1 2 3
fibonacci();
    


