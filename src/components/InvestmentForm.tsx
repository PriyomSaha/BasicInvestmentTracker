import React from "react";
import {
  Settings,
  DollarSign,
  Calendar,
  TrendingUp,
  RotateCcw,
  Clock,
} from "lucide-react";
import { InvestmentData } from "../utils/calculations";
import InvestmentTips from "./InvestmentTips";
import Ad from "./Ad";

interface InvestmentFormProps {
  data: InvestmentData;
  onChange: (field: keyof InvestmentData, value: number) => void;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({ data, onChange }) => {
  const compoundOptions = [
    { value: 1, label: "Annually", description: "1x per year" },
    { value: 4, label: "Quarterly", description: "4x per year" },
    { value: 12, label: "Monthly", description: "12x per year" },
    // { value: 365, label: "Daily", description: "365x per year" },
  ];

  const resetToDefaults = () => {
    onChange("initialAmount", 10000);
    onChange("monthlyContribution", 500);
    onChange("annualInterestRate", 7);
    onChange("years", 10);
    onChange("compoundFrequency", 12);
  };

  const presetScenarios = [
    { name: "Conservative", initial: 5000, monthly: 300, rate: 5, years: 15 },
    { name: "Moderate", initial: 10000, monthly: 500, rate: 7, years: 20 },
    { name: "Aggressive", initial: 15000, monthly: 1000, rate: 10, years: 25 },
  ];

  const applyPreset = (preset: (typeof presetScenarios)[0]) => {
    onChange("initialAmount", preset.initial);
    onChange("monthlyContribution", preset.monthly);
    onChange("annualInterestRate", preset.rate);
    onChange("years", preset.years);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Main Form */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                Investment Parameters
              </h2>
            </div>
            <button
              onClick={resetToDefaults}
              className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Initial Investment */}
          <div className="space-y-2">
            <label
              htmlFor="initialAmount"
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <DollarSign className="w-4 h-4" />
              Initial Investment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">
                $
              </span>
              <input
                type="number"
                id="initialAmount"
                value={data.initialAmount}
                onChange={(e) =>
                  onChange("initialAmount", Number(e.target.value))
                }
                className="w-full pl-8 pr-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg font-medium"
                placeholder="10,000"
                min="0"
                step="100"
              />
            </div>
            <p className="text-xs text-slate-500">
              One-time amount you're starting with
            </p>
          </div>

          {/* Monthly Contribution */}
          <div className="space-y-2">
            <label
              htmlFor="monthlyContribution"
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <Calendar className="w-4 h-4" />
              Monthly Contribution
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">
                $
              </span>
              <input
                type="number"
                id="monthlyContribution"
                value={data.monthlyContribution}
                onChange={(e) =>
                  onChange("monthlyContribution", Number(e.target.value))
                }
                className="w-full pl-8 pr-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg font-medium"
                placeholder="500"
                min="0"
                step="50"
              />
            </div>
            <p className="text-xs text-slate-500">
              Amount you'll add each month
            </p>
          </div>

          {/* Annual Interest Rate */}
          <div className="space-y-2">
            <label
              htmlFor="annualInterestRate"
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <TrendingUp className="w-4 h-4" />
              Annual Interest Rate
            </label>
            <div className="relative">
              <input
                type="number"
                id="annualInterestRate"
                value={data.annualInterestRate}
                onChange={(e) =>
                  onChange("annualInterestRate", Number(e.target.value))
                }
                className="w-full pl-4 pr-8 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg font-medium"
                placeholder="7.0"
                min="0"
                max="50"
                step="0.1"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">
                %
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Expected annual return rate
            </p>
          </div>

          {/* Investment Period */}
          <div className="space-y-2">
            <label
              htmlFor="years"
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <Calendar className="w-4 h-4" />
              Investment Period
            </label>
            <div className="relative">
              <input
                type="number"
                id="years"
                value={data.years}
                onChange={(e) => onChange("years", Number(e.target.value))}
                className="w-full pl-4 pr-12 sm:pr-16 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg font-medium"
                placeholder="10"
                min="1"
                max="50"
                step="1"
              />
              <span className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium text-sm sm:text-base">
                years
              </span>
            </div>
            <p className="text-xs text-slate-500">
              How long you'll keep investing
            </p>
          </div>

          {/* Compound Frequency */}
          <div className="space-y-2">
            <label
              htmlFor="compoundFrequency"
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <RotateCcw className="w-4 h-4" />
              Compound Frequency
            </label>
            <select
              id="compoundFrequency"
              value={data.compoundFrequency}
              onChange={(e) =>
                onChange("compoundFrequency", Number(e.target.value))
              }
              className="w-full px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base sm:text-lg font-medium bg-white"
            >
              {compoundOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} ({option.description})
                </option>
              ))}
            </select>
            <p className="text-xs text-slate-500">
              How often interest compounds
            </p>
          </div>
        </div>
      </div>

      {/* Quick Presets */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-b border-slate-200">
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">
            Quick Scenarios
          </h3>
          <p className="text-sm text-slate-600">
            Try these common investment strategies
          </p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid gap-3">
            {presetScenarios.map((preset, index) => (
              <button
                key={index}
                onClick={() => applyPreset(preset)}
                className="text-left p-3 sm:p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className="font-medium text-slate-900 mb-1 text-sm sm:text-base">
                      {preset.name}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      ${preset.initial.toLocaleString()} initial + $
                      {preset.monthly}/month at {preset.rate}% for{" "}
                      {preset.years} years
                    </div>
                  </div>
                  <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <InvestmentTips />
      <Ad />
    </div>
  );
};

export default InvestmentForm;
