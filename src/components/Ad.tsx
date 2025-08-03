// src/Ad.tsx
import { useEffect } from "react";

const Ad = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
        Sponsored
      </h3>

      <ins
        className="adsbygoogle"
        data-ad-client="ca-pub-5578366239225688"
        data-ad-slot="3932415611"
        data-ad-format="rectangle"
      >
        I am a placeholder for an advertisement
      </ins>
      <p className="text-xs sm:text-sm text-slate-600 mt-2">
        This ad is powered by Google AdSense. Your support helps keep this app
        free. Thank you!
      </p>
    </div>
  );
};

export default Ad;
