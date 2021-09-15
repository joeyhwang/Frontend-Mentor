import React, {useState, useEffect} from 'react'
import { CardInfo } from '../CardGrid/CardGrid';
import './Card.css'


interface CardProps {
        timeframes: CardInfo["timeframes"]
        title: CardInfo["title"]
        periodicity: "Daily"|"Weekly"|"Monthly"
}

export const Card: React.FC<CardProps> = ({timeframes, title, periodicity}) => {
        const [color, setColor] = useState('')
        const [lowercasePeriod, setLowercasePeriod] = useState<'daily'|'weekly'|'monthly'>('weekly')
        const getImageUrl = () => {
                const separatedTitle = title.toLowerCase().split(' ')
                if (separatedTitle.length === 2) {
                        return separatedTitle.join('-')
                }

                return separatedTitle[0]
        }

        useEffect(() => {
                switch (title) {
                        case 'Work':
                                setColor("orange")
                        break
                        case 'Play':
                                setColor("blue")
                        break
                        case 'Study':
                                setColor("red")
                        break
                        case 'Exercise':
                                setColor("green")
                        break
                        case 'Social':
                                setColor("purple")
                        break
                        case 'Self Care':
                                setColor("yellow")
                        break
                        default:
                                setColor("blue")
                }

                switch(periodicity) {
                        case 'Weekly':
                                setLowercasePeriod('weekly')
                                break
                        case 'Monthly':
                                setLowercasePeriod('monthly')
                                break
                        case 'Daily':
                                setLowercasePeriod('daily')
                                break
                        default:
                                setLowercasePeriod('weekly')
                }

        }, [title, periodicity])


        return (
        <div className = {color === '' ? "whole_card" : `whole_card ${color}`}>
                <div className = "card_under">
                        <img src = {`/images/icon-${getImageUrl()}.svg`} alt = {`${title} img`}  
                        className = {color === '' ? '' : color} />

                        <div className = "card_front">
                                <div className = "title">
                                        <p>{title}</p>

                                </div>
                                <div className = "hour_container">
                                        <div className = "current_hours">
                                                {`${timeframes[lowercasePeriod].current}hrs`}

                                        </div>
                                        <div className =  "previous_hours">
                                                {`Last Week - ${timeframes[lowercasePeriod].previous}hrs`}

                                        </div>
                                </div>
                                <a href = "/" >...</a>

                        </div>

                </div>

        </div>
        
        );
}