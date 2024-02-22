import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const puppyBowlApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2401-FSA-ET-WEB-FT-SF/players"
    }),
    endpoints: () => ({}),
    tagTypes: ["Players"] 
});

export default puppyBowlApi;