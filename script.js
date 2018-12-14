function track() {
  var firstvalue = parseInt(document.getElementById("one").value);
  var secondvalue = parseInt(document.getElementById("two").value);
  var thirdvalue = parseInt(document.getElementById("three").value);
  var text;

  if (
    firstvalue === secondvalue &&
    secondvalue === thirdvalue &&
    thirdvalue === firstvalue
  ) {
    alert("Equilateral triangle");
  }
}
