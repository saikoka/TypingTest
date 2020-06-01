var promptText=document.querySelector("#prompt1").innerHTML;
var count=60;
var text = document.querySelector("#textbox");
//var actualText = document.querySelector("")

text.addEventListener("keypress",timerStart,{once : true});
text.addEventListener("keyup", checkText, false);

function checkText(){
    if(text.value!==promptText.substring(0,text.value.length)){
        text.style.color="red";
    }
    else{
        text.style.color="black";
    }
}

function timerStart(){
    setInterval(decCount, 1000);
}

function decCount(){
    count--;
    document.querySelector("#Timer").innerHTML="Timer: "+count;
}

