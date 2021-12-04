import React, { useState } from "react";
import {
  motion,
  useAnimation,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styled from "styled-components";

function Card2({ children }) {
  const x = useMotionValue(0);

  const background = useTransform(
    x,
    [0, 60, 230, 420],
    ["#ec72d8", "#0035B2", "#0035B2", "#01DEF6"],
  );

  return (
    <CardStyle
      animate={{
        x: 420,
        transition: {
          duration: 6,
          type: "tween",
          stiffness: 90,
          repeat: Infinity,
          repeatType: "mirror",
        },
      }}
      style={{
        x,
        background,
      }}
    >
      {children}
    </CardStyle>
  );
}

export default Card2;
export const CardStyle = styled(motion.div)`
  background: linear-gradient(65deg,${(p) => p.c1},#0035B2,${(p) => p.c2});
  width: 235px;
  border-radius: 1em;
  box-shadow: 0 2px 5px #333;
  height: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  cursor: grab;
  transform-origin: 50% 100% 0px !important;
  position: absolute;
  top: :50%;
  left: :50%;
`;
