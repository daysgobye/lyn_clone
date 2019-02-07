import React, { Component } from "react";
import Layout from "../components/layout/layout";
import Content from "../components/Content/Content";
import { graphql } from "gatsby";
import "../components/styles/excerpt.sass";
import SEO from "../components/seo";

class Excerpt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = this.props.data.contentfulExcerpt;
    console.log(data);

    return (
      <div>
        <SEO page="Excerpts" />
        <Layout>
          <Content>
            <div className="exc">
              <div className="exc__main">
                <div className="exc__main__title">
                  <h2>{data.pageHeading}</h2>
                </div>
                {data.mainExcerpt.map((page, index) => (
                  <div className="exc__main__page" key={index}>
                    <div
                      className="sethtml"
                      dangerouslySetInnerHTML={{
                        __html:
                          page.mainPageContent.childContentfulRichText.html
                      }}
                    />
                    <p className="exc__main__page__num">{page.pageNumber}</p>
                  </div>
                ))}
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
    contentfulExcerpt {
      mainExcerpt {
        pageNumber
        mainPageContent {
          childContentfulRichText {
            html
          }
        }
      }
      pageHeading
    }
  }
`;
export default Excerpt;
