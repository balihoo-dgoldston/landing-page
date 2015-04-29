$('.form-js').validator().on('submit', function (e) {

  e.preventDefault();
  // Field values
  var fname = $("input[name=firstname]");
  var lname = $("input[name=lastname]");
  var mail = $("input[name=email]");
  var tel = $("input[name=tel]");

  // Hidden field values
  var list = $("input[name=listname]");
  var affiliate = $("input[name=affiliatecompanyid]");
  var aemail = $("input[name=leademail]");

  // data object
  var formData = {
    firstname: fname.val(),
    lastname: lname.val(),
    email: mail.val(),
    other: tel.val(),
    listname: list.val(),
    affiliatecompanyid: affiliate.val(),
    affiliateemail: aemail.val(),
    returnurl: document.URL
  };

  $.ajax({
    url: $("input[name=processURL]").val(),
    type: "POST",
    data: formData,
    success: function(data) {
      formSuccess();
      $('.hide-me').addClass('hidden');
      $(".thanks").removeClass('hidden');
    },
    error: function(request, status, error) {
      alert(formErrorMessage);
    }
  }); //ajax

}); // validator

$(function() {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;

    $('.add-location').each(function() {

        $el = $(this);
        topPosition = $el.position().top;

        if (currentRowStart != topPosition) {

            // we just came to a new row.  Set all the heights on the completed row
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }

            // set the variables for the new row
            rowDivs.length = 0; // empty the array
            currentRowStart = topPosition;
            currentTallest = $el.height();
            rowDivs.push($el);

        } else {

            // another div on the current row.  Add it to the list and check if it's taller
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);

        }

        // do the last row
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }

    });  
});