"use strict";
// maria bari
//unchanged megicians
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
let originalMagicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
let originalMagiciansCopy = [...originalMagicianNames]; // Create a copy of the original array
// Call make_great with the copy and store the result in a new array
let greatMagicians2 = make_great(originalMagiciansCopy);
console.log("Original Magicians:");
show_magicians(originalMagicianNames); // Display the original list of magicians
console.log("\nGreat Magicians:");
show_magicians(greatMagicians2); // Display the modified list of magicians with "the Great"
