import React, { Component } from "react";
import Layout from "../components/layout/layout";
import Img from "gatsby-image";

//components
import Content from "../components/Content/Content";

//styles
import "../components/styles/photogallery.sass";

class photoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Content>
          <div className="photogallery">
            <div className="photogallery__container">
              <h1>photo-gallery sick page</h1>
              <div className="photogallery__container__grid">
                {data.contentfulPhotoGallery.mainImageGallery.map(img => (
                  <Img fluid={img.image.fluid} />
                  // <h3 className="photogallery__container__grid__item">
                  //   this is an image
                  // </h3>
                ))}
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    contentfulPhotoGallery {
      mainImageGallery {
        image {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_noBase64
          }
          description
        }
      }
    }
  }
`;

export default photoGallery;
