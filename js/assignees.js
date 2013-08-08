var localStorageAssigneesOption = 'hce_assignees';

function optionGetShowAssignees() {
  return (localStorage[localStorageAssigneesOption] || 'true') === 'true';
}

function optionSetShowAssignees(show) {
  localStorage[localStorageAssigneesOption] = show;
}

var btnClass = "btn-assignees btn btn-small";
if (optionGetShowAssignees()) {
  btnClass += " active";
}

$('.nav:not(.pull-right)').append('<button id="btn-assignees" class="' + btnClass + '" data-toggle="button">Assignees</button>');

var toggleAssignees = function() {
  setTimeout(function() {
    var panel = $('.page-header-wrapper ol');
    var pressed = $('#btn-assignees').hasClass('active');
    panel.toggle(pressed);
    optionSetShowAssignees(pressed);
  }, 100); // need some time for button state to change
};

$('#btn-assignees').on('click', toggleAssignees);

toggleAssignees(); // kick it off

