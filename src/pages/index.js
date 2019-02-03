import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from '../components/Content/Content'
import "../components/styles/home.sass"
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const data = this.props.data.contentfulHome
    return (
      <Layout>

        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Content>
          <div className="home col__swap">
            <div className="home__left snap__full">
              <div className="home__left__img">
                <img src={data.mainImage.file.url} alt="" />
              </div>
            </div>
            <div className="home__right snap__full">
              <h2>
                {data.titleBlock}
              </h2>
              <div className="sethtml" dangerouslySetInnerHTML={{ __html: data.mainContentBlock.childContentfulRichText.html }}></div>
            </div>
          </div>
        </Content>
      </Layout>);
  }
}


export const query = graphql`
  query {
    contentfulHome{
      titleBlock
      mainContentBlock{
        childContentfulRichText{
          html
        }
      }
      mainImage{
        file{
          url
        }
        fluid{
          aspectRatio
        }
      }
    }
  }
`
export default Index;