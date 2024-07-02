const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function fpage(){
    var tl = gsap.timeline();

    tl.from("#nav" , {
        y:-20,
        opacity:0
    })

    tl.to(".boundingelem",{
     y:0,
     duration:1,
     stagger:0.3
    })
    tl.from("#h-footer" , {
        opacity:0,
    })
}

fpage()

function imganimate(){

  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
      gsap.to(elem.querySelector(".elem h1") , {
        color:"#888",
        x:0
      })
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect();
      diffrot = rotate - dets.clientX ;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
      gsap.to(elem.querySelector(".elem h1") , {
        color:"#333",
        x:50
      })
    });
  });
}

imganimate()

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .5,
  width:5,
  height:5
});