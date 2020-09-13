var string = 'Hello, My name is Le Cao Nguyen. I am currently a student of PTIT. ';

var textTarget;
var textHolder;
var letter;
var printing;
var index;
var waiting = false;

function spellToText(id,str){
    if(waiting == false){
        index = 0;
        waiting = true;
        textTarget = document.getElementById(id);
        textTarget.innerHTML = '';
        textHolder = str.split('');
        sendToPrint();
    }
}
function sendToPrint(){
    if(index < textHolder.length){
        printing = window.setTimeout(function(){
            getLetter(textTarget,index);
        },150);
    }
    else{
        waiting = false;
    }
}
function getLetter(textTarget,index){
    letter  = document.createTextNode(textHolder[index]);
    if(letter.value == "//") letter.value ='';
    printLetter(textTarget,letter);
}
function printLetter(textTarget,letter){
    textTarget.appendChild(letter);
    window.clearTimeout();
    index++;
    sendToPrint();
}
function addLoadEvent(func){
    var onload = window.onload;
    if( window.onload != 'function'){
        window.onload = func;
    }
    else{
        window.onload = function(){
            if(onload){
                onload();
            }
            func();
        }
    }
}
window.addLoadEvent(function(){
    document.getElementById('hero_str').onload = spellToText('hero_str',string)
})


