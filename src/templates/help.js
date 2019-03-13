import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const HelpSectionTemplate = ({
  title,
  icon
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

HelpSectionTemplate.propTypes = {
  icon: PropTypes.object,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const HelpSection = ({ data }) => {
  const { markdownRemark: section } = data;

  return (
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
        title={section.frontmatter.title}
        icon={section.frontmatter.icon}
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
  query HelpByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        image {
          relativePath
          publicURL
        }
      }
    }
  }
`;
