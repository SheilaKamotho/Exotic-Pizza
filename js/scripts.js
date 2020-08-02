$(document).ready(function(){
    $('.text').hover(function () {
    $(this).animate({opacity:'1'});
    },
    function () {
    $(this).animate({opacity:'0'});
})

});
function getSizeCost() {
    let selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
  }

  function getCrustCost() {
    let selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
  }