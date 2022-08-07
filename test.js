const displayResult= document.querySelector('.displayResult');
const clear = document.querySelector('.clear');
const number= document.querySelectorAll('.digits') ;
const operationss= document.querySelectorAll('.buttons') ;
const annoyingDivClick= document.querySelector('.digits') ;
let storedValue= displayResult;
const initiator= document.querySelector('.initiator');
let valueA=0;
let whatWasClicked= '';
let lastOperationValue=0;
let valueB=0;
let clicked= false;
let clickedtwo= false;
let result=false;
operationss.forEach((operation)=> {operation.addEventListener('click',(operation)=> { 
   
    valueA= parseInt(storedValue);
    
    clickedtwo=true;
    if(clickedtwo==true) {
        
        console.log(valueA,valueB);
        operate(valueB,valueA);
        valueB= parseInt(displayResult.textContent);
        
        clicked=true;
        
    };
    
    

    whatWasClicked=`${operation.target.textContent}`;

   
   
   
 });});


 initiator.addEventListener('click',()=> { 
   
    valueA= parseInt(displayResult.textContent);
    operate (valueB,valueA );console.log(valueA,valueB);});
    

function operate(a,b){
   if (whatWasClicked=='add' ){return addNumbers(a,b)} 
   else if(whatWasClicked=='subtract' ){return subtractNumbers(a,b)}
   else if(whatWasClicked=='multiply' ){return multiplyNumbers(a,b)}

   else if(whatWasClicked=='divide'){return divideNumbers(a,b)} ;
   
  
   
}


changeDisplay();
cleardisplay();


function cleardisplay() {
    clear.addEventListener('click', ()=> {displayResult.textContent='';valueA=0;whatWasClicked='';valueB=0;lastOperationValue=0;} );
}
function changeDisplay() {
    number.forEach( (button)=>
     {
        
        button.addEventListener('click', (button)=> 
        {   if(!button.target.classList.contains('annoyingDivClick')) {
            if (clicked==true){displayResult.textContent='';displayResult.textContent+=button.target.textContent; clicked=false;}
             else {displayResult.textContent+=button.target.textContent;};
            storedValue=displayResult.textContent;
        };
        });
    } );
    };
    function addNumbers(a,b){
        valueB= parseInt(displayResult.textContent); 
        displayResult.textContent= a+b;
        
       
        
    };
    function subtractNumbers(a,b){
        valueB= parseInt(displayResult.textContent); 
        displayResult.textContent= a-b;
        
        };
        function multiplyNumbers(a,b){
            valueB= parseInt(displayResult.textContent); 
            displayResult.textContent= a*b;
            
            };
            function divideNumbers(a,b){
                valueB= parseInt(displayResult.textContent);
                displayResult.textContent= Math.round(((a/b))*100000)/100000;
                
                };
