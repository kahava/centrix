import {
  Container,
  WorkTitle,
  WorkHead,
  WorkDesc,
  WorkHead2,
  WorkImgs,
  ImgContainer,
  IconImg,
  IconContainer,
  IconHead,
  IconDesc,
  Wrapper1,
  Cabling,
  Cyber,
  Phone,
  Power,
  NetworkE,
  Cloud,
} from "./styledAbout";

const Work = () => {
  return (
    <Container id="work">
      <Wrapper1 style={{ backgroundColor: "white" }}>
        <WorkTitle> WHAT WE DO </WorkTitle>
      </Wrapper1>
      <Wrapper1>
        <WorkHead>
          {" "}
          <b>SIMPLIFYING</b> ENTERPRISE IT.{" "}
        </WorkHead>
        <WorkDesc>
          {" "}
          Our Core focus is providing leading edge technology services and
          products to our clients, optimize their IT investments to achieve
          their goals.Make us your IT partner.We’ ll simplify your approach to
          today’ s changing IT demands while helping you get the most from
          tomorrow’ s innovations.{" "}
        </WorkDesc>{" "}
      </Wrapper1>
      <WorkHead2> Our Solutions & Services </WorkHead2>
      <WorkImgs>
        <ImgContainer>
          <IconImg>
            <NetworkE />
          </IconImg>{" "}
          <IconContainer>
            <IconHead> Enterprise Networking </IconHead>{" "}
            <IconDesc>
              {" "}
              Secure, Resilient Network Solutions.We offer a range of Solutions
              for your network, including;
            </IconDesc>
            <ul>
              <li>Switching, Routing and Optimization </li>
              <li>
                Next-Generation Firewalls & Intrusion Prevention Systems.{" "}
              </li>
              <li>Software Defined Networks (SDN)</li>
              <li>LAN & WAN Networks </li>
              <li>Wireless Networks</li>
            </ul>
          </IconContainer>
        </ImgContainer>

        <ImgContainer>
          <IconImg>
            <Cabling />
          </IconImg>{" "}
          <IconContainer>
            <IconHead> Structured Cabling & Optic Fiber</IconHead>{" "}
            <IconDesc>
              {" "}
              Effective Structured Cabling– Design, Consulting and Installation
              are essential to the strength of your data, Voice and Video
              Networks{" "}
            </IconDesc>{" "}
            <ul>
              <li>UTP and Fiber Optic Cabling</li>
              <li>Site Surveys</li>
              <li>Design and Engineering</li>
              <li>Structured Cabling Testing and Certification</li>
              <li>Data Center Cabling Build Outs</li>
            </ul>
          </IconContainer>
        </ImgContainer>

        <ImgContainer>
          <IconImg>
            <Cloud />
          </IconImg>{" "}
          <IconContainer>
            <IconHead> Cloud & Data Center </IconHead>{" "}
            <IconDesc> Operation simplicity and business agility. </IconDesc>{" "}
            <ul>
              <li>Assessment + Design </li>
              <li>Servers and Data Storage </li>
              <li>Data Protection + Backup</li>
              <li>Virtualization + Converged / Hyper Converged</li>
            </ul>
          </IconContainer>
        </ImgContainer>

        <ImgContainer>
          <IconImg>
            <Cyber />
          </IconImg>{" "}
          <IconContainer>
            <IconHead> Cyber Security </IconHead>{" "}
            <IconDesc>
              {" "}
              A simplified approach to managing cyber threats & vulnerabilities.{" "}
            </IconDesc>{" "}
          </IconContainer>
        </ImgContainer>

        <ImgContainer>
          <IconImg>
            <Phone />
          </IconImg>{" "}
          <IconContainer>
            <IconHead>
              {" "}
              Collaboration, Contact Center & Unified Communications.{" "}
            </IconHead>{" "}
            <IconDesc>
              {" "}
              Enabling people to work together more efficiently and
              strengthening engagement{" "}
            </IconDesc>{" "}
            <ul>
              <li>Unified Communications</li>
              <li>Contact Center</li>
              <li>Conferencing and End-points</li>
            </ul>
          </IconContainer>
        </ImgContainer>

        <ImgContainer>
          <IconImg>
            <Power />
          </IconImg>{" "}
          <IconContainer>
            <IconHead> Power Backup Systems and Batteries. </IconHead>{" "}
            <IconDesc>
              {" "}
              Use stored energy to power your infrastructure during an outage.{" "}
            </IconDesc>{" "}
          </IconContainer>
        </ImgContainer>
      </WorkImgs>{" "}
    </Container>
  );
};

export default Work;
