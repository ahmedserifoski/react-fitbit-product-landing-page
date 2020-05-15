import React from "react"

import '../App.css';

function Container1(props) {
    return(
        <div className="container1">

        <nav>
            <ul className="menu">
              <li className="logo"><a href="#menu"><i className="fas fa-braille"></i>fitbit</a></li>
              <li className="item"><a href="#versa-title">Smartwatches</a></li>
              <li className="item"><a href="#trackers-title">Trackers</a></li>
              <li className="item"><a href="#services-title">Services</a></li>
              <li className="toggle"><a href="#toggle"><i className="fas fa-bars"></i></a></li>
            </ul>
        </nav>

        <div className="three-watches">

            <h1>Versa family & Ionic</h1><br/>
            <p>Three advanced health & fitness smartwatches.</p><br/>
            <a href="#shop">Shop <i className="fas fa-arrow-right"></i></a>
        </div>
        
      </div>
    )
}

export default Container1