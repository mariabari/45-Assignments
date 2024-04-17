"use strict";
// maria bari
// Great megicians
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicianNames2 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
let greatMagicians = make_great(magicianNames2);
// This will print the great magicians' names.
show_magicians(greatMagicians);
// This will log the array of great magicians.
console.log(greatMagicians);
