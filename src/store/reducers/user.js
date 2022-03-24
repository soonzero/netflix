export default function user(currentState, action) {
  if (currentState === undefined) {
    return {
      userIdx: undefined,
      membershipIdx: undefined,
      jwt: undefined,
    };
  }

  const newState = { ...currentState };
  if (action.type === "LOGGED_IN") {
    newState.userIdx = action.data.userIdx;
    newState.jwt = action.data.jwt;
  } else if (action.type === "SET_MEMBERSHIP") {
    newState.membershipIdx = action.data.membershipIdx;
  } else if (action.type === "LOG_OUT") {
    newState.userIdx = undefined;
    newState.membershipIdx = undefined;
    newState.jwt = undefined;
  }
  return newState;
}
