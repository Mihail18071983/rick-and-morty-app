import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import { ColorRing } from "react-loader-spinner";

const MainPage = lazy(() => import("./Pages/MainPage"));
const CharacterPage = lazy(() => import("./Pages/CharacterPage"));

export default function AppRoutes() {
  return (
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="40"
            width="40"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        }
      >
         <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
        </Route>
      </Routes>
      </Suspense>
  );
}
