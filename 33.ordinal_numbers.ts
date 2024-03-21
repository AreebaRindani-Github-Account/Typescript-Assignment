// Ordinal Numbers: ordinal numbers indicate their position in a array, such as 1st or 2nd. most ordinal numbers end in the, except 1, 2, and 3.
// Store the numbers 1 through 9 in a array.
// Loop through the array.
// use an if- else chain inside the loop to print the proper ordinal ending for each number. your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. 

let numbers: number[] = [1,2,3,4,5,6,7,8,9];

for(let num of numbers){
    let OrdinalEnding:string;

    if(num === 1){
        OrdinalEnding = "st";
    }
    else if(num === 2){
        OrdinalEnding = "nd";
    }
    else if(num === 3){
        OrdinalEnding = "rd";
    }

    else{
        OrdinalEnding = "th";
    }

    console.log(`${num}${OrdinalEnding}`);

}










