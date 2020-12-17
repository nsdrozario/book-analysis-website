let anchors = ["section2", "writing", "audience", "author"];
let selected = 0;
$(window).on('scroll', function() {
    let i;
    for (i = anchors.length-1; i >= 0; i--) {
        if ($(window).scrollTop() > $("#"+anchors[i]).offset().top-($("#main-nav").height()*2)) {
            break;
        }
    }
    
    if (i != -1) {
        let j;
        for (j = 0; j < anchors.length; j++) {
            $("#"+anchors[j]+"-link").parent().removeClass("active-text-highlight");
        }
        $("#"+anchors[i]+"-link").parent().addClass("active-text-highlight");
    } else {
        $("#section2-link").parent().addClass("active-text-highlight");
    }
})