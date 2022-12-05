/* Creates variable burger (and selects the nav SVG)*/
const burger = document.querySelector('nav svg');
const logo = document.querySelector('logo h1');
let atTop = true;
CustomEase.create("exitLogo", "M0,0,C0.11,0.494,0.02,0.962,0.146,1.088,0.278,1.22,0.504,1,1,1");



/* Adds a function that makes it so everytime we click, we do what is in the function
* In this case, we toggle the nav bar to be active or inactive.
* So, we expand the bar and turn the burger black and vice versa upon clicking again

burger.addEventListener('click', () => {
    burger.classList.toggle('active');

    if (burger.classList.contains('active')) {
        gsap.to(".links", {x: "0%"});
        gsap.to('.line', {stroke:'black'});
        gsap.fromTo('.links a',
            {opacity: 0, y:0} , 
            {opacity: 1, delay: 0.25, stagger: 0.25, y:30});
        gsap.fromTo('.links',
            {opacity: 0, y:0, x:0} , 
            {opacity: 1, stagger: 0.25, y:'10%', x:'-5%'});

            * Write gsap animation to turn svgs into X
            

    } else {
        gsap.to('.links', {x:'150%'});
        gsap.to('.line', {stroke:'white'});
        gsap.set('body', {overflow: 'auto'});
        gsap.set('body', {overflowX: 'hidden'});
        
    }
});
*/


window.addEventListener('scroll', () => {
    console.log(atTop);
    if (window.scrollY == 0) {
        atTop = true;

        gsap.to('.logo h1', {
            duration: 1,
            opacity:1,
            x: 0,
            ease:'elastic',
            immediateRender:true
            });
            

    } else if (window.scrollY != 0 && atTop == true){
        atTop = false;

        gsap.to('.logo h1', {
            duration: 2,
            opacity: 0,
            x: -50,
            ease:'exitLogo',
            immediateRender:false
            });
    } 
});


const videos = gsap.utils.toArray('.video');

gsap.set(videos, {opacity:0});

videos.forEach((video) => {
    ScrollTrigger.create( {
        trigger: video,
        start:'top center',
        end: 'bottom center',
        markers: true,
        onEnter: () => {
            gsap.to(video, {opacity:1});
            video.play();
        },
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause(),
    });
});
