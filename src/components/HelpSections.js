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
            const { image } = section.frontmatter;

            return (
              <div className="is-parent column is-6" key={section.id}>
                <Link
                  className="title has-text-primary is-size-4"
                  to={section.fields.slug}
                >
                  <article className="tile is-child box notification">
                    <img
                      src={`${
                        !!image && !!image.childImageSharp
                          ? image.childImageSharp.fluid.src
                          : image.publicURL
                      }`}
                      alt={!!image ? image.relativePath : ""}
                      style={{
                        width: "5rem",
                        height: "5rem",
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />

                    {section.frontmatter.title}
                    <p>Browse articles →</p>
                  </article>
                </Link>
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
          filter: { frontmatter: { templateKey: { eq: "help-subject" } } }
          sort: { order: DESC, fields: [frontmatter___title] }
        ) {
          totalCount
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                image {
                  publicURL
                  relativePath
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <HelpSections data={data} count={count} />}
  />
);
