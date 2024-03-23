// JavaScript to toggle fullscreen mode on image click
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.clickable');
  
    images.forEach(image => {
      image.addEventListener('click', function () {
        this.classList.toggle('fullscreen');
      });
    });
  });
  