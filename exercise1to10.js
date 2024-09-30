const foods = ['pizza', 'cheeseburger' ]; // Exercise 1 & 2

foods.unshift ('taco')                    // Exercise 3
let favfood = foods[1]                    // Exercise 4
foods.splice(2,0, 'tofu')                 // Exercise 5
foods.splice(1, 1, 'sushi', 'cupcake')    // Exercise 6
let yummy = foods.slice(1, 3)             // Exercise 7
let soyIdx = foods.indexOf('tofu')        // Exercise 8
let allFoods = foods.join(' -> ')         // Exercise 9
let hasSoup = foods.includes('soup')      // Exercise 10

console.log(yummy);