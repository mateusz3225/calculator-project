const displayResult= document.querySelector('.displayResult');
const clear = document.querySelector('.clear');
const number= document.querySelectorAll('.digits') ;
const operationss= document.querySelectorAll('.buttons') ;
const annoyingDivClick= document.querySelector('.digits') ;
let storedValue= displayResult;
const initiator= document.querySelector('.initiator');
const undo= document.querySelector('.undo');
let valueA=0;
let whatWasClicked= '';
let lastOperationValue=0;
let valueB=0;
let clicked= false;
let clickedtwo= false;
let result=false;
let afterResult=false;
let stringOfNumbers='';
let onlyOneTime=false;
operationss.forEach((operation)=> {operation.addEventListener('click',(operation)=> { 
   
    
    
    clickedtwo=true;
    onlyOneTime=true;
    if(clickedtwo==true) {
        if (afterResult==false){
        
        
        operate(valueB,valueA);
        valueB= parseFloat(displayResult.textContent);
        
        clicked=true;
        } else {afterResult=false; ;operate(valueB,valueA);displayResult.textContent=''; };
    } 
    
    

    whatWasClicked=`${operation.target.textContent}`;
    
    
   
   
 });});


 initiator.addEventListener('click',()=> { 
    if (onlyOneTime==true){
    valueA= parseFloat(displayResult.textContent);
    if(clickedtwo==true) {
    operate (valueB,valueA );
    valueB=parseFloat(displayResult.textContent);
    
    clicked=true;
    };
    afterResult= true;
    onlyOneTime=false;
};
});
    

function operate(a,b){
   if (whatWasClicked=='+' ){ addNumbers(a,b)} 
   else if(whatWasClicked=='-' ){ subtractNumbers(a,b)}
   else if(whatWasClicked=='*' ){ multiplyNumbers(a,b)}

   else if(whatWasClicked=='/'){ divideNumbers(a,b)} ;
   
    
   
}


changeDisplay();
cleardisplay();
DeleteLast();

function cleardisplay() {
    clear.addEventListener('click', ()=> {displayResult.textContent='';valueA=0;whatWasClicked='';valueB=0;lastOperationValue=0;afterResult=false;onlyOneTime=true;} );
}
function changeDisplay() {
    number.forEach( (button)=>
     {
        
        button.addEventListener('click', (button)=> 
        {  
             if ( button.target.textContent!=='='){
                
            stringOfNumbers=displayResult.textContent;  
            if (stringOfNumbers.includes('.') && button.target.textContent=='.') {button.target.textContent=''; };
            
             if(!button.target.classList.contains('annoyingDivClick') ) {
            if (clicked==true){displayResult.textContent='';displayResult.textContent+=button.target.textContent; clicked=false;}
             else {displayResult.textContent+=button.target.textContent;};
             storedValue=displayResult.textContent;
            
            
           
        };
      }  });
    } );
    };
    function addNumbers(a,b){
        valueB= parseFloat(displayResult.textContent); 
        displayResult.textContent= a+b;
        
       
        
    };
    function subtractNumbers(a,b){
        valueB= parseFloat(displayResult.textContent); 
        displayResult.textContent= a-b;
        
        };
        function multiplyNumbers(a,b){
            valueB= parseFloat(displayResult.textContent); 
            displayResult.textContent= a*b;
            
            };
            function divideNumbers(a,b){
                if ( valueA==0) {displayResult.textContent=('ERROR ') } else {
                valueB= parseFloat(displayResult.textContent);
                displayResult.textContent= Math.round(((a/b))*100000)/100000;
                };
                };
function DeleteLast(){
    undo.addEventListener('click', ()=> {
        stringOfNumbers=displayResult.textContent; 
        stringOfNumbers=stringOfNumbers.slice(0,(stringOfNumbers.length-1));

        displayResult.textContent=stringOfNumbers;
    
    } );

}
