const toggle = document.querySelector(".toggle__theme");
const card = document.querySelector(".app");
toggle.addEventListener("click", () => {
    let theme = toggle.querySelector(".fas");
    if (theme.classList.contains("fa-moon")) {
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-sun");
        card.classList.add("dark");
    } else {

        theme.classList.remove("fa-sun");
        theme.classList.add("fa-moon");
        card.classList.remove("dark");

    }
})

        function initializeHeartCounter() {
            const heartCounter = document.getElementById("heart-counter");
            const savedCount = localStorage.getItem("heartCount");
            const initialCount = savedCount ? parseInt(savedCount) : 12000; // Khởi tạo với số lượng tim đã lưu hoặc mặc định là 12000
            document.getElementById("heart-count").textContent = initialCount;
        }

        function initializeShareCount() {
            const shareCountElement = document.getElementById("share-count");
            const savedShareCount = localStorage.getItem("shareCount");
            const initialShareCount = savedShareCount ? parseInt(savedShareCount) : 1; // Khởi tạo với số lượt chia sẻ đã lưu hoặc mặc định là 1
            shareCountElement.textContent = initialShareCount;
        }

        function createHeartAnimation() {
            const heartCounter = document.getElementById("heart-counter");
            const animationHeart = document.createElement("i");
            animationHeart.classList.add("fas", "fa-heart", "heart-animation");
            heartCounter.appendChild(animationHeart);

            animationHeart.addEventListener("animationend", () => {
                animationHeart.remove();
            });
        }

        function incrementHeart() {
            const heartCounter = document.getElementById("heart-counter");
            const heartIcon = heartCounter.querySelector("i");
            const heartCount = document.getElementById("heart-count");
            let currentCount = parseInt(heartCount.textContent.trim());

            if (!isNaN(currentCount)) {
                currentCount += 1;
                heartCount.textContent = currentCount;
                localStorage.setItem("heartCount", currentCount);

                heartIcon.classList.add("active");
                createHeartAnimation();
            }
        }

        function showCommentAlert() {
            alert("Chức năng comment đang được cập nhật!");
        }

        function shareLink() {
            const link = "https://doancongsinh.id.vn";
            const shareCountElement = document.getElementById("share-count");

            let shareCount = parseInt(shareCountElement.textContent.trim()) || 0;
            shareCount += 1;

            shareCountElement.textContent = shareCount;
            localStorage.setItem("shareCount", shareCount);

            navigator.clipboard.writeText(link).then(() => {
                alert("Đã sao chép link web: " + link);
            }).catch(err => {
                alert("Không thể sao chép link. Vui lòng thử lại.");
            });
        }

        document.addEventListener("DOMContentLoaded", function () {
            initializeHeartCounter();
            initializeShareCount();
        });