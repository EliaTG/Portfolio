

// document.getElementById("label_menu").addEventListener("click", NoScroll);
//         function NoScroll() {
//         // let first;
//         // let second;
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        
//                 window.onscroll = function() {
//                     window.scrollTo(scrollLeft, scrollTop);
//                 }; 
              
//     }

//     document.getElementById("scrolling_actived").addEventListener("click", Scroll);
//     function Scroll() { 
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         function enableScroll() {
//             window.onscroll = function() {};
//        } 
//     } 


// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// const gsap_animation = document.querySelector(".gsap_animation");
// const overlay = document.querySelector(".overlay");
// const hamburger_menu = document.querySelector(".hamburger_menu");
// const ul_menu = document.querySelector(".ul_menu");
//  function toggleMenu() {
//   if (gsap_animation.classList.contains("showMenu")) {
//     gsap_animation.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     wrapperMenu.style.display = "block";

    // Animation menu with gsap
    // gsap_animation.style.visibility = "visible";
    // overlay.style.visibility = "visible";
    // hamburger_menu.style.visibility = "visible";

    //   gsap.set(".gsap_animation", {left: '100%'});
    //   gsap.set(".overlay", {left: '100%'});
    //   gsap.set(".hamburger_menu", {left:'100%', opacity:0});

    //   gsap.to(".gsap_animation", {left: '0%', duration:1, ease: "expo.out", delay: 0.4});
    //   gsap.to(".overlay", {left: '0%', duration:1, ease: "expo.out",  delay: 0.5});
    //   gsap.to(".hamburger_menu", {left:'0%', opacity: 1, duration:1, ease: "expo.out", delay: 0.7});


      
    //End of Animation menu with gsap


    
//   } else {
//     gsap_animation.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     wrapperMenu.style.display = "none";
//   }}
// hamburger.addEventListener("click", toggleMenu);
// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   })
 
    
    // // Animation menu with gsap
    //   gsap.set(".gsap_animation", {right: '100%', stagger: 1,});
    //   gsap.set(".overlay", {right: '100%', stagger: 2,});
    //   gsap.set(".hamburger_menu", {right:'100%', opacity:0,  stagger: 3,});

    //   gsap.to(".gsap_animation", {right: '0%', duration:1, ease: "expo.out", delay: 1.2,  stagger: 1});
    //   gsap.to(".overlay", {right: '0%', duration:1, ease: "expo.out",  delay: 1.4,  stagger: 2});
    //   gsap.to(".hamburger_menu", {right:'0%', opacity: 1, duration:1, ease: "bounce.out", delay: 2.3, stagger: 3});
    //End of Animation menu with gsap

//   }
// }
var wrapperMenu = document.querySelector('.wrapper-menu');
const gsap_animation = document.querySelector(".gsap_animation");
const overlay = document.querySelector(".overlay");
const hamburger_menu = document.querySelector(".hamburger_menu");
// const ul_menu = document.querySelector(".ul_menu");

wrapperMenu.addEventListener('click', function(){
wrapperMenu.classList.toggle('open');  
    gsap_animation.style.visibility = "visible";
    overlay.style.visibility = "visible";
    hamburger_menu.style.visibility = "visible";


      gsap.set(".gsap_animation", {left: '100%'});
      gsap.set(".overlay", {left: '100%'});
      gsap.set(".hamburger_menu", {left:'100%', opacity:0});

      gsap.to(".gsap_animation", {left: '0%', duration:1, ease: "expo.out", delay: 0.07});
      gsap.to(".overlay", {left: '0%', duration:1, ease: "expo.out",  delay: 0.08});
      gsap.to(".hamburger_menu", {left:'0%', opacity: 1, duration:1, ease: "expo.out", delay: 0.09});
  
 
  
})


// Gsap Animations
// ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.scroll_trigger').forEach(section => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: 'top top',
//     pin: true,
//     pinSpacing: false
//   });
// });
// End of ScrollTrigger

  
// Preba

// gsap.set(".gsap_animation", {left: '100%'});
// gsap.set(".overlay", {left: '100%'});
// gsap.set(".hamburger_menu", {left:'100%', opacity:0});

// gsap.to(".gsap_animation", {left: '0%', duration:1, ease: "expo.out", delay: 1.2});

// gsap.to(".overlay", {left: '0%', duration:1, ease: "expo.out",  delay: 1.4});
// gsap.to(".hamburger_menu", {left:'0%', opacity: 1, duration:1, ease: "bounce.out", delay: 2});


// end of preba

  gsap.from('.menuIcon', 1.5,{
    opacity: 0,
    // x: 40,
    x: '100%',
    delay: 1,
    stagger: 1,
    ease: Power4.easeOut
  });
  gsap.from('.logo_Animated', 2,{
           opacity: 0,
           y: -30,
           delay: .2,
           ease: Expo.easeInOut
  });
  gsap.from('#p_animated',{
        opacity: 0,
        delay: 1.7,
        duration: 1.2,
        y: '100%',
        stagger: 1.2,
        ease: Expo.easeInOut
  });
  gsap.from('#h1_animated',{
      opacity: 0,
      delay: 1.5,
      duration: 1,
      stagger: 1.2,
      y: '100%',
      ease: Power4.easeOut
  });

  gsap.from('#wrapper', 1.5,{
        opacity: 0,
        // x: 40,
        // x: '-100%',
        delay: 1,
        stagger: 1,
        ease: Power4.easeOut
      });
  

