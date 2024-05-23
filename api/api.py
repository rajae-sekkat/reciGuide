from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import numpy as np
import os
from flask_cors import CORS
from PIL import Image
import io

app = Flask(__name__)
CORS(app)
model_best = load_model('best_model_3class.hdf5', compile=False)
foods_sorted = sorted(os.listdir(r'C:\Users\Rajae Sekkat\Desktop\reciguide\api\images'))

# Function to get nutritional data based on food type
def get_nutritional_data(food_type):
    nutritional_data = {}
    if food_type == 'moroccan_tajine':
        nutritional_data['calories'] = 300
        nutritional_data['protein'] = 20
        nutritional_data['carbs'] = 30
        nutritional_data['fat'] = 10
    elif food_type == 'moroccan_djajmhamer':
        nutritional_data['calories'] = 378
        nutritional_data['protein'] = 29.9
        nutritional_data['carbs'] = 25.4
        nutritional_data['fat'] = 7.2
    elif food_type == 'moroccan_couscous':
        nutritional_data['calories'] = 350  # Estimated calories for 200g serving
        nutritional_data['protein'] = 10  # Protein content for 200g serving
        nutritional_data['carbs'] = 60  # Carbohydrates content for 200g serving
        nutritional_data['fat'] = 7
    return nutritional_data

@app.route('/predict', methods=['POST'])
def predict():
    img_file = request.files['image']
    img_bytes = img_file.read()

    # Convert bytes to image
    img = image.img_to_array(image.load_img(io.BytesIO(img_bytes), target_size=(200, 200)))
    img = np.expand_dims(img, axis=0)
    img = img / 255.

    pred = model_best.predict(img)
    index = np.argmax(pred)
    pred_value = foods_sorted[index]

    # Get corresponding nutritional data
    nutritional_data = get_nutritional_data(pred_value)

    return jsonify({'prediction': pred_value, 'nutritional_data': nutritional_data})

if __name__ == '_main_':
    app.run(debug=True)