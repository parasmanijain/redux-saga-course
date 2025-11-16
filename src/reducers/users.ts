import { Types } from "../models";

const INITIAL_STATE = {
  items: [],
};

export default function users(
  state = INITIAL_STATE,
  action: { type: any; payload: { items: any; error: any } }
) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
      };
    }
    case Types.USERS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
