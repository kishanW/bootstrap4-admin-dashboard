$(document).on("click", "#side-nav-toggle", function () {
    var sideNav = $("#side-nav");
    
    sideNav.removeAttr("data-is-initial-load");
    
    var isVisible = sideNav.attr("data-is-visible") === "true";
    sideNav.attr("data-is-visible", !isVisible);
    

    if (!isVisible) {
        sideNav.addClass("slideInLeft");
        sideNav.removeClass("slideOutLeft");
    }
    else {
        sideNav.removeClass("slideInLeft");
        sideNav.addClass("slideOutLeft");        
    }
})

$(document).ready(function () {
    var sideNav = $("#side-nav");
});