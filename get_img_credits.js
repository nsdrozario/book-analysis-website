$(document).ready(function() {
    $.get("img/IMAGE_LICENSE.txt", function(data, status) {
        $("#image-credits-area").html(
            "<pre>" +
            data +
            "</pre>"
        )
    })
});