import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import aboutmeStyles from "./aboutme.module.scss"

import famPic from "../images/nikon-june_2009_121.jpg"

const AboutMe = () => {
    return (
        <Layout>
            <Head title="About Me" />
            <h1 className={aboutmeStyles.firstHeader}>About Me</h1>
            <p>
                I am Rohit Mallick. I am defined by many traits, but the first and foremost will always be how dedicated I am to my family.
                I am the proud son of Govind and Amita Mallick, 16th grandchild to Mosaddi and Tara Mallick and younger brother to Kamini Mallick.
                They have encouraged my various dreams, helped me to travel the world, and pursue different hobbies like photography, hiking, and kayaking.
            </p> <br />
            <img src={famPic} alt="famPic" className={aboutmeStyles.famPic}/>
            <p className={aboutmeStyles.secCaption}>
                Born in Albuquerque, New Mexico but raised in Bel Air, Maryland. 
            </p>
            {/* <Link to="/Contact/">Contact Me!</Link> <br /> */}
        </Layout>
    )
}

export default AboutMe;