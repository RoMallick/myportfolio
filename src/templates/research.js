import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

import researchPostsStyles from "./researchPosts.module.scss"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug} }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Research = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title} className={researchPostsStyles.firstHeader}/>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Research
