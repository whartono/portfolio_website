
window.addEventListener('load', function() {
    gsap.fromTo('.sidebar-content .picture', 
        {opacity: 0, y:-10},
        {opacity: 1, y:0, delay: 0.25}
    );

    gsap.fromTo('.sidebar-content h2', 
        {opacity: 0, y:-10},
        {opacity: 1, y:0, delay: 0.25}
    );


    gsap.fromTo('.sidebar-content ul li', 
        {opacity: 0, y:-10},
        {opacity: 1, y:0, delay: 0.25, stagger:0.25}
    );

    gsap.fromTo('.sidebar-content .socials', 
        {opacity: 0, y:-10},
        {opacity: 1, y:0, delay: 1.75}
    );
});