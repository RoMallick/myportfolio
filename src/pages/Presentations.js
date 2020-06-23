import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

import presentationsStyles from './presentations.module.scss'

const Presentations = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }       
                }
            }
        }
    `)
    
    // console.log(data)

    return (
        <Layout>
            <Head title="Presentations"/>
            <h1 className={presentationsStyles.frontHeader}>Presentations</h1>

            <h2>A Network for 3D Perception Using Psychophysical Constraints</h2>
            <p>Presenters : Rohit Mallick, Pallavi Mishra, Sébastien Hélie</p>
            <p>Event : CEREBBRAL Symposium</p>
            <p>Location : Purdue University, West Lafayette, IN</p>
            <p>Date : 17 April 2019</p> <br /> <br />
            
            <h2>Human-in-the-Loop Reinforcement Learning in Ground Robots</h2>
            <p>Presenters : Rohit Mallick, Nick Waytowich, Derrik Asher, Brianna Henthorn, Brian Cesar-Tondreau</p>
            <p>Event : ARL Summer Symposium</p>
            <p>Location : Human Research Engineering Directorate (HRED), Aberdeen Proving Ground, MD</p>
            <p>Date : 25 July 2018</p> <br /> <br />

            <h2>The Use of Eye Metrics to Index Cognitive Workload in Video Games</h2>
            <p>Presenters : Rohit Mallick, Anthony Ries, Jon Touryan, David Slayback, Brent Lance</p>
            <p>Event : IEEE-Visualization Conference (ETVIS)</p>
            <p>Location : Hilton Hotel, Baltimore, MD</p>
            <p>Date : 23 October 2016</p> <br /> <br />

            <h2>Range and Throughput Assessment of Wireless Radios in Various Environments</h2>
            <p>Presenters : Rohit Mallick, Sherry Green, William Nothwang</p>
            <p>Event : ARL Summer Symposium</p>
            <p>Location : Sensors and Electron Devices Directorate (SEDD), Adelphi, MD</p>
            <p>Date : 8 August 2014</p> <br /> <br />
        </Layout>
    )
}

export default Presentations