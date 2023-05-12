$(document).ready(function() {
  var text = "Education ";
  var i = 0;
  function typeWriter() {
    if (i < text.length) {
      $('#typewriter1').append(text.charAt(i));
      i++;
      setTimeout(typeWriter, 300); // Change the delay time here
    }
    else {
      i = 0; // Reset i to 0 to start the loop again
      $('#typewriter1').empty(); // Clear the text for the next loop
      $('#typewriter1').append('<span>&nbsp;</span>');
      setTimeout(typeWriter, 0); // Add a longer delay between loops
    }
  }
  typeWriter();
});