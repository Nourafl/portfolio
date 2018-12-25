

// setTimeout(function(){
//     (".fade-in").hide();
// }, 10000);

$(window).scroll(function () {
    // console.log($(window).scrollTop())
    if ($(window).scrollTop() > window.innerHeight / 2) {
        console.log("ANIMATE");
        $(".container").css("display", "flex").fadeIn("slow");
    }
});