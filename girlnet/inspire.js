//this .js is the same as index.js
//the result will create fixed images that bring up draggable popups

$(document).ready(function() {
  $('.popup-image').click(function() {
    var targetPopup = $(this).data('popup');
    $(targetPopup).addClass('open');
    $(targetPopup).draggable();
  });

  $('.popup-close').click(function() {
    $(this).closest('.popup').removeClass('open');
  });
});

// for iframe autoplay
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }