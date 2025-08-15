import React, { useState, useEffect } from "react";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Clock,
  ArrowBigDownDash,
} from "lucide-react";
import InvestmentForm from "./components/InvestmentForm";
import ResultsDisplay from "./components/ResultsDisplay";
import InvestmentChart from "./components/InvestmentChart";
import {
  calculateInvestment,
  InvestmentData,
  InvestmentResult,
} from "./utils/calculations";
import InvestmentPieChart from "./components/InvestmentPieChart";
import InvestmentTable from "./components/InvestmentTable";
import DailyQuotePopup from "./components/DailyQuotePopup";
import InvestmentTips from "./components/InvestmentTips";

function App() {
  const [investmentData, setInvestmentData] = useState<InvestmentData>({
    initialAmount: 10000,
    monthlyContribution: 500,
    annualInterestRate: 7,
    years: 10,
    compoundFrequency: 12,
  });

  const [result, setResult] = useState<InvestmentResult | null>(null);

  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const calculatedResult = calculateInvestment(investmentData);
    setResult(calculatedResult);
  }, [investmentData]);

  const handleInputChange = (field: keyof InvestmentData, value: number) => {
    setInvestmentData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    (deferredPrompt as any).prompt();
    (deferredPrompt as any).userChoice.then(() => {
      setDeferredPrompt(null);
      setShowInstall(false);
    });
  };

  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    const handleUpdateEvent = () => {
      setUpdateAvailable(true);
    };
    window.addEventListener("sw-update-available", handleUpdateEvent);

    return () => {
      window.removeEventListener("sw-update-available", handleUpdateEvent);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Investment Calculator Testing App
              </h1>
              <p className="text-slate-600">
                Calculate your investment growth with compound interest
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <InvestmentForm
              data={investmentData}
              onChange={handleInputChange}
            />
          </div>

          {/* Results and Chart */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {result && (
              <>
                <ResultsDisplay result={result} />
                <InvestmentChart data={investmentData} result={result} />

                {/* Pie Chart */}
                <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                  <InvestmentPieChart data={investmentData} result={result} />
                </div>
              </>
            )}
          </div>
        </div>

        {result && (
          <div className="mt-8 grid sm:grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
            <InvestmentTable result={result} />
          </div>
        )}

        {/* Key Benefits */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Compound Growth
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              See how your money grows exponentially over time with compound
              interest
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Regular Contributions
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Understand the impact of consistent monthly investments on your
              portfolio
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-slate-200 sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
              Time Horizon
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Visualize how different time periods affect your investment
              outcomes
            </p>
          </div>
        </div>
      </main>

      <DailyQuotePopup />

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 bg-slate-900 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center">
          <p className="text-sm sm:text-base text-slate-400">
            This calculator provides estimates for educational purposes only.
            Consult with a financial advisor for personalized investment advice.
          </p>
        </div>
      </footer>

      {/* Install PWA Button */}
      {showInstall && (
        <button
          onClick={handleInstallClick}
          className="fixed bottom-5 right-5 bg-blue-600 text-white py-3 px-4 rounded-xl font-bold shadow-md z-[1000] hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Install App <ArrowBigDownDash className="bounce" />
        </button>
      )}
      {/* Update Available Notification */}
      {updateAvailable && (
        <button
          onClick={() => {
            (window as any).$updateSW?.(); // Activate new SW
            window.location.reload();
          }}
          className="fixed bottom-5 right-5 bg-blue-600 text-white py-3 px-4 rounded-xl font-bold shadow-md z-[1000] hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          New Version Available – Tap to Refresh
        </button>
      )}
    </div>
  );
}

export default App;
