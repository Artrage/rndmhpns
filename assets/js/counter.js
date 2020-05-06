$(document).ready(function() {
$("#update").click(function() {
    $('#counter').html(function(i, val) { return +val+1 });
  });
});

$('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
            Counter: $(this).data('value')
        }, {
        duration: 666,
        easing: 'swing',
        step: function (now) {                      
            $(this).text(this.Counter.toFixed(2));
        }
    });
});