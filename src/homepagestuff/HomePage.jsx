import React from 'react'
import HeaderComponent from './HeaderComponent'
import data from './data'
import LadsLogo from '../images/league-of-lads-transparent.png'


export default function HomePage(){
    const matchBlocks = [];

    data.forEach((dataObject)=>{
        const timeArray = convertTimestamp(dataObject.startDateTime)
        let durationObject = transformSecMin(dataObject.durationSeconds)
        const rsum = dataObject.radiantKills.reduce((partialSum, a) => partialSum + a, 0);
        const dsum = dataObject.direKills.reduce((partialSum, a) => partialSum + a, 0);
        matchBlocks.push(
                <HeaderComponent 
                    radiantLogo={dataObject.radiantTeam.logo ? dataObject.radiantTeam.logo :
                        LadsLogo
                    }
                    direLogo={dataObject.direTeam.logo}
                    radiantKills={rsum}
                    direKills={dsum}
                    radiantName={dataObject.radiantTeam.name}
                    direName={dataObject.direTeam.name}
                    radiantWon={dataObject.didRadiantWin}
                    direWon={!dataObject.didRadiantWin}
                    dateM={timeArray[1]}
                    dateD={timeArray[2]}
                    durationH={durationObject.hours}
                    durationM={durationObject.minutes}
                    durationS={durationObject.seconds}
                />
        )
    })



    return (
        <div className="hp-body-section">
            <div className="past-matches-header">
                {matchBlocks}
            </div>
        </div>
    )
}

function transformSecMin(givenSeconds){

    let numSeconds = givenSeconds % 60;
    let numMinutes = Math.floor(givenSeconds/60);
    let rawMinutes = numMinutes;
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
        seconds: numSeconds,
        rawMinutes: rawMinutes
    }

}
function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
          yyyy = d.getFullYear(),
          mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
          dd = ('0' + d.getDate()).slice(-2)			// Add leading 0.
    const time = [];
      
      // ie: 2013-02-18, 8:35 AM	
      time.push(yyyy) 
      time.push(mm) 
      time.push(dd)
      return time;
  }