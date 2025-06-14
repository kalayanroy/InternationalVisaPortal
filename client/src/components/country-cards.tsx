import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const countries = [
  {
    id: 'usa',
    name: 'United States',
    code: 'US',
    flag: '🇺🇸',
    stats: {
      students: '1M+',
      universities: '4,000+',
      programs: '15,000+'
    },
    description: 'Home to the world\'s most prestigious institutions with cutting-edge research and innovation.',
    topUniversities: [
      'Harvard University',
      'Stanford University',
      'MIT'
    ],
    keyBenefits: [
      'Silicon Valley Access',
      'Research Excellence',
      'Career Opportunities'
    ],
    image: 'https://images.unsplash.com/photo-1626157150198-4cdec90f15a8?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    flag: '🇬🇧',
    stats: {
      students: '500K+',
      universities: '500+',
      programs: '50,000+'
    },
    description: 'Rich academic heritage with world-renowned universities and shorter degree programs.',
    topUniversities: [
      'Oxford University',
      'Cambridge University',
      'Imperial College'
    ],
    keyBenefits: [
      'Historic Excellence',
      'Shorter Degrees',
      'Global Network'
    ],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    stats: {
      students: '650K+',
      universities: '400+',
      programs: '25,000+'
    },
    description: 'High-quality education with affordable tuition and post-graduation work opportunities.',
    topUniversities: [
      'University of Toronto',
      'McGill University',
      'UBC'
    ],
    keyBenefits: [
      'Affordable Education',
      'Work Opportunities',
      'Quality of Life'
    ],
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    flag: '🇦🇺',
    stats: {
      students: '400K+',
      universities: '300+',
      programs: '20,000+'
    },
    description: 'World-class universities with excellent research opportunities and beautiful campus locations.',
    topUniversities: [
      'University of Melbourne',
      'Australian National University',
      'University of Sydney'
    ],
    keyBenefits: [
      'Research Excellence',
      'Beautiful Locations',
      'Work Rights'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2069&auto=format&fit=crop'
  }
];

export default function CountryCards() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy mb-4">
          Explore Universities by Country
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Discover world-class universities across different countries with unique academic programs and opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {countries.map((country) => (
          <Card key={country.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-slate-50">
            <div className="flex h-80">
              {/* Left side - Country Image */}
              <div className="relative w-64 flex-shrink-0">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-3xl">{country.flag}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-1">
                    {country.name}
                  </h3>
                  <div className="text-white/90 text-sm">
                    {country.code}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 text-white text-xs">
                      {country.stats.students} International Students
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Country Details */}
              <div className="flex-1 p-6 flex flex-col">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {country.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-slate-50 rounded-lg">
                    <div className="text-sm font-bold text-navy">{country.stats.universities}</div>
                    <div className="text-xs text-slate-600">Universities</div>
                  </div>
                  <div className="text-center p-2 bg-slate-50 rounded-lg">
                    <div className="text-sm font-bold text-navy">{country.stats.students}</div>
                    <div className="text-xs text-slate-600">Students</div>
                  </div>
                  <div className="text-center p-2 bg-slate-50 rounded-lg">
                    <div className="text-sm font-bold text-navy">{country.stats.programs}</div>
                    <div className="text-xs text-slate-600">Programs</div>
                  </div>
                </div>

                {/* Top Universities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-navy mb-2 text-sm">Top Universities</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {country.topUniversities.map((uni, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                        {uni}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-2 text-sm">Key Benefits</h4>
                  <div className="flex flex-wrap gap-1">
                    {country.keyBenefits.map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-gold/10 text-navy px-2 py-1 rounded border border-gold/20">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Button */}
                <div className="mt-auto">
                  <Link href={`/country/${country.id}`}>
                    <Button className="w-full bg-navy hover:bg-navy/90 text-white flex items-center justify-center">
                      Explore {country.name}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}