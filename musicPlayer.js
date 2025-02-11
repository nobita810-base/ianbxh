document.addEventListener("DOMContentLoaded", function() {
    const backgroundMusic = document.getElementById("background-music");
    const disc = document.getElementById("disc");

    const playMusic = () => {
        backgroundMusic.play().then(() => {
            disc.classList.add("rotate");
        }).catch((error) => {
            console.log("Error playing music:", error);
        });
    };

    // Yêu cầu người dùng click để kích hoạt autoplay
    document.addEventListener('click', function() {
        // Phát nhạc ngay lập tức
        playMusic();
        // Phát nhạc sau 5 giây
        setTimeout(playMusic, 2000);
    }, { once: true });
});