
// Dark/Light toggle
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


// Show/Hide switch
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

// Save text into array
function save_text(){
    let x = document.getElementById('TextArea')
    text = x.value;
    lines = text.split('\n');
    bodyText = ''
    for (i=1;i<lines.length;i++){
        bodyText += lines[i]+'\n';
    }
    notesArray.push({title:lines[0],body:bodyText});
    create_note();
}

function create_note(){
    idx = notesArray.length-1;
    title = notesArray[idx].title;
    body = notesArray[idx].body;
    let note_to_add = document.createElement('li');
    note_to_add.appendChild(document.createTextNode(title));
    NoteList.appendChild(note_to_add);
}

function main(){
    const ThemeToggle = document.getElementById("Theme");
    ThemeToggle.addEventListener("click",switch_theme);
    const Cancel = document.getElementById("Cancel");
    Cancel.addEventListener("click",hide_buttons);
    const NewNote = document.getElementById("NewNote");
    NewNote.addEventListener("click",show_buttons);
    const Save = document.getElementById("Save");
    Save.addEventListener("click",save_text)
    const NoteList = document.getElementById("NoteList")

    notesArray = [{title:'note one',body:'some text1'},
                  {title:'note two',body:'some text2'}];

}

main()