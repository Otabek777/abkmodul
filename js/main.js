if($(".banner__play")) {
    $(".banner__play").click(function() {
        $(".video").addClass("active");
        setTimeout(function() {
            $(".video").addClass("opacity");
        },1);
    });
    $(".video .close").click(function() {
        $(".video").removeClass("opacity");
        setTimeout(function() {
            $(".video").removeClass("active");
        },700);
    });
};