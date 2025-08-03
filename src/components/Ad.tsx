import { useEffect, useRef } from "react";

const Ad = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Avoid pushing multiple times if already initialized
    const ins = adRef.current?.querySelector("ins.adsbygoogle");

    if (!ins) return;

    // Check if ad is already loaded by looking for data-ad-status="filled"
    const alreadyInitialized = ins.getAttribute("data-adsbygoogle-status");

    if (!alreadyInitialized) {
      try {
        // Push ad only if not already pushed
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
        Sponsored
      </h3>

      <div ref={adRef} className="flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "400px" }}
          data-ad-client="ca-pub-5578366239225688"
          data-ad-slot="5034578446"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 mt-2 text-center">
        This ad is powered by Google AdSense. Your support helps keep this app
        free. Thank you!
      </p>
    </div>
  );
};

export default Ad;
