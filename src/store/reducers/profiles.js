export default function profiles(currentState, action) {
  if (currentState === undefined) {
    return [
      {
        name: "프로필1",
        image:
          "https://occ-0-993-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71",
        selected: false,
      },
    ];
  }

  const newState = [...currentState];

  if (action.type === "ADD") {
    newState.push({
      name: action.data.name,
      image: action.data.image,
      selected: false,
    });
    return newState;
  } else if (action.type === "DELETE") {
    const user = action.data;
    const filteredState = newState.filter((_, i) => {
      return newState[i].name !== user;
    });
    return filteredState;
  } else if (action.type === "SELECT") {
    const user = action.data.name;
    const modifiedState = newState.map((u) => {
      if (u.name == user) {
        u.selected = true;
      } else {
        if (u.selected == true) {
          u.selected = false;
        }
      }
      return newState;
    });
    return modifiedState;
  }
  return newState;
}
