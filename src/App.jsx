import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';
import Search from './Components/Search';
import SummaryCards from './Components/SummaryCards';
import Transactions from "./Components/Transactions";
import { initialExpenses } from './data/content';
import Analytics from './Components/Analytics';

function App() {
  // 1. PERSISTENCE: Initialize state from LocalStorage or fallback to initialExpenses
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("financial_data");
    return saved ? JSON.parse(saved) : initialExpenses;
  });

  const [searchTerm, setSearchTerm] = useState("");

  // 2. PERSISTENCE: Save to LocalStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("financial_data", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    const formatted = {
      ...newExpense,
      id: expenses.length + 1, // Simple ID increment
      amount: parseFloat(newExpense.amount),
      createdAt: new Date().toLocaleDateString(), // Matches your screenshot's column
      wallet: "Cash" // Default wallet as seen in your screenshot
    };

    setExpenses([formatted, ...expenses]); // Put new ones at the top
  };

  const deleteExpense = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      setExpenses(expenses.filter(exp => exp.id !== id));
    }
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      
      {/* Sidebar remains fixed on the left */}
      <Sidebar />

      {/* Main Content Area - Shifted right to make room for Sidebar */}
      <div className="flex-1 ml-64">
        <Routes>
          
          {/* DASHBOARD ROUTE */}
          <Route
            path="/"
            element={
              <main className="p-4 md:p-10">
                <div className="max-w-6xl mx-auto">
                  
                  <header className="mb-8 flex justify-between items-end">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Financial Tracker</h1>
                      <p className="text-gray-500">Manage your daily expenses and income</p>
                    </div>
                  </header>

                  <div className="space-y-8">
                    {/* Summary Section */}
                    <SummaryCards expenses={expenses} />

                    {/* Input Section */}
                    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h2 className="text-sm font-bold uppercase text-gray-400 mb-4">Add New Transaction</h2>
                      <ExpenseForm onAdd={addExpense} />
                    </section>

                    {/* Table Section */}
                    <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="p-4 border-b bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h2 className="font-semibold text-gray-700 text-lg">Recent Transactions</h2>
                        <div className="w-full md:w-72">
                          <Search onSearch={setSearchTerm} />
                        </div>
                      </div>

                      <ExpenseTable
                        expenses={filteredExpenses}
                        onDelete={deleteExpense}
                      />
                    </section>
                  </div>
                </div>
              </main>
            }
          />

          {/* TRANSACTIONS PAGE */}
          <Route
            path="/transactions"
            element={
              <div className="p-10">
                 <Transactions
                  expenses={expenses}
                  onDelete={deleteExpense}
                />
              </div>
            }
          />
<Route
  path="/analytics"
  element={<Analytics expenses={expenses} />}
/>
        </Routes>
      </div>
    </div>
  );
}

export default App;