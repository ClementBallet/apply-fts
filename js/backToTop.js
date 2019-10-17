function init(htmlElement) {
    document.addEventListener('DOMContentLoaded', function() {
        window.onscroll = function(ev) {
            htmlElement.className = (window.pageYOffset > 100) ? "back-to-top visible" : "back-to-top invisible";
        };
    });
}
