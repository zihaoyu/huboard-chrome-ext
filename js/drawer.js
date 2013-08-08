var localStorageDrawerOption = 'hce_drawer';

function optionGetDrawer() {
  return (localStorage[localStorageDrawerOption] || 'true') === 'true';
}

function optionSetDrawer(expanded) {
  localStorage[localStorageDrawerOption] = expanded;
}

var toggleDrawer = function() {
  setTimeout(function() {
    var expanded = $('.toggle-drawer').hasClass('arrow-left');
    optionSetDrawer(expanded);
  }, 500);
};

$('.toggle-drawer').on('click', toggleDrawer);

// kick it off
if (optionGetDrawer()) {
  // from huboard source
  $("#drawer")
    .find(".toggle-drawer").removeClass("arrow-right").addClass("arrow-left")
    .end().animate({left: '+=270px'}, 300);
  $("#content").animate({"margin-left": "+=100px"},300);
}
