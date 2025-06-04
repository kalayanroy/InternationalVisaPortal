export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Free assessment of your profile and university eligibility with our expert consultants.",
      color: "from-blue-500 to-blue-600",
    },
    {
      number: 2,
      title: "Document Preparation", 
      description: "Comprehensive document review and preparation ensuring all requirements are met.",
      color: "from-orange-500 to-orange-600",
    },
    {
      number: 3,
      title: "Application Submission",
      description: "Expert submission of your application with thorough quality checks and tracking.",
      color: "from-green-500 to-green-600",
    },
    {
      number: 4,
      title: "Interview & Approval",
      description: "Interview preparation and support until you receive your acceptance letter.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We make university applications straightforward with our proven step-by-step approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-slate-100 hover:border-slate-200">
                {/* Gradient header */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${step.color} rounded-t-3xl`} />
                
                {/* Step number */}
                <div className="relative mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    <span className="text-xl font-playfair font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Corner decoration */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full opacity-80" />
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-xl font-playfair font-bold text-navy leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                        style={{ width: `${(index + 1) * 25}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-500">
                      Step {step.number}/4
                    </span>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-white rounded-full px-8 py-4 shadow-lg border border-slate-100">
            <span className="text-navy font-semibold">Ready to begin your journey?</span>
            <div className="w-3 h-3 bg-gradient-to-r from-gold to-navy rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
