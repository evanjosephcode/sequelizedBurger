$(function () {

    $("#addburger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // variable declaration for user input
        let newBurger = {
            burger: $("#auth").val().trim()
        };

        if (newBurger.burger !== "") {
            // Send the POST request and the new burger name
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );

        }
    })

    $(".eatburger").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/"+id, {
            type: "PUT"
        }).then(
            function() {
                location.reload();
            }
        )
    });

    // $(#mofo).on("click", function (event) {

    // })
});