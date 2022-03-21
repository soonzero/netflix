export default function membership(currentState, action) {
  if (currentState === undefined) {
    return {
      membership: undefined,
    };
  }

  const newState = { ...currentState };
  if (action.type === "SET") {
    newState.membership = action.data.membership;
  }
  return newState;
}
