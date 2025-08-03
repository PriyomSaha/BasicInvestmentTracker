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
        data-ad-client="ca-pub-3940256099942544"
        data-ad-slot="1234567890"
        data-ad-format="rectangle"
      >
        I am a placeholder for an advertisement
      </ins>
    </div>
  );
};

export default Ad;
