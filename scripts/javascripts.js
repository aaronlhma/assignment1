function dark_theme() {
    let x = document.getElementsByClassName("Light");
    x.className ="Dark";
}
function light_theme(){
    let x = document.getElementsByClassName("Dark");
    x.className="Light";
}

document.getElementById("Theme").addEventListener("click",dark_theme());