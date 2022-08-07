const displayResult= document.querySelector('.displayResult');
const clear = document.querySelector('.clear');
const number= document.querySelectorAll('.digits') ;
const operationss= document.querySelectorAll('.buttons') ;
let storedValue= displayResult;
const initiator= document.querySelector('.initiator');
let valueA=0;
let whatWasClicked= '';
let lastOperationValue=0;
let valueB=0;
let clicked= false;
operationss.forEach((operation)=> {operation.addEventListener('click',(operation)=> { 
    
    valueA= parseInt(storedValue);
    valueB= parseInt(displayResult.textContent);
    if(whatWasClicked) {
        console.log(lastOperationValue , whatWasClicked ,valueA,valueB);
        lastOperationValue = operate(valueA,valueB);
        valueA=lastOperationValue;
        displayResult.textContent=`${lastOperationValue}`;
        clicked=true;
        
    };
    
    console.log(lastOperationValue , whatWasClicked ,valueA,valueB);

    whatWasClicked=`${operation.target.textContent}`;

   
   
   
 });});


 initiator.addEventListener('click',()=> { 
    console.log(valueA,valueB);
    valueB= parseInt(displayResult.textContent);
    operate (valueB,valueA )});

function operate(a,b){
   if (whatWasClicked=='add' ){return addNumbers(a,b)} 
   else if(whatWasClicked=='subtract' ){return subtractNumbers(a,b)}
   else if(whatWasClicked=='multiply' ){return multiplyNumbers(a,b)}

   else if(whatWasClicked=='divide'){return divideNumbers(a,b)} ;
   storedValue=displayResult.textContent;
   
   
}
function operateEach() {  };

changeDisplay();
cleardisplay();


function cleardisplay() {
    clear.addEventListener('click', ()=> {displayResult.textContent='';valueA=0;whatWasClicked='';valueB=0;lastOperationValue=0;} );
}
function changeDisplay() {
    number.forEach( (button)=>
     {
        button.addEventListener('click', (button)=> 
        { 
            if (clicked==true){displayResult.textContent='';displayResult.textContent+=button.target.textContent; clicked=false;}
             else {displayResult.textContent+=button.target.textContent;};
            storedValue=displayResult.textContent;
           
        });
    } );
    };
    function addNumbers(a,b){
        displayResult.textContent= a+b;
        return a+b;
        
    };
    function subtractNumbers(a,b){
        displayResult.textContent= a-b;
        return a-b;
        };
        function multiplyNumbers(a,b){
            displayResult.textContent= a*b;
            return a*b;
            };
            function divideNumbers(a,b){
                displayResult.textContent= ((a/b)*10)/10;
                return ((a/b)*10)/10;
                };
