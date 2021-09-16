$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    }
                );
            }
        }
    });

$(document).ready(() => {
    $(".s-hero").animate(
        {
            opacity: 1,
        },
        1500
    );
});

$("._buttons ._next").click(function () {
    var cases = $(this).closest("div.container-fav").find("div._cases");
    cases.scrollLeft(cases.scrollLeft() + 800);
});

$("._buttons ._back").click(function () {
    var cases = $(this).closest("div.container-fav").find("div._cases");
    cases.scrollLeft(cases.scrollLeft() - 800);
});

$(".s_details .container-fav ._showcase img").click((e) => {
    if (document.fullscreenElement == null) e.target.requestFullscreen();
    else document.exitFullscreen();
});
