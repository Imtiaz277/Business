//- Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
});

//- Section 2 Video
const video = document.querySelector(".video");
const btn = document.querySelector(".button-container i");
const bar = document.querySelector(".video-bar");

function playPause(){
    if(video.paused){
        video.play();
        btn.className = "far fa-pause-circle";
        video.style.opacity = "0.7";
    }
    else{
        video.pause();
        btn.className = "far fa-play-circle";
        video.style.opacity = "0.3";
    }
}

btn.addEventListener("click", function(){
    playPause();
});

video.addEventListener("click", function(){
    playPause();
});

video.addEventListener("timeupdate", function(){
    // console.log(video.currentTime, video.duration);
    const barWidth = video.currentTime/video.duration;
    bar.style.width = `${barWidth * 100}%`;

    if(video.ended){
        btn.className = "far fa-play-circle";
        video.style.opacity = "0.3";
    }
});

//- Section 3 Pricing Cards
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
});