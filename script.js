function add(a,b){
    
    return a+b;
}
function multiplication(a,b){
    
    return a*b;
}
function division(a,b){
    return a/b;
}
function substraction(a,b){
   
    return a-b;
}
let numberOne;
let numberTwo;
let operator;
function operate(nb1,nb2,opt){
    let result=null;
    switch(opt){
        case '+':
            result=add(nb1,nb2);
            break;
        case '-':
            result=substraction(nb1,nb2);
            break;
        case '*':
            result=multiplication(nb1,nb2);
            break;
        case '/':
            result=division(nb1,nb2);
            break;
        default:
            result="Operator is not defined ";
    }
    return result;
}

function populate(button){
   if(!(button.id=='clear'|| button.id=='=')){ button.addEventListener('click',()=>{
        val.value+=button.textContent;
        });
   }
    else  if(button.id=="clear"){
        button.addEventListener('click',()=>{
            val.value='';
        });
        
    }
    else if(button.id=='=' ){
        button.addEventListener('click',()=>{
            let p=val.value.split("");
            let numeric="1234567890";
            let opt='+-/*';
            let number1=[];
            let number2=[];
            let optO=[];
            for(let i=0;i<p.length;i++){
                while(numeric.includes(p[i])){
                    number1+=p[i];
                    i++;
                }
                while(opt.includes(p[i])){
                    optO=p[i];
                    
                    i++;
                }
                p.splice(0,i);
                for(let j=0;j<p.length;j++){
                    while(numeric.includes(p[j])){
                        number2+=p[j];
                        j++;
                    }
                }
            }
            
            let nb1=+number1
            let nb2=+number2;
            if(optO.length>1){
                val.value='error';
            }
            else if(optO.length==0){
                val.value=nb1;
            }
            else {
                let operat=optO;
                val.value=operate(nb1,nb2,operat);
            }

        });
    }
}


    let val=document.querySelector('input');
    
    let btn1=document.getElementById("1");
    populate(btn1);
    console.log(val.value);
    let btn2=document.getElementById("2");
    populate(btn2);
    let btn3=document.getElementById("3");
    populate(btn3);
    let btn4=document.getElementById("4");
    populate(btn4);
    let btn5=document.getElementById("5");
    populate(btn5);
    let btn6=document.getElementById("6");
    populate(btn6);
    let btn7=document.getElementById("7");
    populate(btn7);
    let btn8=document.getElementById("8");
    populate(btn8);
    let btn9=document.getElementById("9");
    populate(btn9);
    let btn0=document.getElementById("0");
    populate(btn0);
    let btnAdd=document.getElementById("+");
    populate(btnAdd);
    let btnDiff=document.getElementById("-");
    populate(btnDiff);
    let btnPro=document.getElementById("x");
    populate(btnPro);
    let btnDiv=document.getElementById("/");
    populate(btnDiv);
    let btnClear=document.getElementById("clear");
    populate(btnClear)
    let btnEgal=document.getElementById("=");
    populate(btnEgal);   
    
    