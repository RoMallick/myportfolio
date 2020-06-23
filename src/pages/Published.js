import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

import publishedStyles from './published.module.scss'

const Published = () => {
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
            <Head title="Published"/>
            <h1 className={publishedStyles.firstHeader}>Publications</h1>

            <h2>Quantifying Visual Perception Before, Upon, and After an Eye Fixation</h2>
            <p>Rohit Mallick, “Quantifying Visual Perception Before, Upon, and After an Eye Fixation” ARL-SR-0388,
                2017 ARL Summer Student Program, Volume II: Compendium of Abstracts, Rose Pesce-Rodriguez, p.
                95, Dec 2017.</p> 
            <Link to="https://apps.dtic.mil/sti/pdfs/AD1043945.pdf">ARL Summer Student Program, Volume II: Compendium of Abstracts (2017)</Link> <br /> <br /> <br />
            
            <h2>The Use of Eye Metrics to Index Cognitive Workload in Video Games</h2>
            <p>R. Mallick, D. Slayback, J. Touryan, A. J. Ries, and B. J. Lance, The Use of Eye Metrics to Index
            Cognitive Workload in Video Games, DOI: 10.1109/ETVIS.2016.7851168, IEEE (2016)</p> 
            <Link to="https://www.researchgate.net/publication/313805604_The_use_of_eye_metrics_to_index_cognitive_workload_in_video_games">Research Gate Link</Link> <br /> <br/> <br />

            <h2>Correlations between Tetris Fall Speeds and Eye Movement</h2>
            <p>Rohit Mallick, “Correlations Between Tetris Fall Speeds and Eye Movement” ARL-TM-2015a, Volume
            II: Compendium of Abstracts, Army Research Laboratory, p. 35, 2015.</p> 
            <Link to="https://apps.dtic.mil/dtic/tr/fulltext/u2/1000355.pdf">ARL Summer Student Program, Volume II: Compendium of Abstracts (2015)</Link> <br /> <br/>

        </Layout>
    )
}

export default Published