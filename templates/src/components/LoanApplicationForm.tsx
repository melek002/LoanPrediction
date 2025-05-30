import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { useLoanContext } from '../context/LoanContext';
import FormSection from './FormSection';
import InputField from './InputField';
import SelectField from './SelectField';

const LoanApplicationForm: React.FC = () => {
  const { formData, setFormData, prediction, submitPrediction, isLoading, clearPrediction } = useLoanContext();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    personal: true,
    financial: false,
    loan: false,
    credit: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitPrediction();
  };

  const handleReset = () => {
    clearPrediction();
    // Reset sections to initial state
    setExpandedSections({
      personal: true,
      financial: false,
      loan: false,
      credit: false,
    });
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {prediction && (
        <div className="absolute inset-0 bg-white bg-opacity-95 z-10 flex flex-col items-center justify-center p-6 animate-fadeIn">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
            prediction.approved ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            {prediction.approved ? (
              <CheckCircle2 className="w-10 h-10" />
            ) : (
              <Info className="w-10 h-10" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {prediction.approved ? 'Congratulations!' : 'We\'re Sorry'}
          </h3>
          <p className="text-lg text-center text-gray-700 mb-6 max-w-md">
            {prediction.approved 
              ? 'Based on our prediction, your loan application is likely to be approved!'
              : 'Based on our prediction, your loan application might not be approved at this time.'}
          </p>
          {!prediction.approved && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 max-w-md">
              <p className="text-sm text-blue-700">
                Consider improving your credit score, reducing your debt-to-income ratio, or applying for a smaller loan amount.
              </p>
            </div>
          )}
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Start New Application
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className={`transition-opacity duration-300 ${prediction ? 'opacity-0' : 'opacity-100'}`}>
        <div className="bg-blue-700 px-6 py-4 text-white">
          <h3 className="text-xl font-medium">Loan Application Form</h3>
          <p className="text-blue-100 text-sm mt-1">Please fill out all required fields</p>
        </div>

        <div className="p-6">
          <FormSection 
            title="Personal Information" 
            isExpanded={expandedSections.personal}
            onToggle={() => toggleSection('personal')}
            icon={expandedSections.personal ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField
                label="Gender"
                name="person_gender"
                value={formData.person_gender}
                onChange={handleChange}
                required
                options={[
                  { value: "", label: "Select gender" },
                  { value: "male", label: "male" },
                  { value: "female", label: "Female" },
                  { value: "Other", label: "Other" }
                ]}
              />
              <InputField
                label="Age"
                name="person_age"
                type="number"
                value={formData.person_age}
                onChange={handleChange}
                required
                placeholder="Enter your age"
              />
              <SelectField
                label="Education"
                name="person_education"
                value={formData.person_education}
                onChange={handleChange}
                required
                options={[
                  { value: "", label: "Select education" },
                  { value: "High School", label: "High School" },
                  { value: "Bachelor", label: "Bachelor's Degree" },
                  { value: "Master", label: "Master's Degree" },
                ]}
              />
              <SelectField
                label="Home Ownership"
                name="person_home_ownership"
                value={formData.person_home_ownership}
                onChange={handleChange}
                required
                options={[
                  { value: "", label: "Select home ownership" },
                  { value: "Own", label: "Own" },
                  { value: "Mortgage", label: "Mortgage" },
                  { value: "Rent", label: "Rent" },
                  { value: "Other", label: "Other" }
                ]}
              />
            </div>
          </FormSection>

          <FormSection 
            title="Financial Information" 
            isExpanded={expandedSections.financial}
            onToggle={() => toggleSection('financial')}
            icon={expandedSections.financial ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Annual Income ($)"
                name="person_income"
                type="number"
                value={formData.person_income}
                onChange={handleChange}
                required
                placeholder="Enter your annual income"
              />
              <InputField
                label="Employment Experience (years)"
                name="person_emp_exp"
                type="number"
                value={formData.person_emp_exp}
                onChange={handleChange}
                required
                placeholder="Enter your employment experience"
                step="0.1"
              />
            </div>
          </FormSection>

          <FormSection 
            title="Loan Details" 
            isExpanded={expandedSections.loan}
            onToggle={() => toggleSection('loan')}
            icon={expandedSections.loan ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField
                label="Loan Intent"
                name="loan_intent"
                value={formData.loan_intent}
                onChange={handleChange}
                required
                options={[
                  { value: "", label: "Select loan intent" },
                  { value: "HOMEIMPROVEMENT", label: "Home Purchase" },
                  { value: "Education", label: "Education" },
                  { value: "Medical", label: "Medical Expenses" },
                  { value: "Venture", label: "Business Venture" },
                  { value: "Personal", label: "Personal Use" },
                  { value: "DebtConsolidation", label: "Debt Consolidation" }
                ]}
              />
              <InputField
                label="Loan Amount ($)"
                name="loan_amnt"
                type="number"
                value={formData.loan_amnt}
                onChange={handleChange}
                required
                placeholder="Enter loan amount"
              />
              <InputField
                label="Interest Rate (%)"
                name="loan_int_rate"
                type="number"
                value={formData.loan_int_rate}
                onChange={handleChange}
                required
                placeholder="Enter interest rate"
                step="0.01"
              />
              <InputField
                label="Loan % Income"
                name="loan_percent_income"
                type="number"
                value={formData.loan_percent_income}
                onChange={handleChange}
                required
                placeholder="Enter loan as percentage of income"
                step="0.01"
              />
            </div>
          </FormSection>

          <FormSection 
            title="Credit Information" 
            isExpanded={expandedSections.credit}
            onToggle={() => toggleSection('credit')}
            icon={expandedSections.credit ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField
                label="Previous Loan Defaults"
                name="previous_loan_defaults_on_file"
                value={formData.previous_loan_defaults_on_file}
                onChange={handleChange}
                required
                options={[
                  { value: "", label: "Select previous defaults" },
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" }
                ]}
              />
              <InputField
                label="Credit Score"
                name="credit_score"
                type="number"
                value={formData.credit_score}
                onChange={handleChange}
                required
                placeholder="Enter your credit score"
                min="300"
                max="850"
              />
              <InputField
                label="Credit History Length (years)"
                name="cb_person_cred_hist_length"
                type="number"
                value={formData.cb_person_cred_hist_length}
                onChange={handleChange}
                required
                placeholder="Enter credit history length"
                step="0.1"
              />
            </div>
          </FormSection>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Get Prediction <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoanApplicationForm;