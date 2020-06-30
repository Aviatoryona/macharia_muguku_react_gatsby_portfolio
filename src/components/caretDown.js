import React from "react";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

const CaretDownStl = styled.div`
  height: 6rem;
  cursor: pointer;
  display: flex;
`;
const BlinkAnimation = keyframes`
  from {
    color: transparent;
  }
  to {
    color: transparent;
    padding-top: 3rem;
  }
  50% {
    color: white;
  }
`;
const AnimateCaretDown = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  -webkit-animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  -moz-animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  -ms-animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  -o-animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  animation: ${BlinkAnimation} 1400ms ease-in-out infinite;
  outline: none;
`;
const GoingDown = styled(FontAwesomeIcon)`
  transform: scaleX(1.2);
  &:last-child {
    margin-top: -0.6rem;
  }
`;

export function CaretDown({ reference, scrollToPosition = () => {} }) {
  return (
    <CaretDownStl>
      <AnimateCaretDown
        // scroll to element
        onClick={() => scrollToPosition(reference)}
        role="button"
        tabIndex="0"
      >
        <GoingDown icon={faChevronDown} size="lg" />
        <GoingDown icon={faChevronDown} size="lg" />
      </AnimateCaretDown>
    </CaretDownStl>
  );
}
