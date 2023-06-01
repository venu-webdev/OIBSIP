
$(document).on('click', function (e) {
    clearInterval();
})
var $cursor = $('.cursor');
function moveCursor(e) {
    $cursor.css({
        "top": `${e.clientY - 30}px`,
        "left": `${e.clientX - 30}px`,
    });
}

$(window).on('mousemove', moveCursor);


window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}