import React from 'react'
import FantasyPicks from './FantasyPicks'
import FantasyRanking from './FantasyRanking'


export default function Fantasy(){
    return (
        <div className="fantasy-page-container">
            <FantasyPicks />
            <FantasyRanking />
        </div>
        )
}