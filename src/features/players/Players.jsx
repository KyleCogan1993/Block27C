import puppyBowlApi from "../../api/puppyBowlApi";
import { useGetPlayerQuery, useGetPlayerIdQuery, useAddPlayerMutation, useDeletePlayerMutation } from "../../app/puppySlice";
import React from "react";

export default function Players() {
 
    const Players = () => {
        const {data: player, error, isLoading} = useGetPlayerQuery();
    }

    if(isLoading)
        console.log("data is being fetched");
    if(error)
        console.log("error fetching data");
    
    return (
        <>
            <div className="players">
                {data.data.players.map(player => (
                    <div key={player.id} className="player-card">
                        <div className="player-details">
                            <h2>{player.name}</h2>
                            <p>{player.breed}</p>
                            <p>{player.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

