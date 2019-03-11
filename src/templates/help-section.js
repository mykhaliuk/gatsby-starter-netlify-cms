import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const HelpSectionTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

HelpSectionTemplate.propTypes = {
  icon:  PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const HelpSection = ({ data }) => {
  const { markdownRemark: section } = data;


  return(
    <Layout>
      <HelpSectionTemplate
        icon={section.frontmatter.image}
        content={section.html}
        contentComponent={HTMLContent}
        description={section.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${section.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${section.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={section.frontmatter.tags}
        title={section.frontmatter.title}
      />
    </Layout>
  );
};

HelpSection.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default HelpSection;

export const pageQuery = graphql`
  query HelpSectionByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
