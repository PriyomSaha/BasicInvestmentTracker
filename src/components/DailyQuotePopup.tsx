import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { getRandomQuote } from "../utils/quotes";

interface Quote {
  quote: string;
  author: string;
}

const DailyQuotePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dailyQuote, setDailyQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem("quoteLastShown");
    const storedQuote = localStorage.getItem("dailyQuote");

    console.log(
      "Today:",
      today,
      "Last Shown:",
      lastShown,
      "Stored Quote:",
      storedQuote
    );

    if (lastShown !== today) {
      const newQuote = getRandomQuote();
      console.log("New Quote Generated:", newQuote);
      setDailyQuote(newQuote);
      localStorage.setItem("dailyQuote", JSON.stringify(newQuote));
      localStorage.setItem("quoteLastShown", today);
      setIsOpen(true);
    } else if (storedQuote) {
      const parsedQuote = JSON.parse(storedQuote);
      console.log("Using Stored Quote:", parsedQuote);
      setDailyQuote(parsedQuote);
      setIsOpen(true); // Optional: show if user refreshes page same day
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen || !dailyQuote) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full mx-4 p-6 relative border border-slate-200">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-700"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Daily Financial Wisdom
          </h2>
          <blockquote className="text-slate-700 text-base italic mb-3">
            "{dailyQuote.quote}"
          </blockquote>
          <p className="text-sm text-slate-600 font-semibold">
            — {dailyQuote.author}
          </p>
          <button
            onClick={closePopup}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue to Calculator
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyQuotePopup;
