import {
  Button1,
  Button2,
  ButtonContainer,
  Container,
  HomeDesc,
  HomeHead,
  HomePara,
  Icon,
  ArrowContainer,
  NavLink,
} from "./styledHome";

const ButtonAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
      delay: 0.5,
    },
  },
};

const Home = () => {
  return (
    <Container id="home">
      <HomeHead>
        At datacentrix. <br /> we consult, integrate, build and help deploy IT
        Solutions & Services.
      </HomeHead>{" "}
      <ButtonContainer>
        <Button1
          initial="offscreen"
          animate="onscreen"
          variants={ButtonAnimate}
        >
          <NavLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            FIND US{" "}
          </NavLink>{" "}
        </Button1>
      </ButtonContainer>{" "}
    </Container>
  );
};

export default Home;
