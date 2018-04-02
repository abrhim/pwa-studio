---
title: Install project dependencies
---

In the [previous topic], you created the basic directory structure and files for a Magento theme.
In this topic, you will initialize the `package.json` file and install project dependencies for your Magento PWA theme.

[previous topic]: {{ site.baseurl }}{% link pwa-buildpack/project-setup/create-theme-files/index.md %}

## Initialize the package configuration file

1. The following command runs a tool that walks you through the process of creating your project's `package.json` file:
   
   ``` bash
   npm init
   ```
   
1. For this tutorial, leave the input blank and hit `Return` or `Enter` on all the prompts to accept the default values.

## Install project dependencies

1. Run the following command to install the `dotenv` module:

   ``` bash
   npm install --save-dev dotenv
   ```

   This module loads environment values from a `.env` file and allows you to separate environment-specific values from source code.

1. Run the following command to install [peregrine] and [React] as a production dependency:

   ``` bash
   npm install --save @magento/peregrine \
   react react-dom react-redux react-router-dom redux
   ```

   These dependencies allow you to use the UI components and services provided by the peregrine project to develop your theme.

1. Run the following command to install [pwa-buildpack] and its standard peer dependincies:

   ``` bash
   npm install --save-dev @magento/pwa-buildpack \
   babel-core babel-loader babel-helper-module-imports \
   babel-plugin-syntax-jsx babel-plugin-transform-class-properties \
   babel-plugin-transform-object-rest-spread babel-plugin-transform-react-jsx \
   webpack webpack-cli webpack-dev-server
   ```

   These dependencies allow you to create a [Webpack]-based build environment for your project.

   It also installs [Babel], a JavaScript transpiler that allows you to write code using the latest and custom JavaScript language features without having to worry about browser compatibility.

## Review `package.json` content

Now that you have your project dependencies installed, your `package.json` file should look like the following:

``` json
{
  "name": "orange-theme",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@magento/peregrine": "^0.1.5-alpha",
    "react": "^16.3.1",
    "react-dom": "^16.3.1",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2"
  },
  "devDependencies": {
    "@magento/pwa-buildpack": "^0.2.0",
    "babel-core": "^6.26.0",
    "babel-helper-module-imports": "^7.0.0-beta.3",
    "babel-loader": "^7.1.4",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-plugin-transform-react-jsx": "^6.24.1",
    "dotenv": "^5.0.1",
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.14",
    "webpack-dev-server": "^3.1.3"
  }
}
```

In the next topic, you will [create configuration files] for your development environment.

[peregrine]: {{ site.baseurl }}{% link technologies/peregrine/index.md %}
[pwa-buildpack]: {{ site.baseurl }}{% link pwa-buildpack/index.md %}
[Webpack]: https://webpack.js.org/
[create configuration files]: {{ site.baseurl }}{% link pwa-buildpack/project-setup/create-configuration-files/index.md %}
[Babel]: https://babeljs.io/
[React]: http://reactjs.org/