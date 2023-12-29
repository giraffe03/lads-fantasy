import React from 'react'


export default function HeaderComponent(props){



    // props will have properties such as
    // date (ex. Dec/17/2023) /props.date 
    // both teams image logo /props.logo
    // both teams abbreviation /props.team1abbrev
    // Kill numbers of team 1 and team 2 /props.team1kill
    // Who won (ex. Team 1 W Team 2 L) /props.team1won (return bool)
    // duration in seconds( can translate it inside here) /props.duration
    return (
        <div className="header-component">
            <div className="header-header">
                <div className="date-section">
                    {props.dateM}/{(props.dateD < 10)? `0${props.dateD}`:
                     props.dateD}
                </div>
                <div className="duration-section">
                    {props.durationH}:{(props.durationM < 10)? `0${props.durationM}`: 
                    props.durationM}:{(props.durationS < 10)? `0${props.durationS}`: props.durationS}
                </div>
            </div>
            <div className={`team-1-section ${props.radiantWon ? 'won' : 'loss'}`}>
                <div className="team-1-left">
                    <img src={props.radiantLogo}/>
                    <div className="team-1-abbrev">
                        {props.radiantName}
                    </div>
                </div>
                <div className="team-1-right">
                    <div className="team-1-killNum">
                        {props.radiantKills}
                    </div>
                    <div className="team-1-wl"> 
                        {props.radiantWon ? 'W': 'L'}
                    </div>
                </div>
            </div>
            <div className={`team-2-section ${props.direWon ? 'won' : 'loss'}`}>
                <div className="team-2-left">
                    <img src={props.direLogo}/>
                    <div className="team-2-abbrev">
                        {props.direName}
                    </div>
                </div>
                <div className="team-2-right">
                    <div className="team-2-killNum">
                        {props.direKills}
                    </div>
                    <div className="team-2-wl"> 
                        {props.direWon ? 'W': 'L'}
                    </div>
                </div>
            </div>

        </div>
    )
}