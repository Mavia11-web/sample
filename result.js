function loadingAnimation3() {

    var tl = gsap.timeline()
    tl.from(".main", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".main", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    // tl.from("#page1 h1, #page1 p, #page1 div", {
    //     opacity: 0,
    //     duration: 0.5,
    //     stagger: 0.2
    // })
}


loadingAnimation3()



Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });



var cen0 = document.querySelector("#center0")
var cen1 = document.querySelector("#center1")
var cen2 = document.querySelector("#center2")
var cen3 = document.querySelector("#center3")
var cen4 = document.querySelector("#center4")
var video1 = document.querySelector('.vid1 video')
var video2 = document.querySelector('.vid2 video')
var video3 = document.querySelector('.vid3 video')
var video4 = document.querySelector('.vid4 video')
var video5 = document.querySelector('.viddiv-pg1 video')


// cen0.addEventListener('click',function(){
//     video5.play()
//     gsap.to(video5,{
//         transform:"scaleX(1) scaleY(1)",
//         opacity: 1,
//         borderRadius:0
//     })

// })
// video5.addEventListener("click",function(){
//     video5.pause()
//     gsap.to(video5,{
//         transform:"scaleX(0.7) scaleY(0)",
//         opacity: 1,
//         borderRadius:"30px"
//     })
// })
cen1.addEventListener('click',function(){
    video1.play()
    gsap.to(video1,{
        transform:"scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius:0
    })

})
video1.addEventListener("click",function(){
    video1.pause()
    gsap.to(video1,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity: 1,
        borderRadius:"30px"
    })
})








cen2.addEventListener('click',function(){
    video2.play()
    gsap.to(video2,{
        transform:"scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius:0
    })

})
video2.addEventListener("click",function(){
    video2.pause()
    gsap.to(video2,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity: 1,
        borderRadius:"30px"
    })
})



cen3.addEventListener('click',function(){
    video3.play()
    gsap.to(video3,{
        transform:"scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius:0
    })

})
video3.addEventListener("click",function(){
    video3.pause()
    gsap.to(video3,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity: 1,
        borderRadius:"30px"
    })
})




cen4.addEventListener('click',function(){
    video4.play()
    gsap.to(video4,{
        transform:"scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius:0
    })

})
video4.addEventListener("click",function(){
    video4.pause()
    gsap.to(video4,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity: 1,
        borderRadius:"30px"
    })
})




let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let earnings = "+";
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + earnings;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});