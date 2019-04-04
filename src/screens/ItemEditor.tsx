import * as React from "react";
import { Mutation } from "react-apollo";
import Card from "../components/Card";
import ItemForm from "../components/ItemForm";
import { CREATE_ITEM } from "../graphql/mutations";
import sprites from "../utils/sprites";
import { generateEffects } from "../utils/effects";
import { randomFromArray } from "../utils/random";

import { RouteComponentProps } from "@reach/router";

interface ItemEditorProps extends RouteComponentProps {
  dungeonId?: string;
}

function ItemEditor({ dungeonId }: ItemEditorProps) {
  const [type, setType] = React.useState("");

  React.useEffect(() => setType(chooseType()));

  return type ? (
    <Mutation mutation={CREATE_ITEM}>
      {createItem => (
        <Card>
          <ItemForm
            dungeonId={dungeonId!}
            type={type}
            sprites={sprites[type]}
            effects={generateEffects()}
            createItem={createItem}
          />
        </Card>
      )}
    </Mutation>
  ) : null;
}

function chooseType(): string {
  const types = ["armor", "artifact", "weapon"];
  return randomFromArray<string>(types);
}

export default ItemEditor;
