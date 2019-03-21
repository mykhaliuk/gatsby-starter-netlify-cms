import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import remark from "remark";
import toc from "remark-toc";
import options from "remark-preset-lint-recommended";
import html from "remark-html";

export const HelpArticleTemplate = ({
  title,
  description,
  content: markdown,
  helmet,
  contentComponent
}) => {
  const PostContent = contentComponent || Content;
  let content;
  remark()
    .use(toc, {heading: 'in[ -]this[ -]article?', tight: false})
    .use(options)
    .use(html)
    .process(
      markdown,
      (err, data) => (content = err ? "Something went wrong )):" : String(data))
    );

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
  contentComponent: PropTypes.func
};

const HelpArticle = props => {
  const {
    helpArticle: { title, description, body }
  } = props.data;

  return (
    <Layout>
      <HelpArticleTemplate
        title={title}
        description={description}
        content={body}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${title}`}</title>
            <meta name="description" content={`${body}`} />
          </Helmet>
        }
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

export const pageQuery = graphql`
  query HelpArticleTemplateQuery($title: String!) {
    helpArticle(title: { eq: $title }) {
      title
      description
      body
    }
  }
`;
