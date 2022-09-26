

function writeCards(names, event){
    const cardArray = [];
    for (let i = 0; i < names.length; i++){
        cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardArray;
}

function countDown(n){
    while (n >= 0){
        console.log(n--);
    }
}