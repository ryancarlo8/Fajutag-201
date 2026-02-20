$(document).ready(function () {
    
    let tasks = [];

    $("#add-btn").click(function () {
        const userInput = $("#user-input").val().trim();

        if (userInput === "") {
            alert("Empty!");
            return;
        }

        tasks.push(userInput);

        $(".content-container").append(`
            <div class="task" data-index="${tasks.length - 1}">
                <input type="checkbox">
                <p>${userInput}</p>
                <button class="delete-btn" data-index="${tasks.length - 1}">x</button>
            </div>
        `);

        $("#user-input").val("");
    });

    function deleteTask(index) {
    
        tasks.splice(index, 1);

        $(".task").eq(index).remove();

        $(".task").each(function (i) {
            $(this).attr("data-index", i);
            $(this).find(".delete-btn").attr("data-index", i);
        });
    }


    $(".content-container").on("click", ".delete-btn", function () {
        const index = $(this).data("index");
        deleteTask(index);
    });
});