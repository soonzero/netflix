export default function email(currentState, action) {
  if (currentState === undefined) {
    return {
      email: undefined,
    };
  }

  const newState = { ...currentState };
  if (action.type === "SET_EMAIL") {
    newState.email = action.data.email;
  }
  return newState;
}
