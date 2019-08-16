import React from "react"
import { Link } from "gatsby"

import style from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <p className="text-center">&copy; Copyright Sukhjeet Kaur</p>
      </div>
    </footer>
  )
}

export default Footer
