# Building with Components

To use Gatsby, you will need a basic understanding of React components. React’s component architecture simplifies building large websites by encouraging modularity, reusability, and clear abstractions. React has a large ecosystem of open source components, tutorials, and tooling that can be used seamlessly for building sites with Gatsby. Gatsby is built to behave almost exactly like a normal React application.

## Horizontal menu list

This component was created to be reused on header and footer to create horizontal menus. Receives two props that will be used on the component render.

- extraClasses: Is an optional prop that is used to add a class to customize css;
- menuItems: Is required and is should have a list of object with url, and title to create the menu buttons.

## SEO component

Every site on the web has basic meta-tags like the title, favicon or description of the page in their `<head>` element. This information gets displayed in the browser and is used when someone shares the website, e.g. on Twitter. This component allows to customize the meta for the gatsby website.

- pageTitle: Enter the page title, if you this field is empty the title on meta will be the website name
- pageDescription: Page description, if you this field is empty the description on meta will be the website description
- pageType: This is prepared to receive post in case the page is a blog post, otherwise the default is website
- keywords: Site keyword, you can either define keywords for each page or define default keywords on SEO component
- shouldIndex: Requests that automated Internet bots avoid indexing a page, this is always false and should be set to true to be activated.
- facebookImage: Set a sharable image on Facebook
- twitterImage: Set a sharable image on Twitter
