let PersonName :string = "";

PersonName = prompt('What is your name?') || '';

if(PersonName !== null && PersonName !==''){
    alert(`Hello ${PersonName},would you like to learn some pythone today?`)

}
else{
    alert('You have to fill your name !')
    
}

