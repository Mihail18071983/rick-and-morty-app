import { ReactNode } from "react";
import Container from "@mui/material/Container";

export default function StyledContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <Container >
        {children}
      </Container>
    </>
  );
}
