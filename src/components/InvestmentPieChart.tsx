import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { PieChart as PieChartIcon } from "lucide-react";
import { InvestmentData, InvestmentResult } from "../utils/calculations";

ChartJS.register(ArcElement, Tooltip, Legend);

interface InvestmentPieChartProps {
  data: InvestmentData;
  result: InvestmentResult;
}

const InvestmentPieChart: React.FC<InvestmentPieChartProps> = ({
  data,
  result,
}) => {
  const initial = data.initialAmount;
  const totalContributions = data.monthlyContribution * data.years * 12;
  const totalPrincipal = initial + totalContributions;
  const interest = result.finalAmount - totalPrincipal;

  const chartData = {
    labels: ["Initial Investment", "Contributions", "Interest Earned"],
    datasets: [
      {
        data: [initial, totalContributions, interest],
        backgroundColor: ["#3B82F6", "#10B981", "#8B5CF6"], // Tailwind blue, green, purple
        borderColor: ["#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#374151",
          usePointStyle: true,
          padding: 16,
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#1F2937",
        bodyColor: "#374151",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: (context: any) => {
            const value = context.parsed;
            return `${context.label}: $${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <PieChartIcon className="w-5 h-5 text-slate-600" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">
            Investment Breakdown
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          A visual split of your principal, contributions, and earned interest
        </p>
      </div>

      <div className="p-4 sm:p-6">
        <div className="h-64 sm:h-80 mb-4 sm:mb-6">
          <Pie data={chartData} options={options} />
        </div>

        {/* Legend Description */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">
                Initial
              </span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Your initial lump sum investment
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">
                Contributions
              </span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Regular monthly investments added over time
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">
                Interest
              </span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Growth generated from compound interest
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPieChart;
