# Semantic Release Playground

This package is an experimental/demo package to fiddle around with semantic-release. My goal with this package is to create a solid setup that provides the following features:

-   new release version determined solely by commit messages
-   releases are always created based on master only
-   publish every release to npm automatically
-   new tag with release notes on GitHub for every release
-   package.json always with the most recent version number on GitHub
-   linting of commit messages and rejection of commits that don't conform to semantic-release rules using commitlint and husky
-   integration with Circle CI or GitHub Actions (or optionally both)
-   automatically generated changelog based on commit messages
