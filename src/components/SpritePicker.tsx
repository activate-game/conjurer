import * as React from "react";
import styled from "styled-components";
import SpriteOption from "./SpriteOption";

export interface Sprite {
  image: string;
  index: number;
}

interface SpritePickerProps {
  sprites: Sprite[];
  handleClick(arg0: number): void;
}

function SpritePicker(props: SpritePickerProps) {
  const [selected, setSelected] = React.useState(-1);

  return (
    <StyledDiv>
      {props.sprites.map((sprite, key) => (
        <SpriteOption
          key={key}
          image={sprite.image}
          index={sprite.index}
          selected={selected === key}
          handleClick={() => {
            setSelected(key);
            props.handleClick(sprite.index);
          }}
        />
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 16px;
`;

export default SpritePicker;
