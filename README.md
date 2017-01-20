### Create React App, SASS, Yarn and Docker Development Environment

This is the supporting codebase to the tutorial - [No Eject - Create React App with SASS, Storybook and Yarn in a Docker Environment](http://start.jcolemorrison.com/no-eject-create-react-app-with-sass-storybook-and-yarn-in-a-docker-environment/): on how to use `create-react-app` with `scss` and `docker` without ejectin.

To start it:

a) pull down the repo

b) Build the images in the `docker-images` with `docker-build -t <name>` and then change the `cmd.yml` and `docker-compose.yml` file with the `<name>`.

i.e. `docker-build -t trial/cra-storybook-dev ./docker-images/cra-storybook` and `docker-build -t trial/sass-dev ./docker-images/sass-dev-image`

Alternatively just `docker pull` down the images `jcolemorrison/cra-storybook-dev` and `jcolemorrison/sass-dev`.

c) in the root directory run `docker-compose run web yarn` to install the `node_modules`

d) once installed, run `docker-compose up -d`

- the react application will be available at `localhost:3001`
- the react storybook willl be available at `localhost:3009`
