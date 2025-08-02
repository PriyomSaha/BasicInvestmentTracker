export interface InvestmentData {
  initialAmount: number;
  monthlyContribution: number;
  annualInterestRate: number;
  years: number;
  compoundFrequency: number;
}

export interface InvestmentResult {
  finalAmount: number;
  totalContributions: number;
  totalInterest: number;
  totalGain: number;
  effectiveReturn: number;
  initialAmount: number;
  monthlyContribution: number;
  annualRate: number;
  years: number;
  totalMonths: number;
  compoundFrequency: number;
  yearlyData: YearlyData[];
}

export interface YearlyData {
  year: number;
  totalContributions: number;
  interestEarned: number;
  balance: number;
}

export const calculateInvestment = (data: InvestmentData): InvestmentResult => {
  const {
    initialAmount,
    monthlyContribution,
    annualInterestRate,
    years,
    compoundFrequency
  } = data;

  const monthlyRate = annualInterestRate / 100 / 12;
  const totalMonths = years * 12;
  const yearlyData: YearlyData[] = [];

  let balance = initialAmount;
  let totalContributions = initialAmount;
  let totalInterest = 0;

  // Calculate month by month for accurate results
  for (let month = 1; month <= totalMonths; month++) {
    // Add monthly contribution
    if (month > 1) {  // Don't add contribution in first month (initial amount already added)
      balance += monthlyContribution;
      totalContributions += monthlyContribution;
    }

    // Calculate interest based on compound frequency
    if (compoundFrequency === 12) {
      // Monthly compounding
      const monthlyInterest = balance * monthlyRate;
      balance += monthlyInterest;
      totalInterest += monthlyInterest;
    } else {
      // For other frequencies, calculate proportional interest
      const periodicRate = annualInterestRate / 100 / compoundFrequency;
      const monthsPerPeriod = 12 / compoundFrequency;
      
      if (month % monthsPerPeriod === 0) {
        const periodInterest = balance * periodicRate;
        balance += periodInterest;
        totalInterest += periodInterest;
      }
    }

    // Store yearly data
    if (month % 12 === 0) {
      const year = month / 12;
      yearlyData.push({
        year,
        totalContributions,
        interestEarned: totalInterest,
        balance
      });
    }
  }

  // Add final year data if not already added
  if (totalMonths % 12 !== 0) {
    yearlyData.push({
      year: years,
      totalContributions,
      interestEarned: totalInterest,
      balance
    });
  }

  const finalAmount = balance;
  const totalGain = finalAmount - totalContributions;
  const effectiveReturn = totalContributions > 0 
    ? ((finalAmount / totalContributions) ** (1 / years) - 1) * 100 
    : 0;

  return {
    finalAmount,
    totalContributions,
    totalInterest,
    totalGain,
    effectiveReturn,
    initialAmount,
    monthlyContribution,
    annualRate: annualInterestRate,
    years,
    totalMonths,
    compoundFrequency,
    yearlyData
  };
};