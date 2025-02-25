import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  padding: 40px 60px;
  position: relative;
  background: radial-gradient(
    circle,
    rgba(70, 53, 16, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  color: white;
`;
export const LogoTitle = styled.h1`
  font-size: 60px;
  font-family: "Updock", cursive;
  font-weight: 500;
  font-style: normal;
`;
export const LogoSubTitle = styled.h2`
  font-family: "Pacifico", cursive;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-top: 25px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 350px;
  /* transform: none !important; */
`;
export const Title = styled.h2`
  font-size: 96px;
  color: white;
  font-family: "DM Sans", sans-serif;
  width: fit-content;
`;
export const SubTitle = styled.h4`
  font-size: 40px;
  color: white;
  font-family: "DM Sans", sans-serif;
  width: fit-content;
  margin-top: 30px;
`;

export const GreenHLine = styled.div`
  position: absolute;
  width: 300px;
  height: 2px;
  background-color: #cce2b0;
  top: 20px;
  left: 20px;
`;
export const GreenVLine = styled.div`
  position: absolute;
  width: 2px;
  height: 100px;
  background-color: #cce2b0;
  top: 0;
  left: 30px;
`;
export const PurpleHLine = styled.div`
  position: absolute;
  width: 300px;
  height: 2px;
  background-color: #cdafeb;
  top: 30px;
  left: 40px;
`;
export const PurpleVLine = styled.div`
  position: absolute;
  width: 2px;
  height: 100px;
  background-color: #cdafeb;
  top: 10px;
  left: 50px;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const NavigationItem = styled.p`
  cursor: pointer;
  font-family: "DM Sans", serif;
  font-size: 16px;
  color: white;
`;
