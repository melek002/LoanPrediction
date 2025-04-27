# 🏦 Loan Approval Prediction System

Welcome to the **Loan Approval Prediction** project!  
This application allows users to submit personal and financial information to predict whether a loan will likely be **approved** or **rejected**, using a Machine Learning model.

---

## 🚀 Technologies Used

| Technology | Purpose |
|:--|:--|
| Python + Flask | Machine Learning backend API |
| Scikit-Learn, XGBoost | Model training and prediction |
| React + Vite + TypeScript + TailwindCSS | Frontend web application |
| Pandas, NumPy | Data preprocessing |
| Joblib | Model persistence |

---

## 📊 Dataset Overview

The dataset includes features like:
- **Personal Information** (Age, Gender, Education)
- **Financial Status** (Income, Employment Experience)
- **Loan Details** (Loan Amount, Interest Rate, Loan % of Income)
- **Credit History** (Credit Score, Previous Defaults)

**Target:**
- `loan_status` (1 = Approved, 0 = Rejected)

---

## 🛠️ Project Structure

```plaintext
/loan-approval-prediction
├── backend/ (Flask API)
│   ├── app.py
│   ├── loan_pipeline.pkl
├── frontend/ (React App)
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── App.tsx
│   │   ├── LoanApplicationForm.tsx
│   ├── public/
├── README.md
├── requirements.txt
```
##✨ Features
📄 Dynamic form to collect applicant information

📈 Real-time loan approval prediction based on trained ML model

🎨 Modern UI using TailwindCSS and TypeScript

⚡ Fast and secure API communication between React and Flask

📦 Full pipeline saved and deployed easily

##🔥 How to Run Locally
1. Backend (Flask)
bash
Copy
Edit
cd backend
pip install -r requirements.txt
python app.py
Backend will run on ➔ http://127.0.0.1:5000

2. Frontend (React + Vite)

```cd frontend
npm install
npm run dev
```bash
Frontend will run on ➔ http://localhost:5173

##📦 Model Training Summary
Scaling numerical features with StandardScaler

Encoding categorical features with OneHotEncoder

Comparing multiple ML models:

Logistic Regression

Random Forest

K-Nearest Neighbors (KNN)

XGBoost

Final pipeline saved as loan_pipeline.pkl

##📈 Final Model Metrics (Best Model - KNN Tuned)

Metric	Score
Accuracy	~90%
Precision	~82%
Recall	~69%
F1 Score	~75%
🌟 Future Improvements
🎯 Add email notification system

🎯 Store loan applications history in a database

🎯 User authentication (Sign Up / Login)

🎯 Full deployment (Flask + React together) using Render / Vercel

##🙏 Acknowledgements
Scikit-learn for amazing Machine Learning libraries

XGBoost for powerful boosting algorithms

React & Vite teams for modern web development

Flask for lightweight APIs
