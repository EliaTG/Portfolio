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


// Animations
  const svgContainer = document.getElementById('svg');
  const animItem = bodymovin.loadAnimation({
      container: svgContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets8.lottiefiles.com/packages/lf20_es4p9zph.json',
      name: "Man coding Animation",

  });
  
  const svgAbout = document.getElementById('svg_about');
  const animSkill = bodymovin.loadAnimation({
      container: svgAbout,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets4.lottiefiles.com/packages/lf20_gjsy1lag.json',
      name: "Man debugging Animation",

  });
// slider
class Slider {
  constructor(sliderElem) {
      this.slider = sliderElem;
      this.sliderItems = sliderElem.getElementsByClassName("slider-item");
      this.indicators = sliderElem.getElementsByClassName("slide-indicator");
      this.nextBtn = sliderElem.querySelector(".slider-control-next");
      this.prevBtn = sliderElem.querySelector(".slider-control-prev");
      this.currentIndex = 0;
      this.prevItemIndex = this.sliderItems.length - 1;
      this.nextItemIndex = 1;
      this.isSliding = false;
      
    /*   Set Item Indexs if active class is specified on an element other than the first.*/
      for (let i = 0; i < this.sliderItems.length; i++) {
          if (this.sliderItems[i].classList.contains("active")){
              this.currentIndex = i;
              if (i + 1 === this.sliderItems.length) {
                  this.nextItemIndex = 0;
              }
              this.nextItemIndex = i + 1;
              if (i !== 0) {
                  this.prevItemIndex = i - 1;
              }
              break;
          }
      }
      this.setEventListeners();
      this.indicators[this.currentIndex].classList.add("active");
  }
  setEventListeners() {
      this.prevBtn.addEventListener("click", () => {
          this.prev();
      });
      this.nextBtn.addEventListener("click", () => {
          this.next();
      });
  }
  setIndices(direction) { 
      let index;
      if (direction === "NEXT") {
          index = this.currentIndex === this.sliderItems.length - 1 ? 0 : this.currentIndex + 1;
      } 
      if (direction === "PREV") {
          index = this.currentIndex === 0 ? this.sliderItems.length - 1 : this.currentIndex - 1;
      }
      if (index === 0) {
          this.currentIndex = index;
          this.nextItemIndex = index + 1;
          this.prevItemIndex = this.sliderItems.length - 1;
      } else if (index === this.sliderItems.length - 1) {
          this.currentIndex = this.sliderItems.length - 1;
          this.nextItemIndex = 0;
          this.prevItemIndex = this.currentIndex - 1;
      } else {
          this.currentIndex = index;
          this.nextItemIndex = index + 1;
          this.prevItemIndex = index - 1;
      }
  }
  next() {
      if (this.isSliding) return;
      this.isSliding = !this.isSliding;
      this.sliderItems[this.nextItemIndex].classList.add("next-item");
      setTimeout(() => {
          this.sliderItems[this.currentIndex].classList.add("slide-next");
          this.sliderItems[this.nextItemIndex].classList.add("slide-end");
          this.sliderItems[this.nextItemIndex].classList.add("active");
      }, 20);
      setTimeout(() => {
          this.sliderItems[this.nextItemIndex].classList.remove("next-item", "slide-end");
          this.sliderItems[this.currentIndex].classList.remove("slide-next", "active");
          this.indicators[this.currentIndex].classList.remove("active");
          this.indicators[this.nextItemIndex].classList.add("active");
          this.setIndices("NEXT");
          this.isSliding = false;
      }, 400);
  }
  prev() {
      if (this.isSliding) return;
      this.isSliding = !this.isSliding;
      this.sliderItems[this.prevItemIndex].classList.add("prev-item");
      setTimeout(() => {
          this.sliderItems[this.currentIndex].classList.add("slide-prev");
          this.sliderItems[this.prevItemIndex].classList.add("slide-end");
          this.sliderItems[this.prevItemIndex].classList.add("active");
      }, 20);
      setTimeout(() =>  {
          this.sliderItems[this.prevItemIndex].classList.remove("prev-item", "slide-end");
          this.sliderItems[this.currentIndex].classList.remove("slide-prev", "active");
          this.indicators[this.currentIndex].classList.remove("active");
          this.indicators[this.prevItemIndex].classList.add("active");
          this.setIndices("PREV");
          this.isSliding = false;
      }, 400);
  }
}

const slider = new Slider(
  document.querySelector(".slider")
);