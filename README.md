# Gatsby Starter

> A super simple, bare-bone starter based on the Gatsby Starter for the front end and the WP GraphQL plugin on your WordPress install.

This is a basic "headless CMS" setup. This starter will pull posts, pages, categories, tags, and a menu from your WordPress site.

If you need more information on [Gatsby](https://www.gatsbyjs.org/docs/).

## Setup

To start developing you can follow up this steps:

1. The first step is to create a `.env.development`. You can find a template in the respective folder.
2. Install all packages with `yarn`;
3. The API should be up and running before you start gatsby;
4. Start the development server with `yarn start`.

The site will be available at http://localhost:8100 and the GraphQL explorer at http://localhost:8100/___graphql

### .env - Rules

- GATSBY_URL: The app URL, this is gonna be used to set siteMetadata url. Needs to have the protocol;
- GATSBY_API_URL: API url without protocol;
- GATSBY_API_PROTOCOL: API protocol.

## GraphQL queries to load content from local Markdown files

Gatsby uses GraphQL internally as an API.

```query GET_POSTS {
  wpgraphql {
    graphql
      posts(first: 1000, after: null) {
        edges {
          node {
            databaseId
            slug
            title
            date
            content(format: RENDERED)
            featuredImage {
            altText
            link
            mediaItemUrl
            uri
          }
        }
      }
    }
  }
}
```

## File structure

Some notable files and their definitions:

- gatsby-config.js — configure options for a Gatsby site, with metadata for project title, description, plugins, etc.
- gatsby-node.js — implement Gatsby’s Node.js APIs to customize and extend default settings affecting the build process
- gatsby-browser.js — customize and extend default settings affecting the browser, using Gatsby’s browser APIs
- gatsby-ssr.js — use Gatsby’s server-side rendering APIs to customize default settings affecting server-side rendering

Here is a brief overview of the file structure:

- /.cache Automatically generated. This folder is an internal cache created automatically by Gatsby. The files inside this folder are not meant for modification. Should be added to the .gitignore file if not added already.
- /plugins This folder hosts any project-specific (“local”) plugins that aren’t published as an npm package. Check out the plugin docs for more detail.
- /public Automatically generated. The output of the build process will be exposed inside this folder. Should be added to the .gitignore file if not added already.
- /src This directory will contain all of the code related to what you will see on the frontend of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
  - /pages Components under src/pages become pages automatically with paths based on their file name.
  - /templates Contains templates for programmatically creating pages.
- /static If you put a file into the static folder, it will not be processed by Webpack. Instead it will be copied into the public folder untouched. Check out the assets docs for more detail.

## SEO component

Every site on the web has basic meta-tags like the title, favicon or description of the page in their <head> element. This information gets displayed in the browser and is used when someone shares the website, e.g. on Twitter. This component allows to customize the meta for the gatsby website.

- pageTitle: Enter the page title, if you this field is empty the title on meta will be the website name
- pageDescription: Page description, if you this field is empty the description on meta will be the website description
- pageType: This is prepared to receive post in case the page is a blog post, otherwise the default is website
- keywords: Site keyword, you can either define keywords for each page or define default keywords on SEO component
- shouldIndex: Requests that automated Internet bots avoid indexing a page, this is always false and should be set to true to be activated.
- facebookImage: Set a sharable image on Facebook
- twitterImage: Set a sharable image on Twitter

## Programmatically create pages from data

There's two ways to create new pages, you can create each on src/pages or you can create them programmatically. Gatsby lets you use GraphQL to query your data and map the query results to pages—all at build time. The programmatically created pages use src/templates to create the pages.

On this tempalte you have examples of programmatically created pages. The following example is a shorter version of the one you can see on gatsby-node.js. This queries the first 1000 blog posts  on the API and retrieves the required information, after the result of the query is used to create pages using createPage function:

```
  /** Create Blog Posts */
  const postResults = await graphql(`
    query GET_POSTS {
      wpgraphql {
        posts(first: 1000, after: null) {
          edges {
            node {
              databaseId
              slug
              title
              ...
            }
          }
        }
      }
    }
  `);

  postResults.data.wpgraphql.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-template.tsx`),
      context: {
        // This is the $slug variable passed to blog-post.tsx
        slug: node.slug,
        databaseId: node.databaseId,
      },
    })
  });
```

If the goal is to create different templates for different pages id, slugs or Wordpress template name from WordPress can be used to render the correct template.
**gatsby-node.js**

```
/** Create Pages */
const pageResults = await graphql(`
  query GET_PAGES {
    wpgraphql {
      pages(first: 1000, after: null) {
        edges {
          node {
            title
            slug
            template
            ....
          }
        }
      }
    }
  }
`);

pageResults.data.wpgraphql.pages.edges.forEach(({ node }) => {
  createPage({
    path: node.slug,
    component: path.resolve(`./src/templates/page-templates/index.tsx`),
    context: {
      slug: node.slug,
      databaseId: node.databaseId,
    },
  })
});
```

**/src/templates/page-templates/index.tsx**

```
export default class IndexPage extends React.Component<IIndexProps> {
  public render() {
    if (pageContext.template === "templates/tpl-homepage.php") {
      return (
        <>
          HTML FOR THE PAGE
        </>
      )
    }
  }
}
```

## Conventional Commits

This project has conventional commit validations. The next paragraphs explain in detail what conventional commits are and how to use it.

Conventional commits is a simple way of describing commit messages using a convention that allows them to be easily read by a machine.
The commits need to fit the following structure:

> `<type>[optional scope]: <description>[optional body][optional footer]`

- Type:
  - **feat** [ X.1.X - Minor] - A commit of the type feat introduces a new feature to the codebase
  - **fix** [ X.X.1 - Patch] - A commit of the type fix patches a bug in your codebase
  - **chore** - updating grunt tasks etc; no production code change
  - **docs** - A commit with documentation updates
  - **refactor** - A code change that neither fixes a bug nor adds a feature
  - improvement [X.X.X - N/A] - Commits that improve a current implementation without adding a new feature or fixing a bug

It’s important to notice the **feat** and **fix** types bump up the version of the project correlating to a **MINOR** and **PATCH** (accordingly) in semantic versioning.

- Scope: Short description of a section of the codebase enclosed in parenthesis followed by a colon and a space

- Description: Add alternative footer to the homepage
Short description of the code changes

- Body: Implement the alternative version of the footer(…)
A longer description of the commit, providing additional context about the changes.

- **BREAKING CHANGE**: BREAKING CHANGE [1.X.X - Major]
Must be indicated at the very beginning of the footer or body section of a commit and consist of the uppercase text BREAKING CHANGE, followed by a colon and a space.
It bumps up the version of the project correlating to a MAJOR in semantic versioning
