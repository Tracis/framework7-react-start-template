import { ajax } from 'utils';

import { GET_USER_INFO_SUCCESS } from '../types/account';

export function getUserInfo(querystring: { id?: string }): any {
  return {
    type: [null, GET_USER_INFO_SUCCESS, null],
    promise: () =>
      new Promise((resolve) => {
        const request = querystring.id
          ? ajax({
              url: 'accounts/login_with_url',
              body: querystring,
            }).then(() =>
              ajax({
                url: 'accounts/user_info',
              }),
            )
          : ajax({
              url: 'accounts/user_info',
            });

        resolve(request);
      }),
  };
}

export function userLogin() {
  return {
    type: [null, null, null],
    promise: () =>
      ajax({
        url: 'accounts/login/',
        method: 'GET',
      }),
  };
}
