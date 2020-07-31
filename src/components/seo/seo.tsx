import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

interface IDefaultSEOProps {
  readonly keywords?: string
  readonly pageTitle?: string
  readonly pageDescription?: string
  readonly pageType?: string
  readonly shouldIndex?: boolean
  readonly facebookImage?: any
  readonly twitterImage?: any
}

interface IDefaultSEOPropsWithData extends IDefaultSEOProps {
  data: any
}

class SEO extends React.Component<IDefaultSEOPropsWithData, {}> {
  public render() {
    const {
      pageTitle,
      pageDescription,
      keywords,
      shouldIndex,
      data,
      pageType,
      facebookImage,
      twitterImage,
    } = this.props
    const title = pageTitle ? pageTitle : data.site.siteMetadata.title
    const description = pageDescription
      ? pageDescription
      : data.site.siteMetadata.description
    const defaultKeywords = keywords !== "" ? keywords : "pixelmatters,gatsby,template"

    return (
      <>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta http-equiv="content-type" content="text/html charset=UTF8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {typeof window !== "undefined" &&
            window.location.origin &&
            window.location.pathname && (
              <meta
                property="og:url"
                content={`${window.location.origin}${window.location.pathname}`}
              />
            )}
          <meta
            property="og:type"
            content={pageType === "post" ? "article" : "website"}
          />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          {facebookImage && (
            <meta
              property="og:image"
              content={facebookImage}
              data-react-helmet={true}
            />
          )}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {twitterImage && (
            <meta
              name="twitter:image"
              content={twitterImage}
              data-react-helmet={true}
            />
          )}
          {!shouldIndex && <meta name="robots" content="noindex,nofollow" />}
        </Helmet>
      </>
    )
  }
}

export default (props: IDefaultSEOProps) => (
  <StaticQuery
    query={graphql`
      query SEOIndexQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    // tslint:disable-next-line jsx-no-lambda
    render={(data) => <SEO data={data} {...props} />}
  />
)
