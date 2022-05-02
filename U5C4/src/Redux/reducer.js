import { ADMIN, LOGIN } from "./actions";

const init = { login: false, admin: [] };

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADMIN:
        return {...store, admin: payload};
    case LOGIN:
        return {...store, login: payload};
    default:
      return store;
  }
};