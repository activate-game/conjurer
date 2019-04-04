import * as React from "react";
import styled from "styled-components";
import EffectOption from "./EffectOption";

export interface Effect {
  property: string;
  modifier: number;
}

interface EffectPickerProps {
  effects: Effect[];
  handleClick(arg0: Effect): void;
}

function EffectPicker(props: EffectPickerProps) {
  const [selected, setSelected] = React.useState(props.effects[0]);

  return (
    <StyledDiv>
      {props.effects.map((effect, key) => (
        <EffectOption
          key={key}
          property={effect.property}
          modifier={effect.modifier}
          selected={selected === effect}
          handleClick={() => {
            setSelected(effect);
            props.handleClick(effect);
          }}
        />
      ))}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin-bottom: 16px;
`;

export default EffectPicker;
