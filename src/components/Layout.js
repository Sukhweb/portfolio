import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
//  import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "../styles/general.scss"
 import style from "../styles/layout.module.scss"


const Layout = ( {children} ) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout