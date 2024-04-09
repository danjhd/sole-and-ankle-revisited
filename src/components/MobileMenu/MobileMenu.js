/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <StyledButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </StyledButton>
        <Spacer />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Spacer>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Spacer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-gray-background);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background-color: var(--color-white);
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${18 / 16}rem;
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: none;
  font-size: ${14 / 16}rem;
`;

const StyledButton = styled(UnstyledButton)`
  position: fixed;
  top: 10px;
  right: 0px;
  padding: 16px;
`;

export default MobileMenu;
