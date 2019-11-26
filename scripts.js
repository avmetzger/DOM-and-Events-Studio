// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
   let takeoff = document.getElementById("takeoff");
   let flightStatus = document.getElementById("flightStatus");
   let shuttleBackground = document.getElementById("shuttleBackground");
   let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
   let landing = document.getElementById("landing");
   let missionAbort = document.getElementById("missionAbort");
   let up =  document.getElementById("up");
   let down =  document.getElementById("down");
   let left =  document.getElementById("left");
   let right =  document.getElementById("right");
   let rocket = document.getElementById("rocket");
   takeoff.addEventListener("click", function(){
       if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
           flightStatus.innerHTML = "Shuttle in flight.";
           shuttleBackground.style.backgroundColor = "blue";
           spaceShuttleHeight.innerHTML = 10000;
       }
   })
   landing.addEventListener("click", function(){
       if(window.confirm("The shuttle is landing. Landing gear engaged.")){
           flightStatus.innerHTML = "The shuttle has landed.";
           shuttleBackground.style.backgroundColor = "green";
           spaceShuttleHeight.innerHTML = 0;
           rocket.style.bottom = "0px";
           rocket.style.left = "250px";
       }
   })
   missionAbort.addEventListener("click", function(){
       if(window.confirm("Confirm that you want to abort the mission.")){
           flightStatus.innerHTML = "Mission aborted.";
           shuttleBackground.style.backgroundColor = "green";
           spaceShuttleHeight.innerHTML = 0;
           rocket.style.bottom = "0px";
           rocket.style.left = "250px";
       }
   });
   up.addEventListener("click", function(){
       let vertical = Number(rocket.style.bottom.slice(0,rocket.style.bottom.indexOf('p')));
       if (vertical <=240){
       rocket.style.bottom = vertical + 10 + 'px';
       let move = parseInt(spaceShuttleHeight.innerHTML);
       spaceShuttleHeight.innerHTML = move + 10000;
       }
       console.log(rocket.style.bottom);
   });
   down.addEventListener("click", function(){
       let vertical = Number(rocket.style.bottom.slice(0,rocket.style.bottom.indexOf('p')));
       if (vertical >= 10){
       rocket.style.bottom = vertical - 10 + 'px';
       let move = parseInt(spaceShuttleHeight.innerHTML);
       spaceShuttleHeight.innerHTML = move - 10000;
       }
       console.log(rocket.style.bottom);
   });
   right.addEventListener("click", function(){
       let horizontal = Number(rocket.style.left.slice(0,rocket.style.left.indexOf('p')));
       rocket.style.left = horizontal + 10 + 'px';
       console.log(rocket.style.left);
   });
   left.addEventListener("click", function(){
       let horizontal = Number(rocket.style.left.slice(0,rocket.style.left.indexOf('p')));
       rocket.style.left = horizontal - 10 + 'px';
       console.log(rocket.style.left);
   });
});