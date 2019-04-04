import * as React from "react";
import styled from "styled-components";
import { assetUrl } from "../utils/assets";

const bgEnabled = assetUrl("button-scroll.png");
const bgDisabled = assetUrl("button-scroll-disabled.png");

interface ButtonProps {
  label: string;
  disabled: boolean;
  handleClick?(arg0: React.MouseEvent): void;
}

function Button(props: ButtonProps) {
  const { label, disabled, handleClick } = props;

  return (
    <StyledButton
      disabled={disabled}
      onClick={e => (handleClick ? handleClick(e) : null)}
    >
      {label}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ disabled: boolean }>`
  width: 96px;
  height: 48px;
  border: 0;
  background: center / cover no-repeat url("${props =>
    props.disabled ? bgDisabled : bgEnabled}");
  text-transform: uppercase;
  line-height: 52px;
  cursor: pointer;
`;

export default Button;
