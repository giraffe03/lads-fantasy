import {React, useState} from 'react'
import TeamTable from './TeamTable'
import LadsLogo from '../images/league-of-lads-transparent.png'
import { Routes, Route, Link } from 'react-router-dom'

export default function TeamCard(props){
    const playerList = [];

    props.plrlist.forEach((playerObject)=>{
        playerList.push(playerObject.steamAccount.name)
    })


    return (
        <div className="team-card-container"
        >
            <div className="team-card-header">
                <div className="team-card-name">
                    {props.name}
                </div>
            </div>
            <div className="team-card-logo">
                {props.image ? <img className="team-card-logo-1"src={props.image}/>
                 : <img className="team-card-logo-1" src={LadsLogo}/>}
                <TeamTable
                    nameList={playerList}
                    />
            </div>
            
        </div>
    )
}
