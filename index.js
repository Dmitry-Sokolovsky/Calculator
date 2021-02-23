let numbers = document.querySelectorAll('[data-number]'),
    operations = document.querySelectorAll('[data-operation]'),
    clearBtns = document.querySelectorAll('.clear');
    decim = document.getElementById('decim'),
    equals = document.getElementById('equals'),
    sr = document.getElementById('sr'),
    degrees = document.getElementById('degree'),
    display=document.getElementById('display'),
    MemoryCurrentNumber ='0',
    MemoryNewNumber = false,
    MemoryPendingOparation = '',
    DegreeMemory = true,
    DegreeNumber = 0,
    SqrtMemory = false,
    SqrtNumber = 0,
    sign = document.getElementById('sign');

 
    for(let i=0; i<numbers.length; i++){
         let numberBtn = numbers[i];
         numberBtn.addEventListener('click', function(e){
            NumberPress(e.target.textContent);
         });
    };

    for(let i=0; i<operations.length; i++){
        let operationBtn = operations[i];
        operationBtn.addEventListener('click', function(e){
            Operation(e.target.textContent);
        });
    };

    for(let i=0; i<clearBtns.length; i++){
        let clearBtn = clearBtns[i];
        clearBtn.addEventListener('click', function(e){
            Clear(e.srcElement.id);
        });
    };

    decim.addEventListener('click', Decimal);

    sign.addEventListener('click', Sign);

    function Sign(argument){
        let localSignMemory = display.value;
    
        if(localSignMemory>0){
            display.value = -localSignMemory;
        } else{
            display.value = -localSignMemory;
        };
    };



    function NumberPress(number){
        if(MemoryNewNumber){
            display.value = number;
            MemoryNewNumber = false;

            if(!DegreeMemory){
                Degree();
            };
        }
        else{
            if(display.value === '0'){
                display.value = number;      
            }else{
                display.value += number;
            };
        };
        
    };

    function Sqrt(){
        if(display.value!=0){
            if(display.value<0){
                console.log('chislo otr');
                display.value = 'Введите число больше 0';
            }
            else{
                MemoryCurrentNumber = Math.sqrt(parseFloat(display.value));
                display.value = MemoryCurrentNumber;
                SqrtMemory=false;
                    if(MemoryPendingOparation !== "="){                    
             }
            };
    }
        else{
            SqrtMemory= true;
        }
    };

function Operation(op){
    let localOperationMemory = display.value;
    
    if(op === 'sqrt'){
        Sqrt();
        }
        else if(SqrtMemory){
            Sqrt();  
            console.log(222);
            let localOperation = display.value;

            if(display.value<0){
                display.value = 'Введите число больше 0';
            }else{
            MemoryCurrentNumber = Math.sqrt(parseFloat(display.value));
                display.value = MemoryCurrentNumber;
                        MemoryNewNumber = true;
                        console.log(55555);
            };
                    if(MemoryPendingOparation === '+'){
                        MemoryCurrentNumber = (MemoryCurrentNumber*10 + parseFloat(localOperation)*10)/10;
                    }
                    else if (MemoryPendingOparation === '-'){
                        MemoryCurrentNumber = (MemoryCurrentNumber*10 - parseFloat(localOperation)*10)/10;
                    }
                    else if (MemoryPendingOparation === '*'){
                            MemoryCurrentNumber = ((MemoryCurrentNumber*10)*(parseFloat(localOperation)*10))/100;
                        }
                    else if (MemoryPendingOparation === '÷'){
                        MemoryCurrentNumber = MemoryCurrentNumber/parseFloat(localOperation);
                    } 
                    else {
                        MemoryCurrentNumber = parseFloat(localOperation);
                    }
                    if(display.value>0){
                    display.value = MemoryCurrentNumber;
                    MemoryPendingOparation = op;
                   }
                    else{

                        display.value = 'Введите число больше 0';
                    }

        }


    else if(op === 'degree'){
        Degree();
    }


    else if(MemoryNewNumber && MemoryPendingOparation !== "="){
        if(MemoryCurrentNumber === parseInt(MemoryCurrentNumber, 10)){
        display.value = MemoryCurrentNumber;
    } else{
        display.value = parseFloat(MemoryCurrentNumber);
    }
        
    }
  
    else{
        MemoryNewNumber = true;
        if(MemoryPendingOparation === '+'){
            MemoryCurrentNumber = (MemoryCurrentNumber*10 + parseFloat(localOperationMemory)*10)/10;
        }
        else if (MemoryPendingOparation === '-'){
            MemoryCurrentNumber = (MemoryCurrentNumber*10 - parseFloat(localOperationMemory)*10)/10;
        }
        else if (MemoryPendingOparation === '*'){
                MemoryCurrentNumber = ((MemoryCurrentNumber*10)*(parseFloat(localOperationMemory)*10))/100;
            }
        else if (MemoryPendingOparation === '÷'){
            MemoryCurrentNumber = MemoryCurrentNumber/parseFloat(localOperationMemory);
        } 
        else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOparation = op;
    };
};

function Clear(id){
    if (id === 'del'){
        display.value = '0';
        MemoryNewNumber =true;
    } else if (id === 'ac'){
        display.value = '0';
        MemoryNewNumber = false;
        MemoryCurrentNumber = 0;
        MemoryPendingOparation = '';
        DegreeMemory = true;
        DegreeNumber = 0;
        SqrtMemory = false;
        SqrtNumber = 0;
    };
};

function Decimal(argument){
    let localDecimalMemory = display.value;

    if(MemoryNewNumber){
        localDecimalMemory = '0';
        MemoryNewNumber = false;
    } else{
        if (localDecimalMemory.indexOf('.') === -1){
            localDecimalMemory += '.';
        };
    };
    display.value = localDecimalMemory;
};


function Degree(){
    if (DegreeMemory){
        DegreeNumber = display.value;
        MemoryNewNumber= true;
        DegreeMemory = false;
    } else{
        MemoryCurrentNumber = Math.pow((parseFloat(DegreeNumber)), display.value);

        if(MemoryCurrentNumber === parseInt(MemoryCurrentNumber, 10)){
            display.value = MemoryCurrentNumber;
            } else {
                display.value = MemoryCurrentNumber.toFixed(3); 
            };
        MemoryNewNumber = false;
        DegreeMemory = true;
        DegreeNumber = 0;
    }
}

