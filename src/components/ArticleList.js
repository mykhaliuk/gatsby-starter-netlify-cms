import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import _ from "lodash";
import  uid  from "uuid/v1";

const renderSection = (section, articles = []) => {
  const { image, title } = section.frontmatter;

  return (
    <div className={`section-block`} key={uid()}>
      <div className={`section-header-block`}>
        <img
          className={`section-header-icon`}
          src={image ? image.publicURL : "#"}
          alt={image ? image.name : "no picture"}
          style={{
            width: "4rem"
          }}
        />
        <h2
          className={`section-header`}
          style={{
            display: "inline-block",
            marginLeft: "1rem"
          }}
        >
          {title}
        </h2>
      </div>
      <div className={`section-articles-block`}>{articles}</div>
    </div>
  );
};
const renderArticle = ({ title, description }) => {
  return (
    <Link to={`/${_.kebabCase(title)}`} key={uid()}>
      <article>
        <h3>{title}</h3>
        <p>{_.truncate(description, { length: 150, separator: /,? +/ })}</p>
      </article>
    </Link>
  );
};

function renderArticleList(articles) {
  let D = {}
  let currentSectionID = articles[0].section.id;
  D.currentSectionArticles = [];
  let content = [];

  for (let i = 0; i < articles.length; i++) {
    // if this article is part of the current section...
    if (articles[i].section.id === currentSectionID) {
      // put it to currentSectionArticles
      D.currentSectionArticles.push(renderArticle(articles[i]));
    } else {
      // if this article is NOT from the current section
      // render section and push it in content...
      content.push(
        renderSection(articles[i - 1].section, D.currentSectionArticles)
      );
      // put the current article into empty currentSectionArticles
      D.currentSectionArticles = [];
      D.currentSectionArticles.push(renderArticle(articles[i]));
      currentSectionID = articles[i].section.id;
    }
    // if that was LAST article then render section, put in content and return
    if (i === articles.length - 1) {
      content.push(
        renderSection(articles[i].section, D.currentSectionArticles)
      );
      delete D.currentSectionArticles;
      return content;
    }
  }
}

const ArticleList = ({ articles, pageTitle }) => {
  return (
    <div className="">
      <h1>{pageTitle}</h1>
      {articles && articles.length > 0 ? (
        renderArticleList(articles)
      ) : (
        <h2>No articles to show ):</h2>
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
