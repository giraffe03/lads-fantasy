import React from 'react'
import CarryIcon from '../images/carry-icon.png'
import MidIcon from '../images/mid-icon.png'
import OfflaneIcon from '../images/offlane-icon.png'
import SupportIcon from '../images/support-icon.png'
import HardSupportIcon from '../images/hardsupport-icon.png'

export default function PlayerCard(props){
    //role (1/2/3/4/5)
    //logo
    //name(username)
    //games played
    //avg fantasy points
    //kda
    let imageObject = 0;

    switch(props.role){
        case 1:
            imageObject = CarryIcon;
            break;
        case 2:
            imageObject = MidIcon;
            break;
        case 3:
            imageObject = OfflaneIcon;
            break;
        case 4:
            imageObject = SupportIcon;
            break;
        case 5:
            imageObject = HardSupportIcon;
            break;
    }

    return (
    <div className="player-card">
        <div className="player-card-role-section">
            <img src={imageObject}/>
            <p>{props.roleName}</p>
        </div>
        <img src={props.image}/>
        <div className="player-card-name">
                {props.username}
            </div>
        <div className="player-card-desc">
            <div className="player-card-desc-left">
                <div className="player-card-gp">
                    Games Played:
                </div>
                <div className="player-card-fantasy-avg">
                    Fantasy Avg: 
                </div>
                <div className="player-card-kda">
                    KDA:
                </div>
            </div>
            <div className="player-card-desc-right">
                <div>
                    {props.gamesPlayed}
                </div>
                <div>
                    {props.fantasyAvg}
                </div>
                <div>
                    {props.kda}
                </div>
            </div>
        </div>

    </div>)
}