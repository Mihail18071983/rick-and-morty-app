import React from "react";
import Container from "../shared/StyledContainer";
import logo from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled"

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledLogo to="/">
          <StyledImg src={logo} alt="logo" />
        </StyledLogo>
      </Container>
    </StyledHeader>
  );
}

const StyledLogo = styled(Link)`
 margin-left:-80px;
 display: flex;
 align-items: center;
 justify-content: center;
 width:40px;
`

const StyledImg =styled.img`
    width:40px;
    height:40px;
`


const StyledHeader =styled.header`
    padding-top:10px;
    padding-bottom:10px;
`