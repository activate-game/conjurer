import * as React from "react";
import { MutationFn, OperationVariables } from "react-apollo";
import Button from "./Button";
import TextInput from "./TextInput";
import SpritePicker, { Sprite } from "./SpritePicker";
import EffectPicker, { Effect } from "./EffectPicker";

interface FormProps {
  dungeonId: string;
  type: string;
  sprites: Sprite[];
  effects: Effect[];
  createItem: MutationFn<any, OperationVariables>;
}

function ItemForm(props: FormProps) {
  const { dungeonId, type, sprites, effects, createItem } = props;
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [spriteIndex, setSpriteIndex] = React.useState(-1);
  const [effect, setEffect] = React.useState({ property: "", modifier: 0 });

  React.useEffect(() => {});

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createItem({
          variables: {
            input: {
              name,
              type,
              description,
              spriteIndex,
              effects: [effect],
              dungeonId,
            },
          },
        });
        location.reload();
      }}
    >
      <SpritePicker sprites={sprites} handleClick={setSpriteIndex} />
      <TextInput title="Name" value={name} handleChange={setName} />
      <TextInput
        title="Description"
        value={description}
        multiline={true}
        handleChange={setDescription}
      />
      <EffectPicker effects={effects} handleClick={setEffect} />
      <Button
        label="Submit"
        disabled={name === "" || description === "" || spriteIndex === -1}
      />
    </form>
  );
}

export default ItemForm;
