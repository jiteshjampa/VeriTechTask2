function myFunction() {
  var x = document.querySelector(".navbar");
  console.log(x.parentElement.parentElement);
  if (x.className === "navbar") {
    x.className += " responsive";
    x.parentElement.parentElement.className += " navheights";
  } else {
    x.className = "navbar";
    x.parentElement.parentElement.className = "NavBar";
  }
}
// Select all cardbox elements

// Initial check on page load
