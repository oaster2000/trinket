import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import pixelsDice from './GlobalData';
import PixelConnect from "./pixels/PixelConnect"
import PixelRollResult from "./pixels/PixelResult"


function Navigation() {

    return (
        <div className="nav-bar">
            <div className='initial'>
                <Link to="/">Home</Link>
                <Link to="/random/items">Random Items</Link>
                <Link to={"/random/items/" + pixelsDice}>Random Table</Link>
            </div>
            <PixelConnect />
        </div>
    )
}

export default Navigation