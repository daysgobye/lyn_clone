import React, { Component } from "react";
import Layout from "../components/layout/layout";
import Content from "../components/Content/Content";
import "../components/styles/contact.sass";
import Conform from "../components/conform/conform";
import { graphql } from "gatsby";
import SEO from "../components/seo";

class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props.data.contentfulSiteMisc;
    return (
      <div>
        <SEO page="Contact" />
        <Layout>
          <Content>
            <div className="contact">
              <div className="contact__title">
                <h2>Contact</h2>
              </div>
              <div className="contact__col col__swap">
                <div className="contact__col__left snap__full">
                  <h3>get in touch</h3>
                  <p>{data.contactEmail}</p>
                  <div
                    className="contact__col__left__address"
                    dangerouslySetInnerHTML={{
                      __html: data.address.childContentfulRichText.html
                    }}
                    />
                    <p>{data.contactPhonenumber}</p>
                </div>
                <div className="contact__col__right snap__full">
                  <Conform email={data.contactEmail}>
                    <label>
                      Name *
                      <div className="name">
                        <div className="name__input">
                          <input required type="text" id="first" />
                          <p>First Name</p>
                        </div>
                        <div className="name__input">
                          <input required type="text" id="last" />
                          <p>Last Name</p>
                        </div>
                      </div>
                    </label>
                    <label>
                      Email Address *
                      <input required type="text" />
                    </label>
                    <label>
                      Subject *
                      <input required type="text" />
                    </label>
                    <label>
                      Message *
                      <textarea name="message" id="" cols="30" rows="10" />
                    </label>
                    <button type="submit" className="submit">
                      {" "}
                      +{" "}
                    </button>
                  </Conform>
                </div>
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
    contentfulSiteMisc {
      contactEmail
      contactPhonenumber
      address {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;

export default contact;
