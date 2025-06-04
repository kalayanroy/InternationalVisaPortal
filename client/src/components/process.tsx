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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We make university applications straightforward with our proven step-by-step approach
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200">
            <div className="h-full bg-gradient-to-r from-gold via-navy to-gold w-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="group text-center relative">
                {/* Step circle */}
                <div className="relative mx-auto mb-6 z-10">
                  <div className="w-24 h-24 bg-white border-4 border-navy rounded-full flex items-center justify-center shadow-lg group-hover:border-gold group-hover:scale-110 transition-all duration-500 mx-auto">
                    <span className="text-xl font-playfair font-bold text-navy group-hover:text-gold transition-colors">
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
