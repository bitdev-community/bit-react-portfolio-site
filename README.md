[![Bit Org Showoff](https://img.shields.io/badge/Bit-@Showoff-2C00C3)](https://bit.cloud/showoff)
[![Scope Design](https://img.shields.io/badge/Scope-Design_(30)-820596)](https://bit.cloud/showoff/design)
[![Scope Personal Portfolio](https://img.shields.io/badge/Scope-Personal_Portfolio_(22)-820596)](https://bit.cloud/showoff/personal-portfolio)
[![Scope Contact Me](https://img.shields.io/badge/Scope-Contact_Me_(5)-820596)](https://bit.cloud/showoff/contact-me)
[![Scope Dev](https://img.shields.io/badge/Scope-Dev_(4)-820596)](https://bit.cloud/showoff/dev)
[![Scope Starters](https://img.shields.io/badge/Scope-Starters_(1)-820596)](https://bit.cloud/showoff/starters)

[![Github Action](https://github.com/bitdev-community/bit-react-portfolio-site/actions/workflows/portfolio-quickstart.yml/badge.svg)](https://github.com/bitdev-community/bit-react-portfolio-site/actions/workflows/portfolio-quickstart.yml)

# Portfolio Template - Bit | React | AWS

This repository contains a composable frontend application that can serve as a portfolio project designed by React.
Currently, it deploys on Netlify. It also uses AWS Lambda as a backend for contact us page.

**Note:** You can swap the backend from AWS Lambda to anything you prefer.

# Initialize a workspace

Initialize a workspace to start your journey into component-driven development. A workspace is a group of files and directories that provide the necessary context for components to be authored, composed, maintained, and collaborated on.

Run the following to create a workspace with a few components included, using the [portfolio starter](https://bit.cloud/showoff/starters)

```
bit new portfolio portfolio-workspace --aspect showoff.starters/portfolio
```

Open your workspace directory:

```
cd portfolio-workspace
```

# Run the app component

Your workspace maintains a number of components. One of these components is also an [app](https://bit.dev/reference/apps/application-types/). Run the following to run the app component:

```
bit run portfolio
```

# Preview components

A Bit component is a reusable, independently source-controlled module, that is stored in [scopes](https://bit.dev/reference/scope/scope-overview/) and maintained in [workspaces](https://bit.dev/reference/workspace/creating-workspaces/). Bit components enable a new software development strategy that can be used to complement monorepos and poly-repos, or replace them, altogether.

Run the Workspace UI to preview your components:

```
bit start
```

## Deployment

Before deploying the frontend to Netlify and Form Handler AWS Lambda function, setup the following environment variables.

```
export NETLIFY_AUTH_TOKEN=<Your Netlify Token>
export AWS_ACCESS_KEY_ID=<Your AWS Access Key ID>
export AWS_SECRET_ACCESS_KEY=<Your AWS Access Key Secret>
```

Then tag your components to deploy the app components with the latest changes.

```
bit tag -m "Deploying the application"
```

## Contributor Guidelines

- Clone the repository via the `SSH` url
- Install Bit Version Manager - `npm i -g @teambit/bvm` | `yarn global add @teambit/bvm`
- Install Bit - `bvm install`
- Install Project Dependencies - `bit install`
- Compile components - `bit compile && bit compile`. **Note:** Compile twise to compile the Envs and compile the compoennts using their respective Envs.
- Update Heap Size to about 4GB - `export NODE_OPTIONS="--max-old-space-size=4096"`
- Launch Development Server - `bit start`

