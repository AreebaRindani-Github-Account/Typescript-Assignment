let Guest_List :string[] = ['Atif Aslam','Feroz Khan','Arsalan Rao'];

// for(let i=0; i<Guest_List.length; i++){

    // console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absent_Guest :string = 'Atif Aslam' ;
let new_Guest :string = 'Shehzad Roy' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
   //  console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We find Big Table so we are inviting 3 more guests.')

// array ma 3 Guest add kiye hai.
Guest_List.unshift('Ali Zafar') ;
Guest_List.splice(2 , 0 , 'Adnan Siddiqui');
Guest_List.push('Fawad Khan');

// // yaha pr mane 6 Guest ky array ko print kraya hai.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

// sorry Message to guest for not inviting.
// console.log('\nsorry we can not arrange big table, only Two people will be invited.');

// yaha pr mane Guest remove kiya hai.
while(Guest_List.length > 2){
   let remove_Guest = Guest_List.pop();
//    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

// // hamary bachy howe 2 invited Guest.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] +',\n\nYou are still invited.\n\nThank you!\n\n')
// }

// many sare guest array se remove kar diya.
Guest_List.splice(0, 2);
console.log(Guest_List);

// EXERCISES 19

// Print a message indicating the number of people you are inviting to dinner.
console.log(`Total Number Of Guest Are: ${Guest_List.length}`);
