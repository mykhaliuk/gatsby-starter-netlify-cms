import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const HelpSectionTemplate = ({ icon, title }) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <pre>{icon}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

HelpSectionTemplate.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string
};

const HelpSection = ({ data }) => {
  const { markdownRemark: section } = data;

  return (
    <Layout>
      <HelpSectionTemplate
        icon={section.frontmatter.image}
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
      frontmatter {
        title
        icon {
          publicURL
          relativePath
        }
      }
    }
  }
`;
