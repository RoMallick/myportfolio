import React from "react"
import { Link } from "gatsby"

import profpic from "./Facebook_Profile_Pic.jpg"
import indexStyles from './index.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

import cv from '../images/Rohit_Mallick_CV.pdf'

const IndexPage = () => {

  return (
    <Layout>
      <Head title="Home"/>
      <h1 className={indexStyles.greeting}>Hiya!</h1>
      <h2>I'm Rohit Mallick, a Clemson University Graduate Student studying Computer Science</h2>
      <img src={profpic} alt="profpic" className={indexStyles.profpic}/>
      <p className={indexStyles.con}>Need a Computational Neuroscientist? <Link to="/Contact">Contact Me!</Link></p>
      <p className={indexStyles.download}>Or would you like to download my <a href={cv} target="_blank">CV</a>?</p>
    </Layout>
  )
}

export default IndexPage;
