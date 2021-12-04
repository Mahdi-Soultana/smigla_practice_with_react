import React from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styled from "styled-components";

function Card({ children }) {
  const animControl = useAnimation();
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-150, -80, 0, 80, 150],
    ["#ff008c", "#7700ff", "#7700ff", "#7700ff", "rgb(230, 255, 0)"],
  );
  const rotate = useTransform(
    x,
    [-150, -50, 0, 50, 150],
    ["-50deg", "0deg", "0deg", "0deg", "50deg"],
  );
  const opacity = useTransform(x, [-150, -70, 0, 70, 150], [0, 1, 1, 1, 0]);

  return (
    <CardStyle
      drag="x"
      dragConstraints={{ left: -20, right: 20 }}
      style={{ background, x, rotate, opacity }}
      onDragEnd={(e, info) => {
        if (Math.abs(x.get()) < 100) {
          animControl.start({ x: 0 });
        } else {
          animControl.start({
            x: x.get() < 0 ? -220 : 220,
            transition: {
              duration: 0.6,
            },
          });
        }
      }}
      animate={animControl}
    >
      {children}
    </CardStyle>
  );
}

export default Card;
export const CardStyle = styled(motion.div)`
  background: #f8f8f8;
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
