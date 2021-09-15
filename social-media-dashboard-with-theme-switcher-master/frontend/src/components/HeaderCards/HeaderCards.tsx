import React from 'react'
import './HeaderCards.css'
import {Cards} from './Cards'
import { Card } from '../card/Card'

interface HeaderCardsProps {
    toggle: Boolean
}

export const HeaderCards: React.FC<HeaderCardsProps> = ({toggle}) => {
        return (
        <div className = {toggle ? "header_cards_container light" : "header_cards_container" }>
            
            {Cards.map((card, i) => {
                return (
                        <Card key = {i}
                        icon={card.icon} 
                        name={card.name} 
                        followNumber={card.followNumber} 
                        followerChange={card.followerChange} 
                        followerChangeDirection={card.followerChangeDirection}
                        toggle = {toggle}  />

                )
            })}

        </div>
        )
}