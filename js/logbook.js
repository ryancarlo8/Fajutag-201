$(document).ready(function () {

  const info = [];

  $("#submit").click(function () {

    const Fname = $("#fname").val();
    const Mname = $("#mname").val();
    const Lname = $("#lname").val();
    const Age = $("#age").val();
    const Email = $("#email").val();

    if (!Fname || !Mname || !Lname || !Age || !Email) {
      alert("Please fill out the remaining form");
      return;
    }
    else if (!Email.endsWith("@gmail.com")) {
      alert("Email must be a Gmail address");
      return;
    }

    info.push({ Fname, Mname, Lname, Age, Email });

    
    $(".output-box").append(`
      <div class="table-info">
        <div>
          <p>NAME: ${Fname.toUpperCase()} ${Mname.charAt(0).toUpperCase()}. ${Lname.toUpperCase()}</p>
          <p>AGE: ${Age}</p>
          <p>EMAIL: ${Email}</p>
        </div>
        <div>
          <button class="remove-btn">x</button>
        </div>
      </div>
    `);

    $("input").val("");
  });

  function removeInfo() {
    info.shift();
    $(".table-info").first().remove();
  }

  $(document).on("click", ".remove-btn", function () {
    
    if ($(this).closest(".table-info").is(":first-child"))
    {
      removeInfo();
    }
    else 
    {
      alert("unable to remove! top must be remove first!");
    }
  });

});