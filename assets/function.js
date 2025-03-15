
function playVideo(videoId) {
    document.getElementById('youtubePlayer').src = "https://www.youtube.com/embed/" + videoId;
}

document.getElementById('loginButton').addEventListener('click', function () {
    window.location.href = '/html/login.html';
});



