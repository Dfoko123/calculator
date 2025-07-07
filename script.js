function add(...param){
    let sum=0;
    for(let i=0;i<param.length;i++){
        sum+=param[i];
    }
    return sum;
}
function multiplication(...param){
    let product=1;
    for(let i=0;i<param.length;i++){
        product*=param[i];
    }
    return product;
}
function division(...param){
    let quotient=1;
    for(let i=0;i<param.length;i++){
        if(quotient===0){
            return 0;
        }
        quotient/=param[i];
    }
    return quotient;
}
function substraction(...param){
    let difference=0;
    for(let i=0;i<param.length;i++){
        difference-=param[i];
    }
    return difference;
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
