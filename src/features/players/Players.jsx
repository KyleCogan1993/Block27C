import puppyBowlApi from "../../api/puppyBowlApi";
import { useGetPlayerQuery, useGetPlayerIdQuery, useAddPlayerMutation, useDeletePlayerMutation } from "../../app/puppySlice";
import React from "react";

export default function Players() {
 
    const Players = () => {
        const {data: player} = useGetPlayerQuery();
    }
    
    return (
        <>
        
        </>
    );
}

