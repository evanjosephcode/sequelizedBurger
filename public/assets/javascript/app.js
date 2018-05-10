$(function () {

    $("#addburger").on("click", function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#auth").val().trim()
        };

        if (newBurger.burger !== "") {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    location.reload();
                }
            );

        }
    })

    $(".eatburger").on("click", function (event) {
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/"+id, {
            type: "PUT",
            data: devouredState
        }).then(
            function() {
                location.reload();
            }
        )
    });

});