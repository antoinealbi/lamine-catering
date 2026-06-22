const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const menuLinks = document.querySelectorAll(".side-menu a");
const backgroundVideos = document.querySelectorAll(".background-video");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
});

backgroundVideos.forEach((video) => {
  video.muted = true;
  video.playsInline = true;

  const playVideo = () => {
    video.play().catch(() => {
      console.log("Autoplay bloqué ou vidéo non chargée :", video.currentSrc);
    });
  };

  video.addEventListener("loadeddata", playVideo);
  video.addEventListener("canplay", playVideo);

  playVideo();
});