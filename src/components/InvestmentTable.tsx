import React from "react";
import { InvestmentResult } from "../utils/calculations";
import { PieChartIcon } from "lucide-react";

interface InvestmentTableProps {
  result: InvestmentResult | null;
}

const InvestmentTable: React.FC<InvestmentTableProps> = ({ result }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-b border-slate-200">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900">
          Yearly Investment Breakdown
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Track your balance, interest earned, and contributions over time
        </p>
      </div>

      <div className="p-4 sm:p-6">
        <table className="min-w-full text-sm sm:text-base text-left text-slate-700">
          <thead className="bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm">
            <tr>
              <th className="px-4 py-2">Year</th>
              <th className="px-4 py-2">Total Contributions</th>
              <th className="px-4 py-2">Interest Earned</th>
              <th className="px-4 py-2">Total Balance</th>
            </tr>
          </thead>
          <tbody>
            {result.yearlyData.map((item) => (
              <tr key={item.year} className="even:bg-slate-50">
                <td className="px-4 py-2">Year {item.year}</td>
                <td className="px-4 py-2">
                  ${item.totalContributions.toLocaleString()}
                </td>
                <td className="px-4 py-2">
                  ${item.interestEarned.toLocaleString()}
                </td>
                <td className="px-4 py-2 font-medium text-slate-900">
                  ${item.balance.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestmentTable;
