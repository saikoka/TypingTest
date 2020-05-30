var promptText=document.querySelector("#prompt1").innerHTML;
var count=60;

var timer= setInterval(decCount, 1000);

function decCount(){
    count--;
    document.querySelector("#Timer").innerHTML="WPM: "+count;

}

