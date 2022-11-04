import {
  NavLink,
  NavLinks,
  Container,
  Logo,
  NavItems,
  Icon,
  MobileIcon,
} from "./styledNav";
const Nav = ({ toggle }) => {
  return (
    <Container>
      <NavLink
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Logo>
          <img
            src="images/centrix.jpg"
            alt="Datacentrix Logo"
            style={{ width: 250, height: 70 }}
          />{" "}
        </Logo>
      </NavLink>{" "}
      <Icon>
        <MobileIcon onClick={toggle} />{" "}
      </Icon>{" "}
      <NavItems>
        <NavLinks>
          <li>
            <NavLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Who We Are{" "}
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              What We Do{" "}
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              activeClass="active"
              to="partner"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Partners{" "}
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Product Portifolio{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacts{" "}
            </NavLink>{" "}
          </li>{" "}
        </NavLinks>{" "}
      </NavItems>
    </Container>
  );
};

export default Nav;
