let Guest_List :string[] = ['Atif Aslam','Feroz Khan','Arsalan Rao'];

// for(let i=0; i<Guest_List.length; i++){

    // console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absent_Guest :string = 'Atif Aslam' ;

let new_Guest :string = 'Shehzad Roy' ;

Guest_List[0] = new_Guest ;


for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! We find Big Table so we are inviting 3 more guests.')


Guest_List.unshift('Ali Zafar') ;
Guest_List.splice(2 , 0 , 'Adnan Siddiqui');
Guest_List.push('Fawad Khan');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

