import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

import researchStyles from './Research.module.scss'

const ResearchPage = () => {
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
            <Head title="Research"/>
            <h1 className={researchStyles.firstHeader}>
                My Research Experiences!
            </h1>
            <ol className={researchStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={researchStyles.post}>
                            <Link to={`/Research/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default ResearchPage