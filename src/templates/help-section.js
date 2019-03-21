import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const HelpSectionTemplate = ({ icon, title }) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div>
              <img
                src={icon ? icon.publicURL : null}
                alt={icon ? icon.name : null}
                style={{
                  height: "3rem",
                  width: "3rem",
                  position: "relative",
                  top: "10px"
                }}
              />
              <h1
                className="title is-size-2 has-text-weight-bold is-bold-light"
                style={{
                  color: "#4cb75b",
                  display: "inline-block",
                  paddingLeft: "1rem",
                  margin: "0 0 1.5rem 0"
                }}
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HelpSectionTemplate.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string
};

const HelpSection = ({ data }) => {
  const { section } = data;

  return (
    <Layout>
      <HelpSectionTemplate
        icon={section.frontmatter.icon}
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

export const HelpSectionPageQuery = graphql`
  query HelpSectionByID($id: String!) {
    section: markdownRemark(id: { eq: $id }) {
      id
      frontmatter{
        title
        image{
          name
          publicURL
        }
      }
    }
  }
`;
