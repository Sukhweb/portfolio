import React from "react"
import Layout from "../components/Layout" 
import style from "../styles/index.module.scss"


const Index = () => {
  return (
    <Layout>
        <div className="container-fluid jumbotron" className={style.bg}>
         <div className={style.textWrap}> 
            <h1 className="display-4" className={style.formatText}>SUKHJEET KAUR</h1>         
            <p className="lead" className={style.formatText}>Front-end Web Developer</p>
          </div>
      </div>
    </Layout>
  )
}

export default Index
