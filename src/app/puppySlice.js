import puppyBowlApi from "../api/puppyBowlApi";

const api = puppyBowlApi.injectEndpoints({
    endpoints: builder => ({
        getPlayer: builder.query({
            query: () => "/players"
        }),
        getPlayerId: builder.query({
            query: (id) => "/players/" + id
        }),
        addPlayer: builder.mutation({
            mutation: player => ({
                url: "/players",
                method: "POST",
                body: player
            })
        }),
        deletePlayer: builder.mutation({
            mutation: id => ({
                url: "/players/" + id,
                method: "DELETE"
            })
        })
    })
});

export const {useGetPlayerQuery, useGetPlayerIdQuery, useAddPlayerMutation, useDeletePlayerMutation } = api;