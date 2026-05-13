import ExpenseTable from "./ExpenseTable";

function Transactions({ expenses, onDelete }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Transactions
      </h1>

      <div className="bg-white rounded-xl shadow-sm border">
        <ExpenseTable
          expenses={expenses}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}

export default Transactions;