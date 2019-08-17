import React from "react"
import Layout from "../components/Layout" 
import style from "../styles/resume.module.scss"

const Resume = () => {
  return (
    <Layout>
    <section className={style.resume}>
      <div className={`mt-3  text-center `}>
      <a href="src/images/resume-sukhjeet-kaur.docx"  download>
        <button className={`btn btn-light btn-lg rounded-pill ${style.btnDownload}`}>Download Resume</button>
      </a>
      </div>
      <div className={style.content}>
        <h3 className={`mt-5 mb-5 rounded-pill ${style.profileHeader}`}>Professional Profile</h3>
        <p className="container mt-5 mb-5">
        • Ability to create interactive/dynamic wire-frames in order to fulfill the user’s demands. Also, could generate prototypes 
          to give user idea about the functionality of the website.<br></br>
        • Proficient in developing responsive website layouts, from mobile screen to the desktop using HTML, CSS & JavaScript. <br></br>
        • Familiar with modern tools for creating web-design layouts. Also, have a good hold of CSS frameworks, Bulma and Bootstrap to enhance the look and feel of websites.<br></br>
        • Aware of the standards of accessibility and how to implement them to make websites accessible to every individual, including assistive technologies.</p>
        
        <h3 className={style.profileHeader}>Interpersonal Skills</h3>
        <p className="container mt-5 mb-5">
        • Possess strong commitment to team environment dynamics with the ability to lead & guide the team while working on the project.<br></br>
        • Ability to rapidly build a relationship and set up the trust.<br></br>
        • A keen learner and a positive human being with strong willpower of never giving up. I love new experiments and also, challenging myself in order to grasp more learning experience.<br></br>
        • Demonstrate a strong power of analytical reasoning and dedicated to achieving the desired result at work.
        • Demonstrate a strong power of analytical reasoning and dedicated to achieving the desired result at work.
        </p> 

        <h3 className={style.profileHeader}>Work Experience</h3>
       <p className="container mt-5">Auditor<br></br>
        Eclerx, Chandigarh, India <br></br>
        ● Due to my consistence performance and quality maintenance, I was assigned as a team lead and my role was to help and guide all the new trainees in my department.<br></br>
        ● Worked efficiently by putting in all the efforts to achieve the expectations of the organization.<br></br>
        ● Listened incoming calls made by the customers to Comcast Call Centre for help and support.<br></br>
        ● Achieved the daily audit targets along with, maintaining quality targets as well.<br></br>
        ● Also bagged the star performer award after just three months of work and got appreciation from my manager.</p>   
      </div>
 
      
    </section>
    </Layout>
  )
}

export default Resume
