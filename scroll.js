/*
Modified version of original code at:
https://stackoverflow.com/questions/8579643/how-to-scroll-up-or-down-the-page-to-an-anchor-using-jquery
from user dknaack (https://stackoverflow.com/users/479659/dknaack)

Modification: changed query to use 'id' attribute of any tag instead of the original functionality of using the 'name' attribute for <a> tags only.
Changed the expression 

    $("a[name='"+ aid +"']") 
    
to

    $('#' + aid)


Under CC-BY-SA 3.0 License (https://creativecommons.org/licenses/by-sa/3.0/)
*/
function scrollToAnchor(aid){
    var aTag = $("#" + aid);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}