import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo/seo"

interface IIndexProps {
  data: any
}

class Index extends React.Component<IIndexProps, {}> {
  public render() {
    const { data } = this.props
    const posts =
      data.wpgraphql.posts.edges.length > 0 ? data.wpgraphql.posts.edges : []

    return (
      <Layout pageTitle="Homepage">
        <h1>My Blog</h1>
        <h2>Posts</h2>
        {posts.length > 0 &&
          posts.map(({ node }, index) => (
            <div key={index}>
              <div key={node.slug}>
                <Link to={`/${node.slug}`}>
                  <div dangerouslySetInnerHTML={{ __html: node.title }} />
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </div>
          ))}
        <br />
        <hr />
        <br />
        <h2>Pages</h2>
        {data.wpgraphql.pages.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={`/${node.slug}`}>
              <div dangerouslySetInnerHTML={{ __html: node.title }} />
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
        <br />
        <hr />
        <br />
        <h2>Categories</h2>
        {data.wpgraphql.categories &&
          data.wpgraphql.categories.edges.length > 0 &&
          data.wpgraphql.categories.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={`/category/${node.slug}`}>
                <div dangerouslySetInnerHTML={{ __html: node.name }} />
              </Link>
            </div>
          ))}
        <br />
        <hr />
        <br />
        <h2>Tags</h2>
        {data.wpgraphql.tags.edges &&
          data.wpgraphql.tags.edges.length > 0 &&
          data.wpgraphql.tags.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={`/tag/${node.slug}`}>
                <div dangerouslySetInnerHTML={{ __html: node.name }} />
              </Link>
            </div>
          ))}
      </Layout>
    )
  }
}

export default (props: IIndexProps) => (
  <StaticQuery
    query={graphql`
      query GET_POSTS {
        wpgraphql {
          posts(first: 1000, after: null) {
            edges {
              node {
                databaseId
                slug
                title
                date
                content(format: RENDERED)
                featuredImage {
                  altText
                  link
                  mediaItemUrl
                  uri
                }
              }
            }
          }
          pages(first: 1000, after: null) {
            edges {
              node {
                databaseId
                slug
                title
                date
                content(format: RENDERED)
                featuredImage {
                  altText
                  link
                  mediaItemUrl
                  uri
                }
              }
            }
          }
          categories(first: 1000) {
            edges {
              node {
                databaseId
                name
                slug
              }
            }
          }
          tags(first: 1000) {
            edges {
              node {
                databaseId
                name
                slug
              }
            }
          }
        }
      }
    `}
    // tslint:disable-next-line jsx-no-lambda
    render={(data) => <Index data={data.wpgraphql} {...props} />}
  />
)
