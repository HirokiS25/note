import React from 'react'
import {graphql} from 'gatsby'
import {css} from '@emotion/react'
import {rhythm} from '../utils/typography'
import Layout from '../components/layout'

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <h1 css={css`
        display: inline-block;
        border-bottom: 1px solid;
      `}>
        Hi! I'm building a fake Gatsby site as part of a tutorial!
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 css={css`
            margin-bottom: ${rhythm(1/4)};
          `}>
            {node.frontmatter.title}{" "}
            <span css={css`
              color: #bbb;
            `}>
              - {node.frontmatter.title}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
  );
}


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
          }
        }
    }
  }
`