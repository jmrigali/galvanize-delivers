$(document).ready(function() {

 $(".dropdown-button").dropdown();

 $(".button-collapse").sideNav();

 $('.modal').modal();


 // var $toastContent = $('<span>You have not filled out all of your information</span>');
 // Materialize.toast($toastContent, 5000);

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





$('#orderbutton').click('a', function (event) {
  var $firstName = $('#first_name');
  var $lastName = $('#last_name');
  var $street= $('#street');
  var $city = $('#city');
  var $state = $('#state');
  var $zip = $('#zip');
  var $email = $('#email');
  var $total = $('#total').text();


  if ($firstName.val().trim()=== ''||
$lastName.val().trim()==='' ||
$street.val().trim()=== ''||
$city.val().trim()=== ''||
$state.val().trim()=== '' ||
$zip.val().trim()=== ''||
$email.val().trim()=== '' ||
$total === '' ) {
  var $toastContent2 = $('<span>Uh-oh! Somethings not right!</span>');
  Materialize.toast($toastContent2, 5000);
  } else {
  var $toastContent = $('<span>Hooray</span>');
  Materialize.toast($toastContent, 5000);
}
});



});
