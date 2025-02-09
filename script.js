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
//Chống copy
function killCopy(e){
    return false;
}

function reEnable(){
    return true;
}

document.onselectstart=new Function ("return false");

if (window.sidebar){
    document.onmousedown=killCopy;
    document.onclick=reEnable;
}

function noteOut()
{
    var note = document.querySelector(".note");
    note.style.display = "none";
}

setInterval(noteOut,3000);

//Chống chuột phải 
window.onload = function() {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
            disabledEvent(e);
        }
    }, false);

    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
};
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    const disc = document.getElementById("disc");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const changeMusicBtn = document.getElementById("change-music-btn");
    const musicUpload = document.getElementById("music-upload");

    // Play/Pause functionality
    // playPauseBtn.addEventListener("click", function () {
    //     if (audio.paused) {
    //         audio.play();
    //         disc.style.animationPlayState = "running";
    //         playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    //     } else {
    //         audio.pause();
    //         disc.style.animationPlayState = "paused";
    //         playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    //     }
    // });

    // Change music functionality
    changeMusicBtn.addEventListener("click", function () {
        musicUpload.click();
    });

    musicUpload.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            audio.src = fileURL;
            audio.play();
            disc.style.animationPlayState = "running";
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });
});
//Chống Ctrl + U
document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};
$(document).keypress("u",function(e) {
    if(e.ctrlKey) return false;
    else return true;
});
