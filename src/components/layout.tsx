import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import SEO, { ILocation } from "./seo/seo"

interface ILayoutProps {
  readonly extraClasses?: string,
  readonly children?: PropTypes.ReactNodeLike

  readonly keywords?: string
  readonly pageTitle?: string
  readonly pageDescription?: string
  readonly pageType?: string
  readonly shouldIndex?: boolean
  readonly location?: ILocation
  readonly facebookImage?: any
  readonly twitterImage?: any
}

interface ILayoutPropsWithData extends ILayoutProps {
  data: any
}

class Layout extends React.Component<ILayoutPropsWithData, {}> {
  public render() {
    const extraClasses = this.props.extraClasses || ""
    const { children, data } = this.props

    return (
      <>
        <SEO pageTitle="Homepage" />
        <div className={`layout ${extraClasses}`}>
          <Header title={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {children}
            <footer>
              © {new Date().getFullYear()}, Starter built with {` `}
              <a
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
            </a>
              {` `}by{` `}
              <a
                href="https://n8finch.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nate Finch
            </a>
            </footer>
          </div>
        </div>
      </>
    )
  }
}

export default (props: ILayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    // tslint:disable-next-line:jsx-no-lambda
    render={(data) => <Layout data={data} {...props} />}
  />
)
