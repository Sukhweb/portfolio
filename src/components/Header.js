import React from "react"
import { Link } from "gatsby"
import logoPng from "../images/logo.png"
import style from "../styles/header.module.scss"

const Header = () => {
  return (
    <header className={style.header}>
     <div>
       <a  className="navbar-brand" href="#"/>
       <img src={logoPng}  alt="Sukhjeet Kaur" className={style.logo}/>
       </div> 
       <nav className={`navbar navbar-expand-lg navbar-dark p-3 ${style.colorNav}`}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse rounded-pill" id="navbarNavAltMarkup">
          <ul className={`navbar-nav nav-pills ${style.roundNav}`}>
            <li className="nav-item">
              <Link className="nav-link text-center" activeClassName="active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" activeClassName="active" to="/aboutMe">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" activeClassName="active" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" activeClassName="active" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center" activeClassName="active" to="/contactMe">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav> 
    </header>
  )
}

export default Header
