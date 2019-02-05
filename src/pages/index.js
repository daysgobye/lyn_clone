import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Content from "../components/Content/Content";
import "../components/styles/home.sass";
import Img from "gatsby-image";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = this.props.data.contentfulHome;
    console.log(data);
    return (
      <div>
        <SEO />
        <Layout>
          <Content>
            <div className="home col__swap">
              <div className="home__left snap__full">
                <div className="home__left__img">
                  <Img fluid={data.mainImage.fluid} alt="" />
                </div>
              </div>
              <div className="home__right snap__full">
                <h2>{data.titleBlock}</h2>
                <div
                  className="sethtml"
                  dangerouslySetInnerHTML={{
                    __html: data.mainContentBlock.childContentfulRichText.html
                  }}
                />
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export const query = graphql`
  query {
    contentfulHome {
      titleBlock
      mainContentBlock {
        childContentfulRichText {
          html
        }
      }
      mainImage {
        fluid(maxWidth: 400) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`;
export default Index;
