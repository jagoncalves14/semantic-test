import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogTemplate = (params: any) => {
  const data = params.data
  return (
    <Layout pageTitle={data.wpgraphql.post.title} pageType="post">
      {data.wpgraphql.post.featuredImage && (
        <img
          src={data.wpgraphql.post.featuredImage.mediaItemUrl}
          alt={data.wpgraphql.post.title}
        />
      )}
      <h1 dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.title }} />
      <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      post(id: $databaseId, idType: DATABASE_ID) {
        title
        date
        content(format: RENDERED)
        categories {
          edges {
            node {
              name
            }
          }
        }
        excerpt(format: RENDERED)
        featuredImage {
          altText
          title(format: RENDERED)
          mediaItemUrl
          slug
        }
      }
    }
  }
`
