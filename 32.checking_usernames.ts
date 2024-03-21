// checking usernames: Do the following to creat a program that simulates how website ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or two of the new username are also in the current_users list. 
// Loop through the new_users list to see if each new username has already been used. if it has, print a message thet the person will need to enter a new username. if a username has not ben used, print a message saying that the username is available.
//  Make sure your comparision is case insensitive. if 'Jhon' has been used, 'Jhon' should not be accepted.  

let current_users: string[] = ['UzAir','UMair','ADam','BiLal','HuZaifa'];
let new_users: string[] = ['Taha','UzAir','Dawood','Jameel','BiLal'];
new_users.forEach(newUsername =>{
   let lowerCase: string = newUsername.toLowerCase();
   if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
    console.log(`The username ${newUsername} is not available. Please write a diffrent username`);
   }
   else{
    console.log(`The username ${newUsername} is available.`);
   }
})






