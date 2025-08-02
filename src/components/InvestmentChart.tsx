import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { BarChart3 } from 'lucide-react';
import { InvestmentData, InvestmentResult } from '../utils/calculations';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface InvestmentChartProps {
  data: InvestmentData;
  result: InvestmentResult;
}

const InvestmentChart: React.FC<InvestmentChartProps> = ({ result }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Prepare chart data
  const labels = result.yearlyData.map(item => `Year ${item.year}`);
  const contributionsData = result.yearlyData.map(item => item.totalContributions);
  const balanceData = result.yearlyData.map(item => item.balance);
  const interestData = result.yearlyData.map(item => item.interestEarned);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Total Contributions',
        data: contributionsData,
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
      },
      {
        label: 'Interest Earned',
        data: interestData,
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: false,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#10B981',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
      },
      {
        label: 'Total Balance',
        data: balanceData,
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#8B5CF6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        borderWidth: 3,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: '500'
          }
        }
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1F2937',
        bodyColor: '#374151',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 11
          },
          callback: function(value: any) {
            return formatCurrency(value);
          }
        }
      }
    },
    elements: {
      line: {
        borderWidth: 2,
      }
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-slate-600" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">Investment Growth Over Time</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Visual representation of your investment growth, contributions, and compound interest
        </p>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="h-64 sm:h-80 mb-4 sm:mb-6">
          <Line data={chartData} options={options} />
        </div>
        
        {/* Chart Legend with Additional Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">Contributions</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Your regular investments building the foundation
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">Interest Earned</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Compound growth accelerating over time
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">Total Balance</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Combined value of all investments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentChart;