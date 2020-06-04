$(document).ready(function() {
  $("form#form").submit(function(event){
  
    let side1 = $("#side1").val();
    let side2 = $("#side2").val();
    let side3 = $("#side3").val();

    if (side1 === side2 && side2 === side3) {
      $("#isosceles").text();
    } else {
      alert("your wrong");
    }
  })
  event.preventDefault();
});