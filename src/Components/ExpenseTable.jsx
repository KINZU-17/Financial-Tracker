import React from "react";

export default function ExpenseTable({ expenses, onDelete }) {
  return (
    <div className="overflow-x-auto">

      <table className="w-full text-left border-collapse">

        <thead className="bg-gray-100">
          <tr className="text-gray-600 text-sm uppercase">

            <th className="p-4">ID</th>

            <th className="p-4">Description</th>

            <th className="p-4">Category</th>

            <th className="p-4">Amount</th>

            <th className="p-4">Date</th>

            <th className="p-4 text-center">Actions</th>

          </tr>
        </thead>

        <tbody>

          {expenses.length > 0 ? (

            expenses.map((expense, index) => (

              <tr
                key={expense.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="p-4 text-gray-700">
                  {index + 1}
                </td>

                <td className="p-4 font-medium text-gray-800">
                  {expense.description}
                </td>

                <td className="p-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {expense.category}
                  </span>
                </td>

                <td className="p-4 font-semibold text-green-600">
                  KES {expense.amount}
                </td>

                <td className="p-4 text-gray-500">
                  {expense.date}
                </td>

                <td className="p-4 text-center">

                  <button
                    onClick={() => onDelete(expense.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))

          ) : (

            <tr>

              <td
                colSpan="6"
                className="text-center p-8 text-gray-400"
              >
                No expenses found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}