import React, { Component } from 'react';
import purp from "../../images/purp.png"
import "./footer.sass"
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <footer className="footer">
                <h3>stay in Touch</h3>
                <p>Subscribe to my mailing list to receive updates and promotional offers.</p>
                <div className="signup">
                    <form action="">
                        <input type="text" />
                        <button>+</button>
                    </form>
                </div>
                <div className="icons">
                    meida icons
                </div>

                © {new Date().getFullYear()}, Built by
            {` `}
                <a href="https://www.purpleandbold"><img src={purp} width="50" height="35" alt="" /></a>
            </footer>
        );
    }
}

export default Footer;