import React from "react"

function Ionic(props) {
    return(
        <div className="watchesdiv">
            <img className="small-div" src={props.io.src} alt="Fitbit Ionic" />
            
            <div className="name">
                <h3>{props.io.title}</h3>
            </div>
            <div className="price">
                <span>{props.io.price}</span>
            </div>

        </div>
    )
}

export default Ionic