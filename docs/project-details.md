# Project details

## File structure

Some notable files and their definitions:

- ```gatsby-config.js``` — configure options for a Gatsby site, with metadata for project title, description, plugins, etc.
- ```gatsby-node.js``` — implement Gatsby’s Node.js APIs to customize and extend default settings affecting the build process
- ```gatsby-browser.js``` — customize and extend default settings affecting the browser, using Gatsby’s browser APIs
- ```gatsby-ssr.js``` — use Gatsby’s server-side rendering APIs to customize default settings affecting server-side rendering

Here is a brief overview of the file structure:

```
/
|-- /.cache
|-- /plugins
|-- /public
|-- /src
    |-- /pages
    |-- /templates
    |-- html.js
|-- /static
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-browser.js
```

- ```/.cache```: Automatically generated. This folder is an internal cache created automatically by Gatsby. The files inside this folder are not meant for modification. Should be added to the .gitignore file if not added already.
- ```/plugins```: This folder hosts any project-specific (“local”) plugins that aren’t published as an npm package. Check out the plugin docs for more detail.
- ```/public```: Automatically generated. The output of the build process will be exposed inside this folder. Should be added to the .gitignore file if not added already.
- ```/src```: This directory will contain all of the code related to what you will see on the frontend of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
  - ```/pages```: Components under src/pages become pages automatically with paths based on their file name.
  - ```/templates```: Contains templates for programmatically creating pages.
- ```/static```: If you put a file into the static folder, it will not be processed by Webpack. Instead it will be copied into the public folder untouched. Check out the assets docs for more detail.

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

## Storybook

Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment. Read more about [Storybook](https://storybook.js.org/docs/basics/introduction/)

```
  # Use to start development enviroment
  yarn storybook

  # Use to build storybook for production
  build-storybook
```
