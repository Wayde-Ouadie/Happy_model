const gsapWorkflowButton = (tl, q, gsap) => {
      gsap.set(q(".gsap_menu_humberger_text .openGsap"), {
        opacity: 0,
        display: "none",
      });
    
      // task: gsap, text menu button
      tl.to(
        q(".gsap_menu_humberger_text .closeGsap"),
        {
          keyframes: {
            "0%": { y: 0, x: 0, opacity: 1, display: "block" },
            "100%": { y: -10, x: 0, opacity: 0, display: "none" },
            easeEach: "expo.inOut",
          },
          duration: 0.35,
        },
        "0"
      ).to(
        q(".gsap_menu_humberger_text .openGsap"),
        {
          keyframes: {
            "0%": { y: 10, x: 0, opacity: 0, display: "none" },
            "100%": { y: 0, x: 1, opacity: 1, display: "block" },
            easeEach: "expo.inOut",
          },
          duration: 0.35,
        },
        ">"
      )
    };

    
    export { gsapWorkflowButton };