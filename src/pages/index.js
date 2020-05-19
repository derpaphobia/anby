import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people <i class="icon icon-2x icon-emoji"></i></h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
    <StaticQuery
    query={graphql`
      query BlogPost {
        allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
          edges {
            node {
              title
              slug
              publishDate(formatString: "MMMM Do, YYYY")
              tags
              heroImage {
                fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
        allContentfulPerson(
          filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
        ) {
          edges {
            node {
              name
              shortBio {
                shortBio
              }
              title
              heroImage: image {
                fluid(
                  maxWidth: 1180
                  maxHeight: 480
                  resizingBehavior: PAD
                  background: "rgb:000000"
                ) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={({
      allContentfulBlogPost: {
        title,
        author,
        publishDate,
        heroImage,
      }
    }) => (
      <>
        <h1>{title}</h1>
        <p>{author}</p>
        <small>Created on {publishDate}</small>
        <img src={heroImage} />
      </>
    )}
  />
);
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
