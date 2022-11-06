import {
  Container,
  MissionHead,
  AboutTitle,
  AboutHead,
  AboutDesc,
  MissionDesc,
  TitleContainer,
} from "./styledAbout";

const paraAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
  duration: { duration: 0.5 },
};

const cardsAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <Container id="about">
      <TitleContainer style={{ backgroundColor: "white" }}>
        <AboutTitle> WHO WE ARE </AboutTitle>{" "}
      </TitleContainer>

      <TitleContainer>
        <AboutHead>
          Your Partner <br />
          for Information Technology Solutions{" "}
        </AboutHead>{" "}
      </TitleContainer>

      <TitleContainer>
        <AboutDesc>
          {" "}
          Datacentrix, is an IT System Integrator with a strategic focus on
          delivering innovative technology solutions and services to business
          across East Africa to reimagine their future in an ever - changing
          technological business environment.{" "}
        </AboutDesc>
      </TitleContainer>

      <TitleContainer>
        <MissionHead> Our Mission: </MissionHead>
      </TitleContainer>

      <TitleContainer>
        <MissionDesc>
          {" "}
          <b>
            {" "}
            "To collaborate with our customers and provide solutions which are
            easy to implement, manage, maintain and at the same time cost
            effective"
          </b>{" "}
          We will achieve this by meeting our customer business requirements
          through continuous innovation, best - of - breed products and
          excellent services support thus adding value and contributing to their
          success.{" "}
        </MissionDesc>{" "}
        <MissionDesc>
          {" "}
          Let `s help your business achieve its Goals and Technology needs. Our
          Expert Engineers solve Critical IT Challenges. What` s Yours ?{" "}
          <a href="#contact">
            {" "}
            <b>Contact us Today</b>
          </a>{" "}
        </MissionDesc>
      </TitleContainer>
    </Container>
  );
};

export default About;
