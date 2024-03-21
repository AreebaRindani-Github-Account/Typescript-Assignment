// Hello Admin: make a array of five or more username, including the name 'admin' .imagine you are writting code that will print a greeting to each user after they log in to a website. loop through the array, and print a greeting to each user:
// If the user name is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const userName: string[] = ['admin','Bugs Bunny','Daffy Duck','sylvester','Tweety'];

for(let i=0; i<userName.length; i++){

    if(userName[i] === 'admin'){

        console.log('Hello admin, would you like to see a status report?');
    }
    else{
        console.log(` Hello ${userName[i]}, thank you for logging in again.`)
    }
}





















