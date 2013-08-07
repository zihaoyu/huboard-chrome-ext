var toggle = function() {
  var panel = $('.page-header-wrapper ol');
  panel.toggle(panel.is(':hidden'));
  alert('toggled');
};

$('.nav.pull-right').append('<button class="btn btn-small" onclick="toggle();"><i class="icon-collapse"></i> Asgn</button>');

