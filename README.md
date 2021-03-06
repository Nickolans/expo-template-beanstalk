# expo-template-beanstalk

[![Build Status](https://app.travis-ci.com/Nickolans/expo-template-beanstalk.svg?branch=main)](https://app.travis-ci.com/Nickolans/expo-template-beanstalk)
![npm](https://img.shields.io/npm/v/expo-template-beanstalk)

## How to use

```bash
# Create project
expo init my-app --template expo-template-beanstalk
cd my-app

# Generate iOS/Android folders
yarn eject

# Swap files
yarn beanstalk-swap
```

## Contributors

<a href="https://github.com/nickolans/expo-template-beanstalk/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nickolans/expo-template-beanstalk" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## Support

For support, contact someone.

## Features

- **CI**: continuous integration with [Travis CI](https://travis-ci.org)
- **Jest**: jest testing with [Jest](https://jestjs.io/)

## Commands

Running locally:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch
```

Linting:

```bash
# Check for any error or warning
yarn lint

# Fix error
yarn lint:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# None yet!
```

## Project Structure

```
src\
 |--App\              # Holds App.js
 |--Shared\           # Where shared components, hooks and other tools are.
 |----Components\     # Components that are shared between multiple views.
 |----Hooks\          # Hooks.
 |----Routing\        # Routes (protected, public).
 |----Services\       # Services.
 |----Styles\         # Stylesheets, global styles.
 |--Views\            # Views storage.
 |----Auth\           # Auth view storage.
 |----Home\           # Home view storage.

```

## Shared Components

[Input](docs/components/Input.md)\
[BackButtonNavHeader](docs/components/BackButtonNavHeader.md)\
[LGbutton](docs/components/LGbutton.md)\
[SMbutton](docs/components/SMbutton.md)

## Troubleshooting

[RCTBridge Warning](https://amanhimself.dev/blog/rctbridge-required-dispatch-sync-to-load-warning)
