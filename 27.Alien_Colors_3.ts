// Alien colors #3: Turn your if-else chain form Exercise 5-4 into if-else chain. 
// Write three version of ths program, making sure each message is printed for the appropriate color alien.
let aliencolor: string = "green";

// If the alien is green, print a message that the player earned 5 points. 
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.

// Version 1 of the program 
if(aliencolor === "green"){
    console.log("version 1: player earned 5 points.");
}
else if(aliencolor === "yellow"){
    console.log("player earned 10 points.");
}
else if(aliencolor === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right color")
}

// Version 2 of the program 
aliencolor = "yellow";

if(aliencolor === "green"){
    console.log("player earned 5 points.");
}
else if(aliencolor === "yellow"){
    console.log("version 2: player earned 10 points.");
}
else if(aliencolor === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right color")
}


// Version 3 of the program 
aliencolor = "red";

if(aliencolor === "green"){
    console.log("player earned 5 points.");
}
else if(aliencolor === "yellow"){
    console.log("player earned 10 points.");
}
else if(aliencolor === "red"){
    console.log("version 3: player earned 15 points.");
}
else{
    console.log("please select right color")
}
