(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{327:function(e,t,a){"use strict";a.r(t);var s=a(33),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"project-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-details"}},[e._v("#")]),e._v(" Project details")]),e._v(" "),a("h2",{attrs:{id:"file-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-structure"}},[e._v("#")]),e._v(" File structure")]),e._v(" "),a("p",[e._v("Some notable files and their definitions:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("gatsby-config.js")]),e._v(" — configure options for a Gatsby site, with metadata for project title, description, plugins, etc.")]),e._v(" "),a("li",[a("code",[e._v("gatsby-node.js")]),e._v(" — implement Gatsby’s Node.js APIs to customize and extend default settings affecting the build process")]),e._v(" "),a("li",[a("code",[e._v("gatsby-browser.js")]),e._v(" — customize and extend default settings affecting the browser, using Gatsby’s browser APIs")]),e._v(" "),a("li",[a("code",[e._v("gatsby-ssr.js")]),e._v(" — use Gatsby’s server-side rendering APIs to customize default settings affecting server-side rendering")])]),e._v(" "),a("p",[e._v("Here is a brief overview of the file structure:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/\n|-- /.cache\n|-- /plugins\n|-- /public\n|-- /src\n    |-- /pages\n    |-- /templates\n    |-- html.js\n|-- /static\n|-- gatsby-config.js\n|-- gatsby-node.js\n|-- gatsby-browser.js\n")])])]),a("ul",[a("li",[a("code",[e._v("/.cache")]),e._v(": Automatically generated. This folder is an internal cache created automatically by Gatsby. The files inside this folder are not meant for modification. Should be added to the .gitignore file if not added already.")]),e._v(" "),a("li",[a("code",[e._v("/plugins")]),e._v(": This folder hosts any project-specific (“local”) plugins that aren’t published as an npm package. Check out the plugin docs for more detail.")]),e._v(" "),a("li",[a("code",[e._v("/public")]),e._v(": Automatically generated. The output of the build process will be exposed inside this folder. Should be added to the .gitignore file if not added already.")]),e._v(" "),a("li",[a("code",[e._v("/src")]),e._v(": This directory will contain all of the code related to what you will see on the frontend of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.\n"),a("ul",[a("li",[a("code",[e._v("/pages")]),e._v(": Components under src/pages become pages automatically with paths based on their file name.")]),e._v(" "),a("li",[a("code",[e._v("/templates")]),e._v(": Contains templates for programmatically creating pages.")])])]),e._v(" "),a("li",[a("code",[e._v("/static")]),e._v(": If you put a file into the static folder, it will not be processed by Webpack. Instead it will be copied into the public folder untouched. Check out the assets docs for more detail.")])]),e._v(" "),a("h2",{attrs:{id:"programmatically-create-pages-from-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#programmatically-create-pages-from-data"}},[e._v("#")]),e._v(" Programmatically create pages from data")]),e._v(" "),a("p",[e._v("There's two ways to create new pages, you can create each on src/pages or you can create them programmatically. Gatsby lets you use GraphQL to query your data and map the query results to pages—all at build time. The programmatically created pages use src/templates to create the pages.")]),e._v(" "),a("p",[e._v("On this tempalte you have examples of programmatically created pages. The following example is a shorter version of the one you can see on gatsby-node.js. This queries the first 1000 blog posts  on the API and retrieves the required information, after the result of the query is used to create pages using createPage function:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  /** Create Blog Posts */\n  const postResults = await graphql(`\n    query GET_POSTS {\n      wpgraphql {\n        posts(first: 1000, after: null) {\n          edges {\n            node {\n              databaseId\n              slug\n              title\n              ...\n            }\n          }\n        }\n      }\n    }\n  `);\n\n  postResults.data.wpgraphql.posts.edges.forEach(({ node }) => {\n    createPage({\n      path: node.slug,\n      component: path.resolve(`./src/templates/blog-template.tsx`),\n      context: {\n        // This is the $slug variable passed to blog-post.tsx\n        slug: node.slug,\n        databaseId: node.databaseId,\n      },\n    })\n  });\n")])])]),a("p",[e._v("If the goal is to create different templates for different pages id, slugs or Wordpress template name from WordPress can be used to render the correct template.\n"),a("strong",[e._v("gatsby-node.js")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/** Create Pages */\nconst pageResults = await graphql(`\n  query GET_PAGES {\n    wpgraphql {\n      pages(first: 1000, after: null) {\n        edges {\n          node {\n            title\n            slug\n            template\n            ....\n          }\n        }\n      }\n    }\n  }\n`);\n\npageResults.data.wpgraphql.pages.edges.forEach(({ node }) => {\n  createPage({\n    path: node.slug,\n    component: path.resolve(`./src/templates/page-templates/index.tsx`),\n    context: {\n      slug: node.slug,\n      databaseId: node.databaseId,\n    },\n  })\n});\n")])])]),a("p",[a("strong",[e._v("/src/templates/page-templates/index.tsx")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('export default class IndexPage extends React.Component<IIndexProps> {\n  public render() {\n    if (pageContext.template === "templates/tpl-homepage.php") {\n      return (\n        <>\n          HTML FOR THE PAGE\n        </>\n      )\n    }\n  }\n}\n')])])]),a("h2",{attrs:{id:"storybook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storybook"}},[e._v("#")]),e._v(" Storybook")]),e._v(" "),a("p",[e._v("Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment. Read more about "),a("a",{attrs:{href:"https://storybook.js.org/docs/basics/introduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storybook"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  # Use to start development enviroment\n  yarn storybook\n\n  # Use to build storybook for production\n  build-storybook\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);