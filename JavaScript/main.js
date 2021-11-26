const tl = gsap.timeline();

tl.fromTo(".parrots2", { duration: 1, right: -200, opacity: 0 }, { right: 33, opacity: 1 })
    .to(".parrots2", { duration: 0.4, right: 3 })
    .set(".text", { autoAlpha: 1 })
    .fromTo(".text", { duration: 0.5, opacity: 0, top: 10 }, { opacity: 1, top: 175, ease: Bounce.easeOut })
    .set(".contFrame", { autoAlpha: 1 })
    .from(".contFrame", { opacity: 0, scaleX: 1.5, scaleY: 1.5, ease: Bounce.easeOut })
    .fromTo(".contFrame", 2, { scaleX: 1.2, scaleY: 1.3 }, { scaleX: 1, scaleY: 1 })
    .to(".contFrame", { duration: .5, delay: 0.4, opacity: 0 })
    .set(".redButton", { autoAlpha: 1 })
    .from(".redButton", { duration: 0.5, opacity: 0, bottom: -40 })
    .set(".list", { autoAlpha: 1 })
    .fromTo(".list", 5, { opacity: 0, top: 10 }, { opacity: 1, top: 60, ease: "elastic" })