# typescript-starter

This is a repository to start new TS projects quickly.

## Run everything in JS

We compile everyt TS to JS and then we run JS. This is better because sometimes the app runs in TS, but there are a lot of errors when we compile to JS.

Running everything into JS already saves a lot of time.

## Scripts

```
# Build
yarn build

# Start (prod)
yarn start

# Start (dev)
yarn start-dev

# Tests
yarn test
```

## Features

This repository supports the following features:

- Absolute paths by `@/`

## Libraries

- `Nodemon` for starting services in development mode
- `Jest` for tests
- `Rimraf` for deleting `/dist` folder
- `Cpy cli` for copying the `.env` to the `dist` folder on `yarn start-dev`
