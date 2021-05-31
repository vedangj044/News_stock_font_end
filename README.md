# Famulus

[![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/vedangj044/famulus-front)](https://hub.docker.com/r/vedangj044/famulus-front)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/vedangj044/famulus-front)](https://hub.docker.com/r/vedangj044/famulus-front/tags?page=1&ordering=last_updated)
[![Blog Website](https://img.shields.io/badge/Famulus-blog-brightgreen)](https://vedangj044.github.io/blog/famulus/)

Famulus is an intelligent stock predictor web application that reads the latest news for the user and helps make business decisions.
This repository contains the front end application build with react that consumes the famulus API.

To use this repo, first download and run the [backend server](https://github.com/vedangj044/News_stock_prediction).

Docker run command

`docker run --rm -it -p 3000:80 -e API_URL=<backend_url> vedangj044/famulus-front:<version>`
