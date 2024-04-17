// maria bari

// Great megicians



    function make_great(magicians: string[]): string[] {
        let greatMagicians: string[] = [];
      
        for (let magician of magicians) {
          greatMagicians.push(`${magician} the Great`);
        }  
        return greatMagicians;
    }
    
    function show_magicians(magicians: string[]): void {
        for (let magician of magicians) {
            console.log(magician);
        }
    }
    
    let magicianNames2: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
    let greatMagicians = make_great(magicianNames2);
    
    // This will print the great magicians' names.
    show_magicians(greatMagicians); 

    // This will log the array of great magicians.
    console.log(greatMagicians); 
    



