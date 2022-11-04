import styled from "styled-components";

function Thanks() {
  return (
    <ThanksContainer>
      <img
        src="/images/thank2.png"
        width={300}
        height={300}
        alt="thank you image"
      />
    </ThanksContainer>
  );
}

const ThanksContainer = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
`;

export default Thanks;
