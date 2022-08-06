const displayResult= document.querySelector('.displayResult');

const number= document.querySelectorAll('.digits') ;
const operationss= document.querySelectorAll('.buttons') ;
let storedValue= displayResult;
const initiator= document.querySelector('.initiator');
let valueA=0;
let whatWasClicked= '';
operationss.forEach((operation)=> {operation.addEventListener('click',(operation)=> { 
    valueA= parseInt(storedValue);
    displayResult.textContent='';
    whatWasClicked=`${operation.target.textContent}`;
 });});


 initiator.addEventListener('click',()=> { 
    operate (valueA,parseInt(displayResult.textContent) )});
function addNumbers(a,b){
    displayResult.textContent= a+b;
};
function subtractNumbers(a,b){
    displayResult.textContent= a-b;
    };
    function multiplyNumbers(a,b){
        displayResult.textContent= a*b;
        };
        function divideNumbers(a,b){
            displayResult.textContent= ((a/b)*10)/10;
            };
function operate(a,b){
   if (whatWasClicked=='add'){ addNumbers(a,b);} 
   else if(whatWasClicked=='subtract'){ subtractNumbers(a,b);}
   else if(whatWasClicked=='multiply'){ multiplyNumbers(a,b);}

   else if(whatWasClicked=='divide'){ divideNumbers(a,b);};


   whatWasClicked='';
}
function changeDisplay() {
number.forEach( (button)=>
 {
    button.addEventListener('click', (button)=> 
    { 
        
        displayResult.textContent+=button.target.textContent;
        storedValue=displayResult.textContent;
       
    });
} );


};
changeDisplay();
