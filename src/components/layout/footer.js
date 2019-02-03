import React, { Component } from 'react';
import purp from "../../images/purp.png"
import "./footer.sass"
import facbook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import twitter from "../../images/twitter.svg"
import email from "../../images/email.svg"
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const data = this.props.data
        return (
            <footer className="footer">
                <h3>stay in Touch</h3>
                <p>Subscribe to my mailing list to receive updates and promotional offers.</p>
                <div className="signup">
                    <form action="">
                        <input type="text" />
                        <button className="submit">+</button>
                    </form>
                </div>
                <div className="icons">
                    <a href={`"mailto:${data.contatEmail}`}> <img src={email} width="20" height="20" alt="email icon" /></a>
                    <a href={data.faceBookLink}> <img src={facbook} width="20" height="20" alt="facebook logo" /></a>
                    <a href={data.twitterLink}> <img src={twitter} width="20" height="20" alt="twitter logo" /></a>
                    <a href={data.instagramkLink}> <img src={instagram} width="20" height="20" alt="instagram logo" /></a>
                </div>

                © {new Date().getFullYear()}, Built by
            {` `}
                <a href="https://www.purpleandbold"><img src={purp} width="50" height="35" alt="" /></a>
            </footer>
        );
    }
}

export default Footer;