# dev-dashboard

## Setup

### Requirements

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/) (Already included with Docker Desktop on Mac/Windows)

### Clone Project Submodules

This project uses git submodules which are not fully downloaded with `git clone`

When you clone this repo:

```shell
git clone --recurse-submodules git@github.com:semantics-for-personal-health/heals-dev-dashboard.git
```

Alternatively, if you already cloned this repo without `--recurse-submodules`,  you can pull the submodules separately:

```shell
git submodule update --init --recursive
```

### Build and Run

Build and run in production mode:

```shell
docker-compose up
```

The dashboard page will be accessible on [http://localhost:3000](http://localhost:3000)

## Development

### Docker

Use the development compose file to build and run in dev mode with hot reload:

```shell
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

### Frontend only without docker

(Queries will not function properly without docker services)

Requires nodejs version 14.17.  Recommend using nvm.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Mac Users

If you are using an Apple computer, you will need to install Node Version Manager before installing the application dependencies.
For instructions on how to install nvm using Homebrew [click here](https://github.com/semantics-for-personal-health/heals-dev-dashboard.git).

Once you have nvm installed, via terminal, navigate into your cloned git repository. Enter the following command.

```bash
nvm install 14.17.0
```

After installing the proper Node version, you can go ahead and install the application dependencies and run the application.

Please note: You will need to switch your node version everytime you open a new terminal window. If you do not you will likely receive errors about incompatible dependencies.
