import React, { Component } from "react";
import Layout from "../components/layout/layout";
import Content from "../components/Content/Content";
import LaxHeader from "../components/laxheader/laxheader";
// import hero from "../images/test.png";
import SEO from "../components/seo";
import "../components/styles/memoir.sass";
import { graphql } from "gatsby";

class memoir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentDidMount() {
    this.loadElements();
  }
  loadElements() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 50);
  }
  render() {
    const data = this.props.data.contentfulMemoir;

    return (
      <div>
        <SEO page="Memoir" />
        <Layout>
          <LaxHeader bgimg={data.heroImage.file.url}>
            <div
              className={`sethtml mem__herotext ${
                this.state.loaded ? "loaded" : ""
                }`}
              style={{ height: "85vh" }}
              dangerouslySetInnerHTML={{
                __html: data.heroText.childContentfulRichText.html
              }}
            />
          </LaxHeader>
          <Content>
            <div className="mem">
              <div className="mem__main">
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
    contentfulMemoir {
      heroImage {
        file {
          url
        }
      }
      heroText {
        childContentfulRichText {
          html
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

export default memoir;
