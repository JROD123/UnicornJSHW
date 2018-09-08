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
  var additionalValue = $("#ammount").val();
  cartNumber = cartNumber + parseInt(additionalValue);
  $("#cartitems").html(cartNumber);
  $("#cartitems").show();
});

var counter=0;
var colors=["#FF0000","#8503ff","#1ff7ff","#d4ff0e","#ff00ba"];

function setup(){
    setInterval(changeColor,1500);
}

function changeColor(){
    var body=document.body;
    body.style.background=colors[counter];

    if(counter == 6) {
        counter=0;
    }else{
        counter++;
    }
}
