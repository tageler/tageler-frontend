# Development Environment

We have a very lightweight development environment that makes updating code fast and easy. This is a step-by-step guide to setting up a local development environment that will let you contribute back to the project.

## Prerequisites

Make sure you have installed and configured the following products on your development machine:

  * Git
  * Node.js
  * Chrome browser (run tests)

## Fork & Checkout

Go to [ng-lightning repository](https://github.com/ng-lightning/ng-lightning) and click the "Fork" button. Follow the [GitHub documentation](https://help.github.com/articles/fork-a-repo) for forking and cloning.

You can then add `upstream` path to monitor the main repository that active development happens on. While you won't have push access to `upstream`, you will have pull access, allowing you to pull in the latest code whenever you want.

Run the following in your repository:

```bash
git remote add upstream git@github.com:ng-lightning/ng-lightning.git
```

## Install

Get all the necessary dependencies needed to build, test and run demo page by running:

```bash
npm install
```

## Commands

### Build

```bash
npm run build
```

If you want to watch your source files for changes and build every time use:
```bash
npm start
```

**Note**: Generated output is placed into the `node_modules/ng-lightning` folder.

### Tests

```bash
npm test
```

If you want to run your tests in watch mode, you can use:
```bash
npm run tdd
```

You can control log level with extra command line argument. For example:
```bash
npm run tdd -- --logLevel=ERROR
```

#### Saucelabs
If you want and already have a personal account, you can run tests on Saucelabs, just by passing the `--saucelabs` flag.
The setup assumes that eiter `process.env.SAUCE_USERNAME` and `process.env.SAUCE_ACCESS_KEY` are set or a `saucelabs.json` file exists inside the root folder, with the following format.

```json
{
  "username": "YOUR_SAUCE_USERNAME",
  "accessKey": "YOUR_SAUCE_ACCESS_KEY"
}
```

### Demo

The best way to see your changes in action, is to use our demo page locally. Run:
```bash
npm run demo
```
which will create a development server accessible through `http:localhost:1111`.
In conjunction with `npm start` in another command tab you have a fully working environment!

All demo resources can be found in the `/demo` folder.

## Release

When you believe it's time to release a new version, you can do it through an interactive process, by using:
```bash
npm run release
```

Demo site published to `gh-pages` branch can be updated at any time using:
```bash
npm run demo:release
```
