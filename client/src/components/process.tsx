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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-bl from-navy/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-gold/5 via-navy/5 to-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We make university applications straightforward with our proven step-by-step approach
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-gold via-navy to-gold rounded-full mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative text-center">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-slate-300 to-slate-200 z-0">
                  <div className="h-full bg-gradient-to-r from-gold via-navy to-gold w-0 group-hover:w-full transition-all duration-1000" />
                </div>
              )}
              
              {/* Premium card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100/50 hover:border-gold/30 hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3">
                {/* Top accent */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-gold to-navy rounded-b-full" />
                
                {/* Step number with icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-navy via-slate-800 to-navy rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500 relative z-10">
                    <span className="text-2xl font-playfair font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-gold to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">{step.icon}</span>
                  </div>
                  
                  {/* Decorative rings */}
                  <div className="absolute inset-0 w-20 h-20 border-2 border-gold/20 rounded-full mx-auto animate-pulse opacity-50" />
                  <div className="absolute inset-2 w-16 h-16 border border-navy/10 rounded-full mx-auto" />
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-xl font-playfair font-bold text-navy group-hover:text-gold transition-colors duration-500 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex-1 max-w-24 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-gold to-navy rounded-full transition-all duration-1000 group-hover:w-full"
                        style={{ width: `${(index + 1) * 25}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-500">
                      {index + 1}/4
                    </span>
                  </div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-gold/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-tr from-navy/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Floating background element */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/5 via-transparent to-navy/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-white/90 backdrop-blur-md rounded-full px-8 py-4 shadow-xl border border-gold/20">
            <span className="text-navy font-semibold text-lg">Ready to begin your educational journey?</span>
            <div className="w-3 h-3 bg-gradient-to-r from-gold to-navy rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
