import React, { useEffect, useRef } from "react";
import {
  ContentWrapper,
  Header,
  Logo,
  LogoSubTitle,
  LogoTitle,
  Navigation,
  NavigationItem,
  SubTitle,
  Title,
  Wrapper,
} from "./FirstSlide.style";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { navigationList } from "../../../../data/homePageData/HomePageData";

gsap.registerPlugin(ScrollTrigger);

const FirstSlide = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      itemRefs.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 2,
      }
    );
    gsap.fromTo(
      ".title",
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".subTitle",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
      }
    );

    ScrollTrigger.create({
      trigger: ".titlesWrapper",
      start: "50% 20%",
      end: "bottom top",
      onEnter: () => gsap.to(".titlesWrapper", { y: 200, duration: 0.6 }),
      onLeaveBack: () => gsap.to(".titlesWrapper", { y: 0, duration: 0.6 }),
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    if (itemRefs.current[index]) {
      gsap.to(itemRefs.current[index], { scale: 1.1, duration: 0.3 });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (itemRefs.current[index]) {
      gsap.to(itemRefs.current[index], { scale: 1, duration: 0.3 });
    }
  };

  return (
    <Wrapper>
      <Header>
        <Logo>
          <LogoTitle>MK</LogoTitle>
          <LogoSubTitle>Studio</LogoSubTitle>
        </Logo>
        <Navigation>
          {navigationList.map((item: string, index: number) => (
            <NavigationItem
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {item}
            </NavigationItem>
          ))}
        </Navigation>
      </Header>
      <ContentWrapper className="titlesWrapper">
        <Title className="title">Welcome</Title>
        <SubTitle className="subTitle">
          Product Designer & Web Developer
        </SubTitle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FirstSlide;
