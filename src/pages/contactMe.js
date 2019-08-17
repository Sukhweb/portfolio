import React from "react"
import Layout from "../components/Layout"
import style from "../styles/contactMe.module.scss"
import Linkedin from "../images/linkedin.png"
import Github from "../images/github.png"



const ContactMe = () => {
  return (
    <Layout>
        <section className={style.contactMe}>
        <h1 className={`mt-3 ${style.contactHeader}`}>Contact Me</h1>
        <div className={`p-5`} >
          <div className="mt-5">
            <p className={style.textAlign}>Email me at: <a href="https://www.gmail.com">Sukhjeetkaurwalia@gmail.com</a></p>
            <p className={style.textAlign}>Feel free to contact me at: <a href="#">647-212-0075</a></p>
          </div>
          <div className={`text-center m-5 ${style.links}`}>
            <a href="https://www.linkedin.com/in/sukhjeet-kaur-73079a141/">
              <img src={Linkedin} className={`mr-4 ${style.logo}`} alt="Linkedin profile"/>
            </a>
            <a href="https://github.com/Sukhweb">
              <img src={Github} className={`ml-4 ${style.logo}`} alt="Github profile"/>
            </a>
          </div>
          </div>
        </section> 
    </Layout>
  )
}
export default ContactMe