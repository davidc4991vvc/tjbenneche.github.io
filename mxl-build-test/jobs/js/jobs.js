// When the page finishes loading
window.onload = function() {

  // Grab the email form
  $("#contact-form").submit(function(event) {
    // Create an AJAX request object
    var api_request = new XMLHttpRequest();
    api_request.open("POST", "http://mobilexlabs.com/feedback.php", true);
    api_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Set the data to send. We want to grab the email input and the feedback input
    api_request.send("email=" + document.getElementById("email-input").value + "&feedback=" + document.getElementById("feedback-input").value);

    api_request.onreadystatechange = function() {

      // When the request finishes...
      if (api_request.readyState == 4) {

        // Check if it is was successful
        if (api_request.status != 200) {
          alert("Could Not Send Feedback");
        } else {
          alert("Thanks for getting in touch!");
        };
      };
    };
    event.preventDefault();
  });
};





$(function() {
  $('a[href*=#]:not([href=#carousel-example-generic])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 1000);
        return false;
      }
    }
  });
});
