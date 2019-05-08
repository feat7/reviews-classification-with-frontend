import pickle
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def load_models():
    global cv, model
    cv = pickle.load(open('countvectorizer.sav', 'rb'))
    model = pickle.load(open('model.sav', 'rb'))

@app.route("/")
def home():
    input_vector = cv.transform([request.args.get("review")])
    result = model.predict(input_vector)[0]

    return jsonify({
        'success': True,
        'result': str(result)
    })

if __name__ == "__main__":
    load_models()
    app.debug = True
    app.run(host='0.0.0.0', port=5000)