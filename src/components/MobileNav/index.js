import {
  CloseIcon,
  Container,
  Icon,
  NavLink,
  NavLinks,
  NavMenu,
} from "./styledMobileNav";

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <NavMenu>
        <NavLinks>
          <li>
            <NavLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggle}
            >
              Who We Are
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggle}
            >
              What We Do
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClass="active"
              to="partner"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggle}
            >
              Partners
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggle}
            >
              Product Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggle}
            >
              Contacts
            </NavLink>
          </li>
        </NavLinks>
      </NavMenu>
    </Container>
  );
};

export default MobileNav;
