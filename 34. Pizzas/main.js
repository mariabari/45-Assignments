"use strict";
// Maria bari//
// Pizzas
let myFavoritePizza = ["Sabzi wala", "Hot Tandoori", "Chicken cheese "];
for (let pizza of myFavoritePizza) {
    console.log(pizza);
}
;
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let pizza of myFavoritePizza) {
    console.log(`I like, ${pizza}, pizza`);
}
;
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!
console.log(`I really like pizza. \n
It is very tasty. \n
I also recommend it for you`);
