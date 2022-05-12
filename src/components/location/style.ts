import styled from "styled-components";

import { colors } from "components/ui/typography";

export const Container = styled.section`
  background-color: ${colors.shade};
  padding: 64px 20px;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
  max-width: 600px;
  width: 100%;
  & h2 {
    font-size: 32px;
  }
  @media (max-width: 960px) {
    max-width: unset;
  }
`;

export const Map = styled.div`
  max-width: 520px;
  width: 100%;
  margin-left: auto;
`;

export const Line = styled.div`
  background-color: ${colors.red};
  height: 3px;
  max-width: 300px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  margin-right: auto;
  max-width: 520px;
  width: 100%;
  margin-top: 24px;
  & iframe {
    max-width: 520px;
    width: 100%;
    height: 400px;
  }
  & .mapouter {
    position: relative;
    text-align: right;
    max-width: 520px;
    width: 100%;
    height: 400px;
  }
  & .gmap_canvas {
    overflow: hidden;
    background: none !important;
    max-width: 520px;
    width: 100%;
    height: 400px;
  }
`;

export const Title = styled.div`
  align-items: center;
  display: flex;
  gap: 6px;
  margin-top: 24px;
`;
