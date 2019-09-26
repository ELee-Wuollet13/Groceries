$(document).ready(function() {
  $(".formGroup form").submit(function(event) {
    $(".formGroup").hide();
    var array = [];

    // var userInput = ["#input1", "#input2", "#input3", "#input4", "#input5"];
    //
    // userInput.forEach(function(input) {
    //   var user = $("input" + imput)
    //   // ray.push($(userInput))
    // })
    array.push($("#input1").val());
    array.push($("#input2").val());
    array.push($("#input3").val());
    array.push($("#input4").val());
    array.push($("#input5").val());
    console.log(array);
    var returnValue = array.map(function(array1) {
      console.log("array1: " + array1);
      return array1.toUpperCase();
    });
      returnValue.sort();
    console.log(returnValue);

      $(".container-results").show();

      var i = 1;
      returnValue.forEach(function(val) {
        $("#inputResult" + i).text(returnValue[i-1]);
        i = i + 1;

      });
      console.log(i);


    event.preventDefault();
  });
});
