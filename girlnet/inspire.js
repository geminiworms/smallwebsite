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
