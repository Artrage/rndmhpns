$(function() {

$('#clickMe').click(function(event) {
    var mytext = $('#myText').val();

    $('<div id="dialog">'+mytext+'</div>').appendTo('body');        
    event.preventDefault();

        $("#dialog").dialog({                   
            width: 600,
            modal: true,
            close: function(event, ui) {
                $("#dialog").hide();
                }
            });
    }); //close click
});

$('#myModal').modal(options)