// This is the business (or back-end) logic:
var worker = function (inputInteger, order, substituteName, cBClicked) {
  const replacementString = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that."];
  let secondIndexValue = "";
  let generatedIntegers = [];
  const keyNumbers = [1, 2, 3];
  let manipulatedIntegers = [];
  const rExpresssion = /[1-3]/g;  //catch digit '1' or '2' or '3' or various permutation of three

  for (let i = 0; i <= inputInteger; i++) {
    generatedIntegers.push(i);
  }

  generatedIntegers.forEach(function (generatedInteger) {
    if (generatedInteger.toString().match(rExpresssion)) {
      var myArray = generatedInteger.toString().match(rExpresssion);
      if ($.inArray(keyNumbers[2].toString(), myArray) !== -1) {  //replace instances of '3'' with chosen string
        if (parseInt(generatedInteger) % 3 === 0 && cBClicked === true) {
          secondIndexValue = "I'm sorry, " + substituteName + " I'm afraid I can't do that.";
          manipulatedIntegers.push(secondIndexValue);
        }
        else {
          manipulatedIntegers.push(replacementString[2]);
        }
      }
      else if ($.inArray(keyNumbers[1].toString(), myArray) !== -1) { //replace instances of '2' with chosen string
        manipulatedIntegers.push(replacementString[1]);
      }
      else if ($.inArray(keyNumbers[0].toString(), myArray) !== -1) {  //replace instances of '1' with chosen string
        manipulatedIntegers.push(replacementString[0]);
      }
    }
    else {  // if Integer does NOT contain digits '1' or '2' or '3'
      manipulatedIntegers.push(generatedInteger);
    }
  });
  if (order === 'normal') {
    return manipulatedIntegers;
  }
  else if (order === 'reverse') {
    return manipulatedIntegers.reverse();
  }
};

// Everything below this line is the user interface (or front-end) logic:
$(document).ready(function () {
  $('#formOne').submit(function () {
    var cBClicked = false;
    let inputInteger = parseInt($('#userString').val());
    $('input[type="number"], textarea').val('');  // to clear form of entered value after submit
    var order = $("input:radio[name=order]:checked").val();
    let substituteName = "Dave";
    $("input:checkbox[name=substituteBox]:checked").each(function () {
      substituteName = $('#substituteName').val();
      $('input[type="text"], textarea').val('');  // to clear form of entered value after submit  
      cBClicked = true;
    });
    event.preventDefault();

    manipulatedIntegers = worker(inputInteger, order, substituteName, cBClicked); //main function call
    $("#outputContent").show();
    $("#outputText").empty().append(inputInteger);
    $("#outputArray").empty().prepend(manipulatedIntegers.join(", "));
  });
});