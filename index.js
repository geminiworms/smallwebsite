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