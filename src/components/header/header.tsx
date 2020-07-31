import React from "react"
import HorizontalMenuList from "../horizontal-menu-list/horizontal-menu-list"
import { Link, StaticQuery, graphql } from "gatsby"

import "./header.scss"

interface IHeaderProps {
  readonly extraClasses?: string
  readonly title?: string
}

interface IHeaderPropsWithData extends IHeaderProps {
  data: any
}

class Header extends React.Component<IHeaderPropsWithData, {}> {
  public render() {
    const extraClasses = this.props.extraClasses || ""
    const { title, data } = this.props
    const items = data.menus.edges[0].node.menuItems.nodes

    return (
      <div className={`header ${extraClasses}`}>
        <div className="header__wrapper">
          <h1 className="header__title">
            <Link to="/">{title}</Link>
          </h1>
          <HorizontalMenuList extraClasses="" menuItems={items} />
        </div>
      </div>
    )
  }
}

export default (props: IHeaderProps) => (
  <StaticQuery
    query={graphql`
      query headerMenu {
        wpgraphql {
          menus(where: { location: HEADER_MENU }) {
            edges {
              node {
                menuItems {
                  nodes {
                    url
                    title: label
                    target
                  }
                }
              }
            }
          }
        }
      }
    `}
    // tslint:disable-next-line jsx-no-lambda
    render={(data) => <Header data={data.wpgraphql} {...props} />}
  />
)
