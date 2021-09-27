import styled from "@emotion/styled";
import { exampleStyle } from "@monorepo/shared-components";

export const BoxWrapper = styled.div`
  background-color: yellow;
  border: 1px solid red;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  width: 350px;

  &:hover ${exampleStyle} {
    opacity: 1;
    visibility: visible;
  }
`;
