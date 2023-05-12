$(document).ready(function() {
    var text = "Contact Me ";
    var i = 0;
    function typeWriter() {
      if (i < text.length) {
        $('#me-contact').append(text.charAt(i));
        i++;
        setTimeout(typeWriter, 400); // Change the delay time here
      }
      else {
        i = 0; // Reset i to 0 to start the loop again
        $('#me-contact').empty(); // Clear the text for the next loop
        $('#me-contact').append('<span>&nbsp;</span>');
        setTimeout(typeWriter, 0); // Add a longer delay between loops
      }
    }
    typeWriter();
  });