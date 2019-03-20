import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import _ from "lodash";

const ArticleList = ({ articles, sections, pageTitle }) => {
  return (
    <div className="">
      <h1>{pageTitle}</h1>
      {articles && articles.length > 0 ? (
        sections.map(({ node: section }) => {
          // eslint-disable-next-line
          const currentSectionArticles = _.filter(
            articles,
            article => article.section === section.frontmatter.title
          );
          const currentArticles = currentSectionArticles.map(article => {
            return (
              <Link to={`/${ _.kebabCase(article.title)}`} key={article.title}>
                <article>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </article>
              </Link>
            );
          });
          const {image} = section.frontmatter
          return (
            <div key={section.frontmatter.title}>
              <div>
                <img
                  src={image ? image.publicURL : '#'}
                  alt={image ? image.name : 'no picture'}
                  style={{
                    width: '4rem',
                  }}
                />
                <h2
                  style={{
                    display: 'inline-block',
                    marginLeft: '1rem'
                  }}>{section.frontmatter.title}</h2>
              </div>
              <div>{currentArticles}</div>
              <br />
              <br />
            </div>
          );
        })
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
};

ArticleList.propTypes = {
  pageTitle: PropTypes.string,
  articles: PropTypes.array,
  sections: PropTypes.array
};

export default ArticleList;

/*() => {
  const query = graphql`
    query ArticleListQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              articles {
                body
                description
                section
                title
              }
            }
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={query}
      render={(data, count) => (
        <ArticleList data={data} count={count} />
      )}
    />
  );
};*/
