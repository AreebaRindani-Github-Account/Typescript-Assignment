//  Animals: think of at least three different animals that have a common characteristic. 
// store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// Modify your program to print a statement about each animal, such as a dog would make a great pet. add a 
// line at the end of your program stating what these animal have in common. you could print a sentence 
// such as any of these animals would make a great pet!

let Animals: string[] = [ 'dog','cat','rabbit'];

for(let Animal of Animals){
    console.log(`A ${Animal} would make a great pet.`);
}
console.log(`Any of these animals would make a great pet!`);
