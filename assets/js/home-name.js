$(document).ready(function() {
    var text = "regie sapico.";
    var i = 0;
    function typeWriter() {
      if (i < text.length) {
        $('#me-name').append(text.charAt(i));
        i++;
        setTimeout(typeWriter, 300); // Change the delay time here
      }
      else {
        i = 0; // Reset i to 0 to start the loop again
        $('#me-name').empty(); // Clear the text for the next loop
        $('#me-name').append('<span>&nbsp;</span>');
        setTimeout(typeWriter, 0); // Add a longer delay between loops
      }
    }
    typeWriter();
  });