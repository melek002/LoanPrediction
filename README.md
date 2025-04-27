🚀 Loan Prediction Web App

This repository contains my submission for a university project in the Business Analytics module.
It demonstrates how machine learning can be applied to predict loan approvals.
🛠 Setup Instructions

Follow these steps to get the project up and running:
1. Install Dependencies

pip install -r requirements.txt

2. Download the Dataset

Download the dataset used for training and testing the model from this Medium article.

📂 Place the dataset in your project directory as loan_data.csv.
3. Train the Model

Use the provided Jupyter Notebook to train the model:

jupyter notebook newloan.ipynb

This will generate a trained pipeline and save it as loan_pipeline.pkl.

(Alternatively, you can use the provided pretrained loan_pipeline.pkl directly.)
4. Run the Web App

Start the Flask web server:

python app.py

The API will be available locally at:

http://localhost:5000

You can now make loan approval predictions via the web app frontend or API requests!
📂 Project Structure
File	Description
newloan.ipynb	Jupyter Notebook for data preprocessing, model training, and evaluation.
app.py	Flask app that hosts the trained model as a web API for predictions.
requirements.txt	: List of all required Python packages.
loan_pipeline.pkl	Pretrained loan prediction model (generated after training).
loan_data.csv	Dataset for training and testing (needs to be downloaded).
📚 Sources & References

    Predicting Loan Approval Using Logistic Regression (Medium Article)

    ChatGPT (for model-building insights and optimization help)

    Scikit-learn Documentation (for machine learning algorithms)

🎯 Thank you for checking out my project! Feedback and suggestions are always welcome.
