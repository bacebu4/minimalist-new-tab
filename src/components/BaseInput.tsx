import styled from "styled-components";
import { GRAY } from "../utils/colors";

export const BaseInput = styled.input`
  background-color: ${GRAY}1A;
  flex: 1;
  font-family: inherit;
  font-size: 1rem;
  border: 0;
  padding: 12px 16px;
  border-radius: 12px;
  outline: 0;

  ::placeholder {
    color: ${GRAY};
    opacity: 1;
  }
`;
