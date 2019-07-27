export interface AccountState {
  admin: boolean;
  avatar_url?: string;
  id: number | null;
  menus: MenuType[];
  name: string;
  permissions?: string[];
  language: string;
}

export interface MenuType {
  default?: boolean;
  key: string;
  name: string;
  children?: MenuType[];
  group_key?: string;
  group_name?: string;
  path?: string;
}

export const GET_USER_INFO_SUCCESS = 'account/get_user_info_success';
export const USER_LOGIN_OUT_SUCCESS = 'account/user_log_out_success';

interface GetAccountAction {
  type: typeof GET_USER_INFO_SUCCESS;
  payload: AccountState;
}

export type AccountActionTypes = GetAccountAction;
