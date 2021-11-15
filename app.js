var wrapperMenu = document.querySelector('.wrapper-menu');
const gsap_animation = document.querySelector(".gsap_animation");
const overlay = document.querySelector(".overlay");
const hamburger_menu = document.querySelector(".hamburger_menu");
document.querySelector(".ul_menu").addEventListener("click", closeItem);

// ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.scroll_trigger').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});
// End of ScrollTrigger


  gsap.from('.menuIcon', 1.5,{
        opacity: 0,
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
        delay: 1,
        stagger: 1,
        ease: Power4.easeOut
  });

  gsap.from('#nav_desktop', 1.5,{
        opacity: 0,
        y: -30,
        delay: .2,
        ease: Expo.easeInOut
  });
  gsap.from('#myphoto', 2,{
        opacity: 0,
        delay: 1,
        stagger: 1,
        ease: Power4.easeOut
  });
     

//About Animation 
  gsap.fromTo(".svg_silla", {
    opacity: 0}, 
    {opacity: 1, 
    duration: 0.9, 
    delay: 0.3,
    ease: Expo.easeInOut
    });

    gsap.fromTo(".svg_boy", {
      opacity: 0}, 
      {opacity: 1, 
        duration: 1,
       delay: 0.5,
      ease: Expo.easeInOut
      });


 

  wrapperMenu.addEventListener('click', function(){
  if (wrapperMenu.classList.toggle('open')) {
    gsap_animation.style.visibility = "visible";
    overlay.style.visibility = "visible";
    hamburger_menu.style.visibility = "visible";

    gsap.set(".gsap_animation", {left: '100%'});
    gsap.set(".overlay", {left: '100%'});
    gsap.set(".hamburger_menu", {left:'100%', opacity:0});

    gsap.to(".gsap_animation", {left: '0%', duration:1, ease: "expo.out", delay: 0.07});
    gsap.to(".overlay", {left: '0%', duration:1, ease: "expo.out",  delay: 0.08});
    gsap.to(".hamburger_menu", {left:'0%', opacity: 1, duration:1, ease: "expo.out", delay: 0.09});

  }else{

    gsap.set(".gsap_animation", {left: '100%'});
    gsap.set(".overlay",{left: '100%'});
    gsap.set(".hamburger_menu", {left:'100%'});
  
    gsap.from(".gsap_animation", {left: '0%', duration: 0.8, ease: "expo.out", opacity: 0.9});
    gsap.from(".overlay", {left: '0%', duration: 0.9, ease: "expo.out"});
    gsap.from(".hamburger_menu", {left: '0%', duration: 1, ease: "expo.out",});


  }
});


 

    function closeItem() { 
        if (wrapperMenu.classList.toggle('open')) {
          gsap_animation.style.visibility = "visible";
          overlay.style.visibility = "visible";
          hamburger_menu.style.visibility = "visible";
      
          gsap.set(".gsap_animation", {left: '100%'});
          gsap.set(".overlay", {left: '100%'});
          gsap.set(".hamburger_menu", {left:'100%', opacity:0});
      
          gsap.to(".gsap_animation", {left: '0%', duration:1, ease: "expo.out", delay: 0.07});
          gsap.to(".overlay", {left: '0%', duration:1, ease: "expo.out",  delay: 0.08});
          gsap.to(".hamburger_menu", {left:'0%', opacity: 1, duration:1, ease: "expo.out", delay: 0.09});
      
        }else{
      
          gsap.set(".gsap_animation", {left: '100%'});
          gsap.set(".overlay",{left: '100%'});
          gsap.set(".hamburger_menu", {left:'100%'});
        
          gsap.from(".gsap_animation", {left: '0%', duration: 0.8, ease: "expo.out", opacity: 0.9});
          gsap.from(".overlay", {left: '0%', duration: 0.9, ease: "expo.out"});
          gsap.from(".hamburger_menu", {left: '0%', duration: 1, ease: "expo.out",});
      
      
        }
     
    }


//
  const svgContainer = document.getElementById('svg');
  const animItem = bodymovin.loadAnimation({
      container: svgContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets8.lottiefiles.com/packages/lf20_vo0a1yca.json',
      name: "Man coding Animation",

  });
  
  // const play = document.getElementById('BtnSVG');
  // const svgAnimated = document.getElementById('svg_animated');
  // const animButton = bodymovin.loadAnimation({
  //       container: svgButton,
  //       renderer: 'svg',
  //       loop: false,
  //       autoplay: false,
  //       path: 'https://assets5.lottiefiles.com/private_files/lf30_atznrcwb.json',
  //       name: "Rick & Morty Animation",

  //   });
    //  function play() { 
    
    //   // e.preventDefault();
    //   alert("hola");
    //   // e.preventDefault();
    //   // play.style.display = "block";
    //   // animButton.goToAndPlay(0, true);
     

    // }
  
  
