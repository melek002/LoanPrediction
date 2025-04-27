#🏦 Loan Approval Prediction System
A Machine Learning-powered web application to predict loan approvals

Python Scikit-learn Flask

This repository contains my Business Analytics university project, demonstrating how machine learning can be applied to automate loan approval predictions.

#✨ Features
✅ End-to-end ML pipeline – Data preprocessing, model training & evaluation
✅ Interactive web app – Flask-based UI for real-time predictions
✅ Pre-trained model – Ready-to-use loan_pipeline.pkl included
✅ API support – Integrate predictions into other systems

#🚀 Quick Start
1. Clone the Repository
bash
git clone https://github.com/yourusername/loan-prediction-app.git
cd loan-prediction-app
2. Install Dependencies
bash
pip install -r requirements.txt
3. Download the Dataset
Download loan_data.csv from this Medium article and place it in the project root.

(Alternatively, use the provided pre-trained model without re-training)

4. Run the Web App
bash
python app.py
Access the app at:
🌐 http://localhost:5000

🧠 Model Training (Optional)
To retrain the model:

Open newloan.ipynb in Jupyter

Execute all cells

The new pipeline will be saved as loan_pipeline.pkl

python
# Sample notebook code preview
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

data = pd.read_csv("loan_data.csv")
# ... preprocessing & training logic ...
📂 Project Structure
markdown
├── app.py                # Flask web application
├── newloan.ipynb         # Jupyter Notebook (data processing + model training)
├── loan_pipeline.pkl     # Pre-trained model (Random Forest)
├── requirements.txt      # Python dependencies
└── loan_data.csv         # Dataset (download separately)
📚 References & Credits
Dataset Source: Medium Article on Loan Prediction

ML Insights: ChatGPT, Scikit-learn Documentation

UI Design: Bolt Framework

Inspired by: Kaggle Loan Prediction Competitions

🤝 Contributing & Feedback
Found a bug or have suggestions?
📩 Open an Issue or submit a Pull Request!

⭐ Star this repo if you find it useful!
