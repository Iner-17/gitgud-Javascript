// let prevNum = 0;
// let currentNum = 1;
// let nextNum; 

// let array = [];

// let num = prompt("Enter a number: ");
// num = parseInt(num)

// function fibonacci() {
//     for (let i = 0; i < num - 2; i++) {
//         nextNum = prevNum + currentNum;
//         array.push(nextNum);
//         prevNum = currentNum;
//         currentNum = nextNum;
//     }
//     prevNum = 0;
//     currentNum = 1;

//     console.log(`${prevNum} ${currentNum} ${array.join(' ')}`);
// }
// fibonacci();
    
let posts = [
    {title: 'post1', author: 'Bong'},
    {title: 'post2', author: 'Bong'},
    {title: 'post3', author: 'Bianca'},
];

let bongsPost = posts.filter(p => 
    p.author == 'Bong'
);

let titleOfBong = bongsPost.map(p => p.title)

console.log(bongsPost);
console.log(`Bong's works are ${titleOfBong.join(' and ')}`);
