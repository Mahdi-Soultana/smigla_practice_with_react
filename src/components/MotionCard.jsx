import React from "react";
import Card from "./Card/Card";
import styled from "styled-components";
import Webrtc from "./svg/Webrtc";
import Card2 from "./Card2/Card2";
import { FiFramer } from "react-icons/fi";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: #333333;
  position: relative;
`;
function MotionCard() {
  return (
    <Container>
      <Card2>
        <FiFramer color="white" size="14rem" />
      </Card2>
    </Container>
  );
}

export default MotionCard;
