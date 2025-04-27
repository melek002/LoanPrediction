import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormDataType {
  person_gender: string;
  person_education: string;
  person_home_ownership: string;
  loan_intent: string;
  previous_loan_defaults_on_file: string;
  person_age: string;
  person_income: string;
  person_emp_exp: string;
  loan_amnt: string;
  loan_int_rate: string;
  loan_percent_income: string;
  cb_person_cred_hist_length: string;
  credit_score: string;
}

interface PredictionType {
  approved: boolean;
  probability?: number;
  message?: string;
}

interface LoanContextType {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
  prediction: PredictionType | null;
  setPrediction: React.Dispatch<React.SetStateAction<PredictionType | null>>;
  isLoading: boolean;
  submitPrediction: () => void;
  clearPrediction: () => void;
}

const initialFormData: FormDataType = {
  person_gender: '',
  person_education: '',
  person_home_ownership: '',
  loan_intent: '',
  previous_loan_defaults_on_file: '',
  person_age: '',
  person_income: '',
  person_emp_exp: '',
  loan_amnt: '',
  loan_int_rate: '',
  loan_percent_income: '',
  cb_person_cred_hist_length: '',
  credit_score: '',
};

const LoanContext = createContext<LoanContextType | undefined>(undefined);

export const LoanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [prediction, setPrediction] = useState<PredictionType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitPrediction = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          person_gender: formData.person_gender.toLowerCase(),
          person_education: formData.person_education,
          person_home_ownership: formData.person_home_ownership.toUpperCase(),
          loan_intent: formData.loan_intent.toUpperCase(),
          previous_loan_defaults_on_file: formData.previous_loan_defaults_on_file,
          person_age: parseFloat(formData.person_age),
          person_income: parseFloat(formData.person_income),
          person_emp_exp: parseFloat(formData.person_emp_exp),
          loan_amnt: parseFloat(formData.loan_amnt),
          loan_int_rate: parseFloat(formData.loan_int_rate),
          loan_percent_income: parseFloat(formData.loan_percent_income),
          cb_person_cred_hist_length: parseFloat(formData.cb_person_cred_hist_length),
          credit_score: parseInt(formData.credit_score),
        }),
      });
  
      const data = await response.json();
  
      if (data.error) {
        console.error("Prediction Error:", data.error);
        alert("Prediction failed: " + data.error);
      } else {
        setPrediction({
          approved: data.prediction.includes('APPROVED'),
          probability: parseFloat(data.confidence.replace('%', '')) / 100,
          message: data.prediction,
        });
      }
    } catch (error) {
      console.error("Error calling prediction API:", error);
      alert("Error connecting to prediction service.");
    } finally {
      setIsLoading(false);
    }
  };
  

  const clearPrediction = () => {
    setPrediction(null);
    setFormData(initialFormData);
  };

  return (
    <LoanContext.Provider
      value={{
        formData,
        setFormData,
        prediction,
        setPrediction,
        isLoading,
        submitPrediction,
        clearPrediction,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};

export const useLoanContext = (): LoanContextType => {
  const context = useContext(LoanContext);
  if (context === undefined) {
    throw new Error('useLoanContext must be used within a LoanProvider');
  }
  return context;
};