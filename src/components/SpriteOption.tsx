import * as React from "react";
import styled from "styled-components";

interface SpriteOptionProps {
  image: string;
  index: number;
  selected: boolean;
  handleClick(arg0: number): void;
}

function SpriteOption(props: SpriteOptionProps) {
  const { image, selected, index } = props;

  return (
    <StyledImage
      src={image}
      selected={selected}
      onClick={() => props.handleClick(index)}
    />
  );
}

const StyledImage = styled.img<{ selected: boolean }>`
  width: 48px;
  height: 48px;
  cursor: pointer;
  opacity: ${props => (props.selected ? 1 : 0.4)};
  transition: opacity 0.2s;

  :hover {
    opacity: ${props => (props.selected ? 1 : 0.7)};
  }
`;

export default SpriteOption;
