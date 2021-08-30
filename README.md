# dev-dashboard

## Cloning

This project uses submodules. Make sure that the submodule code is pulled before building.

On clone:

```shell
git clone --recurse-submodules [git clone url]
```

Or, if already cloned without `--recurse-submodules`:

```shell
git submodule update --init --recursive
```

## Build Setup

Build and run in production mode:

```shell
docker-compose up
```

Build and run in dev mode with hot reload:

```shell
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

### Front-end build info

(This does not apply when running in a docker container)

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


## Mac Users 

If you are using an Apple computer, you will need to install Node Version Manager before installing the application dependencies. 
For instructions on how to install nvm using Homebrew [click here](https://github.com/semantics-for-personal-health/heals-dev-dashboard.git).


Once you have nvm installed, via terminal, navigate into your cloned git repository. Enter the following command.

```bash
nvm install 14.17.0
```

After installing the proper Node version, you can go ahead and install the application dependencies and run the application. 

Please note: You will need to switch your node version everytime you open a new terminal window. If you do not you will likely receive errors about incompatible dependencies. 
