export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Free assessment of your profile and university eligibility with our expert consultants.",
    },
    {
      number: 2,
      title: "Document Preparation", 
      description: "Comprehensive document review and preparation ensuring all requirements are met.",
    },
    {
      number: 3,
      title: "Application Submission",
      description: "Expert submission of your application with thorough quality checks and tracking.",
    },
    {
      number: 4,
      title: "Interview & Approval",
      description: "Interview preparation and support until you receive your acceptance letter.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We make university applications straightforward with our proven step-by-step approach
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-8 bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-playfair font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-playfair font-bold text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow indicator */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
