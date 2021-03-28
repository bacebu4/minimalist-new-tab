import React from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  font-size: 8px;
  width: 6em;
  height: 3.4em;

  ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3.4em;

  &::before {
    position: absolute;
    content: "";
    height: 2.6em;
    width: 2.6em;
    left: 0.4em;
    bottom: 0.4em;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${Input}:checked + & {
    background-color: #4caf50;
  }

  ${Input}:checked + &::before {
    -webkit-transform: translateX(2.6em);
    -ms-transform: translateX(2.6em);
    transform: translateX(2.6em);
  }

  ${Input}:focus + & {
    box-shadow: 0 0 0.1em #2196f3;
  }

  ${Input}:disabled + & {
    pointer-events: none;
    background: #e6e6e6;
  }
`;

type SwitchProps = {
  value?: string | number | readonly string[] | undefined;
  checked?: boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name?: string | undefined;
  id?: string | undefined;
  title?: string | undefined;
};

export const Switch: React.FC<SwitchProps> = ({
  value,
  checked,
  onChange,
  name,
  id,
  title,
}) => {
  return (
    <Label htmlFor={id} title={title}>
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Slider />
    </Label>
  );
};
