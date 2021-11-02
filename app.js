var wrapperMenu = document.querySelector('.wrapper-menu');
const gsap_animation = document.querySelector(".gsap_animation");
const overlay = document.querySelector(".overlay");
const hamburger_menu = document.querySelector(".hamburger_menu");

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

// const ul_menu = document.querySelector(".ul_menu");

// wrapperMenu.addEventListener('click', function(){
// wrapperMenu.classList.toggle('open');  
//     gsap_animation.style.visibility = "visible";
//     overlay.style.visibility = "visible";
//     hamburger_menu.style.visibility = "visible";


//       gsap.set(".gsap_animation", {left: '100%'});
//       gsap.set(".overlay", {left: '100%'});
//       gsap.set(".hamburger_menu", {left:'100%', opacity:0});

//       gsap.to(".gsap_animation", {left: '0%', duration:1, ease: "expo.out", delay: 0.07});
//       gsap.to(".overlay", {left: '0%', duration:1, ease: "expo.out",  delay: 0.08});
//       gsap.to(".hamburger_menu", {left:'0%', opacity: 1, duration:1, ease: "expo.out", delay: 0.09});
  
 
  
// })


// Gsap Animations
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


 
  //work
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


  // setTimeout(function(){ 
  //   alert("Ya"); 
  //   gsap_animation.style.visibility = "hidden";
  //   overlay.style.visibility = "hidden";
  //   hamburger_menu.style.visibility = "hidden";
  // }, 1000);

//     gsap_animation.style.visibility = "hidden";
//     overlay.style.visibility = "hidden";
//     hamburger_menu.style.visibility = "hidden";
  }
});
 //Form validation

 const Name = document.getElementById('name');
 const email = document.getElementById('email');
 const details = document.getElementById('details');
 const form = document.getElementById('form');
 const paragraph = document.getElementById('warning');


 form.addEventListener("submit", e=>{
   e.preventDefault()
   let warnings = ""
   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
   let textEnter = false;

    if (Name.value.length < 4) {
      warnings += `Invalid name. Too short<br>`
      Name.focus()
      console.log(regexEmail.test(email.value));
     textEnter = true; 
    } 
    if (!regexEmail.test(email.value)) {
     warnings += `Invalid email.<br>`
     textEnter = true
    }

    if (textEnter) {
     paragraph.innerHTML = warnings
    }
 });
//end of form

//
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
function valida_envia(){
  //valido el nombre
  if (document.fvalida.nombre.value.length==0){
       alert("Tiene que escribir su nombre")
       document.fvalida.nombre.focus()
       return 0;
  }

  //valido la edad. tiene que ser entero mayor que 18
  edad = document.fvalida.edad.value
  edad = validarEntero(edad)
  document.fvalida.edad.value=edad
  if (edad==""){
       alert("Tiene que introducir un número entero en su edad.")
       document.fvalida.edad.focus()
       return 0;
  }else{
       if (edad<18){
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0;
       }
  }

  //valido el interés
  if (document.fvalida.interes.selectedIndex==0){
       alert("Debe seleccionar un motivo de su contacto.")
       document.fvalida.interes.focus()
       return 0;
  }

  //el formulario se envia
  alert("Muchas gracias por enviar el formulario");
  document.fvalida.submit();
}

