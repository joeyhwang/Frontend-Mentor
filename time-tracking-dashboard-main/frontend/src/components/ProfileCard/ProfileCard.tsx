import React from 'react'
import './ProfileCard.css'

interface ProfileCardProps {
    currentSelected: "Daily" | "Weekly" | "Monthly"
    clickedPeriodicity: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const ProfileCard: React.FC<ProfileCardProps> = ({currentSelected, clickedPeriodicity}) => {
        return (
            <div className = "profile_whole_container">
                <div className="profile_top_container">
                    <img src = "/images/image-jeremy.png" alt = ""/>
                    <div className = "name_container">
                        <div>Report for</div>
                        <p>Jeremy Robson</p>
                    </div>
                </div>
                
                <div className = "period_container">
                    <button  className = {currentSelected === "Daily" ? 'opacityOne' : 'opacityHalf'} onClick = {clickedPeriodicity}>
                        Daily
                    </button>
                    <button className = {currentSelected === "Weekly" ? 'opacityOne' : 'opacityHalf'} onClick = {clickedPeriodicity}>
                        Weekly
                    </button>
                    <button className = {currentSelected === "Monthly" ? 'opacityOne' : 'opacityHalf'} onClick = {clickedPeriodicity}>
                        Monthly
                    </button>

                </div>


        </div>)
}