import json
from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from flask_restx import Resource, Api
from PIL import Image
import numpy as np
import boundingBoxApi as bb
import makePrediction as mp
from werkzeug.datastructures import FileStorage

app = Flask(__name__)
CORS(app)
api = Api(app, version='1.0', title='LSE Transcriber API', description='API for the LSE Transcriber application. Given a photo of a hand performing a sign on the LSE fingerspelling it would output the predicted letter')

parser = api.parser()
parser.add_argument('image', type=FileStorage, location='files', required=True)
parser.add_argument('index', type=int, location='files', required=True)

@api.route('/predict', methods=["POST"])
class PredictImage(Resource):
    @api.response(200, 'Sucess')
    @api.response(400, 'Image error')
    @api.response(500, 'Internal Server Error')
    @api.expect(parser)
    def post(self):

        file = request.files['image']
        
        index = request.form['index']

        try:
            img = Image.open(file.stream)
        except:
            abort(400, 'There was a problem with the image provided')

        img = np.array(img)

        img = img[:,:,:3]
        img = img[:,:,::-1]

        boundedHand = bb.getBoundingBox(img)

        if boundedHand == "none":
            return jsonify({'msg': 'success', 'prediction': 'No hand detected'})


        prediction, confidence = mp.predict(boundedHand)

        return jsonify({'msg': 'success', 'prediction': prediction, 'index': index, 'confidence': json.dumps(str(confidence))})


@api.route('/status')
class Status(Resource):
    @api.response(200, 'Sucess')
    @api.response(500, 'Internal Server Error')
    def get(self):
        return jsonify({'status' : 'healthy'})
        
if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=5000)
