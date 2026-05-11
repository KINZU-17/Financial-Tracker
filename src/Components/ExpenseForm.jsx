import React, { useState } from 'react';

export default function ExpenseForm({ onAdd }) {
  const [data, setData] = useState({ date: "", description: "", category: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Added category to the validation check since it's now a manual input
    if (!data.date || !data.description || !data.category || !data.amount) {
      return alert("Please fill all fields, including category");
    }
    onAdd(data);
    setData({ date: "", description: "", category: "", amount: "" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
        
        {/* Date Input */}
        <div className="space-y-1">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Date</label>
          <input 
            type="date" 
            value={data.date} 
            onChange={(e) => setData({...data, date: e.target.value})} 
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
          />
        </div>

        {/* Description Input */}
        <div className="space-y-1">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Description</label>
          <input 
            type="text" 
            placeholder="e.g. Rent" 
            value={data.description} 
            onChange={(e) => setData({...data, description: e.target.value})} 
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
          />
        </div>

        {/* Category Input (Changed from Select to Text) */}
        <div className="space-y-1">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Category</label>
          <input 
            type="text" 
            placeholder="e.g. Leisure" 
            value={data.category} 
            onChange={(e) => setData({...data, category: e.target.value})} 
            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
          />
        </div>

        {/* Amount Input */}
        <div className="space-y-1">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-400 text-sm">Ksh</span>
            <input 
              type="number" 
              placeholder="0.00" 
              value={data.amount} 
              onChange={(e) => setData({...data, amount: e.target.value})} 
              className="w-full p-2.5 pl-12 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
            />
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-200"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}