import React from "react";
import PropTypes from "prop-types";
import ArticleList from "../components/ArticleList";
import { graphql } from "gatsby";

export const HelpSubjectTemplate = props => {

  const { data } = props;
  const { subjectTitle } = data.markdownRemark.frontmatter;
  const { articles } =  data.markdownRemark.frontmatter
  const  {edges: sections} =  data.allMarkdownRemark

  return (
    <section className="section">
      <div className="container content">
        <ArticleList articles={articles} pageTitle={subjectTitle} sections={sections}/>
      </div>
    </section>
  );
};

HelpSubjectTemplate.propTypes = {
  title: PropTypes.string
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
          section
          title
          description
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter:{templateKey:{eq: "help-section"}}}){
      edges{
        node{
          id
          frontmatter{
            title
            image{
              publicURL
              name
            }
          }
        }
      }
    }
  }
`;
