import React from 'react';
import { Link } from "gatsby";

import Layout from '../components/layout'
import Head from "../components/head"

import contactStyles from "./contact.module.scss"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1 className={contactStyles.firstHeader}>Contact Me</h1>
            <p>The best way to reach me is through my personal gmail account : ro.mallick@gmail.com</p>
            <p>Feel free to reach out whenever you need!</p>
            {/* <p>If you've made it this far, add my on <a href="https://www.linkedin.com/in/rohit-mallick-165780165/" target="_blank">LinkedIn </a>link!</p> <br /> */}
            <button className={contactStyles.button}><a href="https://www.linkedin.com/in/rohit-mallick-165780165/" target="_blank">LinkedIn</a></button>
        </Layout>
    )
}

export default ContactPage;
