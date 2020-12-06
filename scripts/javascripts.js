function dark_theme() {
    let x = document.getElementsByClassName("Light");
    for (i=0;i<x.length-1;i++){
        x[i].className ="Dark"
    }
    console.log(i)
}
function light_theme(){
    let x = document.getElementsByClassName("Dark");
    for(i=0;i<x.length-1;i++){
        x[i].className="Light"
    }
    console.log(i)
}
function switch_theme(){
    x = document.getElementById("Theme");
    if (x.className=="Dark"){
        light_theme();
        console.log('Dark')
    }
    else{
        dark_theme();
        console.log('Light');
    }
}

let x = document.getElementById("Theme");
x.addEventListener("click",switch_theme);
console.log(x.className);