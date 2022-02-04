import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restx import Resource, Api
from PIL import Image
import numpy as np
import boundingBoxApi as bb
import makePrediction as mp

app = Flask(__name__)
CORS(app)
api = Api(app, version='1.0', title='LSE Transcriber API', description='API for the LSE Transcriber application. Given a photo of a hand performing a sign on the LSE fingerspelling it would output the predicted letter')

@api.route('/predict', methods=["POST"])
class PredictImage(Resource):
    def post(self):
        file = request.files['image']
        
        index = request.form['index']

        img = Image.open(file.stream)

        img = np.array(img)

        img = img[:,:,:3]
        img = img[:,:,::-1]

        boundedHand = bb.getBoundingBox(img)

        if boundedHand == "none":
            return jsonify({'msg': 'success', 'prediction': 'No hand detected'})


        prediction, confidence = mp.predict(boundedHand)

        return jsonify({'msg': 'success', 'prediction': prediction, 'index': index, 'confidence': json.dumps(str(confidence))})


@api.route('/hello')
class HelloWorld(Resource):
    def get(self):
        return jsonify({'hello' : 'world'})
        
if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=5000)
