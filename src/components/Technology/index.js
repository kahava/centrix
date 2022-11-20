import {
  Container,
  TechImgContainer,
  TechHead,
  TechDesc,
  TechImg,
  Wrapper1,
  TechScroller,
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
        <TechScroller>
          <TechImg>
            <img src="images/cisco.jpg" alt="Cisco Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/fort.jpg" alt="Fortinet Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/del.jpg" alt="Del Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/vm.jpg" alt="VMware Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/sof.jpg" alt="Sophos Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/micro.jpg" alt="Microsoft Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/veem.jpg" alt="Veeam Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/veri.jpg" alt="Veritus Logo" />{" "}
          </TechImg>
          <TechImg>
            <img src="images/cisco.jpg" alt="Cisco Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/fort.jpg" alt="Fortinet Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/del.jpg" alt="Del Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/vm.jpg" alt="VMware Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/sof.jpg" alt="Sophos Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/micro.jpg" alt="Microsoft Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/veem.jpg" alt="Veeam Logo" />{" "}
          </TechImg>

          <TechImg>
            <img src="images/veri.jpg" alt="Veritus Logo" />{" "}
          </TechImg>
        </TechScroller>
      </TechImgContainer>
    </Container>
  );
};

export default Technology;
