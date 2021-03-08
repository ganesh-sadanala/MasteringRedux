export const ADD_CHARACTER = "DD_CHARACTER";

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id,
  };
  return action;
}
