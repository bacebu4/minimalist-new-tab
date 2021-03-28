import styled from "styled-components";

type BaseButtonProps = {
  isSolid?: boolean;
};

export const BaseButton = styled.button<BaseButtonProps>`
  color: ${(props) => (props.isSolid ? "#fff" : "#6A63DD")};
  background-color: ${(props) => (props.isSolid ? "#6A63DD" : "#6A63DD1a")};
  flex: 1;
  padding: 12px 16px;
  border: 0;
  border-radius: 12px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
`;
