import React, { Component } from 'react';
import "./footer.sass"
import BuiltBy from "./builtby"
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
                <h3>Stay in Touch</h3>
                <p>Subscribe to my mailing list to receive updates and promotional offers.</p>
                <div className="signup">
                    <form action="">
                        <input type="text" />
                        <button className="submit">+</button>
                    </form>
                </div>
                <div className="icons">
                    <a href={`"mailto:${data.contatEmail}`}> <img src={email} width="17" height="17" alt="email icon" /></a>
                    <a href={data.faceBookLink}> <img src={facbook} width="17" height="17" alt="facebook logo" /></a>
                    <a href={data.twitterLink}> <img src={twitter} width="17" height="17" alt="twitter logo" /></a>
                    <a href={data.instagramkLink}> <img src={instagram} width="17" height="17" alt="instagram logo" /></a>
                </div>
                <BuiltBy />
            </footer>
        );
    }
}

export default Footer;