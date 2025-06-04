export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Free assessment of your profile and university eligibility with our expert consultants.",
      icon: "🎯",
    },
    {
      number: 2,
      title: "Document Preparation",
      description: "Comprehensive document review and preparation ensuring all requirements are met.",
      icon: "📋",
    },
    {
      number: 3,
      title: "Application Submission",
      description: "Expert submission of your application with thorough quality checks and tracking.",
      icon: "🚀",
    },
    {
      number: 4,
      title: "Interview & Approval",
      description: "Interview preparation and support until you receive your acceptance letter.",
      icon: "✅",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-navy/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We make university applications straightforward with our proven step-by-step approach
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-navy rounded-full mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative text-center">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0">
                  <div className="h-full bg-gradient-to-r from-gold to-navy w-0 group-hover:w-full transition-all duration-700" />
                </div>
              )}
              
              {/* Step card */}
              <div className="relative bg-white rounded-2xl p-8 border border-slate-100 hover:border-gold/30 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 z-10">
                {/* Step number circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-navy to-slate-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                    <span className="text-2xl font-playfair font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon overlay */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-md">
                    <span className="text-sm">{step.icon}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-playfair font-bold text-navy group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* Step indicator */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-r from-gold to-navy rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-navy/10 to-gold/10 rounded-full px-6 py-3 border border-gold/20">
            <span className="text-sm font-semibold text-navy">Ready to start your journey?</span>
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
