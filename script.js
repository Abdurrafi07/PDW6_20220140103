document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const video = document.getElementById('video');
  
    // Play sound when the page is loaded
    audio.play();
  
    // Pause sound and video when clicked outside of their container
    document.addEventListener('click', function(event) {
      const target = event.target;
      if (target !== audio && target !== video) {
        audio.pause();
        video.pause();
      }
    });
  });
  