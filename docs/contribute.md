# Contribute

## Contribute Guidelines

We're **always** looking for suggestions to improve this project. If you have a suggestion for improve this template, please file an issue with in the [GitHub repository](https://github.com/Pixelmatters/pixel-gatsby/issues).

If you want to **submit** a pull request with the changes you think should be made follow this steps:

1. Clone this repository
2. Create a new branch for each feature, fix or improvement
3. Send a pull request from each feature branch to the **master** branch

It is very important to separate new features or improvements into separate **feature branches**, and to send a **pull request** for each branch. This allow us to review and pull in new features or improvements individually.

**Please take a look on the section Conventional Commits to make sure your commits follow our structure.**

All contributions are welcome, including issues, new docs as well as updates and tweaks. 👾

## Conventional Commits

This project has **conventional commit** validations. Conventional commits is a simple way of describing commit messages using a convention that allows them to be easily read by a machine.

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

More information on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
