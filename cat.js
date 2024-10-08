 function switchon(){
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch").textContent="SwitchON";
    document.getElementById("on").style.backgroundColor="green";
    document.getElementById("off").style.backgroundColor="gray";
}
 function switchoff(){
     document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
     document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
     document.getElementById("switch").textContent="SwitchOFF";
     document.getElementById("off").style.backgroundColor="red";
     document.getElementById("on").style.backgroundColor="gray";

}