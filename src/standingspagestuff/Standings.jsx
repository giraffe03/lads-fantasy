import React from 'react'
import SeriesBlock from './SeriesBlock'

export default function Standings(){
    return (
        <div className="standings-container">
            <SeriesBlock 
            team1Name={"Polar Ass"}
            team2Name={"Eternal Kings"}
            team1Score={2}
            team2Score={0}
            team1Logo={'https://riki.dotabuff.com/t/l/20nLXpEpLC1.png'}
            team2Logo={'https://riki.dotabuff.com/t/l/1EDoI37j4G9.png'}
            />
            <SeriesBlock 
            team1Name={"Polar Ass"}
            team2Name={"Eternal Kings"}
            team1Score={2}
            team2Score={0}
            team1Logo={'https://riki.dotabuff.com/t/l/20nLXpEpLC1.png'}
            team2Logo={'https://riki.dotabuff.com/t/l/1EDoI37j4G9.png'}
            />
        </div>
    )
}