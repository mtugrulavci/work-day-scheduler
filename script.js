
// Set date for header
$("#currentDay").html( moment(Date()).format('dddd, Do MMMM'));
//get the hour value of the date
moment().format('HH');
currentTime = parseInt(moment(Date()).format('H') );  

var hours = [9, 10,11, 12, 13,14,15,16,17];

 var nine = localStorage.getItem('nine');
 var nineAm = $("#9am-txt").val(nine);

 var ten = localStorage.getItem('ten');
 var tenAm = $("#10am-txt").val(ten);

 //parsedNine = parseInt($("#9am-h").text());
 if (hours[0] === currentTime){
  $("#9am-txt").addClass("present");
 }if (hours[0]< currentTime ){
  $("#9am-txt").addClass("past");
 }if (hours[0]>currentTime){
  $("#9am-txt").addClass("future");
};
  if (hours[1] === currentTime){
  $("#10am-txt").addClass("present");
 }if (hours[1]< currentTime ){
  $("#10am-txt").addClass("past");
 }if (hours[1]>currentTime){
  $("#10am-txt").addClass("future");
};

$("#9am-btn").click( function(){
  var nine = $("#9am-txt").val();
  localStorage.setItem('nine', nine);
});

$("#10am-btn").click( function(){
  var ten = $("#10am-txt").val();
  localStorage.setItem('ten', ten);
});
