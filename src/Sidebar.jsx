import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#111827] text-white flex flex-col justify-between p-5 fixed">

      <div>
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-green-400">
            FinanceTracker
          </h1>

          <p className="text-sm text-gray-400">
            Manage your money
          </p>
        </div>

        <nav className="space-y-3">

          {/* Dashboard */}
          <Link
            to="/"
            className="flex items-center gap-3 p-3 rounded-xl bg-green-500"
          >
            <FaHome />
            Dashboard
          </Link>

          {/* Transactions */}
          <Link
            to="/transactions"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-700 transition"
          >
            <FaWallet />
            Transactions
          </Link>

          {/* Analytics */}
          <Link
            to="/analytics"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-700 transition"
          >
            <FaChartPie />
            Analytics
          </Link>

          {/* Settings */}
          <Link
            to="/settings"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-700 transition"
          >
            <FaCog />
            Settings
          </Link>

        </nav>
      </div>

      <div>
        <button className="flex items-center gap-3 p-3 w-full rounded-xl hover:bg-red-500 transition">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;