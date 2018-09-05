var cartNumber = 0;

$("#addtocart").click(function (event) {
  console.log(event)
  event.preventDefault();
  var additionalValue = $("#ammount").val();
  cartNumber = cartNumber + parseInt(additionalValue);
  $("#cartitems").html(cartNumber);
  $("#cartitems").show();
});

$("#signup").click(function () {

  var name = $("#firstname").val();
  var email = $("#email").val();

  if (email !== "" && name !== "") {
    $(".modal-title").html("Thank you for signing up, " + name + "!");
    $(".modal-body").html("Great deals are on the way!");
    $(".modal-footer").hide();
  }
  else {

    $("#emailAlert").hide();
    $("#nameAlert").hide();

    if (email === "") {
      $("#emailAlert").show();
    }
    if (name === "") {
      $("#nameAlert").show();
    }
  }
});

console.log('hello')