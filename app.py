from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import pyodbc  # 🔑 For SQL Server

app = Flask(__name__)
CORS(app)

# Load trained model pipeline
pipeline = joblib.load('loan_pipeline.pkl')

# Database connection string
conn_str = (
    'DRIVER=ODBC;'
    'SERVER=localhost;'
    'DATABASE=Accounts;'
    'UID=sa;'
    'PWD=melekmelek;'
)

# 🔐 Login endpoint
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    try:
        with pyodbc.connect(conn_str) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM Users WHERE username=? AND password=?", (username, password))
            result = cursor.fetchone()
            if result:
                return jsonify({"success": True, "message": "Login successful"})
            else:
                return jsonify({"success": False, "message": "Invalid credentials"}), 401
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

# 💡 Prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json

        form_data = [
            data['person_gender'],
            data['person_education'],
            data['person_home_ownership'],
            data['loan_intent'],
            data['previous_loan_defaults_on_file'],
            float(data['person_age']),
            float(data['person_income']),
            int(data['person_emp_exp']),
            float(data['loan_amnt']),
            float(data['loan_int_rate']),
            float(data['loan_percent_income']),
            float(data['cb_person_cred_hist_length']),
            int(data['credit_score'])
        ]

        feature_names = [
            'person_gender',
            'person_education',
            'person_home_ownership',
            'loan_intent',
            'previous_loan_defaults_on_file',
            'person_age',
            'person_income',
            'person_emp_exp',
            'loan_amnt',
            'loan_int_rate',
            'loan_percent_income',
            'cb_person_cred_hist_length',
            'credit_score'
        ]

        form_data_df = pd.DataFrame([form_data], columns=feature_names)

        prediction = pipeline.predict(form_data_df)[0]
        prediction_proba = pipeline.predict_proba(form_data_df)[0][prediction]
        confidence = round(prediction_proba * 100, 2)

        result = "APPROVED ✅" if prediction == 1 else "REJECTED ❌"

        return jsonify({
            'prediction': result,
            'confidence': f"{confidence}%"
        })

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=True)
