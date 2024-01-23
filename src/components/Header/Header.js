import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import Spacer from "../Spacer";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <StyledSpacer />
      </MainHeader>
    </header>
  );
};

const StyledSpacer = styled.div`
  flex: 1;
  height: 10px;
  /* background: blue; */
`;

const StyledLogo = styled.div`
  /* background: slateblue; */
  flex: 1;
  display: flex;
`;

const MainHeader = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  height: 72px;
  display: flex;
  flex-direction: row;

  align-items: baseline;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;
  /* background: slategray; */
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
