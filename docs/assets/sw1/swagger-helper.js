// Scroll to the anchor pointed in URL and expand it section
$(document).ready(function () {
    var urlAnchor = window.location.hash.replace('!/', '').replace('/', '_');
    if (!urlAnchor)
        return;
    setTimeout(function () {
        var body = $("html, body");
        if (!$(urlAnchor).offset())
            return;
        body.stop().animate({ scrollTop: $(urlAnchor).offset().top - 10 }, 500, 'swing');
    }, 700);
});