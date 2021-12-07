import React, { useState } from "react";
import Card from "./Card/Card";
import styled from "styled-components";
import Webrtc from "./svg/Webrtc";
import Card2 from "./Card2/Card2";
import { FiFramer } from "react-icons/fi";
import { BsFillBootstrapFill, BsSafeFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
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
const jsxCard = [
  <FiFramer color="white" size="14rem" />,
  <BsFillBootstrapFill color="white" size="14rem" />,
  <BsSafeFill color="white" size="14rem" />,
];
function MotionCard() {
  const [cards, setCards] = useState(() => jsxCard);

  const [index, setIndex] = useState(0);

  function shaffleCard(type) {
    console.log(type);

    setIndex((prevS) => {
      if (prevS >= cards.length - 1) {
        return 0;
      } else if (prevS <= 0 && type !== "inc") {
        return cards.length - 1;
      }

      return type === "inc" ? prevS + 1 : prevS - 1;
    });
  }

  return (
    <Container>
      {
        cards.map((card, i) => (
          <Card2 children={card} key={i} shaffleCard={shaffleCard} />
        ))[index]
      }
    </Container>
  );
}

export default MotionCard;
