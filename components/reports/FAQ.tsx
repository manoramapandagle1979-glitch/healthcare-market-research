"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mb-12 scroll-mt-24">
      <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <CardContent className="p-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[var(--foreground)] text-lg group-hover:text-[var(--primary)] transition-colors">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--muted-foreground)] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-[var(--muted-foreground)]">
                  {faq.answer}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
