var separate_time = function(time){
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hours = time.getHours();
  var days = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  return [sec, min, hours, year, days, month];
}

months = ["Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"];

var update = function(){
var now = new Date();
var counter = separate_time(now);
document.getElementById('countdown').textContent = 
 months[counter[5]] + ' / ' +
 counter[4] + ' / ' +
 counter[3] + '     ' +
 counter[2] + ' : ' +
 counter[1] + ' : ' +
 counter[0];
 refresh();
}

var refresh = function(){
  setTimeout(update,1000);
}
update();
