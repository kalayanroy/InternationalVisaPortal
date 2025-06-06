import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      university: "Harvard University",
      content: "The support was phenomenal and helped me get into my dream school! The personalized guidance made all the difference in my application process.",
      country: "USA",
      program: "Computer Science",
      rating: 5,
    },
    {
      name: "David Lee",
      university: "Stanford University", 
      content: "Their guidance made all the difference. The team's expertise and dedication helped me secure admission to Stanford with a scholarship.",
      country: "South Korea",
      program: "Business Administration",
      rating: 5,
    },
    {
      name: "Maria Gonzalez",
      university: "MIT",
      content: "Exceptional mentorship throughout the application process. They helped me craft compelling essays and prepare for interviews perfectly.",
      country: "Mexico",
      program: "Engineering",
      rating: 5,
    },
    {
      name: "James Wilson",
      university: "Oxford University",
      content: "Outstanding service from start to finish. The consultants were knowledgeable, responsive, and truly cared about my success.",
      country: "UK",
      program: "Medicine",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      university: "University of Toronto",
      content: "Professional and thorough guidance that exceeded my expectations. I couldn't have achieved this without their expert support.",
      country: "India",
      program: "Data Science",
      rating: 5,
    },
    {
      name: "Chen Wei",
      university: "University of Melbourne",
      content: "The team's attention to detail and personalized approach made my application stand out. Highly recommend their services!",
      country: "China",
      program: "Finance",
      rating: 5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slidesPerView = 3;
  const maxSlide = Math.max(0, testimonials.length - slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hear from students who achieved their dreams with our expert guidance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-navy rounded-full mx-auto mt-8" />
        </div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Slider container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 px-4"
                  style={{ minWidth: `${100 / slidesPerView}%` }}
                >
                  <Card className="h-full bg-white border border-slate-100 hover:border-gold/30 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Quote icon */}
                      <div className="flex justify-between items-start mb-6">
                        <Quote className="h-8 w-8 text-gold/60" />
                        <div className="flex text-gold">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial content */}
                      <blockquote className="text-slate-700 leading-relaxed mb-6 flex-grow">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Student info */}
                      <div className="border-t border-slate-100 pt-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-navy to-slate-700 rounded-full flex items-center justify-center">
                            <span className="text-white font-playfair font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-playfair font-bold text-navy">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {testimonial.program} • {testimonial.country}
                            </p>
                            <p className="text-sm font-medium text-gold">
                              {testimonial.university}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-slate-200 hover:border-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-slate-200 hover:border-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-gold shadow-lg" 
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-navy mb-2">500+</div>
            <div className="text-slate-600">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-navy mb-2">95%</div>
            <div className="text-slate-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-navy mb-2">50+</div>
            <div className="text-slate-600">Partner Universities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
