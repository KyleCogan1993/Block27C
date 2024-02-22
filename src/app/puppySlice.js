import puppyBowlApi from "../api/puppyBowlApi";

const api = puppyBowlApi.injectEndpoints({
    endpoints: builder => ({
        getPlayer: builder.query({
            query: () => "/players",
            invalidatesTags: ["players"]
        }),
        getPlayerId: builder.query({
            query: (id) => "/players/" + id,
            invalidatesTags: ["players"]
        }),
        addPlayer: builder.mutation({
            mutation: player => ({
                url: "/players",
                method: "POST",
                body: player
            }),
            invalidatesTags: ["players"]
        }),
        deletePlayer: builder.mutation({
            mutation: id => ({
                url: "/players/" + id,
                method: "DELETE"
            }),
            invalidatesTags: ["players"]
        })
    })
});

export const {useGetPlayerQuery, useGetPlayerIdQuery, useAddPlayerMutation, useDeletePlayerMutation } = api;