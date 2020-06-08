$(document).ready(function () {
    $("#ppl ").hover(
        function () {
            $(this).attr(url"./assets/images/paypal-button-orng.png");
        },
        function () {
            $(this).attr("src", "./assets/images/paypal-donate.png");
        });
});