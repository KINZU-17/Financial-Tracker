import React from "react";

export default function ExpenseTable() {

  const expenses = [
    {
      date: "2026-05-11",
      description: "Netflix Subscription",
      category: "Entertainment",
      amount: 2500,
    },

    {
      date: "2026-05-10",
      description: "Groceries",
      category: "Food",
      amount: 4500,
    },

    {
      date: "2026-05-09",
      description: "Uber Ride",
      category: "Transport",
      amount: 1200,
    },
  ];

  return (
    <div className="bg-gray-900 mt-8 p-6 rounded-2xl shadow-lg">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Transactions</h2>

          <p className="text-gray-400 text-sm">
            List of your recent transactions
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
          Add Transaction
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">

          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="p-3">ID</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Description</th>
              <th className="p-3">Category</th>
              <th className="p-3">Date</th>
              <th className="p-3">Created At</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-gray-800 transition"
              >
                <td className="p-3 text-white">
                  {index + 1}
                </td>

                <td className="p-3 text-green-400 font-semibold">
                  KES {expense.amount}
                </td>

                <td className="p-3 text-white">
                  {expense.description}
                </td>

                <td className="p-3 text-blue-400">
                  {expense.category}
                </td>

                <td className="p-3 text-gray-300">
                  {expense.date}
                </td>

                <td className="p-3 text-gray-500">
                  {new Date().toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}