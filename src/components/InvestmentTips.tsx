import React from "react";

interface Props {}

const InvestmentTips: React.FC<Props> = () => {
  /* Tips */

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-3 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-green-800 pb-2">
        💡 Investment Tips
      </h3>
      <ul className="space-y-2 text-xs sm:text-sm text-green-700">
        <li>• Start early to fully benefit from compounding</li>
        <li>• Invest monthly — consistency beats market timing always</li>
        <li>• Diversify investments wisely to reduce overall portfolio risk</li>
        <li>• Focus on long-term goals, ignore short-term noise</li>
        <li>• Review and adjust your portfolio regularly and wisely</li>
      </ul>
    </div>
  );
};

export default InvestmentTips;
