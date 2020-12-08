$(document).ready(function() {
    $.get("img/IMAGE_LICENSE.html", function(data, status) {
        $("#image-credits-area").html(
            "<p>" +
            data +
            "</p>"
        )
    })
});