# typescript-starter

This is a repository to start new TS projects quickly using Nest and following SOLID principles (Clean Architecture).

## Layers

This project has only 3 layers:

- Entities: to define the simple entities and their repositories
- Use Cases: to define the actions of the system
- Externals: everything else that is not related to business rules like storage, frameworks, etc.

## Run everything in JS

We compile every TS to JS and then we run JS. This is better because sometimes the app runs in TS, but there are a lot of errors when we compile to JS.

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
- `Nest Core` for the HTTP server

## Conclusion

This is just a template following SOLID + Nest + Typescript. The goal here is to use Nest only as a HTTP server provider, in order to decouple the business rules from Nest.

Feel free to use the best practices for Nest in terms of ** routing and HTTP server **. Business rules should be reserverd to `use cases` and `entities`.
