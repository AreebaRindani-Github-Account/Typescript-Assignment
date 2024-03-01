let PersonName :string = '';

PersonName = prompt('what is your name?') || '';

let lowercase :string = PersonName.toLowerCase() ;
let uppercase :string = PersonName.toUpperCase() ;
let titlecase :string = PersonName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(PersonName !== null && PersonName !== ''){
    alert(`Hello ${PersonName}, Here are your name in:
    lowercase: ${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}`)
}
else{
    alert('please fill your name !')
}