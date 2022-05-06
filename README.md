# expo-template-beanstalk

[![Build Status](https://app.travis-ci.com/Nickolans/expo-template-beanstalk.svg?branch=main)](https://app.travis-ci.com/Nickolans/expo-template-beanstalk)

## How to use

```
expo init my-app --template expo-template-beanstalk
```

## Contributors

<a href = "https://github.com/Nickolans/expo-template-beanstalk/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo = GitHub_username/repository_name"/>
</a>

Made with [contributors-img](https://contrib.rocks).

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

## API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login/email` - login with email & password\
Routes unknown. These are preserved for samples.

## Shared Components

[Input](docs/components/Input.md)\
[BackButtonNavHeader](docs/components/BackButtonNavHeader.md)\
[LGbutton](docs/components/LGbutton.md)\
[SMbutton](docs/components/SMbutton.md)
