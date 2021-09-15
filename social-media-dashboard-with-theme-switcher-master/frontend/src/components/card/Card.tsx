import React from 'react'
import './Card.css'
interface CardProps {
        icon: "facebook" | "youtube" | "instagram" | "twitter"
        name: string
        followNumber: number
        followerChange: number,
        followerChangeDirection: "up" | "down"
        toggle: Boolean
    }

export const Card: React.FC<CardProps> = ({icon, name, followNumber, followerChange, followerChangeDirection, toggle}) => {
        return (<div className = {toggle ? `header_card_container ${icon} light` : "header_card_container " + icon }>
                <div className = {toggle ? "name_container light" : "name_container"}>
                        <img alt = {icon} src = {`/images/icon-${icon}.svg`}></img>
                        <p>@{name}</p>
                </div>
                <div className = {toggle ? "follower_container light" :"follower_container"}>
                        <h1>{followNumber === 11000 ? "11k" : followNumber}</h1>
                        <p>{icon === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}</p>
                </div>

                <div className = {"follower_change_container " + followerChangeDirection }>
                        <img alt = {followerChangeDirection} src = {`/images/icon-${followerChangeDirection}.svg`}>
                        </img>
                        <p>{followerChange} Today</p>

                </div>
                

        </div>)
}