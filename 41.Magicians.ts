// Magicians: make a array of magician's names. pass the array to a function called show_magicians(). which 
// prints the name of each magicians in the array.

let magician : string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

function show_magicians(magicians: string[]){
    magicians.forEach(Element => {
    console.log(Element);
    });
   
}

show_magicians(magician)