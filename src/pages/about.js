import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import hero from "../images/test.png";

import LaxHeader from "../components/laxheader/laxheader";
import "../components/styles/about.sass";
import Content from "../components/Content/Content";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = this.props.data.contentfulAbout;
    return (
      <div>
        <SEO page="About" />
        <Layout>
          <div className="about__hero">
            <LaxHeader bgimg={data.heroImage.file.url}>
              <div style={{ height: "85vh" }} />
            </LaxHeader>
          </div>
          <Content>
            <div className="about col__swap">
              <div className="about__left snap__full">
                <h2>{data.pageTitle}</h2>
              </div>
              <div className="about__right snap__full">
                <div
                  className="sethtml"
                  dangerouslySetInnerHTML={{
                    __html: data.mainContent.childContentfulRichText.html
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
    contentfulAbout {
      pageTitle
      heroImage {
        file {
          url
        }
      }
      mainContent {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;

export default About;
