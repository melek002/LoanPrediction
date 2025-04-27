import React, { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  children: ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  icon: ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ 
  title, 
  children, 
  isExpanded, 
  onToggle,
  icon
}) => {
  return (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
      <button 
        type="button"
        onClick={onToggle}
        className="w-full px-4 py-3 bg-gray-50 flex items-center justify-between text-left"
      >
        <h4 className="text-lg font-medium text-gray-900">{title}</h4>
        <span className="text-gray-500">
          {icon}
        </span>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-screen opacity-100 p-4' : 'max-h-0 opacity-0 p-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FormSection;