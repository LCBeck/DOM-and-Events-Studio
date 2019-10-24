// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
   
    let liftoff = document.getElementById("takeoff");
    let status = document.getElementById('flightStatus');
    let flightScreen = document.getElementById('shuttleBackground');
    let height = document.getElementById('spaceShuttleHeight');
    let land = document.getElementById('landing');
    let abort = document.getElementById('missionAbort');
    let up = document.getElementById(upButton);
    let down = document.getElementById(downButton);
    let right = document.getElementById(rightButton);
    let left = document.getElementById(leftButton);

    liftoff.addEventListener('click', function(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response){
            status.innerHTML= "Shuttle in flight.";
            flightScreen.style.backgroundColor = 'blue';
            height.innerHTML = 10000;
        }
    });
    land.addEventListener('click', function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        status.innerHTML="The shuttle has landed.";
        flightScreen.style.backgroundColor = 'green';
        height.innerHTML = 0;
    });
    abort.addEventListener('click', function(){
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response){
            status.innerHTML= "Mission aborted.";
            flightScreen.style.backgroundColor = 'green';
            height.innerHTML = 0;
        };
    });


});