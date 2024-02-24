let prevNum = 0;
let currentNum = 1;
let nextNum; 

let array = [];



function fibonacci() {
    for (let i = 0; i < 10; i++) {
        nextNum = prevNum + currentNum;

        array.push(nextNum);

        prevNum = currentNum;
        currentNum = nextNum;

        if (i == 9) {
            prevNum = 0;
            currentNum = 1;
        }
    }
    console.log(`${prevNum} ${currentNum} ${array.join(' ')}`);
}
   
fibonacci();
    


