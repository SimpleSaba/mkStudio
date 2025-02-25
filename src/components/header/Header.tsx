import React from "react";
import { Logo, LogoSubTitle, LogoTitle, Wrapper } from "./Header.style";

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <LogoTitle>MK</LogoTitle>
        <LogoSubTitle>Studio</LogoSubTitle>
      </Logo>
    </Wrapper>
  );
};

export default Header;
