import { useGetPlayerQuery} from "../../app/puppySlice";
import React from "react";

export default function Players() {

    const {data: players, isLoading} = useGetPlayerQuery();
    
    return (
        <> 
            {console.log(players?.data.players)}
            {isLoading ? <p>Loading...</p> : 
            <div className="players">
                {players.data.players.map(player => (
                    <div key={player.id} className="player-card">
                        <div className="player-details">
                            <h2>{player.name}</h2>
                            <p>{player.breed}</p>
                            <p>{player.status}</p>
                        </div>
                    </div>
                ))}
            </div>
            }
            </>
     );

    
}

