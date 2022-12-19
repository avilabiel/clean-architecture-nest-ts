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

## Organization

This codebase has 3 main folders:

- `src/entities`: To define the entities and their repositories (what each Entity can do)

For example: There is an entity `User`.

- `src/app/contracts`: It defines the contracts that should be followed especially by external items like `IUserRepository`:

1. create()
2. update()
3. delete()
4. getAll()
5. getById()

- `src/app/use-cases`: To define the system actions. For example:

1. create-user
2. update-user
3. delete-user
4. get-user-by-id
5. list-users

Each use case should have its automated tests.

- `src/app/errors`: To define the errors classes.

- `src/externals`: To define the rest, things that are not important for the business rules like Database, Frameworks (Express, Nest, Stocket), Libraries, etc.


## Libraries

- `Nodemon` for starting services in development mode
- `Jest` for tests
- `Rimraf` for deleting `/dist` folder
- `Cpy cli` for copying the `.env` to the `dist` folder on `yarn start-dev`
- `Nest Core` for the HTTP server

## Conclusion

This is just a template following SOLID + Nest + Typescript. The goal here is to use Nest only as a HTTP server provider, in order to decouple the business rules from Nest.

Feel free to use the best practices for Nest in terms of ** routing and HTTP server **. Business rules should be reserverd to `use cases` and `entities`.
