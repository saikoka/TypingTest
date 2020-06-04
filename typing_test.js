var promptText=document.querySelector("#prompt").innerHTML;
var count=60;
var text = document.querySelector("#textbox");
var wordCount=0;
var timer=0;
var correctLength=0;
var startingTime=count;
//var actualText = document.querySelector("")

text.addEventListener("keypress",timerStart,{once : true});
text.addEventListener("keyup", checkText, false);

function checkText(){
    var lastChar = text.value.substring(text.value.length-1);
    if((lastChar==' ' || lastChar=='.') && text.value==promptText.substring(0,text.value.length)){
        
        if(text.value.length>correctLength){
            wordCount++;
        }
        correctLength=text.value.length;
    }
    if(text.value!==promptText.substring(0,text.value.length)){
        text.style.color="red";
    }
    else{
        text.style.color="black";
    }

    
}

function timerStart(){
    timer=setInterval(decCount, 1000);
    document.querySelector("#promptList").disabled=true;
    document.querySelector("#timesList").disabled=true;
}

function decCount(){
    if(count==0){
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
    if(startingTime==60){
        document.querySelector("#WPM").innerHTML="WPM : "+wordCount;
    }
    else if(startingTime==30){
        document.querySelector("#WPM").innerHTML="WPM : "+wordCount*2;
    }
    
}

function getResponse(){
    var promptSelect= document.querySelector("#promptList");
    var promptOption= promptSelect.options[promptSelect.selectedIndex].value;
    if(promptOption=="prompt_1"){
        document.querySelector("#prompt").innerHTML="The bikers rode down the long and narrow path to reach the city park. When they reached a good spot to rest, they began to look for signs of spring. The sun was bright, and a lot of bright red and blue blooms proved to all that warm spring days were the very best. Spring rides were planned. They had a burger at the lake and then rode farther up the mountain. As one rider started to get off his bike, he slipped and fell. One of the other bikers saw him fall but could do nothing to help him. Neither the boy nor the bike got hurt. After a brief stop, everyone was ready to go on. All the bikers enjoyed the nice view when they came to the top. All the roads far below them looked like ribbons. A dozen or so boats could be seen on the lake. It was very quiet and peaceful and no one wished to leave. As they set out on their return, they all enjoyed the ease of pedaling. The bikers came upon a new bike trail. This route led to scenery far grander than that seen from the normal path. The end of the day brought laughs and cheers from everyone. The fact that each person was very, very tired did not keep anyone from eagerly planning for the exciting ride to come.";
    }
    else{
        document.querySelector("#prompt").innerHTML="One morning my friend and I were thinking about how we could plan our summer break away from school. Driving from our own state to several nearby states would help to expand our limited funds. Inviting six other friends to accompany us would lower our car expenses. Stopping at certain sites would also help us stretch our truly limited travel budget. Yesterday I engaged in an interesting and enlightening discussion about finances. I found it difficult to imagine that during my lifetime I might well earn at least one-half million dollars. It is also possible that I might spend as much as one-half million during the same period. The really difficult thing for me to do will be to save more of the half-million than I spend. Thinking about today's high cost of living makes this seem an impossible task for most. Last week I asked a friend to talk with me and a girl-friend about college. Our friend is the Dean of Women at a nearby college. The Dean and her staff spend much of their time talking to students who plan to go to college. The first thing she said was to work very hard each day in high school. Good grades are most important for being accepted. Being on time for classes and having a good view toward all phases of the school life are two other things to remember.";
    }
    promptText=document.querySelector("#prompt").innerHTML;
}

function changeTime(){
    var timeSelect = document.querySelector("#timesList");
    var timeOption = timeSelect.options[timeSelect.selectedIndex].value;
    if(timeOption=="60"){
        count=60;
        startingTime=count;
    }
    else{
        count=30;
        startingTime=count;
    }
}