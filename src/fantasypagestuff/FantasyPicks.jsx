import {React, useEffect, useState} from 'react'
import PlayerCard from './PlayerCard'
import PlayerData from './playerData'
import playerData from './playerData';


export default function FantasyPicks() {

    const [fantasyCards, setFantasyCards] = useState([]);

    const fantasyArr = [];

    const roles = [
        'Carry', 'Mid', 'Offlane', 'Support', 'Hard Support'
    ]

    for (let i = 0; i < 5; i++){
        fantasyArr.push (
            <PlayerCard 
            role = {i+1}
            roleName = {roles[i]}
            image={PlayerData[i].img}
            username={playerData[i].name}
            gamesPlayed={playerData[i].gamesPlayed}
            kda={PlayerData[i].kda}
            />
        )
    }

    useEffect( () => {
        setFantasyCards(fantasyArr)
    }, [])


    return (
        <div className="fantasy-picks-section">
            <div className="fantasy-week-section">
                Week 1
            </div>
            <div className="fantasy-roster-section">
                {fantasyCards}
            </div>
            <div className="fantasy-time-left">
                00:00:01 left
            </div>
        </div>
    )
}