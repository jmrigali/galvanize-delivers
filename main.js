$(document).ready(function() {

 $(".dropdown-button").dropdown();

 $(".button-collapse").sideNav();

var $card = $('.card');
var $subTotal = 0;





for(let i = 0; i < $card.length; i++) {
   var $button = $($card[i]).find('button')[0];


  $($button).click('button', function () {
    var $something = $($card[i]).children('.card-content');
    var $li= $('<li style="font-size:0.5em;">');

    $item = $($something).children('h5').text();
    $price = $($something).children('p').children('span').text();
    $subTotal += parseFloat($price);


    $li.text($item);

    var $tax = $subTotal * 0.0885;
    var $total = $tax + $subTotal;

    $("#items").append($li);
    $("#subtotal").text($subTotal.toFixed(2));
    $("#tax").text($tax.toFixed(2));
    $("#total").text($total.toFixed(2));
  });
}




});
