webpackHotUpdate(0,{

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(184);
/* harmony import */ var _components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(196);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).enterModule;
  enterModule && enterModule(module);
})();







var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var image = _ref.image,
      title = _ref.title,
      heading = _ref.heading,
      subheading = _ref.subheading,
      mainpitch = _ref.mainpitch,
      description = _ref.description,
      intro = _ref.intro,
      main = _ref.main;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "full-width-image margin-top-0",
    style: {
      backgroundImage: "url(" + (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) + ")",
      backgroundPosition: "top left",
      backgroundAttachment: "fixed"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      height: '150px',
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'column'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",
    style: {
      boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
      backgroundColor: 'rgb(255, 68, 0)',
      color: 'white',
      lineHeight: '1',
      padding: '0.25em'
    }
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",
    style: {
      boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
      backgroundColor: 'rgb(255, 68, 0)',
      color: 'white',
      lineHeight: '1',
      padding: '0.25em'
    }
  }, subheading))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, mainpitch.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "subtitle"
  }, mainpitch.description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2"
  }, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gridItems: intro.blurbs
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12 has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn",
    to: "/products"
  }, "See all products"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2"
  }, "Latest stories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12 has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn",
    to: "/blog"
  }, "Read more"))))))))));
};
IndexPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subheading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mainpitch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  intro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexPageTemplate, {
    image: frontmatter.image,
    title: frontmatter.title,
    heading: frontmatter.heading,
    subheading: frontmatter.subheading,
    mainpitch: frontmatter.mainpitch,
    description: frontmatter.description,
    intro: frontmatter.intro
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "350082231";
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "/Users/vo/Desktop/expriments/gatsby-starter-netlify-cms/src/templates/index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "/Users/vo/Desktop/expriments/gatsby-starter-netlify-cms/src/templates/index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/vo/Desktop/expriments/gatsby-starter-netlify-cms/src/templates/index-page.js");
  reactHotLoader.register(_default, "default", "/Users/vo/Desktop/expriments/gatsby-starter-netlify-cms/src/templates/index-page.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(7)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ })

})
//# sourceMappingURL=0.4c63e0019eb02828247d.hot-update.js.map