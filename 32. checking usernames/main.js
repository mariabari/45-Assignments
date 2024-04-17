"use strict";
// Maria bari//
// checking usernames
let current_users = ["Maria", "Sarfraz", "Babar", "Imad", "Haider"];
let new_users = ["Hafeez", "Shaheen", "Imad", "Shadab", "Salman"];
for (let i = 0; i < new_users.length; i++) {
    let isNameTaken = current_users.some((current_users) => current_users.toLowerCase() === new_users[i].toLowerCase());
    if (isNameTaken) {
        console.log(`The Name "${new_users[i]}" has already been used. You will need to enter a new username.`);
    }
    else {
        console.log(`The Name "${new_users[i]}" is available.`);
    }
}
