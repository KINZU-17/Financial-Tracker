import React from 'react';

export default function SummaryCards({ expenses }) {
  // Simple calculation logic
  const totalExpenditure = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0);
  
  // Note: For a real app, you'd likely have an 'income' state too. 
  // For now, I'll set a static income or you can pass it as a prop.
  const totalIncome = 3000000; 
  const balance = totalIncome - totalExpenditure;

  const cardData = [
    { title: "Balance", amount: balance, subtitle: "Your current balance", color: "text-purple-600" },
    { title: "Income", amount: totalIncome, subtitle: "Your total income", color: "text-purple-600" },
    { title: "Expenditure", amount: totalExpenditure, subtitle: "Your total expenditure", color: "text-purple-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className={`font-bold text-lg ${card.color}`}>{card.title}</h3>
          <p className="text-gray-400 text-xs mb-4">{card.subtitle}</p>
          <p className="text-2xl font-black text-gray-800">
            KES {card.amount.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}