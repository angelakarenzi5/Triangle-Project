function track() {
  var firstvalue = parseInt(document.getElementById("one").value);
  var secondvalue = parseInt(document.getElementById("two").value);
  var thirdvalue = parseInt(document.getElementById("three").value);
  var text;
  var array = [firstvalue, secondvalue, thirdvalue];
  if (
    (firstvalue + secondvalue <= thirdvalue &&
      secondvalue + firstvalue <= thirdvalue) ||
    (firstvalue + thirdvalue <= secondvalue &&
      thirdvalue + firstvalue <= secondvalue) ||
    secondvalue + thirdvalue <= firstvalue
  ) {
    text = "Not a Triangle.";
  }
  //Not a triangle
  if (firstvalue <= 0 || secondvalue <= 0 || thirdvalue <= 0) {
    text = "Undefined";
  } else if (
    (firstvalue === secondvalue &&
      secondvalue === thirdvalue &&
      thirdvalue === firstvalue) ||
    firstvalue + secondvalue < thirdvalue ||
    secondvalue + thirdvalue < firstvalue ||
    thirdvalue + firstvalue < secondvalue
  ) {
    text = "Equilateral Triangle.";
  }
  //Equilateral Triangle
  else if (
    firstvalue === secondvalue ||
    firstvalue === thirdvalue ||
    secondvalue === thirdvalue
  ) {
    text = "Isosceles Triangle.";
  }
  //Isosceles Triangle
  else if (
    firstvalue !== secondvalue &&
    firstvalue !== thirdvalue &&
    secondvalue !== thirdvalue
  ) {
    text = "Scalene Triangle.";
  }
  //Scalene Triangle
  else {
    text = "Error.";
  }
  document.getElementById("demo").innerHTML =
    "The value[" + array + "]" + " is " + text;
}
