import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"
import missingStyle from "./missing.module.scss"

import unhooked from "../images/unhooked.jpg"

const NotFoundPage = () => (
  <Layout>
    <Head title="404" />
    <h1>404: NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <img src={unhooked} className={missingStyle.pic}/>
    <p className={missingStyle.hlink}>Go back to <Link to="/">Home</Link>?</p>
  </Layout>
)

export default NotFoundPage
