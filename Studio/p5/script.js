window.addEventListener("load", function() {
    document.getElementById("cow").addEventListener("click", playCow);

    function playCow() {
        var audio = document.getElementById("cowAudio");
        audio.play();
    }

    document.getElementById("horse").addEventListener("click", playHorse);

    function playHorse() {
        var audio = document.getElementById("horseAudio");
        audio.play();
    }

    document.getElementById("pig").addEventListener("click", playPig);

    function playPig() {
        var audio = document.getElementById("pigAudio");
        audio.play();
    }

    document.getElementById("goat").addEventListener("click", playGoat);

    function playGoat() {
        var audio = document.getElementById("goatAudio");
        audio.play();
    }

    document.getElementById("rooster").addEventListener("click", playRooster);

    function playRooster() {
        var audio = document.getElementById("roosterAudio");
        audio.play();
    }
})

