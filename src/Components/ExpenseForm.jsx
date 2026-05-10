import React, { useState } from 'react';

export default function ExpenseForm({ onAdd }) {
  const [data, setData] = useState({ date: "", description: "", category: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.date || !data.description || !data.amount) return alert("Please fill all fields");
    onAdd(data);
    setData({ date: "", description: "", category: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
      <div>
        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Date</label>
        <input type="date" value={data.date} onChange={(e) => setData({...data, date: e.target.value})} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Description</label>
        <input type="text" placeholder="e.g. Rent" value={data.description} onChange={(e) => setData({...data, description: e.target.value})} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Category</label>
        <select value={data.category} onChange={(e) => setData({...data, category: e.target.value})} className="w-full p-2 border rounded">
          <option value="">Select...</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Education">Education</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Amount</label>
        <input type="number" placeholder="Ksh" value={data.amount} onChange={(e) => setData({...data, amount: e.target.value})} className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700">Add</button>
    </form>
  );
}