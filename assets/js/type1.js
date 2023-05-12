$(document).ready(function() {
  var text = "My Works ";
  var i = 0;
  function typeWriter() {
    if (i < text.length) {
      $('#me-works').append(text.charAt(i));
      i++;
      setTimeout(typeWriter, 400); // Change the delay time here
    }
    else {
      i = 0; // Reset i to 0 to start the loop again
      $('#me-works').empty(); // Clear the text for the next loop
      $('#me-works').append('<span>&nbsp;</span>');
      setTimeout(typeWriter, 0); // Add a longer delay between loops
    }
  }
  typeWriter();
});