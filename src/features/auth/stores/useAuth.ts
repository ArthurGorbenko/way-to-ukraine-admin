import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from './types'

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (build) => ({
    register: build.mutation<User, Partial<User>>({
      query: (body) => ({ url: 'user/register', method: 'POST', body }),
    }),
  }),
})

export const { useRegisterMutation } = authApi
