import React from "react";
import { Wrapper } from "./HomePage.style";
import FirstSlide from "./firstSlide/FirstSlide";
import MainSection from "./mainSection/MainSection";

const HomePage = () => {
  return (
    <Wrapper>
      <FirstSlide />
      <MainSection />
    </Wrapper>
  );
};

export default HomePage;
