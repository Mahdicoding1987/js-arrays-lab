//Exercise 13

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const last = numArrays.length -1
let numList = []

numList.push(numArrays[last])

console.log('Exercise 13 result:',numList);

//================================================//

//Exercise 14

const num = numArrays[2][1]

console.log('Exercise 14 result:', num);

//================================================//
//Exercise 15

let sum = 0

numArrays.forEach(function(num){
    num.forEach(function(num){
        sum += num
    })
})

console.log('Exercise 15 result:', sum);