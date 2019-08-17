import React from "react"
import Layout from "../components/Layout"
import project1 from "../images/airbnb.jpg"
import project2 from "../images/abc-movies.jpg"  
import project3 from "../images/kijiji.jpg" 
import project4 from "../images/portfolio.jpg" 
import project5 from "../images/humber-media-pros.jpg"
import project6 from "../images/iw-jewels.jpg"
import htmlLogo from "../images/html-xs.png"
import cssLogo from "../images/css-xs.png"
import jsLogo from "../images/js-xs.png"
import nodeLogo from "../images/node-xs.png"
import reactLogo from "../images/react-xs.png"
import gatsbyLogo from "../images/gatsby-xs.png"
import style from "../styles/projects.module.scss"


const Projects = () => {
  return (
    <Layout>
      <section className={style.projects}>
      <h1 className={`text-center mt-4 ${style.projectsHeader}`}>Projects</h1>      
      <div className={`container ${style.projectsWrap}`}>
        <div className={style.cardGroup}>
          <div className="card-deck"> 
            <div className={`card ${style.resizeCard}`}>
              <img src={project1} className={`card-img-top`} alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-center">AIR-BNB</h5>
                <div class="row justify-content-center">
                  <img src={htmlLogo}  alt="..."/>
                  <img src={cssLogo}   alt="..."/>
                  <img src={nodeLogo}   alt="..."/>
                </div>  
              </div>
              <div className="card-footer text-center">
                <a href="https://github.com/node-airbnb/airBnB.git">
                  <button className={`btn btn-secondary btn-block rounded-pill ${style.btnGit}`}>Github Repo</button>
                </a>
              </div>
           </div>

            <div className={`card ${style.resizeCard}`}>
            <a href="https://gallant-bhaskara-968234.netlify.com">
                <img src={project2} className={`card-img-top`}alt="..."/>
              </a>  
              <div className="card-body">
                <h5 className="card-title text-center">ABC CINEMAS</h5>
                <div class="row justify-content-center">
                  <img src={htmlLogo}  alt="..."/>
                  <img src={cssLogo}   alt="..."/>
                  <img src={jsLogo}   alt="..."/>
                </div>
              </div>
              <div className="card-footer">
              <a href="https://github.com/Sukhweb/abc-cinema.git">
                  <button className={`btn btn-secondary btn-block rounded-pill ${style.btnGit}`}>Github Repo</button>
                </a>
              </div>
           </div>

           <div className={`card ${style.resizeCard}`}>
              <a href="https://www.kaursukhweb.com">
                <img src={project3} className={`card-img-top`}alt="..."/>
              </a>
              <div className="card-body">
                <h5 className="card-title text-center">KIJIJI</h5>
                <div class="row justify-content-center">
                  <img src={htmlLogo}  alt="..."/>
                  <img src={cssLogo}   alt="..."/>
                  <img src={jsLogo}   alt="..."/>
                </div> 
              </div>
              <div className="card-footer">
              <a href="https://github.com/Sukhweb/composite-2-kaur-sukhjeet.git">
                  <button className={`btn btn-secondary btn-block rounded-pill ${style.btnGit}`}>Github Repo</button>
                </a>
              </div>
           </div>
         </div>

        </div>

         <div className={style.cardGroup}>
          <div className="card-deck"> 
            <div className={`card ${style.resizeCard}`}>
            <a href="#">
                <img src={project4} className={`card-img-top`}alt="..."/>
              </a>
                <div className="card-body">
                <h5 className="card-title text-center">PORTFOLIO</h5>
                <div class="row justify-content-center">
                  <img src={reactLogo} className="p-2"  alt="..."/>
                  <img src={gatsbyLogo} className="p-2"  alt="..."/>
                </div> 
              </div>
              <div className="card-footer">
              <a href="">
                  <button className={`btn btn-secondary btn-block rounded-pill ${style.btnGit}`}>Github Repo</button>
                </a>
              </div>
           </div>


            <div className={`card ${style.resizeCard}`}>
            <a href="https://www.humbermediapros.ca">
                <img src={project5} className={`card-img-top`}alt="..."/>
              </a>
                <div className="card-body">
                <h5 className="card-title text-center">HUMBER MEDIA PROS WEBSITE</h5>
                <div class="row justify-content-center">
                  <img src={reactLogo} className="p-2"  alt="..."/>
                  <img src={gatsbyLogo} className="p-2"  alt="..."/>
                </div> 
              </div>
              <div className="card-footer">
              <a href="https://github.com/team-humber-web-2019/humber-media-pros.git">
                  <button className={`btn btn-secondary btn-block rounded-pill ${style.btnGit}`}>Github Repo</button>
                </a>
              </div>
           </div>

            <div className={`card ${style.resizeCard}`}>
              <a href="https://indo-western-jewels.github.io/">
                <img src={project6} className={`card-img-top`}alt="..."/>
              </a>  
              <div className="card-body">
                <h5 className="card-title text-center">INDO-WESTERN JEWELS</h5>
                <p className="card-text"></p>
                <div class="row justify-content-center">
                  <img src={htmlLogo}  alt="..."/>
                  <img src={cssLogo}   alt="..."/>
                </div> 
              </div>
              <div className="card-footer">
              <a href="https://github.com/indo-western-jewels/indo-western-jewels.github.io.git">
                  <button className={`btn btn-secondary btn-block rounded-pill ${style.btnGit}`}>Github Repo</button>
                </a>
              </div>
           </div>
         </div>
         </div>
        </div> 
 
 


        </section>
    </Layout>
  )
}
export default Projects