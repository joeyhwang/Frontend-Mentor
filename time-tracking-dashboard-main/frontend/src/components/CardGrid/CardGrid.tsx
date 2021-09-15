import axios from 'axios'
import {useEffect, useState} from 'react'
import { Card } from '../Card/Card'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import './CardGrid.css'
interface CardGridProps {

}

export interface CardInfo {
    timeframes: {
        daily: {
            current: number,
            previous: number
        }
        monthly: {
            current: number,
            previous: number
        }
        weekly: {
            current: number,
            previous: number
        }
    },
    title: string,
}

export const CardGrid: React.FC<CardGridProps> = () => {
    const [currentSelected, setCurrentSelected]= useState<"Daily"|"Weekly"|"Monthly">('Daily')
    const [data,setData] = useState<CardInfo[]>(
        [
            {
                timeframes: {
                    daily: {
                        current: 0,
                        previous: 0
                    },
                    monthly: {
                        current: 0,
                        previous: 0
                    },
                    weekly: {
                        current: 0,
                        previous: 0
                    }
                },
                title: "",
            }
        ]
    )
  
    useEffect(() => {
      const getData = async () => {
          const jsonData = await axios.get('/data.json')
          setData(jsonData.data)
      }
  
      getData()
    }, [])

    const clickedPeriodicity = (e:React.MouseEvent<HTMLButtonElement>): void => {
        const input =  e.target as HTMLElement
        setCurrentSelected(input.innerHTML as "Daily"|"Weekly"|"Monthly")
        
    }
    
        return (
            <div className = "grid_container">

                <div className = "profile_container">
                    <ProfileCard currentSelected = {currentSelected} clickedPeriodicity = {clickedPeriodicity}/>
                </div>

                {data.map((card, i) => {
                    return (
                        <div key = {i} className = "card_container">
                            <Card timeframes = {card.timeframes} title = {card.title} periodicity = {currentSelected}/>
                        </div>
                    )
                })}
            </div>
        );
}