import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: 1,
    name: "newGYM",
    duration: "2second",
  },
];

const activitiesReducer = (state = initialState, action) => {
  //const { type, payload } = action;

  switch (action.type) {
    case "CREATE_ACTIVITY":
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ];
    case "DELETE_ACTIVITY":
      const copyState = [...state];
      // Find id of object to remove
      const i = copyState.findIndex((x) => x.id === action.payload.id);
      copyState.splice(i, 1);
      return [...copyState];

    default:
      return state;
  }
};

export default activitiesReducer;
