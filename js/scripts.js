$(document).ready(function(){
    $('.text').hover(function () {
    $(this).animate({opacity:'1'});
    },
    function () {
    $(this).animate({opacity:'0'});
})
});
