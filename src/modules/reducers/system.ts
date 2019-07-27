import { UPDATE_SESSION, SystemState, SystemActionTypes } from '../types/system';

const initialState: SystemState = {
  loggedIn: false,
  session: '',
  userName: '',
};

export default function systemReducer(
  state = initialState,
  action: SystemActionTypes,
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
