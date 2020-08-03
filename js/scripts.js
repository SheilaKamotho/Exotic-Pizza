$(document).ready(function(){
    $('.text').hover(function () {
    $(this).animate({opacity:'1'});
    },
    function () {
    $(this).animate({opacity:'0'});
})
});

$(document).ready(function() {
    $('#summary').hide();
})

$(document).ready(function() {
    var deliveryPrice = 0;
    $('#checkout').click(function() {
        var checkValue = document.getElementById('delivery').value;
        if (checkValue === '200') {
            deliveryPrice += 200;
            var location = prompt('Say your location:');
            alert('Delivery Price is Ksh' + deliveryPrice)
            alert('Pizza will be delivered at' + ' ' + location);
        }     
    });
})    