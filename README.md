# dev-dashboard

## Setup

### Requirements

* <a target="_blank" href="https://docs.docker.com/get-docker/">Docker</a>
* (Only necessary on Linux) <a target="_blank" href="https://docs.docker.com/compose/install/">Docker Compose</a>

### Clone Project Submodules

This project uses git submodules which are not fully downloaded with `git clone`.

Be sure that you are using an [ssh key linked to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

When you clone this repo:

```sh
git clone --recurse-submodules git@github.com:semantics-for-personal-health/heals-dev-dashboard.git
```

Alternatively, if you already cloned this repo without `--recurse-submodules`,  you can pull the submodules separately:

```sh
git submodule update --init --recursive
```

### Build and Run

In a terminal, navigate to the cloned project directory and run the following:

```sh
docker-compose up
```

The dashboard page will be accessible on <http://localhost:3000>

## Development

### Docker

Use the development compose file to build and run in dev mode with hot reload:

```sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

### Frontend only without docker

(Queries will not function properly without docker services)

Requires nodejs version 14.17.  Recommend using nvm.

```sh
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

```sh
nvm install 14.17.0
```

After installing the proper Node version, you can go ahead and install the application dependencies and run the application.

Please note: You will need to switch your node version everytime you open a new terminal window. If you do not you will likely receive errors about incompatible dependencies.
