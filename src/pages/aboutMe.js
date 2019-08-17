import React from "react"
import Layout from "../components/Layout"
import myHeadshot from "../images/headshot.png" 
import style from "../styles/aboutMe.module.scss"
import htmlLogo from "../images/html-logo.png"
import cssLogo from "../images/css-logo.png"  
import jsLogo from "../images/js-logo.png" 
import reactLogo from "../images/react-logo.png" 
import nodeLogo from "../images/node-logo.png"


const AboutMe = () => {
  return (
    <Layout>
    <section className={`container-fluid pt-2 ${style.gradientBg}`}>
       <h1 className={`mt-3 ${style.head}`} >About Me</h1>
       <img src={myHeadshot} className={`${style.imgAlign}`}  width="250px" height="auto"/>
       <p className={`container text-center ${style.textWrap}`}>
        Hi, I am Sukhjeet Kaur.I am front-end Web Developer. I have recently graduated from  Web Design
        & Development, program at Humber. I also have a bachelors degree in Computer Science & Engineering.
        I am passionate about developing websites with interactive and user-friendly interfaces. I believe i 
        am proficient in developing responsive websites using HTML, CSS, JavaScript, React & Node-JS.
        Familiar with modern tools for creating web-design layouts. Also, have a good hold of CSS frameworks,
        Bulma and Bootstrap to enhance the look and feel of websites. A keen learner and a positive human being 
        with strong willpower of never giving up. I love new experiments and also, challenging myself in order to 
        grasp more learning experience.
       </p>
       

       <h1 className={`mt-5 ${style.head}`} >Skills</h1> 
       <div className={`container-fluid row justify-content-center mt-4 mb-4 p-3 ${style.formatRow}`}>
          <img src={htmlLogo} alt="Html" className="col-md-2 col-4 p-3 m-1"/>
          <img src={cssLogo} alt="CSS" className="col-md-2 col-4 p-3 m-1" />
          <img src={jsLogo} alt="JavaScript" className="col-md-2 col-4 p-4 m-1" />
          <img src={reactLogo} alt="React" className="col-md-2 col-4 p-3 m-1"/>   
          <img src={nodeLogo} alt="Node JS" className="col-md-2 col-4 p-3 m-1"/>       
        </div>
  
    </section>
    </Layout>
  )
}

export default AboutMe
