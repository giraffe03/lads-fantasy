import React from 'react'
import StatsHeader from "./StatsHeader"
import AllCards from "./AllCards"

export default function StatsPage(){
    return (
        <div className="stats-page-container">
            <StatsHeader />
            <AllCards />
        </div>
    )
}