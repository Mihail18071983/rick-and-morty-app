
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import StyledContainer from "../shared/StyledContainer";

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <main >
        <StyledContainer>
          <Hero/>
          <Outlet />
        </StyledContainer>
      </main>
      <Footer />
    </div>
  );
}
