document.addEventListener("DOMContentLoaded", function () {
    var heartLoader = document.querySelector(".heart-loader__heartPath");
  
    // Detect animation iteration (when the heart animation is complete)
    heartLoader.addEventListener("animationiteration", function () {
      // Redirect to another page
      window.location.href = "gallery.html";
    });
  });
  