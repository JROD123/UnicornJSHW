$("#signup").click(function() {

    var name = $("#firstname").val();
    var email = $("#email").val();

    if (email !== "" && name !== "") {
        $(".modal-title").html("Thanks for signing up" + name + "!");
        $(".modal-body").html("Deals are on the way!");
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
  
var cartNumber = 0;


$("#addtocart").click(function() {

    event.preventDefault();

    var additionalValue = $("#quantity").val();
  
    cartNumber = cartNumber + parseInt(additionalValue);

    $("#cartmerch").html(cartNumber);
  
    $("#cartmerch").show();
});