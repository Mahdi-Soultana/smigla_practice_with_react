import React, { useState, useEffect } from "react";
import {
  animationControls,
  motion,
  useAnimation,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styled from "styled-components";

function Card2({ children, shaffleCard }) {
  const controlAnim = useAnimation();
  const x = useMotionValue(0);
  useEffect(() => {
    controlAnim.start({
      x: 0,
    });
  }, []);
  const background = useTransform(
    x,
    [-230, -100, 100, 230],
    ["#ec72d8", "#0035B2", "#0035B2", "#01DEF6"],
  );
  const opacity = useTransform(x, [-230, -50, 50, 230], [0, 1, 1, 1]);
  const rotate = useTransform(
    x,
    [-230, -55, 55, 230],
    ["-60deg", "0deg", "0deg", "60deg"],
  );

  return (
    <CardStyle
      drag="x"
      dragConstraints={{ left: -260, right: 260 }}
      onDragEnd={(e, info) => {
        const isEndValue = Math.abs(x.get()) > 150;

        if (isEndValue) {
          controlAnim.start({
            x: x.get() < 0 ? -260 : 260,
            transition: {
              duration: 1,
              onComplete: () => {
                if (x.get() > 0) {
                  shaffleCard("inc");
                } else {
                  shaffleCard("dec");
                }
              },
            },
          });
        } else {
          controlAnim.start({
            x: 0,
          });
        }
      }}
      style={{
        x,
        background,
        opacity,
        rotate,
        originX: 1,
        originY: 1,
      }}
      initial={{ x: -250 }}
      animate={controlAnim}
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

  position: absolute;
  top: :50%;
  left: :50%;
`;
