
function loadingAnimation1() {

    var tl = gsap.timeline()
    tl.from(".contact", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".contact", {
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



    loadingAnimation1()