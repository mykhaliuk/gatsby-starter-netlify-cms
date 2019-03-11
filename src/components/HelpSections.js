import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

class HelpSections extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: sections } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {sections &&
          sections.map(({ node: section }) => {
            const { image }  = section.frontmatter
            console.log( image )
            return (
              <div className="is-parent column is-6" key={section.id}>
                <article className="tile is-child box notification">
                  <img
                    src={
                      `${!!image && !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image}`
                    }
                    alt=""
                  />
                  <p>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={section.fields.slug}
                    >
                      {section.frontmatter.title}
                    </Link>
                  </p>
                  <p>
                    <Link className="button" to={section.fields.slug}>
                      Browse articles →
                    </Link>
                  </p>
                </article>
              </div>
            );
          })}
      </div>
    );
  }
}

HelpSections.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query HelpSectionsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "help-section" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <HelpSections data={data} count={count} />}
  />
);
