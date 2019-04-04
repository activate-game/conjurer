import gql from "graphql-tag";

export const CREATE_ITEM = gql`
  mutation CreateItem($input: ItemInput!) {
    createItem(input: $input) {
      id
      name
      type
      spriteIndex
      effects {
        property
        modifier
      }
      dungeon {
        id
      }
    }
  }
`;
