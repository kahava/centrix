import {
  Container,
  PortfolioHead,
  PortContainer,
  PortImg1,
  PortDesc1,
  PortImg2,
  PortDesc2,
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
          <img src="images/servers.jpg" alt="Servers" />
          <DescriptionContainer>
            <PortDesc1>Servers & Storage </PortDesc1>{" "}
          </DescriptionContainer>
        </PortImg1>

        <PortImg1>
          <img src="images/printers.JPG" alt="Printers" />
          <DescriptionContainer>
            <PortDesc1> Printers & Photocopiers </PortDesc1>{" "}
          </DescriptionContainer>
        </PortImg1>

        <PortImg1>
          <img src="images/laptop.JPG" alt="laptops" />
          <DescriptionContainer>
            <PortDesc1> Laptops, PCs & Monitor </PortDesc1>{" "}
          </DescriptionContainer>
        </PortImg1>

        <PortImg2>
          <img src="images/switch3.JPG" alt="switches for networking" />
          <DescriptionContainer>
            <PortDesc2>
              {" "}
              Networking Switches | Routers | Firewalls | Wi - Fi{" "}
            </PortDesc2>{" "}
          </DescriptionContainer>
        </PortImg2>

        <PortImg1>
          <img src="images/phone.JPG" alt="Desk phones" />
          <DescriptionContainer>
            <PortDesc2>
              {" "}
              Collaboration, Contact Center & Unified Communications.{" "}
            </PortDesc2>{" "}
          </DescriptionContainer>
        </PortImg1>

        <PortImg1>
          <img src="images/cabling.JPG" alt="Network Cables" />
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
          <img src="images/office.jpg" alt="Microsoft office licencing" />
          <img src="images/cannon.jpg" alt="Cannon licencing" />
        </VirtualImg>
        <Virtualhead>Software License & Virtualization</Virtualhead>
      </VirtualContainer>
    </Container>
  );
};

export default Portfolio;
