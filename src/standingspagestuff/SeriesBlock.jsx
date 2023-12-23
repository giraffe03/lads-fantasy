import React from 'react'
import PolarAss from '../images/testimage.png'
import EternalKings from '../images/eternalkings.png'


// SeriesBlock will take in multiple properties
// team 1 logo
// team 2 logo
// Team Name 1
// Team Name 2
//  {number of win} - {number of win} (ex. 0-2, 1-1, 2-0)

export default function SeriesBlock(props){
    return (
    <div className="series-block">
        <div className="series-block-top">
            <div className="series-block-left">
                <img src={props.team1Logo}/>
                <div className="series-name">{props.team1Name}</div>
            </div>
            <div className="series-score">{props.team1Score}</div>
        </div>
        <div className="series-block-bottom">
            <div className="series-block-left">
                <img src={props.team2Logo}/>
                <div className="series-name">{props.team2Name}</div>
            </div>
            <div className="series-score">{props.team2Score}</div>
        </div>
    </div>)
}