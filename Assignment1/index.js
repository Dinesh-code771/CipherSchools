/* selectors */
// button
var start = document.getElementById("start");
var stop  = document.getElementById("stop");
var reset = document.getElementById("reset");
// timeSelected
var time = document.getElementById("time");
//logic
var seconds = 0 ;
var calculateTime = ()=>{
    seconds++;
    var second = seconds % 60;
    var min = Math.floor(seconds/60);
    if(second<9  ){
        second="0"+ second;
       // min="0"+min;
    }
    else{
        second=second;
        //min=min;
    }
    
    time.innerHTML= `${min}:${second}`;
}

var flag=0;
//add events to button;
start.addEventListener("click",startfun);
stop.addEventListener("click",stopfun);
reset.addEventListener("click",resetfun)
//funtions
let interval=null;
function startfun(){
    if(flag==0){
        interval=setInterval(calculateTime,1000);
        flag=1;
    }

}
function stopfun(){
    clearInterval(interval);
    flag=0;
}
function resetfun(){
    clearInterval(interval);
    seconds=0;
    flag=0;
    time.innerHTML= `00:00`;
    interval=null;
}