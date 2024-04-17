// maria bari

// sandwich


function yourSandwich(...items: string[]) {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different names for the sandwiches
yourSandwich("Special Sandwich", "Ham", "Cheese", "Lettuce");
yourSandwich("Deluxe Sandwich", "Turkey", "Tomato");
yourSandwich("Classic Sandwich", "Peanut Butter", "Jelly", "Banana", "Honey");
