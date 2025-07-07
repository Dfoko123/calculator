function add(...param){
    let sum=0;
    for(let i=0;i<param.length;i++){
        sum+=param[i];
    }
    return sum;
}
console.log(division(0));
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
