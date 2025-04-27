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
