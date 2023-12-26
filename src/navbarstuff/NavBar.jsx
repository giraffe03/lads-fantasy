import React from 'react'
import PastMatches from '../standingspagestuff/Standings'
import StatsPage from '../statspagestuff/StatsPage'
import FantasyPicks from '../fantasypagestuff/Fantasy'
import LadsLogo from '../images/league-of-lads-transparent.png'
import LogInSignUp from './LogInSignUp'
import HomePage from '../homepagestuff/HomePage'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <div className="nav-bar">
                <div className="nav-bar-items">
                    <Link to="/"><img className="nav-bar-logo" src={LadsLogo} /></Link>
                    <Link to="/fantasypicks">
                        <div className="fantasy-nav">
                            FANTASY
                        </div>
                    </Link>
                    <Link to="/standings">
                        <div className="standings-nav">
                            STANDINGS
                        </div>
                    </Link>
                    <Link to="/playerstats">
                        <div className="stats-nav">
                            STATS
                        </div>
                    </Link>
                </div>
                <div className="loginsection">
                    <Link to="login">
                        <div className="login-nav">
                            LOG IN
                        </div>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/fantasypicks" element={<FantasyPicks />} />
                <Route path="/standings" element={<PastMatches />} />
                <Route path="/playerstats" element={<StatsPage />} />
                <Route path="/login" element={<LogInSignUp />} />
            </Routes>
        </>
    )
}