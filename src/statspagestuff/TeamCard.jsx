import React from 'react'


export default function TeamCard(props){
    return (
        <div className="team-card-container">
            <div className="team-card-header">
                <div className="team-card-name">
                    {props.name}
                </div>
            </div>
            <div className="team-card-logo">
                <img src={props.image}/>
            </div>
        </div>
    )
}