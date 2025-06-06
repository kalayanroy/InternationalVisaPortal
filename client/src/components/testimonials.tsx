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
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "David Lee",
      university: "Stanford University", 
      content: "Their guidance made all the difference. The team's expertise and dedication helped me secure admission to Stanford with a scholarship.",
      country: "South Korea",
      program: "Business Administration",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Maria Gonzalez",
      university: "MIT",
      content: "Exceptional mentorship throughout the application process. They helped me craft compelling essays and prepare for interviews perfectly.",
      country: "Mexico",
      program: "Engineering",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "James Wilson",
      university: "Oxford University",
      content: "Outstanding service from start to finish. The consultants were knowledgeable, responsive, and truly cared about my success.",
      country: "UK",
      program: "Medicine",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Priya Sharma",
      university: "University of Toronto",
      content: "Professional and thorough guidance that exceeded my expectations. I couldn't have achieved this without their expert support.",
      country: "India",
      program: "Data Science",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format",
    },
    {
      name: "Chen Wei",
      university: "University of Melbourne",
      content: "The team's attention to detail and personalized approach made my application stand out. Highly recommend their services!",
      country: "China",
      program: "Finance",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-navy/5 via-white to-gold/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Main testimonial display */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-gold/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-navy/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Large quote */}
              <div className="text-center mb-8">
                <Quote className="h-16 w-16 text-gold/40 mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl font-playfair leading-relaxed text-slate-800 mb-8 italic">
                  "{testimonials[currentSlide].content}"
                </blockquote>
              </div>

              {/* Student profile */}
              <div className="flex items-center justify-center space-x-6">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white"
                />
                <div className="text-center">
                  <h4 className="text-xl font-playfair font-bold text-navy mb-1">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-slate-600 mb-1">
                    {testimonials[currentSlide].program} • {testimonials[currentSlide].country}
                  </p>
                  <p className="text-gold font-semibold">
                    {testimonials[currentSlide].university}
                  </p>
                  <div className="flex justify-center mt-2">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl border-slate-200 hover:border-gold hover:bg-gold hover:text-white transition-all duration-300 w-12 h-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl border-slate-200 hover:border-gold hover:bg-gold hover:text-white transition-all duration-300 w-12 h-12"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Thumbnails navigation */}
        <div className="flex justify-center space-x-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative group transition-all duration-300 ${
                currentSlide === index ? 'scale-110' : 'scale-100 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={`w-16 h-16 rounded-full object-cover transition-all duration-300 ${
                  currentSlide === index 
                    ? 'border-4 border-gold shadow-lg' 
                    : 'border-2 border-slate-200 hover:border-slate-300'
                }`}
              />
              {currentSlide === index && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-playfair font-bold text-navy mb-2">500+</div>
            <div className="text-slate-600 font-medium">Students Placed</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-playfair font-bold text-navy mb-2">95%</div>
            <div className="text-slate-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-playfair font-bold text-navy mb-2">50+</div>
            <div className="text-slate-600 font-medium">Partner Universities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
