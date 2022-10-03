const innitState: object = {
  filter: {
    seach: "",
  },
  gameList: [],
};

export const rootReducer = (state = innitState, action: any) => {
  switch (action.type) {
    case "gameList/addGame":
      return {
        ...state,
        gameList: [],
      };
    default:
      return state;
  }
};
