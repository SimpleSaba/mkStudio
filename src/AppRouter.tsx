import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/appLayout/AppLayout";
import { PageUrl } from "./constant/router";
import HomePage from "./components/pages/homePage/HomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PageUrl.Root.path} element={<AppLayout />}>
          <Route index element={<Navigate replace to={PageUrl.Home.path} />} />
          <Route path={PageUrl.Home.path} element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
