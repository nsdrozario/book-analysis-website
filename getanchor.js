let anchors = ["section2", "writing", "audience", "author"];
$(window).on('scroll', function() {
   
    for (let i = 0; i < anchors.length; i++) {



        if ($(window).scrollTop() > $("#"+anchors[i]).offset().top  ) {
            
            for (let j = 0; j < anchors.length; j++) {

                $("#"+anchors[j]+"-link").removeClass("active-text-highlight");

            }

            $("#"+anchors[i]+"-link").addClass("active-text-highlight");


        } 

    }

})