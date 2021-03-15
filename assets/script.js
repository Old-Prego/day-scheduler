// Grabs the current hour in military time to check which schedule rows to highlight.
var time = moment().format("HH");;

// Gets all the event inputs.
var events = document.getElementsByClassName("event");

// Gets all the event buttons.
var buttons = document.getElementsByClassName("btn");

// Defines the initial schedule as empty, so that there is a template to store into/read from later.
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

// This timer just keeps the date and time on the top of the page accurate, and updates every second.
var myTimer = setInterval(function(){
    var CurrentDate = moment().format("MMM DD, YYYY HH:m:ss");;
    $("#currentDay").text(CurrentDate);
    time 
},1000);

// This function checks to see if the time on each event first column equals, is greater than, or is less than the current hour values.
// Based on that, it colors each row accordingly to what has already past, what is current, and what is to come.
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

// This function strips the numbers off the back of the button ID to get the event ID.
// It then grabs the current schedule from local storage and loads it, 
// then putting the new event text into the appropriate slot and saving it back to local storage.
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

// This adds an event listener to all of the save buttons on the screen, passing the button ID as an argument.
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){saveEvent(this.id)});
}

// This block of code happens when the page first opens, loading the stored schedule and displaying it on screen.
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

