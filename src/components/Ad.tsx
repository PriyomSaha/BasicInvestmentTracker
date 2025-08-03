import { useEffect, useRef } from "react";

const Ad = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (adRef.current && adRef.current.offsetWidth > 0) {
        try {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense error:", e);
        }
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
      <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
        Sponsored
      </h3>

      <div ref={adRef} className="flex justify-center">
        {/* <ins
          className="adsbygoogle block h-[100px] h-[100px]"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5578366239225688"
          data-ad-slot="3932415611"
          data-ad-format="rectangle"
        ></ins>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-5578366239225688"
          data-ad-slot="3932415611"
        ></ins> */}
        {/* <ins
          className="adsbygoogle block w-full sm:w-[300px] h-[400px]"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5578366239225688"
          data-ad-slot="3932415611"
          data-ad-format="auto"
          data-full-width-responsive="true"
        /> */}
        <ins
          className="adsbygoogle block w-full sm:w-[300px] h-[400px]"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3940256099942544" // TEST CLIENT
          data-ad-slot="6300978111" // TEST SLOT
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
