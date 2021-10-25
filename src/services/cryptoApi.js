import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = {
'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
'x-rapidapi-key': 'a90055eaabmshc0a40d93e4967d7p157656jsnee6db3a32ea7'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({url, headers: cryptoApiHeader});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
      getCryptos: builder.query({
         query: () => createRequest('/coins')
       })
    })
})  

console.log(cryptoApi)

export const { useGetCrytosQuery } = createApi;
