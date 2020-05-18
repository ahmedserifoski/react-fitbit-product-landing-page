import React from "react"

import '../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBraille } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class Container1 extends React.Component {
    state = {
      menu_class: ""
    }

    setToggleTopMenuClass = () => {
      if (this.state.menu_class === '') {
        this.setState({
          menu_class: 'active',
        })
      } else {
        this.setState({
          menu_class: '',
        })
      }
    }

    render () {
      let top_menu_class = `item ${this.state.menu_class}`
      return(
          <div className="container1">

          <nav>
              <ul className= "menu">
                <li className="logo"><a href="#menu"><FontAwesomeIcon icon={faBraille} size="lg" />fitbit</a></li>
                <li className={top_menu_class}><a href="#versa-title">Smartwatches</a></li>
                <li className={top_menu_class}><a href="#trackers-title">Trackers</a></li>
                <li className={top_menu_class}><a href="#services-title">Services</a></li>
                <li className="toggle"><a href="#toggle"><FontAwesomeIcon icon={faBars} size="lg" onClick={this.setToggleTopMenuClass}/></a></li>
              </ul>
          </nav>

          <div className="three-watches">

              <h1>Versa family & Ionic</h1><br/>
              <p>Three advanced health & fitness smartwatches.</p><br/>
              <a href="#shop">Shop <FontAwesomeIcon icon={faArrowRight} size="lg" /></a>
          </div>
          
        </div>
      )
    }
    
}

export default Container1