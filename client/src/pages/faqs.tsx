import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  const faqData = [
    {
      id: "item-1",
      question: "Which countries can I study in through DTR Consultation?",
      answer: "We help students apply to universities in Australia, Canada, USA, UK, New Zealand, Germany, and many other countries. Our team has extensive knowledge of admission requirements, visa processes, and education systems across these destinations."
    },
    {
      id: "item-2",
      question: "What English test scores do I need for studying abroad?",
      answer: "Requirements vary by country and university. Generally, you'll need IELTS 6.0-7.5, TOEFL 80-100, or PTE 58-79. We provide detailed score requirements for your chosen universities and offer comprehensive test preparation support."
    },
    {
      id: "item-3",
      question: "How long does the university application process take?",
      answer: "The complete process typically takes 6-12 months from initial consultation to visa approval. University applications usually take 2-8 weeks for processing, while visa applications can take 4-12 weeks depending on the country."
    },
    {
      id: "item-4",
      question: "What are the costs involved in studying abroad?",
      answer: "Costs vary by country and program. Tuition ranges from $15,000-$50,000 annually, plus living expenses of $10,000-$25,000. We provide detailed cost breakdowns and help you explore scholarship opportunities and financial planning options."
    },
    {
      id: "item-5",
      question: "Do you help with student visa applications?",
      answer: "Yes, we provide complete visa application support including document preparation, application submission, interview preparation, and follow-up. Our experienced team ensures your visa application meets all requirements and maximizes approval chances."
    },
    {
      id: "item-6",
      question: "Can I work while studying abroad?",
      answer: "Most countries allow international students to work part-time (typically 20 hours/week) during studies and full-time during breaks. We provide guidance on work rights, job search strategies, and post-graduation work opportunities in your chosen destination."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our services and consultation process.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-white">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <AccordionTrigger className="py-6 px-0 text-left hover:no-underline hover:text-gray-900 text-base font-medium text-gray-800 data-[state=open]:text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 px-0 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact Section */}
            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}