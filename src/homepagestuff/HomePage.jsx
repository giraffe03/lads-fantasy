import React from 'react'
import HeaderComponent from './HeaderComponent'
import data from './data'
import TestImage1 from '../images/testimage.png'
import TestImage2 from '../images/testimage2.png'
import EvilBloosher from '../images/evilbloosher.png'
import Yeawesmokemeth from '../images/yeawesmokemeth.png'
import Nexty from '../images/nexty.png'
import Nebula from '../images/nebulasinparis.png'
import VibeCats from '../images/vibecats.png'
import Skitzo from '../images/skitzosinohio.png'
import EKings from '../images/eternalkings.png'
import ChappyDayCare from '../images/chappydaycare.png'



export default function HomePage(){


    function transformSecMin(givenSeconds){

        let numSeconds = givenSeconds % 60;
        let numMinutes = Math.floor(givenSeconds/60);
        let numHours = 0;

        let x = 0;

        while (x < 1){
            if (numMinutes > 60){
                numHours++;
                numMinutes = numMinutes - 60;
            } else {
                x++;
            }
        }

        return {
            hours: numHours,
            minutes: numMinutes,
            seconds: numSeconds
        }

    }

    return (
        <div className="hp-body-section">
            <div className="past-matches-header">
                <HeaderComponent 
                    radiantLogo={ChappyDayCare}
                    direLogo={EKings}
                    radiantKills={data[0].RadiantTeam.numKills}
                    direKills={data[0].DireTeam.numKills}
                    radiantName={data[0].RadiantTeam.name}
                    direName={data[0].DireTeam.name}
                    radiantWon={data[0].RadiantTeam.didWin}
                    direWon={data[0].DireTeam.didWin}
                    dateY={data[0].date.year}
                    dateM={data[0].date.month}
                    dateD={data[0].date.day}
                    durationH={transformSecMin(data[0].duration).hours}
                    durationM={transformSecMin(data[0].duration).minutes}
                    durationS={transformSecMin(data[0].duration).seconds}
                />
                <HeaderComponent 
                radiantLogo={EvilBloosher}
                direLogo={Nebula}
                radiantKills={data[1].RadiantTeam.numKills}
                direKills={data[1].DireTeam.numKills}
                radiantName={data[1].RadiantTeam.name}
                direName={data[1].DireTeam.name}
                radiantWon={data[1].RadiantTeam.didWin}
                direWon={data[1].DireTeam.didWin}
                dateY={data[1].date.year}
                dateM={data[1].date.month}
                dateD={data[1].date.day}
                durationH={transformSecMin(data[1].duration).hours}
                durationM={transformSecMin(data[1].duration).minutes}
                durationS={transformSecMin(data[1].duration).seconds}
                />
                <HeaderComponent 
                radiantLogo={Skitzo}
                direLogo={VibeCats}
                radiantKills={data[2].RadiantTeam.numKills}
                direKills={data[2].DireTeam.numKills}
                radiantName={data[2].RadiantTeam.name}
                direName={data[2].DireTeam.name}
                radiantWon={data[2].RadiantTeam.didWin}
                direWon={data[2].DireTeam.didWin}
                dateY={data[2].date.year}
                dateM={data[2].date.month}
                dateD={data[2].date.day}
                durationH={transformSecMin(data[2].duration).hours}
                durationM={transformSecMin(data[2].duration).minutes}
                durationS={transformSecMin(data[2].duration).seconds}
                />
                <HeaderComponent 
                radiantLogo={Nexty}
                direLogo={TestImage1}
                radiantKills={data[3].RadiantTeam.numKills}
                direKills={data[3].DireTeam.numKills}
                radiantName={data[3].RadiantTeam.name}
                direName={data[3].DireTeam.name}
                radiantWon={data[3].RadiantTeam.didWin}
                direWon={data[3].DireTeam.didWin}
                dateY={data[3].date.year}
                dateM={data[3].date.month}
                dateD={data[3].date.day}
                durationH={transformSecMin(data[3].duration).hours}
                durationM={transformSecMin(data[3].duration).minutes}
                durationS={transformSecMin(data[3].duration).seconds}
                />
                <HeaderComponent
                radiantLogo={Yeawesmokemeth}
                direLogo={TestImage2}
                radiantKills={data[4].RadiantTeam.numKills}
                direKills={data[4].DireTeam.numKills}
                radiantName={data[4].RadiantTeam.name}
                direName={data[4].DireTeam.name}
                radiantWon={data[4].RadiantTeam.didWin}
                direWon={data[4].DireTeam.didWin}
                dateY={data[4].date.year}
                dateM={data[4].date.month}
                dateD={data[4].date.day}
                durationH={transformSecMin(data[4].duration).hours}
                durationM={transformSecMin(data[4].duration).minutes}
                durationS={transformSecMin(data[4].duration).seconds}
                />
            </div>
        </div>
    )
}