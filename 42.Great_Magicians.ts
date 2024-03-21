// Great magicians: start with a copy of your program from Exercise 39. write a function called make_great()
// that modifies the array of magicians by adding the phrase the great to each magician's name. call
// show_magicians() to see that the list has actually been modified.

let magician : string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great ( magicianarray:string[] ){
    for(let i=0; i<magicianarray.length; i++){
        magician[i] = 'the Great ' + magicianarray[i]
    }
}
function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);





