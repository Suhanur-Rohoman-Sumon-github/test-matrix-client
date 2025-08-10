import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, BaseQueryApi, DefinitionType } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
import { logOut } from '../fetures/auth/auth.slice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

// BaseQueryFn type with no refresh token logic
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const baseQueryWithoutRefresh = async (args: FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    api.dispatch(logOut());
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithoutRefresh,
  endpoints: () => ({}),
  tagTypes: ['User','VerificationCode',"Category"],
});
