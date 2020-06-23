import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import profpic from "./Facebook_Profile_Pic.jpg"
// import SEO from "../components/seo"

import Layout from '../components/layout'

const Home = () => {

    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Rohit, a Clemson University Graduate Student studying Computer Science</h2>
            <img src={profpic} alt="profpic"/>
            <p>Need a Brain and Behavioral Scientist? <Link to="/Contact">Contact Me!</Link></p>
        </Layout>
    )
}

export default Home;