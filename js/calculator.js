$(document).ready(function () {

  const output = $("#output");

  $("#btns button").not("#clear, #calculate").click(function () {
    let value = $(this).data("value");
    output.val(output.val() + value);
  });

  $("#calculate").click(function () {
    let expression = output.val();

    if (expression === "") 
    return;

    if (/[+\-*/.]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }

    try {
      let result = Function("return " + expression)();
      output.val(result);
    } 
    catch {
      output.val("Error");
    }
  });

  $("#clear").click(function () {
    output.val("");
  });

});