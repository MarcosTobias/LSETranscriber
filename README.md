# LSETranscriber
How to run:

Currently working on docker integration.

Right now you would need to run the web application and the restapi.

For running the web application:

```
cd app
npm install
npm start
```

For the restapi its recommended to use a virtual environment:

```
cd restapi
pip install -r requirements.txt
python api.py
```

The app is visible on localhost:3000.

If running on Linux, there is a problem in makePrediction.py line 8, where you would need to change the relative path to the pretrained model, as Linux uses "/" instead of "\\".
