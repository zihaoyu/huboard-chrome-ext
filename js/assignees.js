$('.nav:not(.pull-right)').append('<button id="btn-assignees" class="btn-assignees btn btn-small" data-toggle="button">Assignees</button>');

var toggle = function() {
  setTimeout(function() {
    var panel = $('.page-header-wrapper ol');
    var pressed = $('#btn-assignees').hasClass('active');
    panel.toggle(pressed);
  }, 100); // need some time for button state to change
};

$('#btn-assignees').on('click', toggle);

toggle(); // kick it off
