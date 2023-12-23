import React from 'react'
import PlayerCard from './PlayerCard'
import PlayerData from './playerData'


export default function FantasyPicks() {
    return (
        <div className="fantasy-picks-section">
            <div className="fantasy-week-section">
                Week 1
            </div>
            <div className="fantasy-roster-section">
                <PlayerCard 
                    role={1}
                    roleName={'Carry'}
                    image={PlayerData[0].img}
                    username={PlayerData[0].name}
                    gamesPlayed={PlayerData[0].gamesPlayed}
                    fantasyAvg={PlayerData[0].fantasyAvg}
                    kda={PlayerData[0].kda}
                />
                <PlayerCard 
                    role={2}
                    roleName={'Mid'}
                    image={PlayerData[1].img}
                    username={PlayerData[1].name}
                    gamesPlayed={PlayerData[1].gamesPlayed}
                    fantasyAvg={PlayerData[1].fantasyAvg}
                    kda={PlayerData[1].kda}
                />
                <PlayerCard 
                    role={3}
                    roleName={'Offlane'}
                    image={PlayerData[2].img}
                    username={PlayerData[2].name}
                    gamesPlayed={PlayerData[2].gamesPlayed}
                    fantasyAvg={PlayerData[2].fantasyAvg}
                    kda={PlayerData[2].kda}
                />
                <PlayerCard 
                    role={4}
                    roleName={'Support'}
                    image={PlayerData[3].img}
                    username={PlayerData[3].name}
                    gamesPlayed={PlayerData[3].gamesPlayed}
                    fantasyAvg={PlayerData[3].fantasyAvg}
                    kda={PlayerData[3].kda}
                />
                <PlayerCard 
                    role={5}
                    roleName={'Hard Support'}
                    image={PlayerData[4].img}
                    username={PlayerData[4].name}
                    gamesPlayed={PlayerData[4].gamesPlayed}
                    fantasyAvg={PlayerData[4].fantasyAvg}
                    kda={PlayerData[4].kda}
                />
            </div>
            <div className="fantasy-time-left">
                00:00:01 left
            </div>
        </div>
    )
}