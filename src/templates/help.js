import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const HelpSubjectTemplate = ({
  title,
  icon
}) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              Title:
            </h1>
            <p>{title}</p>
            <h1>icon</h1>
            <pre>{icon}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

HelpSubjectTemplate.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
};

const HelpSection = ({ data }) => {
  const { markdownRemark: section } = data;

  return (
    <Layout>
      <HelpSubjectTemplate
        icon={section.frontmatter.image}
        title={section.frontmatter.title}
      />
    </Layout>
  );
};

export default HelpSubjectTemplate;

export const pageQuery = graphql`
  query HelpSubjectTemplate($id: String!) {
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
