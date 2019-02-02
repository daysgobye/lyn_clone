import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import Content from '../components/Content/Content'
import LaxHeader from '../components/laxheader/laxheader'
import hero from "../images/test.png"
import "../components/styles/memoir.sass"
class memoir extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Layout>
                <LaxHeader bgimg={hero}>
                    <h1 style={{ padding: "40vh" }}>good stuff</h1>
                </LaxHeader>
                <Content>
                    <div className="mem">
                        <div className="mem__main">
                            <p>    We Were Smiths: A Memoir is a unique, insider account of growing up as royalty in the Mormon Church, where lineage and family birthright define one’s status and importance. My great-great-grandfather was one of the few descendants of Joseph Smith to come west as a young orphan with Brigham Young, making my family a rarity in Utah who can claim a connection to the Church’s original founder and prophet.

        We Were Smiths: A Memoir will appeal to readers who enjoy pulling back the covers to see the dramatic  truth inside of a family collapsing under the weight of this unique Mormon legacy and how they implode and disperse, both physically and emotionally, from each other in the wake of an explosive family secret.

        This first-person account details how two sisters break away from Church and family, in wildly different ways, fleeing Utah and everything they’ve known to chase their dreams.   Taking place  in Utah, California, and Manhattan,  I recreate, from my sister’s and my own extensive journals, a vivid picture of their vastly different and, sometimes similar, struggles to survive outside the Mormon faith and culture.

        I divulge the family’s hidden flaws and secrets—alcoholism, bulimia, sexual abuse and suicide—assessing their impact on the family’s eventual dissolution. I also offer an insider’s perspective on how Mormon belief systems contributed to this fragmentation, to create the split between faithful Mormons and shunned Apostates and their struggle to somehow remain Smiths, a clan with fierce loyalties and love for each other.  I try to answer the question: Is it possible to transcend religious barriers and belief systems and retain a sense of family identity and belonging?

        At its heart, this is also a story of truth transforming a family as they explore the limits and exceptions of forgiveness, relinquishing old definitions of family, even God, in the attempt to reconcile as a family under a new, more generous and tolerant umbrella called the Smith family.

We Were Smiths: A Memoir mines the emotionally rich territory of memoirs such as Educated by Tara Westover, Leaving the Saints by Martha Beck and Jon Krakauer’s Under the Banner of Heaven, exploring the pitfalls of legacy, religion, identity, and the costs of freedom.</p>
                        </div>
                    </div>
                </Content>

            </Layout>
        );
    }
}

export default memoir;