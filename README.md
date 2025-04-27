# 🏦 Loan Approval Prediction System

Welcome to the **Loan Approval Prediction** project!  
This application allows users to submit personal and financial information to predict, using a machine learning model, whether a loan will likely be **approved** or **rejected**.

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
/loan
│   ├── app.py
│   ├── loan_pipeline.pkl
├── templates/ (React App)
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── App.tsx
│   │   ├── LoanApplicationForm.tsx
│   ├── public/
├── README.md
├── requirements.txt
```
## ✨ Features
📄 Dynamic form to collect applicant information

📈 Real-time loan approval prediction based on trained ML model

🎨 Modern UI using TailwindCSS and TypeScript

⚡ Fast and secure API communication between React and Flask

📦 Full pipeline saved and deployed easily

## 🔥 How to Run Locally
1. Backend (Flask)
 ```bash
cd loan
pip install -r requirements.txt
python app.py
```
Backend will run on ➔ http://127.0.0.1:5000

2. Frontend (React + Vite)
```bash
cd tempaltes
npm install
npm run dev
```
Frontend will run on ➔ http://localhost:5173

## 🔁 Model Performance Comparison: Before vs After Normalization

### ✅ Summary Table

| Model                  | Accuracy (Before) | Accuracy (After) | Precision (Before) | Precision (After) | False Negatives (Before → After) |
|------------------------|------------------|------------------|---------------------|--------------------|-----------------------------------|
| **Linear Regression**  | 0.8926            | 0.8926           | 0.798               | 0.798              | 622 → 622                         |
| **Logistic Regression**| 0.8820            | 0.8923           | 0.735               | 0.765              | 539 → 515 ✅                       |
| **Random Forest**      | 0.9309            | 0.9307           | 0.900               | 0.899              | 452 → 452                         |
| **KNN (Tuned)**        | 0.8360            | 0.9002 🔥        | 0.689               | 0.827              | 1054 → 609 🔥                     |
| **XGBoost**            | 0.9362            | 0.9362           | 0.889               | 0.889              | 372 → 372                         |

---

### 🧠 Observations

- 🔥 **K-Nearest Neighbors (KNN)** showed the **most significant improvement**:
  - Accuracy jumped by **6.4%**
  - False Negatives dropped by nearly **450 cases**
  - Precision rose from **68.9% → 82.7%**

- ✅ **Logistic Regression** also benefited from normalization, improving across all key metrics.

- 🧱 **Random Forest** and ⚡ **XGBoost** remained highly stable — expected behavior due to their **scale-invariance**.

- 📉 **Linear Regression (converted)** showed no change, as expected.

---

### 🏆 Final Recommendations

| Goal                     | Best Model             |
|--------------------------|------------------------|
| **Minimize False Negatives** | 🔥 KNN (normalized)       |
| **Maximize Accuracy + Precision** | ⚡ XGBoost / 🌲 Random Forest |
| **Balance + Interpretability** | ✅ Logistic Regression    |

---
## 📚 References & Credits

- **Dataset:** Based on a dataset introduced in a Medium article on Loan Prediction.
- **Machine Learning Guidance:**  
  - Scikit-learn Official Documentation  
  - ChatGPT 
- **Design:** **Bolt AI** (Vite + TailwindCSS + React)
- **Backend Framework:** Built with **Flask** (Python)

