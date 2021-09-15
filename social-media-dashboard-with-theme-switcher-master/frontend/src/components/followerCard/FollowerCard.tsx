import React from 'react'
import './FollowerCard.css' 

interface FollowerCardProps {
    icon: "facebook" | "youtube" | "instagram" | "twitter"
    header: "Page Views" | "Likes" | "Profile Views" | "Retweets" | "Total Views"
    count: Number
    changeDirection: "up" | "down"
    changePercentage: number
    toggle: Boolean
}

export const FollowerCard: React.FC<FollowerCardProps> = ({toggle,icon, header, count, changeDirection, changePercentage}) => {
        return (
        <div className = {toggle ? "follow_card_container light" :"follow_card_container"}>
            <div className ={toggle ? "follow_card_left_container light" : "follow_card_left_container"}>
                <p>{header}</p>
                <h2>{count === 52000 ? '52k' : count}</h2>
            </div>
            
            <div className = "follow_card_right_container">
                <img alt = {icon} src = {`/images/icon-${icon}.svg`}></img>

                <div className = {"follow_card_change_container " + changeDirection }>
                            <img alt = {changeDirection} src = {`/images/icon-${changeDirection}.svg`}/>
                            <p>{changePercentage}%</p>

                    </div>
            </div>
            
        </div>);
}