function Analytics({ expenses }) {

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const count = expenses.length;

  const average = count === 0 ? 0 : total / count;

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Analytics
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Expenses</h2>
          <p className="text-2xl font-bold">
            KSh {total.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Transactions</h2>
          <p className="text-2xl font-bold">{count}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Average Expense</h2>
          <p className="text-2xl font-bold">
            KSh {average.toFixed(2)}
          </p>
        </div>

      </div>

    </div>
  );
}

export default Analytics;