## Live Braille

<!-- <img class="aspect-video object-cover rounded-lg hover:scale-102 transition-all duration-500 ease-in-out transform" src="/assets/MainPhoto_LiveBraille.png"> -->
<video autoplay="autoplay" muted loop class="aspect-video object-cover rounded-lg shadow-md hover:scale-102 transition-all duration-500 ease-in-out transform" id="vid">
  <source src="/assets/MainVideo_LiveBraille.mp4" type="video/mp4" />
</video>

<component :is="'script'">

  // Targeting video element 
  <!-- let clip = document.querySelector(".vid") -->
  let clip = document.querySelector("vid")

  /* Applying mouseover event on video clip 
  and then we call play() function to play 
  the video when the mouse is over the video */
  clip.addEventListener("mouseover", function (e) {
    clip.play();
  })

  /* Applying mouseout event on video clip 
  and then we call pause() function to stop 
  the video when the mouse is out the video */
  clip.addEventListener("mouseout", function (e) {
    clip.pause();
  })
</component>

Experimental software that recognizes text within the field of view in real time and translates it into Braille (Grade I).