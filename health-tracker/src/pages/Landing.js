import React from 'react'
import img from './img/Logo.png'

const Landing = () => {

    return (

        <div style={{
            display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column", width: "50%",
            marginLeft: "25%", marginTop: "5%"
        }}>
            <div>
                <img src={img} style={{ height: "250px", width: "900px" }} alt="Our Compnay Logo" />
            </div>
            <h1 style={{ textAlign: "center" }}>Welcome to MERN</h1>
            <h2 style={{ textAlign: "center", display: "flex", justifyContent: "center", alignContent: "center", color: "blue" }}>
                MERN Health Tracker is a web application which utilizes the Edamam API that can be used to track daily and weekly nutritional intake,<br />
        along with weight goals and your progress towards them. You will be able to log meals you eat and see detailed information about them,<br />
        such as fat, protein, and carb content, along with an overall view for your intake each week.
    </h2>
        </div >

    )
}

export default Landing
