const gsap = (tl, q) => {
    tl.to(
      q(".menuButton_gsap_container"),
      {
        marginLeft: "auto",
        marginRight: "auto",
      },
      0
    )
      .fromTo(
        q(".menuButton_gsap_row:nth-child(1)"),
        {
          width: "100%",
        },
        {
          transformOrigin: "bottom right",
          rotate: "45deg",
          y: "1.08rem",
          x: "-1.8px",
          width: "100%",
          duration: 0.6,
          ease: "power4.inOut",
        },
        "<"
      )
      .fromTo(
        q(".menuButton_gsap_row:nth-child(3)"),
        {
          width: "83.333333%",
        },
        {
          width: "100%",
          duration: 0.6,
          ease: "power4.inOut",
        },
        "<"
      )
      .to(
        q(".menuButton_gsap_row:nth-child(3)"),
        {
          transformOrigin: "bottom left",
          rotate: "-45deg",
          y: "-50%",
          x: "10px",
          duration: 0.6,
          ease: "power4.inOut",
        },
        "<"
      );
  };

  export default gsap