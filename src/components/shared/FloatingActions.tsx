"use client";

import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.616 4.56 1.693 6.474L2.667 29.333l7.027-1.843a13.26 13.26 0 0 0 6.31 1.606h.006c7.362 0 13.333-5.97 13.333-13.333S23.366 2.667 16.004 2.667Zm0 24.4h-.005a11.03 11.03 0 0 1-5.62-1.54l-.403-.24-4.17 1.094 1.114-4.065-.263-.417a11.02 11.02 0 0 1-1.69-5.899c0-6.096 4.962-11.056 11.06-11.056 2.955 0 5.733 1.152 7.822 3.242a10.98 10.98 0 0 1 3.236 7.82c-.002 6.098-4.963 11.06-11.081 11.06Zm6.067-8.284c-.332-.166-1.965-.97-2.27-1.08-.305-.111-.527-.166-.749.167-.222.332-.86 1.08-1.055 1.303-.194.222-.388.25-.72.083-.332-.166-1.402-.517-2.671-1.649-.987-.881-1.654-1.968-1.848-2.3-.194-.333-.02-.513.146-.679.15-.15.333-.389.5-.583.166-.194.221-.333.332-.556.111-.222.055-.417-.028-.583-.083-.167-.749-1.806-1.026-2.474-.27-.65-.545-.562-.749-.573-.194-.01-.416-.012-.638-.012-.222 0-.583.083-.888.417-.305.333-1.165 1.139-1.165 2.777s1.193 3.222 1.36 3.444c.166.222 2.348 3.583 5.688 5.024.795.343 1.415.548 1.898.702.797.253 1.523.217 2.097.132.64-.096 1.965-.803 2.242-1.579.277-.777.277-1.442.194-1.58-.083-.138-.305-.221-.638-.388Z" />
    </svg>
  );
}

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-7 sm:right-7">
      <a
        href={CONTACT.phoneHref}
        aria-label={`Call us at ${CONTACT.phoneDisplay}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-transform duration-200 hover:scale-105 hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>

      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg shadow-success/40 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <WhatsappIcon />
      </a>
    </div>
  );
}