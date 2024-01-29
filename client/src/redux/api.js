import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://tours-0oix.onrender.com/api",
        prepareHeaders: (headers, { getState }) => {
            const { token } = getState().token.token;
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
        
        getGuest: builder.query({
            query: (token) => ({
                url: '/guests/me',
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
            }),
        }),
        register: builder.mutation({
            query: ({ firstname, lastname, email, password }) => ({
                url: '/guests/register',
                method: "POST",
                body: { firstname, lastname, email, password },
            }),
        }),
        login: builder.mutation({
            query: ({firstname, password}) => ({
                url: '/guests/login',
                method: "POST",
                body: { firstname, password },
            }),
        }),
        getReservations: builder.query({
            query: (guestsId) => `guests/${guestsId}/reservations`,
        }),
        reservations: builder.mutation({
            query: ({ guestsId, tourId }) => ({
              url: `tours/${tourId}`,
              method: "POST",
              body: { guestsId, tourId },
            }),
        }),
        deleteReservations: builder.mutation({
            query: (guestsId) => ({
                url: `guests/${guestsId}/reservations`,
                method: "DELETE"
            }),
        }),

    })
})

export default api

export const {useGetToursQuery,useGetSingleTourQuery,useGetGuestQuery,useLoginMutation,useRegisterMutation,useGetReservationsQuery,useReservationsMutation,useDeleteReservationsMutation} = api