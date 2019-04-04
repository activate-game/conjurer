import * as React from "react";
import styled from "styled-components";
import { Effect } from "./EffectPicker";
import { assetUrl } from "../utils/assets";

const radioButton = assetUrl("radio-button.png");
const radioButtonSelected = assetUrl("radio-button-selected.png");

interface EffectOptionProps {
  property: string;
  modifier: number;
  selected: boolean;
  handleClick(arg0: Effect): void;
}

function EffectOption(props: EffectOptionProps) {
  const { property, modifier, selected, handleClick } = props;

  return (
    <Wrapper onClick={() => handleClick({ property, modifier })}>
      <StyledImage src={selected ? radioButtonSelected : radioButton} />
      <Text>{effectLabel(property, modifier)}</Text>
    </Wrapper>
  );
}

function effectLabel(property: string, modifier: number): string {
  return property + ` ${modifier >= 0 ? "+" : ""}` + modifier;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 18px;
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export default EffectOption;
