import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'


export default function TeamTable(props){

    let nameArrayHTML = [];

    for(let i = 1; i <= 5; i++){
        nameArrayHTML.push(
        <div className="tc-table-element">
            <div className="tc-table-position">{i}</div>
            <div className="tc-table-name">{props.nameList[i-1]}</div>
        </div>
        )
    }

    return (
        <div className="tc-table">
            {nameArrayHTML}
        </div>
    )
}