/*
https://stackoverflow.com/questions/8579643/how-to-scroll-up-or-down-the-page-to-an-anchor-using-jquery
from user dknaack (https://stackoverflow.com/users/479659/dknaack)
Under CC-BY-SA 3.0 License (https://creativecommons.org/licenses/by-sa/3.0/)
*/
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}