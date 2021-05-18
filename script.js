
// Set date for header
$("#currentDay").html( moment(Date()).format('dddd, Do MMMM'));
//get the hour value of the date
moment().format('HH');
currentTime = parseInt(moment(Date()).format('H') );  

 var nine = localStorage.getItem('nine');
 var nineAm = $("#9am-txt").val(nine);
 var ten = localStorage.getItem('ten');
 var tenAm = $("#10am-txt").val(ten);
 var eleven = localStorage.getItem('eleven');
 var elevenAm = $("#11am-txt").val(eleven);
 var twelve = localStorage.getItem('twelve');
 var twelvePm = $("#12pm-txt").val(twelve);
 var one = localStorage.getItem('one');
 var onePm = $("#1pm-txt").val(one);
 var two = localStorage.getItem('two');
 var twoPm = $("#2pm-txt").val(two);
 var three = localStorage.getItem('three');
 var threePm = $("#3pm-txt").val(three);
 var four = localStorage.getItem('four');
 var fourPm = $("#4pm-txt").val(four);
 var five = localStorage.getItem('five');
 var fivePm = $("#5pm-txt").val(five);


 var hours = [ 9, 10,11, 12, 13,14,15,16,17];
 var desc = $(".description")

 //parsedNine = parseInt($("#9am-h").text());
 for (i = 0; i <hours.length;i++){
 if (hours[i] === currentTime){
  $(desc[i]).addClass("present");
 }if (hours[i]< currentTime ){
  $(desc[i]).addClass("past");
 }if (hours[i]>currentTime){
  $(desc[i]).addClass("future");
}};

$("#9am-btn").click( function(){
  var nine = $("#9am-txt").val();
  localStorage.setItem('nine', nine);
});
$("#10am-btn").click( function(){
  var ten = $("#10am-txt").val();
  localStorage.setItem('ten', ten);
});
$("#11am-btn").click( function(){
  var eleven = $("#11am-txt").val();
  localStorage.setItem('eleven', eleven);
});
$("#12pm-btn").click( function(){
  var twelve = $("#12pm-txt").val();
  localStorage.setItem('twelve', twelve);
});
$("#1pm-btn").click( function(){
  var one = $("#1pm-txt").val();
  localStorage.setItem('one', one);
});
$("#2pm-btn").click( function(){
  var two = $("#2pm-txt").val();
  localStorage.setItem('two', two);
});
$("#3pm-btn").click( function(){
  var three = $("#3pm-txt").val();
  localStorage.setItem('three', three);
});
$("#4pm-btn").click( function(){
  var four = $("#4pm-txt").val();
  localStorage.setItem('four', four);
});
$("#5pm-btn").click( function(){
  var five = $("#5pm-txt").val();
  localStorage.setItem('five', five);
});