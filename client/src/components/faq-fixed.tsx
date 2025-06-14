import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the visa application process take?",
      answer: "The processing time varies by country and visa type. Typically, student visas take 2-8 weeks from submission. We provide realistic timelines during your consultation and keep you updated throughout the process.",
    },
    {
      question: "What documents do I need for a student visa?",
      answer: "Required documents typically include: acceptance letter, financial statements, academic transcripts, passport, photos, and visa application forms. We provide a comprehensive checklist tailored to your destination country.",
    },
    {
      question: "Do you guarantee visa approval?",
      answer: "While we cannot guarantee approval (no legitimate agency can), our 98% success rate speaks to our expertise. We thoroughly assess your case beforehand and only proceed if we believe you have strong chances of approval.",
    },
    {
      question: "What are your service fees?",
      answer: "Our fees vary based on the complexity of your case and destination country. We offer transparent pricing with no hidden costs. Contact us for a personalized quote after your free initial consultation.",
    },
    {
      question: "Can you help with university selection?",
      answer: "Yes! We provide comprehensive university selection guidance based on your academic background, career goals, and budget. Our team has partnerships with universities worldwide and can help identify the best fit for you.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our visa consultation services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}