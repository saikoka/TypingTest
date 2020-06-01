var promptText=document.querySelector("#prompt1").innerHTML;
var count=60;
var text = document.querySelector("#textbox");
var wordCount=0;
var timer=0;
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
    timer=setInterval(decCount, 1000);
}

function decCount(){
    if(count==55){
        endTest();
        return;
    }
    count--;
    document.querySelector("#Timer").innerHTML="Timer: "+count;
}

function endTest(){
    text.removeEventListener("keypress",timerStart,{once : true});
    clearInterval(timer);
    text.disabled=true;
}