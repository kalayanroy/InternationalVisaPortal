import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const features = [
    {
      title: "Certified Experts",
      description: "Our team includes certified immigration consultants and former embassy officials.",
    },
    {
      title: "Proven Track Record",
      description: "98% success rate with over 10,000 successful visa applications processed.",
    },
    {
      title: "Personalized Approach",
      description: "Every case is unique. We provide tailored solutions for your specific situation.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose EduVisa Global?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over a decade of experience in international education
              consulting, we've built a reputation for excellence, integrity,
              and results. Our team of certified immigration consultants and
              education advisors are dedicated to making your dreams a reality.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white hover:bg-blue-700"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional office environment with consultants"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
