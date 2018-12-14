function track() {
  var firstvalue = parseInt(document.getElementById("one").value);
  var secondvalue = parseInt(document.getElementById("two").value);
  var thirdvalue = parseInt(document.getElementById("three").value);
  if (firstvalue <= 0 || secondvalue <= 0 || thirdvalue <= 0) {
    alert("Undefined");
  } 
  else if (
    firstvalue === secondvalue &&
    secondvalue === thirdvalue &&
    thirdvalue === firstvalue
  ) {
    alert("Equilateral triangle");
  }
