import cv2
import mediapipe as mp

mp_drawing = mp.solutions.drawing_utils

mp_hands = mp.solutions.hands

hands = mp_hands.Hands(static_image_mode=True, max_num_hands=1, min_detection_confidence=0.7, min_tracking_confidence=0.4)


def getBoundingBox(image):

    output_image = image.copy()

    h, w, _ = image.shape

    results = hands.process(cv2.cvtColor(output_image, cv2.COLOR_BGR2RGB))

    if results.multi_hand_landmarks:

        
        for handLMs in results.multi_hand_landmarks:
            x_max = 0
            y_max = 0
            x_min = w
            y_min = h
            offset = 50
            for lm in handLMs.landmark:
                x, y = int(lm.x * w), int(lm.y * h)
                if x > x_max:
                    x_max = x
                if x < x_min:
                    x_min = x
                if y > y_max:
                    y_max = y
                if y < y_min:
                    y_min = y


            # For predicting, the sub-image must be in bounds
            x_min_offset = x_min - offset if x_min - offset > 0 else 0
            x_max_offset = x_max + offset if x_max + offset < w else w
            y_min_offset = y_min - offset if y_min - offset > 0 else 0
            y_max_offset = y_max + offset if y_max + offset < h else h

            letter = output_image[y_min_offset : y_max_offset, x_min_offset : x_max_offset]

    return letter


