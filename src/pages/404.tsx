import React from "react"

import Layout from "../components/layout"
interface INotFoundView {}

export default class DiscoverView extends React.Component<INotFoundView, {}> {
  public render() {
    return (
      <Layout pageTitle="Error - 404">
        <h1> NOT FOUND </h1>
        <p> You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}
