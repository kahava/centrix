import {
  Container,
  TechImgContainer,
  TechHead,
  TechDesc,
  TechImg,
  Wrapper1,
} from "./styledAbout";

const Technology = () => {
  return (
    <Container id="partner">
      <Wrapper1>
        <TechHead>
          {" "}
          OUR <br />
          TECHNOLOGY PARTNERS{" "}
        </TechHead>

        <TechDesc>
          {" "}
          When you work with us!You with these Industry Leaders and Innovators.{" "}
        </TechDesc>
      </Wrapper1>

      <TechImgContainer>
        <TechImg>
          <img src="images/cisco.jpg" alt="" />{" "}
        </TechImg>

        <TechImg>
          <img src="images/fort.jpg" alt="" />{" "}
        </TechImg>

        <TechImg>
          <img src="images/del.jpg" alt="" />{" "}
        </TechImg>

        <TechImg>
          <img src="images/vm.jpg" alt="" />{" "}
        </TechImg>

        <TechImg>
          <img src="images/sof.jpg" alt="" />{" "}
        </TechImg>

        <TechImg>
          <img src="images/micro.jpg" alt="" />{" "}
        </TechImg>

        <TechImg>
          <img src="images/veem.jpg" alt="" />{" "}
        </TechImg>

        <TechImg>
          <img src="images/veri.jpg" alt="" />{" "}
        </TechImg>
      </TechImgContainer>
    </Container>
  );
};

export default Technology;
