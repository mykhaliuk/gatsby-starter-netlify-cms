import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const HelpArticleTemplate = ({
  title,
  description,
  content,
  helmet,
  contentComponent,
  table
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
            ------------------------------------------------
            <PostContent content={table} />
          </div>
        </div>
      </div>
    </section>
  );
};

HelpArticleTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.object,
  helmet: PropTypes.object,
  contentComponent: PropTypes.func,
  table: PropTypes.func
};

const HelpArticle = props => {
  console.log( props )
  const { markdownRemark: article } = props.data;

  return (
    <Layout>
      <HelpArticleTemplate
        content={article.html}
        contentComponent={HTMLContent}
        description={article.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${article.frontmatter.title}`}</title>
            <meta name="description" content={`${article.html}`} />
          </Helmet>
        }
        title={article.frontmatter.title}
        table={article.tableOfContents}
      />
    </Layout>
  );
};

HelpArticleTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default HelpArticle;

// export const pageQuery = graphql`
//   query HelpArticleTemplateQuery($title: String!) {
//     markdownRemark(title: { eq: $title }) {
//       id
//       html
//       tableOfContents
//       frontmatter {
//         title
//         description
//         body
//       }
//       fields {
//         slug
//       }
//     }
//   }
// `;
