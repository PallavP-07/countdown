var deadline = new Date("mar 15, 2022 00:00:00").getTime();
  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var secs = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("days").innerHTML =days ;
document.getElementById("hours").innerHTML =hours;
document.getElementById("mins").innerHTML = mins; 
document.getElementById("secs").innerHTML =secs; 
if (t < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML ='0';
        document.getElementById("hours").innerHTML ='0';
        document.getElementById("mins").innerHTML ='0' ; 
        document.getElementById("secs").innerHTML = '0'; }
}, 1000);