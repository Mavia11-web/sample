function loadingAnimation2() {

    

    var tl = gsap.timeline()
    tl.from("#page6", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page6", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
 }


loadingAnimation2()








Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });