"use strict";
// Maria Bari //
let userNames = ["Admin", "Ameen01", "jawad07"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "Admin") {
        console.log(`Hello admin, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
