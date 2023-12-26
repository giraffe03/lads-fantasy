import React from 'react'
import TeamCard from './TeamCard'



export default function AllCards(props){
    let allCardsArr = [];
    let counter = 0;

    props.data.forEach((element)=>{
        allCardsArr.push(
            <TeamCard 
            image={element.team.logo}
            name={element.team.name}
            />
        )
    })

    return (
        <div className="all-card-container">
            {allCardsArr}
        </div>
    )
}