var promptText=document.querySelector("#prompt1").innerHTML;
var count=60;
var text = document.querySelector("#textbox");

text.addEventListener("keypress",timerStart,{once : true});


function timerStart(){
    
    setInterval(decCount, 1000);
    
    
    
}

function decCount(){
    count--;
    document.querySelector("#Timer").innerHTML="Timer: "+count;

}

