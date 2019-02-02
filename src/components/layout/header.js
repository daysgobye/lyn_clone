import React, { Component } from 'react';
import { Link } from "gatsby"
import "./header.sass"
import Content from '../Content/Content'
class Headder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlinks: [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Memoir",
          link: "memoir"
        },
        {
          title: "About",
          link: "about"
        },
        {
          title: "Photo gallery",
          link: "photo-gallery"
        },
        {
          title: "Contact",
          link: "contact"
        },
      ],
      navOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }
  toggleNav() {
    const currentstate = this.state.navOpen
    this.setState({ navOpen: !currentstate });
  }
  render() {
    return (<Content>
      <div className="header">

        <h1>
          <Link to={"/"}>

            {this.props.siteTitle}
          </Link>
        </h1>
        {/* desktop nav */}
        <div className="desktop">
          <nav className="nav">
            {this.state.navlinks.map((link, index) => (
              <div className="nav__link">
                <Link to={link.link} key={index}>
                  {link.title}
                </Link>
              </div>

            ))}
          </nav>
        </div>
        {/* mobile nav */}
        <div className="mobile">
          <button onClick={() => this.toggleNav()}>
            3 dots
</button>
          <nav className="nav">
            {this.state.navlinks.map((link, index) => (
              <div className="nav__link">
                <Link to={link.link} key={index}>
                  {link.title}
                </Link>
              </div>

            ))}
          </nav>
        </div>
      </div>
    </Content>
    );
  }
}

export default Headder;