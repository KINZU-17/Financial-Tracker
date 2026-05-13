import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';
import Search from './Components/Search';
import { initialExpenses } from './data/content';

import Transactions from "./Components/Transactions";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (newExpense) => {
    const formatted = {
      ...newExpense,
      id: Date.now(),
      amount: parseFloat(newExpense.amount)
    };

    setExpenses([formatted, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">

      <Sidebar />

      <div className="flex-1 ml-64">

        <Routes>

          {/* DASHBOARD */}
          <Route
            path="/"
            element={
              <main className="p-4 md:p-10">
                <div className="max-w-6xl mx-auto">

                  <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                      Financial Tracker
                    </h1>
                    <p className="text-gray-500">
                      Manage your daily expenses and income
                    </p>
                  </header>

                  <div className="grid gap-8">

                    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <ExpenseForm onAdd={addExpense} />
                    </section>

                    <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                      <div className="p-4 border-b bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">

                        <h2 className="font-semibold text-gray-700 text-lg">
                          Transactions
                        </h2>

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

          {/* TRANSACTIONS PAGE (REAL DATA NOW) */}
          <Route
            path="/transactions"
            element={
              <Transactions
                expenses={expenses}
                onDelete={deleteExpense}
              />
            }
          />

        </Routes>

      </div>
    </div>
  );
}

export default App;