import styled from "styled-components";
import { PURPLE } from "../utils/colors";

type BaseButtonProps = {
  isSolid?: boolean;
};

export const BaseButton = styled.button<BaseButtonProps>`
  color: ${(props) => (props.isSolid ? "#fff" : PURPLE)};
  background-color: ${(props) => (props.isSolid ? PURPLE : `${PURPLE}1a`)};
  flex: 1;
  padding: 12px 16px;
  border: 0;
  border-radius: 12px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
`;
