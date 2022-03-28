export default function selected(currentState, action) {
  if (currentState === undefined) {
    return { selected: undefined };
  }

  const newState = { ...currentState };

  if (action.type == "SELECT_PROFILE") {
    newState.selected = action.data;
  } else if (action.type == "UNSELECT_PROFILE") {
    newState.selected = undefined;
  }

  return newState;
}
