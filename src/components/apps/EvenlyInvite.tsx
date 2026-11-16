"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const PACKAGE = "com.evenlysplit.app";

/** Shown only when the page is opened from an invite link (…/apps/evenly-split?join=<code>). */
export function EvenlyInvite({ getUrl }: { getUrl: string }) {
  const [openHref, setOpenHref] = useState<string | null>(null);

  useEffect(() => {
    const code = (new URLSearchParams(window.location.search).get("join") ?? "").toLowerCase();
    if (!/^[a-z0-9]{10,32}$/.test(code)) return;
    const isAndroid = /android/i.test(navigator.userAgent);
    // On Android, Chrome opens the app if it's installed, otherwise falls back to the download.
    setOpenHref(
      isAndroid
        ? `intent://join/${code}#Intent;scheme=evenly;package=${PACKAGE};S.browser_fallback_url=${encodeURIComponent(getUrl)};end`
        : `evenly://join/${code}`,
    );
  }, [getUrl]);

  return (
    <AnimatePresence>
      {openHref && (
        <motion.section
          initial={{ opacity: 0, y: -16, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="mb-5 rounded-[22px] border-2 border-[#BADFC6] bg-white p-6 text-[#1B211D]">
            <h2 className="font-display text-2xl font-semibold">You&apos;re invited to a group on Evenly</h2>
            <p className="mt-2 leading-relaxed text-[#5E665F]">
              Open Evenly to see the group and join. If you don&apos;t have the app yet, install it first and then open your
              invite link again.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a href={openHref} className="inline-flex min-h-12 items-center rounded-full bg-[#26302A] px-6 font-semibold text-white">
                Open in Evenly
              </a>
              <a
                href={getUrl}
                className="inline-flex min-h-12 items-center rounded-full px-6 font-semibold text-[#26302A] ring-1 ring-inset ring-[#E1E4E0]"
              >
                Get the app
              </a>
            </div>
            <ol className="mt-4 list-decimal space-y-0.5 pl-5 text-sm leading-relaxed text-[#5E665F]">
              <li>Install Evenly and sign in with Google.</li>
              <li>
                Come back to this link and tap <strong>Open in Evenly</strong>.
              </li>
            </ol>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
