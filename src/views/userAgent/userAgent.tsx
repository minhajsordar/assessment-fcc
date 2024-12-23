"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";

export const UserAgent = ({useragent}:{useragent:string}) => {
  const { userAgent } = useUserAgentContext();

  return (
    <div>
      <BackToHome />

      {useragent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>

          <div className="border p-2">{useragent}</div>
        </div>
      )}

      {!useragent && <div>No user agent</div>}
    </div>
  );
};
