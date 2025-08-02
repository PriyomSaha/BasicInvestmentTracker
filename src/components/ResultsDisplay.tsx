import React from 'react';
import { TrendingUp, DollarSign, Percent, Calculator, PiggyBank, Target } from 'lucide-react';
import { InvestmentResult } from '../utils/calculations';

interface ResultsDisplayProps {
  result: InvestmentResult;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatCurrencyDetailed = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
  };

  const contributionPercentage = (result.totalContributions / result.finalAmount) * 100;
  const interestPercentage = (result.totalInterest / result.finalAmount) * 100;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Hero Result Card */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Target className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold">Final Investment Value</h2>
          </div>
          
          <div className="mb-3 sm:mb-4">
            <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 tracking-tight break-all">
              {formatCurrency(result.finalAmount)}
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-sm sm:text-base">
              <TrendingUp className="w-4 h-4" />
              <span className="break-words">Total growth of {formatCurrency(result.totalGain)} over {result.years} years</span>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1 gap-2">
                <span className="truncate">Your Contributions ({formatPercentage(contributionPercentage)})</span>
                <span className="flex-shrink-0">{formatCurrency(result.totalContributions)}</span>
              </div>
              <div className="bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-1000 ease-out"
                  style={{ width: `${contributionPercentage}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs sm:text-sm mb-1 gap-2">
                <span className="truncate">Interest Earned ({formatPercentage(interestPercentage)})</span>
                <span className="flex-shrink-0">{formatCurrency(result.totalInterest)}</span>
              </div>
              <div className="bg-white/20 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full h-2 transition-all duration-1000 ease-out delay-300"
                  style={{ width: `${interestPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm text-slate-600">Total Contributions</div>
              <div className="text-sm sm:text-lg lg:text-xl font-bold text-slate-900 truncate">{formatCurrency(result.totalContributions)}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm text-slate-600">Interest Earned</div>
              <div className="text-sm sm:text-lg lg:text-xl font-bold text-slate-900 truncate">{formatCurrency(result.totalInterest)}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Percent className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm text-slate-600">Effective Return</div>
              <div className="text-sm sm:text-lg lg:text-xl font-bold text-slate-900">{formatPercentage(result.effectiveReturn)}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <PiggyBank className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm text-slate-600">Monthly Savings</div>
              <div className="text-sm sm:text-lg lg:text-xl font-bold text-slate-900 truncate">{formatCurrency(result.monthlyContribution)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-slate-600" />
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">Investment Summary</h3>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-3">Investment Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-600">Initial Investment</span>
                  <span className="text-xs sm:text-sm font-semibold">{formatCurrencyDetailed(result.initialAmount)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-600">Monthly Contribution</span>
                  <span className="text-xs sm:text-sm font-semibold">{formatCurrencyDetailed(result.monthlyContribution)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-600">Investment Period</span>
                  <span className="text-xs sm:text-sm font-semibold">{result.years} years ({result.totalMonths} months)</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-xs sm:text-sm text-slate-600">Annual Interest Rate</span>
                  <span className="text-xs sm:text-sm font-semibold">{formatPercentage(result.annualRate)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-3">Results Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-600">Total Contributions</span>
                  <span className="text-xs sm:text-sm font-semibold text-blue-600">{formatCurrencyDetailed(result.totalContributions)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-600">Interest Earned</span>
                  <span className="text-xs sm:text-sm font-semibold text-green-600">{formatCurrencyDetailed(result.totalInterest)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-600">Total Return</span>
                  <span className="text-xs sm:text-sm font-semibold">{formatPercentage((result.totalGain / result.totalContributions) * 100)}</span>
                </div>
                <div className="flex justify-between py-2 text-sm sm:text-base lg:text-lg">
                  <span className="text-slate-900 font-semibold">Final Amount</span>
                  <span className="font-bold text-indigo-600 break-all">{formatCurrencyDetailed(result.finalAmount)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compound Frequency Info */}
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="p-1 bg-blue-200 rounded">
                <Calculator className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-medium text-blue-900 mb-1">Compounding Information</div>
                <div className="text-xs sm:text-sm text-blue-700">
                  Interest compounds {result.compoundFrequency}x per year
                  {result.compoundFrequency === 365 && " (daily)"}
                  {result.compoundFrequency === 12 && " (monthly)"}
                  {result.compoundFrequency === 4 && " (quarterly)"}
                  {result.compoundFrequency === 1 && " (annually)"}
                  . The power of compound interest means your money grows exponentially over time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;