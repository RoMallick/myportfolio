import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

import educationStyles from './education.module.scss'

const EducationPage = () => {
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
            <Head title="Education"/>
            <h1 className={educationStyles.firstHeader}>Schooling</h1>

            <h2>Clemson University - Clemson, South Carolina</h2> <br />
            <p>Fall 2020 - Present</p>
            <p>School of Computing</p>
            <p>Masters Degree in Computer Science</p> <br /> <br />

            <h3>Purdue University - West Lafayette, Indiana</h3> <br />
            <p>Fall 2016 - Spring 2020</p>
            <p>Bachelor of Science | College of Health and Human Sciences</p>
            <p>Major : Brain and Behavioral Sciences</p>
            <p>Minor : Computer Science</p> <br /> <br />

            <h4>C. Milton Wright High School - Bel Air, Maryland</h4> <br />
            <p>Aug 2014 - June 2016</p>
            <p>High School Diploma</p>
            <p>Engineering Pathway - Project Lead the Way (PLTW)</p>
            <p>Social Sciences Pathway</p> <br /> <br />

            <h5>United World College of South East Asia - Dover Campus, Singapore</h5> <br />
            <p>Aug 2012 - June 2014</p>
            <p>International General Certificate of Secondary Education (IGCSE)</p>
            <p>2 year program coordinated by Cambridge University</p> <br /> <br />
            </Layout>
    )
}

export default EducationPage