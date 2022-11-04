import styled from "styled-components";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const Container = styled.aside`
  z-index: 9999;
  position: fixed;
  display: block;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: auto;
  padding-bottom: 2em;
  width: 100%;
  transition: 0.3 ease-in-out;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const Icon = styled.div`
  background: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: right;
  transform: translate(-5%, 50%);
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
  height: 1.8em;
  width: 1.8em;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.ul`
  display: grid;
  row-gap: 0.5em;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  list-style: none;
  font-size: 1.5rem;
  li {
    color: #000;
    cursor: pointer;
  }
`;

export const NavLink = styled(Link).attrs(() => ({
  activeClass: "active",
}))`
  &.active {
    border-bottom: 3px solid #fefefe;
  }
`;
