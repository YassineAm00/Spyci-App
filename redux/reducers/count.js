const initialState = 0;

export const Count = (action) => {
  switch (action) {
    case "Profile":
      action.payload + 1;
      break;
    default:
      return initialState;
  }
};
