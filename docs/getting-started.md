# Getting started

## Installation

<div class="paragraph">To start it's necessary to create a new repository using this template <a class="btn-use" href="https://github.com/Pixelmatters/pixel-gatsby/generate">Use this template</a> </div>

### 1. Create a .env.development

The first step is to create a `.env.development` on the root folder.

- ```GATSBY_URL```: The app URL, this is gonna be used to set siteMetadata url. This needs include protocol.
- ```GATSBY_API_URL```: API url without protocol;
- ```GATSBY_API_PROTOCOL```: API protocol.

### 2. Install packages

```
  # Run yarn to install the packages
  yarn
```

### 3. Start the development server

```
  # Make sure the API is up and running before running this command
  yarn start
```

The site will be available at `http://localhost:8100` and the GraphQL explorer at `http://localhost:8100/___graphql`

## Scripts

- ```build``` : builds gatsby
- ```start```: starts gatsby development
- ```clean```: clears .cache and public folder
- ```restart```: clears .cache and public folder and starts gatsby development
- ```storybook```: starts storybook development
- ```build-storybook```: builds storybook
- ```release```: generates CHANGELOG using conventional commits;
