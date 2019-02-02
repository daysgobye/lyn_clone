import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import Content from "../components/Content/Content"
import "../components/styles/contact.sass"
import Conform from '../components/conform/conform'
class contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Layout>
                <Content>
                    <div className="contact">
                        <div className="contact__title">
                            <h2>contact</h2>
                        </div>
                        <div className="contact__col col__swap">

                            <div className="contact__col__left snap__full">
                                <h3>get in touch</h3>
                                <p>111-222-3333</p>
                                <p>bigdaddy@youknowit.org</p>
                            </div>
                            <div className="contact__col__right snap__full">
                                <Conform email="l33t.ppl@gmail.com">
                                    <label>
                                        Name *
                                        <div className="name">
                                            <input required type="text" id="first" />
                                            <input required type="text" id="last" />
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
                                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                                    </label>
                                    <button type="submit" className="submit"> + </button>
                                </Conform>
                            </div>
                        </div>
                    </div>
                </Content>

            </Layout>
        );
    }
}

export default contact;