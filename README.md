# English Spelling Checker ![UnmaintainedProject](http://unmaintained.tech/badge.svg)

<Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" alt="react logo" height="100px" align="right" />

[![next](https://img.shields.io/badge/next-12.1.6-%23FFFFFF?logo=Next.js)](https://nextjs.org/)
[![axios](https://img.shields.io/badge/axios-%5E0.27.2-%235A29E4)](https://axios-http.com/)
[![react](https://img.shields.io/badge/react-18.1.0-blue?logo=React)](https://reactjs.org/)
[![typescript](https://img.shields.io/badge/typescript-4.6.4-blue?logo=Typescript)](https://www.typescriptlang.org/)
[![styled-components](https://img.shields.io/badge/styled--components-%5E5.3.5-ff69b4?logo=styled-components)](https://styled-components.com/)

</br>

<small>All badges are links to each doc</small>

## Description of that project 📖

This project it's to test the user spelling skills

## Requirements 🛑

### Mandatory

For development, you will need some software installed in your environment.

- [NodeJS](https://nodejs.org/en/download/),
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

### Optional

To improve your experience and enjoy each linter, here are some extensions </br>
<small>For VSCode, if you use another editor, please look at your marketplace</small>

- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Editorconfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Starting your Project 🧰

Use yarn to install all dependencies and start the project

```batch
yarn install
yarn dev
```

## Project Folders Structure 👷

```code
.
├── .husky...............................# Contains the husky settings;
├── pages................................# It's a NextJs pattern keep pages in this folder;
├── src..................................# source project packages and components;
│   ├── components..................# contains shared components;
│   │   └── [components_folders]
│   ├── hooks.......................# contains shared hooks;
│   │   └── [hooks_folders]
│   ├── services....................# centralize icons and create React Components to each one;
│   └── styles......................# centralize icons and create React Components to each one;
└── [...]................................# root files as environment, linters, etc;
```

## Project Linters 🧹

The main linters of this project you may find in this [link](https://nextjs.org/docs/basic-features/eslint)

Other usefull linters:

- [Commit Lint](https://github.com/conventional-changelog/commitlint)
- [Eslint Import helpers](https://github.com/Tibfib/eslint-plugin-import-helpers)

## Project Maintenance 👨‍🔧

- Husky will _verify_ your commits before sent them.
- Project is using Angular Commits Guide Line, for more information, click on this [link](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).
