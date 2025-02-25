import React, { useEffect } from "react";

import { ImageWrapper, Wrapper } from "./MainSection.style";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { homePageData } from "../../../../data/homePageData/HomePageData";

gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {
  useEffect(() => {
    gsap.to(".background-image", {
      backgroundPositionY: "50%", // Adjust to control the depth of movement
      ease: "none",
      scrollTrigger: {
        trigger: ".background-image",
        start: "top bottom", // Animation starts when the element's top hits the bottom of the viewport
        end: "bottom top", // Animation ends when the element's bottom hits the top of the viewport
        scrub: true, // Smooth scrubbing as you scroll
      },
    });
  }, []);
  return (
    <Wrapper>
      <ImageWrapper className="background-image"></ImageWrapper>
    </Wrapper>
  );
};

export default MainSection;
