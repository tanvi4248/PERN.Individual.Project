import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api",
        prepareHeaders: (headers, { getState }) => {
            const { token } = getState();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            headers.set("Content-Type", "application/json")
            return headers
        },
    }),
    endpoints: (builder) => ({
        getTours: builder.query({
            query: () => "/tours",
        }),
        getSingleTour: builder.query({
            query: (tourId) => `/tours/${tourId}`,
        }),
        register: builder.mutation({
            query: ({ firstname, lastname, email, password }) => ({
                url: '/guests/register',
                method: "POST",
                body: { firstname, lastname, email, password },
            }),
        }),
        login: builder.mutation({
            query: ({ firstname, password }) => ({
                url: '/guests/login',
                method: "POST",
                body: { firstname, password },
            }),
        }),
        getGuest: builder.query({
            query: (firstname) => `/guests/${firstname}`,
        })
    })
})

export default api

export const {useGetToursQuery,useGetSingleTourQuery,useGetGuestQuery,useLoginMutation,useRegisterMutation} = api