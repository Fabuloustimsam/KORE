function submitButton(event) {
  event.preventDefault();
  var firstName = document.getElementById("firstname").value;
  var otherName = document.getElementById("surname").value;
  var Email = document.getElementById("email").value
  var dateOfBirth = document.getElementsByClassName("day").value;
  var monthOfBirth = document.getElementById("monthhh").value;
  var yearOfBirth = document.getElementById("yearrr").value;
  var genderOfClient = document.getElementById("sex").value;

  document.getElementById("result").innerText = `my name is ${firstName} ${otherName} and my details are: i am born on ${dateOfBirth} ${monthOfBirth} in the year ${yearOfBirth} and you can contact me on ${Email} ${genderOfClient}`
  console.log(submitButton)
} 