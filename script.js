//selector
let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

//event listeners

addCount.addEventListener('click',incrementCounter);
lowerCount.addEventListener('click',decrementCounter);

//functions

function incrementCounter (){
    count++;
    counter.innerHTML = count;
   
    //animate function to animate counter
    counter.animate([{opacity:'0.1'},{opacity:'1.0'}],
    {duration:500,fill:'forwards'});
}

function decrementCounter(){
    count--;
    counter.innerHTML = count;
     
     //animate function to animate counter
    counter.animate([{opacity:'0.1'},{opacity:'1.0'}],
    {duration:500,fill:'forwards'});

    
}