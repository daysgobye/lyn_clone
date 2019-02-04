import React, { Component } from 'react';
import Layout from "../components/layout/layout"
import Content from '../components/Content/Content'
class Excerpt extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Layout>
                <Content>
                    good shit
            </Content>
            </Layout>
        );
    }
}

export default Excerpt;