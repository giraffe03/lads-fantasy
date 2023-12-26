import React from 'react'
import StatsHeader from "./StatsHeader"
import AllCards from "./AllCards"
import CardArray from "./cardData"

export default function StatsPage(){
    return (
        <div className="stats-page-container">
            <StatsHeader />
            <AllCards 
            data={CardArray}
            />
        </div>
    )
}