function dark_theme() {
    let x = document.getElementsByClassName("Light");
    while (x.length > 0){
        x[0].classList.add('Dark');
        x[0].classList.remove('Light');
    }
    document.getElementById("Theme").innerText='Light Theme';
}

function light_theme(){
    let x = document.getElementsByClassName("Dark");
    while(x.length > 0){
        x[0].classList.add('Light');
        x[0].classList.remove('Dark');
    }
    document.getElementById("Theme").innerText='Dark Theme'
}

function switch_theme(){
    x = document.getElementById("Theme");
    if (x.className=="Dark"){
        light_theme();
    }
    else{
        dark_theme();
    }
}

function hide_buttons(){
    let x = document.getElementsByClassName("Show");
    while(x.length>0){
        x[0].style.visibility='hidden';
        x[0].classList.add('Hide')
        x[0].classList.remove('Show')
    }
}

function show_buttons(){
    let x = document.getElementsByClassName("Hide");
    while(x.length>0){
        x[0].style.visibility='visible';
        x[0].classList.add('Show')
        x[0].classList.remove('Hide')
    }

}

function main(){
    let ThemeToggle = document.getElementById("Theme");
    ThemeToggle.addEventListener("click",switch_theme);
    let Cancel = document.getElementById("Cancel");
    Cancel.addEventListener("click",hide_buttons)
    let NewNote = document.getElementById("NewNote");
    NewNote.addEventListener("click",show_buttons)
}

main()