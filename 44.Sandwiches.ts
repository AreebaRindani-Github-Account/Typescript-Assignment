// Sandwiches: write a function that accepts a array of items a person wants on a sandwich. 
// the function should have one parameter that collects as many items as the function call
// provides, and it should print a summary of the sandwich that is being ordered. call the 
// function three times, using a different number of arguments each time.

function make_sandwich (item: string[]) {
    console.log('\nMaking your sandwich with:');
    item.forEach(Element => console.log("- " + Element));
    console.log('Enjoy your sandwich !\n');
}

make_sandwich(['Ham', 'Cheese', 'Lettuce']);

make_sandwich(['Turkey', 'Bacon']);

make_sandwich(['Peanut butter', 'Jelly']);




