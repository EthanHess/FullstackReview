import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function Home() {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/cool-couches">Cool couches</Link>
        </div>
    )
}