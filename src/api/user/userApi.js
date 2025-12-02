import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
    reducerPath: "userReadApi",

    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
        timeout: 5000,
        credentials: "include",
    }),

    endpoints: (builder) => ({

        getUser: builder.query({
            query: () => "/user/get-user",
            keepUnusedDataFor: 0,
        }),

        signUpUser: builder.mutation({
            query: (userData) => ({
                url: "/user/sign-up",
                method: "POST",
                body: userData,
            }),
        }),

        signInUser: builder.mutation({
            query: (userData) => ({
                url: "/user/sign-in",
                method: "POST",
                body: userData,
            }),
        }),

        signOutUser: builder.mutation({
            query: () => ({
                url: "/user/sign-out",
                method: "POST",
            }),
        }),

        refreshAccessTokenUser: builder.mutation({
            query: () => ({
                url: "/user/refresh-token",
                method: "POST",
            }),
        }),

        updatePasswordUser: builder.mutation({
            query: (userData) => ({
                query: "/user/update-password",
                method: "POST",
                body: userData,
            }),
        }),

    }),
});

export const {
    useGetUserQuery,
    useLazyGetUserQuery,
    useSignUpUserMutation,
    useSignInUserMutation,
    useSignOutUserMutation,
    useRefreshAccessTokenUserMutation,
    useUpdatePasswordUserMutation,
} = userApi;

export default userApi;