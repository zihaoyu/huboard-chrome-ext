var toggle = function() {
  var panel = $('.page-header-wrapper ol');
  panel.toggle(panel.is(':hidden'));
  alert('toggled');
};

$('.nav:not(.pull-right)').append('<a class="btn btn-small btn-assignees" onclick="toggle();"><i class="icon-collapse"></i></a>');

