var i = 0,
    images = [],
    time = 2500;

// Images list
images[0] = 'img/photo-1.jpg';
images[1] = 'img/photo-2.jpg';
images[2] = 'img/photo-3.jpeg';
images[3] = 'img/photo-4.jpeg';

// Change the image
function changeImg() {
  document.querySelector('.slide').src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  // Set the time for function
  setTimeout(changeImg, time);
}

// Starts function on page load
window.onload = changeImg;