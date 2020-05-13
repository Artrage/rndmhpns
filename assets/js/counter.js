$(document).ready(function() {
$("#update").click(function() {
    $('#counter').html(function(i, val) { return +val+1 });
  });
});
