import { USER_LOADED, AUTH_ERROR } from "../action/types";

const initialState = {
  isAuthenticated: false,
  isSubAdminAuthenticated: false,
  loading: true,
  user: null,
  client: null,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}
