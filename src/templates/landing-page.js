import React from "react"
import "../css/main.css"
import Layout from "../components/layout"


const Landing = ({ data }) => {

  return (
    <>
      <Layout current={"Home"}>
        <div>
          Landing Page
        </div>
      </Layout>
    </>
  )
}

export default Landing

// export const pageQuery = graphql`
//   query LandingPageQuery($id: String!) {}
// `
