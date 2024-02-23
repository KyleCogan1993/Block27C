import { useGetPlayerQuery, useAddPlayerMutation} from "../../app/puppySlice";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import React from "react";

export default function Players() {

    const {data: players, isLoading} = useGetPlayerQuery();
    const [addPlayer, {loading, isError}] = useAddPlayerMutation();

    const [puppyName, setPuppyName] = useState("");
    const [puppyLink, setPuppyLink] = useState("");
    const [puppyBreed, setPuppyBreed] = useState("");
    const [puppyStatus, setPuppyStatus] = useState("");

    const dispatch = useDispatch();

    const addPuppy = event => {
        event.preventDefault();
        addPlayer({
            name: puppyName,
            breed: puppyBreed,
            status: puppyStatus,
            imageUrl: puppyLink,
        })
    };
    
    return (
        <> 
            <form className="add-puppy-form" onSubmit={addPuppy}>
                <label>Name</label>
                <input value={puppyName} onChange={(e) => setPuppyName(e.target.value)} type="text"></input>
                <label>Breed</label>
                <input value={puppyBreed} onChange={(e) => setPuppyBreed(e.target.value)} type="text"></input>
                <label>Position</label>
                <input value={puppyStatus} onChange={(e) => setPuppyStatus(e.target.value)} type="text"></input>
                <label>Image Link</label>
                <input vaue={puppyLink} onChange={(e) => setPuppyLink(e.target.value)} type="text"></input>
                <button>Submit</button>
            </form>
            {isLoading ? <p>Loading...</p> : 
            <div className="players">
                {players.data.players.map(player => (
                    <div key={player.id} className="player-card">
                        <div className="player-image-container">
                            <img className="player-image" src={player.imageUrl} alt={player.name} />
                        </div>
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
     )
}

