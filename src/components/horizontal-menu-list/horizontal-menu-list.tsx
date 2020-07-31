import React from "react"
import "./horizontal-menu-list.scss"

interface IHorizontalMenuListProps {
  readonly extraClasses?: string
  readonly menuItems: Array<any>
}

class HorizontalMenuList extends React.Component<IHorizontalMenuListProps, {}> {
  public render() {
    const { menuItems } = this.props
    const extraClasses = this.props.extraClasses || ""
    return (
      <nav className="horizontal-menu-list">
        <ul className={`horizontal-menu-list__wrapper ${extraClasses}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="horizontal-menu-list__item">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default HorizontalMenuList
