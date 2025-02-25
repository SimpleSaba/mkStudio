import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "./AppLayout.style";

const AppLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
        {/* <Content> */}
        <Outlet />
        {/* </Content> */}
      </Container>
    </>
  );
};

export default AppLayout;
