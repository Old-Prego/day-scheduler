var time = moment().format("HH");;
var events = document.getElementsByClassName("event");

var myTimer = setInterval(function(){
    var CurrentDate = moment().format("MMM DD, YYYY h:m:ss a");;
    $("#currentDay").text(CurrentDate);
    time 
},1000);

for (var i = 0; i < events.length; i++){
    if(time == events[i].children[0].textContent.substring(0,2)){
        events[i].children[1].classList.add("bg-success");
    }else if (time > events[i].children[0].textContent.substring(0,2)){
        events[i].children[1].classList.add("bg-secondary");
    }else{
        events[i].children[1].classList.add("bg-primary");
    }
}

