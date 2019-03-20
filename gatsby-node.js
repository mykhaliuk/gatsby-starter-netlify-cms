const _ = require("lodash");
const path = require("path");
const uuid = require("uuid/v1");
const crypto = require("crypto");

const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const digest = data => {
  return crypto
    .createHash(`md5`)
    .update(JSON.stringify(data))
    .digest(`hex`);
};
exports.createPages = ({ actions, graphql, createNodeId }) => {
  const { createPage, createNode } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
              templateKey
              articles {
                section
                title
                description
                body
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);
    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;
      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag
        }
      });
    });

    // Help articles pages:
    let helpArticles = [];
    // Iterate through each post, putting all found articles into `helpArticles`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.articles`)) {
        edge.node.frontmatter.articles.forEach(article => {
          article.subject = edge.node.id;
        });
        helpArticles = helpArticles.concat(edge.node.frontmatter.articles);
      }
    });

    // Create help articles pages
    helpArticles.forEach(article => {
      createPage({
        path: `/${_.kebabCase(article.title)}/`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          title: article.title
        }
      });
    });
  });
};

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest
}) => {
  const { createNodeField, createNode } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }

  // Create help articles nodes to be able query them
  if (node.frontmatter && node.frontmatter.templateKey === "help-subject") {
    let articles = [];
    //find all articles in subject nodes
    node.frontmatter.articles.forEach(a => {
      articles = _.concat(articles, a);
    });
    //create articles nodes
    articles.forEach(a => {
      createNode({
        ...a,
        // Required fields
        id: createNodeId(a.title),
        parent: a.subject, // or null if it's a source node without a parent
        children: [],
        internal: {
          type: `helpArticle`,
          // todo: make it work!
          // mediaType: "text/markdown",
          contentDigest: createContentDigest(a)
        }
      });
    });
  }
};
