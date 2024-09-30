const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const fizz = []
const buzz = []
const fizzbuzz = []

for (num of nums) {
    if (num % 3 === 0){
        fizz.push(num);
    }}

for (num of nums) {
    if (num % 5 === 0){
    buzz.push(num);
    }}

for (num of nums) 
    if (num % 3 === 0 || num % 5 === 0){
    fizzbuzz.push(num)};

    console.log(fizzbuzz)