export default function content(currentState, action) {
  if (currentState === undefined) {
    return { contentIdx: undefined };
  }

  const newState = { ...currentState };

  if (action.type == "SELECT_CONTENT") {
    newState.contentIdx = action.data;
  } else if (action.type == "UNSELECT_CONTENT") {
    newState.contentIdx = undefined;
  }

  return newState;
}
