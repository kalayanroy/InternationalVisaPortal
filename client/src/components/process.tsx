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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We make university applications straightforward with our proven step-by-step approach
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-300">
            <div className="h-full bg-slate-400 w-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="group text-center">
                {/* Step circle */}
                <div className="relative mx-auto mb-8 z-10">
                  <div className="w-24 h-24 bg-white border-4 border-slate-300 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:border-slate-400 group-hover:shadow-xl transition-all duration-300">
                    <span className="text-xl font-playfair font-bold text-slate-700">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-playfair font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
