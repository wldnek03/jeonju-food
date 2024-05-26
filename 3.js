function startApp() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
}

function showMap() {
    window.open("https://maps.app.goo.gl/vmVaQi62QCsdWiMQ9", "_blank");
}

document.querySelectorAll('.neighborhood div').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelectorAll('.neighborhood div').forEach(function(div) {
            div.classList.remove('active');
        });
        element.classList.add('active');
    });
});