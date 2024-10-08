let inputelement=document.getElementById("nameElement");
let textelement=document.getElementById("signintext")
function signin(){
    let inputvalue=inputelement.value;
    let veryfy="Hi "+inputvalue+" veryfying your account";
    textelement.textContent=veryfy
    
}
     
