let counterElement = document.getElementById("ce");
console.log(counterElement);
function inc(){
let pcv = counterElement.textContent;
let uc =parseInt(pcv)+1;
counterElement.textContent=uc;
if(uc>0){
    counterElement.style.color="green";
}
else if(uc<0){
    counterElement.style.color="red";
}
else{
    counterElement.style.color="black";
}
}
function dec(){
    let pcv = counterElement.textContent;
    let uc =parseInt(pcv)-1;
    counterElement.textContent=uc;
    if(uc>0){
        counterElement.style.color="green";
    }
    else if(uc<0){
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
}
function res(){
    let uc=0;
    counterElement.textContent= uc;
    counterElement.style.color="black"

    }

