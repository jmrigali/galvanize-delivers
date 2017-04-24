$(document).ready(function() {

 $(".dropdown-button").dropdown();

 $(".button-collapse").sideNav();

 $('.modal').modal();

 // $('#modal1').modal('open');

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

// var $toastContent = $('<span>I am toast content</span>');
// Materialize.toast($toastContent, 5000);

});
