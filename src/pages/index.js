import React from "react"
import Layout from "../components/Layout"
import myHeadshot from "../images/headshot.png" 
import style from "../styles/index.module.scss"


const Index = () => {
  return (
    <Layout>
        <div className="jumbotron" className={style.bg}>
         <div className={style.textWrap}> 
        {/* <img src={myHeadshot} className={style.photograph} className="rounded" width="400px" height="auto"/> */}
          <h1 className="display-4" className={style.formatText}>SUKHJEET KAUR</h1>         
          <p className="lead" className={style.formatText}>Front-end Web Developer</p>
          <p className={style.formatText}></p>
          </div>
      </div>
    </Layout>
  )
}

export default Index
