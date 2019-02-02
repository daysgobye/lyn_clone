import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import hero from "../images/test.png"

import LaxHeader from "../components/laxheader/laxheader"
import "../components/styles/about.sass"
import Content from "../components/Content/Content"
const About = () => (
  <Layout>
    <LaxHeader bgimg={hero}>
      <div style={{ padding: "40vh" }}></div>
    </LaxHeader>
    <Content>
      <div className="about">
        <div className="about__left">
          <h2>
            We Were Smiths
</h2>
        </div>
        <div className="about__right">
          <p>
            In my memoir, We Were Smiths: A Memoir, I reveal the consequences of leaving the Mormon Church as a descendant of Joseph Smith, the Mormon Church founder and prophet.  Why did my sister and I feel compelled to leave when so much was at stake? My family was considered Mormon royalty, but it was vulnerable to teenage rebellion, divorce, and substance abuse buried under the surface of our family’s perfect veneer.

            We Were Smiths: A Memoir chronicles the divergent paths my sister and I took in abandoning the Mormon Church; me to Manhattan, and my sister to California. While close allies in our family of eleven, we rebelled in completely separate ways but remained close despite our contrasting lifestyles. My sister’s path took her from singing for drinks in Blues dives in San Francisco, to looking for love in the violent Hell’s Angels Long Beach posse.  Meanwhile, I was breaking the “boys only rule “ by launching the new Personal Computer with IBM but spending my nights caught in the spell of Studio 54’s coated cocaine scene.  We both gain our freedom from the Church but at very different costs.
            Literary agent, Don Fehr, Senior Vice President at Trident Media in NYC, represents me.  I hope to finish my revisions and complete We Were Smiths: A Memoir sometime in 2019.
</p>
        </div>
      </div>
    </Content>

  </Layout>
);


export default About
