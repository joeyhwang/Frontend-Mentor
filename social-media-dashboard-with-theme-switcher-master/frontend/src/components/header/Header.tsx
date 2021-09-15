import React from 'react'
import './Header.css'

interface headerProps {
    toggle: Boolean
    setToggle: React.Dispatch<React.SetStateAction<Boolean>>
}

export const Header: React.FC<headerProps> = ({toggle, setToggle}) => {
        return (
            <div className = {toggle ? "header_container light" : "header_container"} >
                <div className = {toggle ? 'left_container light' :"left_container"}>
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>

                </div>

                <div className = {toggle ? "right_container light" : "right_container"}>
                        <p>{toggle ? 'Light' : 'Dark'} Mode</p>
                        <label className="switch"   >
                            <input type="checkbox" onClick = {() => setToggle(!toggle)} />
                            <span className="slider round"></span>
                        </label>
                </div>

            </div>
        );
}