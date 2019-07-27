import {
  AccountActionTypes,
  AccountState,
  GET_USER_INFO_SUCCESS,
} from '../types/account';

const initialState: AccountState = {
  admin: false,
  menus: [],
  name: '',
  id: null,
  language: 'zh-CN',
};

export default function chatReducer(
  state = initialState,
  action: AccountActionTypes,
): AccountState {
  switch (action.type) {
    case GET_USER_INFO_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
