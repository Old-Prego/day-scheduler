var time = moment().format("HH");;
var events = document.getElementsByClassName("event");
var buttons = document.getElementsByClassName("btn");

var schedule = {
    event07: "",
    event08: "",
    event09: "",
    event10: "",
    event11: "",
    event12: "",
    event13: "",
    event14: "",
    event15: "",
    event16: ""
}

var myTimer = setInterval(function(){
    var CurrentDate = moment().format("MMM DD, YYYY HH:m:ss");;
    $("#currentDay").text(CurrentDate);
    time 
},1000);

for (var i = 0; i < events.length; i++){
    if(time == events[i].children[0].textContent.substring(0,2)){
        events[i].children[1].classList.add("bg-success");
        events[i].children[1].children[0].children[0].classList.add("bg-success")
        events[i].children[1].children[0].children[0].classList.add("border-success")
    }else if (time > events[i].children[0].textContent.substring(0,2)){
        events[i].children[1].classList.add("bg-secondary");
        events[i].children[1].children[0].children[0].classList.add("bg-secondary")
        events[i].children[1].children[0].children[0].classList.add("border-secondary")
    }else{
        events[i].children[1].classList.add("bg-primary");
        events[i].children[1].children[0].children[0].classList.add("bg-primary")
        events[i].children[1].children[0].children[0].classList.add("border-primary")
    }
}

function saveEvent(button){
    var id = "#event" + button.substring(4,6);
    var storedSchedule = JSON.parse(localStorage.getItem("schedule"));
    if(storedSchedule !== null){
        schedule = storedSchedule;
    }
    var objID = id.substring(1,8);
    schedule[objID] = $(id).val();
    localStorage.setItem("schedule",JSON.stringify(schedule));
}

// buttons.addEventListener("click",saveEvent)

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){saveEvent(this.id)});
}


var storedSchedule = JSON.parse(localStorage.getItem("schedule"));
if(storedSchedule !== null){
    schedule = storedSchedule;
    var eventNames = Object.keys(schedule);
    for (var i = 0; i < eventNames.length; i++){
        var id = eventNames[i];
        var eventText = schedule[id];
        id = "#" + id;
        $(id).val(eventText);
    }
}

