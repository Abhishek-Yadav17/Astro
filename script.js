gsap.registerPlugin(ScrollTrigger);

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

gsap.to(".cursor img", {
  rotate: 360,
  duration: 6,
  ease: "none",
  repeat: -1
});

function animateNav() {
  gsap.from(".logo, .navbar ul li, .social-icons a", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.08
  });
}

function animateHero() {
  gsap.from(".hero-content h1, .hero-content p, .hero-buttons .btn", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 85%",
    }
  });

  gsap.fromTo(
    ".hero-zodiac img",
    { scale: 0.85, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%",
      },
      onComplete() {
        gsap.to(".hero-zodiac img", {
          rotate: 360,
          duration: 25,
          repeat: -1,
          ease: "none"
        });
      }
    }
  );
}

function animateAboutQuote() {

  gsap.from(".quote-top-icon img", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-quote-section",
      start: "top 50%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".quote-text", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-quote-section",
      start: "top 50%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".inline-icon", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".about-quote-section",
      start: "top 50%",
      toggleActions: "play none none none"
    }
  });

}

function animateServices() {
  gsap.from(".services-title, .services-subtitle", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.08,
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 85%",
    }
  });

  const cards = gsap.utils.toArray(".service-card");

  gsap.from(cards, {
    x: () => gsap.utils.random(-250, 250),
    y: () => gsap.utils.random(-150, 150),
    scale: 0.3,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".services-cards",
      start: "top 82%",
      toggleActions: "play none none none"
    }
  });
}

function animateVideoSection() {

  gsap.from(".video-title, .video-subtitle", {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".video-section",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".video-main", {
    x: -150,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".video-section",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".video-item", {
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.18,
    scrollTrigger: {
      trigger: ".video-section",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

}

function animateTestimonialsSection() {

  gsap.from(".testimonials-title, .testimonials-subtitle", {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".testimonials-section",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".testimonial-card", {
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".testimonials-section",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".testimonials-divider img", {
    scale: 0.4,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.6)",
    scrollTrigger: {
      trigger: ".testimonials-section",
      start: "top 75%",
      toggleActions: "play none none none"
    }
  });

}

function animateFooter() {
  gsap.from(".footer-container .footer-col, .footer-center", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".footer-bottom", {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
}


function initAnimations() {
  animateNav();
  animateHero();
  animateAboutQuote();
  animateServices();
  animateVideoSection();
  animateTestimonialsSection();
  animateFooter();
}

window.addEventListener("load", initAnimations);

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});