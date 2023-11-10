import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Playa de Curiñanco"
        src="../images/curinanco.jpeg"
        />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}


export default IndexPage

export const Head = () => <title>Home Page</title>
