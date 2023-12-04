
document.addEventListener('DOMContentLoaded', function() {
    const myVideo = document.getElementById('myVideo');
    if (myVideo) {
        myVideo.play();
    } else {
        console.error("Video element not found.");
    }
});
//background music function
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('Background-Music');
    audio.play();
});
