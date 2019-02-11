import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title, page }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <div>
            <Helmet
              htmlAttributes={{
                lang
              }}
              title={data.site.siteMetadata.title}
              titleTemplate={`%s | ${data.site.siteMetadata.description}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription
                },
                {
                  property: `og:title`,
                  content: `${data.site.siteMetadata.title} - ${page}`
                },
                {
                  property: `og:description`,
                  content: metaDescription
                },
                {
                  property: `og:type`,
                  content: `website`
                },
                //we need a URL for this
                // {
                //   property: `og:url`,
                //   content: `https://www.purpleandbold.com`
                // },
                // we need a URL for this, www.lisasurl.com/lisasurl_og.png will be the path for OG image 1200x630 is the best image size
                {
                  property: `og:image`,
                  content: `https://www.author.purpleandbold.gq/brener_og_banner_image.jpg`
                },
                {
                  name: `twitter:card`,
                  content: `summary`
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author
                },
                {
                  name: `twitter:title`,
                  content: data.site.siteMetadata.title
                },
                {
                  name: `twitter:description`,
                  content: metaDescription
                }
              ]
                .concat(
                  keywords.length > 0
                    ? {
                        name: `keywords`,
                        content: keywords.join(`, `)
                      }
                    : []
                )
                .concat(meta)}
            />
            {/* for testing  */}
            {/* <script
              dangerouslySetInnerHTML={{
                __html: `
    <script>
      !(function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "1124198527744940");
      fbq("track", "PageView");
    </script>
    <noscript
      ><img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=1124198527744940&ev=PageView&noscript=1"
    /></noscript>`,
              }}
            /> */}

            {/* for testing */}

            {/* <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-133235986-1"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: ` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-133235986-1');`,
              }}
            /> */}
          </div>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
