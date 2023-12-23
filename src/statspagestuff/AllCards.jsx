import React from 'react'
import TeamCard from './TeamCard'



export default function AllCards(){
    return (
        <div>
            <TeamCard 
            image={"https://riki.dotabuff.com/t/l/20nLXpEpLC1.png"}
            name={'Eternal Kings'}
            wins={7}
            losses={5}
            />
            {/* <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard /> */}
        </div>
    )
}