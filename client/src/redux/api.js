import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api"
    }),
    endpoints: (builder) => ({
        getTours: builder.query({
            query: () => "/tours",
        })
    })
})

export default api

export const {useGetToursQuery} = api