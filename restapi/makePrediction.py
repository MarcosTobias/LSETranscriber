import tensorflow as tf
import numpy as np
import cv2
import os


class_names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U']

model = tf.keras.models.load_model(os.path.join("model", "trained_tuned_ext2"))

probability_model = tf.keras.Sequential([model, tf.keras.layers.Softmax()])

def predict(image):

    img2 = cv2.resize(image, dsize=(150, 150), interpolation=cv2.INTER_CUBIC)

    img2 = np.expand_dims(img2, axis=0)

    predictions = probability_model.predict(img2)

    #if np.max(predictions) < 0.4:
        #return -1

    class_predicted = class_names[np.argmax(predictions)]

    return class_predicted, np.max(predictions)
