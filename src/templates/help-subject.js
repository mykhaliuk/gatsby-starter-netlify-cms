import React from "react";
import PropTypes from "prop-types";
import ArticleList from "../components/ArticleList";
import { graphql } from "gatsby";

export const HelpSubjectTemplate = props => {
  const { data } = props;
  const { subjectTitle } = data.markdownRemark.frontmatter;
  const { articles } = data.markdownRemark.frontmatter;

  return (
    <section className="section">
      <div className="container content">
        <ArticleList articles={articles} pageTitle={subjectTitle} />
      </div>
    </section>
  );
};

HelpSubjectTemplate.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.array
};

export default HelpSubjectTemplate;

export const pageQuery = graphql`
  query HelpSubjectTemplate($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        subjectTitle: title
        articles {
          section {
            id
            frontmatter {
              title: sectionTitle
              image {
                name
                publicURL
              }
            }
          }
          title
          description
        }
      }
    }
  }
`;
