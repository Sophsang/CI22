window.addEventListener("load", function() {
    document.getElementById("cowButton").addEventListener("click", playCow);

    function playCow() {
        var audio = document.getElementById("cowAudio");
        audio.play();
    }
})
