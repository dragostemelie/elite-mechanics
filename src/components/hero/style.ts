import { colors } from "components/ui/typography";
import styled, { keyframes } from "styled-components";

// ### ANIMATIONS
const fastForward = keyframes`
  from {
    opacity: 0.5;
  } 
  to {
    opacity: 1;
  }
`;

const wiggle = keyframes` 
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
`;

const float = keyframes`
	0% {
		
		transform: translatey(0px);
	}
	50% {
		
		transform: translatey(-10px);
	}
	100% {
		
		transform: translatey(0px);
	}
`;

// ### STYLE

export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 470px;
  background-color: ${colors.grey};
  z-index: 1;

  #cog {
    transition: 6s;
    transform-origin: 560px 391px;
  }
  &:hover {
    #cog {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 960px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Content = styled.div`
  height: 100%;
  position: relative;
  z-index: 5;
  width: 55%;
  max-width: 660px;
  display: flex;
  flex-direction: column;
  & #bg-shape {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 960px) {
    width: 100%;
    max-width: unset;
    height: 470px;
  }
`;

export const TitleWrapper = styled.div`
  width: fit-content;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  background-color: #4d4d4d82;
  z-index: 1;
  animation: ${float} 6s ease-in-out infinite;
  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const PhoneWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px 36px 200px;
  & #fast-forward {
    position: absolute;
    bottom: 16px;
    left: -12px;
    & #fast-forward-1,
    & #fast-forward-2,
    & #fast-forward-3 {
      animation: ${fastForward} 1s ease-in-out alternate infinite;
    }
    & #fast-forward-2 {
      animation-delay: 0.5s;
    }
    & #fast-forward-3 {
      animation-delay: 1s;
    }
  }
  & #phone {
    margin: 0 auto;
    &:hover {
      animation: ${wiggle} 2s linear;
    }
  }
  @media (max-width: 960px) {
    padding: 0 0 48px 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 45%;
  max-width: 540px;
  position: relative;
  & img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    object-fit: cover;
    min-width: 130%;
    @media (max-width: 960px) {
      height: initial;
    }
  }
  & #forward {
    cursor: crosshair;
    position: absolute;
    bottom: 0;
    left: 32px;
    overflow: visible;
    z-index: 2;
    & path {
      transition: 0.25s ease-in-out;
      &:hover {
        transform: translate(-45px, -30px) scale(1.5);
      }
    }
  }
  & #dots {
    position: absolute;
    bottom: 32px;
    right: 32px;
    z-index: 1;
    & circle {
      transition: opacity 1.5s ease-in-out;
    }
  }
  @media (max-width: 960px) {
    width: 100%;
    max-width: unset;
    z-index: 5;
    & img {
      position: relative;
      min-width: unset;
    }
  }
`;
