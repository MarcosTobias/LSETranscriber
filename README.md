[![codecov](https://codecov.io/gh/MarcosTobias/LSETranscriber/branch/master/graph/badge.svg?token=Y8GYT8LLUL)](https://codecov.io/gh/MarcosTobias/LSETranscriber)

# LSETranscriber
## Requirements
For running LSETranscriber you will need the following technologies:
* Docker

&nbsp;

## How to run:

First, download the code and then, on a terminal located on the root directory, run:

```
docker-compose up --build
```

Once the process ends, both the frontend and the rest API will be deployed.
The frontend can be accesed at:
```
http://localhost:3000
```

And the rest API Swagger documentation at:
```
http://localhost:5000
```

For stopping the services you can run Ctrl + C on the console used for setting up the application.

&nbsp;

## Run manually:
For running manually, you would need node 14.15.4 and python 3.9.1. 

Setup a virtual python environment

Run:
```
cd app
npm i
npm start
```

Then, on another console run:
```
cd restapi
pip3 install -r requirements.txt
python api.py
```

The web application is on localhost:3000 and the REST API is on localhost:5000.

&nbsp;

## Tests
For running the tests, there are unit and integration tests.

For unit tests, run:
```
npm test
```

For integration tests, run:
```
npm run integration-test
```