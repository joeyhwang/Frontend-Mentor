import React from 'react'
import { FollowerCard } from '../followerCard/FollowerCard'
import './Overview.css'
import {OverviewCards} from './OverViewCards'

interface OverviewProps {
    toggle: Boolean
}

export const Overview: React.FC<OverviewProps> = ({toggle}) => {
        return (
            <div className = "overview_container">
                <p className = "overview_title">Overview - Today</p>
                <div className = "overview_cards_grid">
                    {OverviewCards.map((card, i) => {
                        return (
                        <FollowerCard 
                         key={i} icon={card.icon} 
                         header={card.header} 
                         count={card.count} 
                         changeDirection={card.changeDirection} 
                         changePercentage={card.changePercentage} 
                         toggle={toggle} />
                    )}) }
                </div>
            </div>
        )
}