import React from 'react';
import { BarChart3, Layers, Shield, TrendingUp } from 'lucide-react';
import LoanApplicationForm from './components/LoanApplicationForm';
import { LoanProvider } from './context/LoanContext';

function App() {
  return (
    <LoanProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-blue-700" />
                <h1 className="ml-2 text-xl font-semibold text-gray-900">LoanSense</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">About</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Services</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Resources</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Loan Approval Prediction</h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below to check your loan eligibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-700 mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Secure Process</h3>
                <p className="mt-2 text-sm text-gray-600">Your information is encrypted and never shared with third parties.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-700 mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Data-Driven</h3>
                <p className="mt-2 text-sm text-gray-600">Our AI analyzes multiple factors to provide accurate predictions.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-700 mb-4">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Comprehensive</h3>
                <p className="mt-2 text-sm text-gray-600">We consider all aspects of your financial profile for best results.</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <LoanApplicationForm />
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                  <h3 className="ml-2 text-lg font-semibold">LoanSense</h3>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  Helping you make informed financial decisions since 2025.
                </p>
              </div>
              <div>
                <h4 className="text-base font-medium mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-base font-medium mb-3">Contact</h4>
                <p className="text-sm text-gray-400">
                  123 Financial District<br />
                  San Francisco, CA 94111<br />
                  contact@loansense.example
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 text-center">
              &copy; 2025 LoanSense. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </LoanProvider>
  );
}

export default App;