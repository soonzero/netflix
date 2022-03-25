export default function selected(currentState, action) {
  if (currentState === undefined) {
    return { selected: false };
  }

  const newState = { ...currentState };

  if (action.type == "SELECTED") {
    newState.selected = true;
  }

  return newState;
}
