import {
  Container,
  PortfolioHead,
  PortContainer,
  PortImg1,
  PortDesc1,
  PortImg2,
  PortDesc2,
  PortImg3,
  PortDesc3,
  VirtualContainer,
  VirtualImg,
  Virtualhead,
  HeadContainer,
  DescriptionContainer,
} from "./styledAbout";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <HeadContainer>
        <PortfolioHead>
          {" "}
          ICT Products Portfolio.We Supply, Install & Maintain.{" "}
        </PortfolioHead>
      </HeadContainer>

      <PortContainer>
        <PortImg1>
          <img src="images/servers.jpg" />
          <DescriptionContainer>
            <PortDesc1>Servers & Storage </PortDesc1>{" "}
          </DescriptionContainer>
        </PortImg1>

        <PortImg1>
          <img src="images/printers.JPG" />
          <DescriptionContainer>
            <PortDesc1> Printers & Photocopiers </PortDesc1>{" "}
          </DescriptionContainer>
        </PortImg1>

        <PortImg1>
          <img src="images/laptop.JPG" />
          <DescriptionContainer>
            <PortDesc1> Laptops, PCs & Monitor </PortDesc1>{" "}
          </DescriptionContainer>
        </PortImg1>

        <PortImg2>
          <img src="images/switch3.JPG" />
          <DescriptionContainer>
            <PortDesc2>
              {" "}
              Networking Switches | Routers | Firewalls | Wi - Fi{" "}
            </PortDesc2>{" "}
          </DescriptionContainer>
        </PortImg2>

        <PortImg1>
          <img src="images/phone.JPG" />
          <DescriptionContainer>
            <PortDesc2>
              {" "}
              Collaboration, Contact Center & Unified Communications.{" "}
            </PortDesc2>{" "}
          </DescriptionContainer>
        </PortImg1>

        <PortImg1>
          <img src="images/cabling.PJG" />
          <DescriptionContainer>
            <PortDesc3>
              {" "}
              Structured Cabling: Cat6A, Cat6 & Optic Fiber{" "}
            </PortDesc3>{" "}
          </DescriptionContainer>
        </PortImg1>
      </PortContainer>
      <VirtualContainer>
        <VirtualImg>
          <img src="images/office.jpg" />
          <img src="images/cannon.jpg" />
        </VirtualImg>
        <Virtualhead>Software License & Virtualization</Virtualhead>
      </VirtualContainer>
    </Container>
  );
};

export default Portfolio;
