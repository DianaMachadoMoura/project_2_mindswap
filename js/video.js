// window.onload = function () {
    //==js for login and sign up
    var trailerLink = $(".trailerLink");
    var trailerct = $("#trailer-content");
    var trailerWrap = $(".trailer-wrapper");
    var overlay = $(".overlay");
    trailerWrap.each(function () {
        $(this).wrap('<div class="overlay"></div>')
    });
    //pop up for trailer form
    trailerLink.on('click', function (event) {
        event.preventDefault();
        trailerct.parents(overlay).addClass("openform");
        $(document).on('click', function (e) {
            var target = $(e.target);
            if ($(target).hasClass("overlay")) {
                $(target).find(trailerct).each(function () {
                    $(this).removeClass("openform");
                });
                setTimeout(function () {
                    $(target).removeClass("openform");
                }, 350);
            }
        });
    });
// }