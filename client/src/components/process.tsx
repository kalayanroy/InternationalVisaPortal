export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description:
        "Free assessment of your profile and university eligibility with our expert consultants.",
    },
    {
      number: 2,
      title: "Document Preparation",
      description:
        "Comprehensive document review and preparation ensuring all requirements are met.",
    },
    {
      number: 3,
      title: "Application Submission",
      description:
        "Expert submission of your application with thorough quality checks and tracking.",
    },
    {
      number: 4,
      title: "Interview & Approval",
      description:
        "Interview preparation and support until you receive your acceptance letter.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif font-extrabold text-yellow-400 tracking-tight mb-3 drop-shadow-lg">
            Simple 4-Step Process
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 font-sans">
            We make university applications straightforward with our proven
            step-by-step approach
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-blue-900 bg-opacity-60 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl backdrop-blur-md hover:shadow-yellow-400 transition-shadow duration-400"
            >
              {/* Step circle */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 flex items-center justify-center mb-8 text-3xl font-serif font-bold text-gray-900 shadow-md">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif font-semibold text-yellow-300 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
