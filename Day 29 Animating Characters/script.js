const textWrapper = document.querySelector('.container');
textWrapper.innerHTML = textWrapper.textContent.replace();

anime.timeline({loop: true})
  .add({
    targets: '.container .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
}).add({
    targets: '.container',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});
