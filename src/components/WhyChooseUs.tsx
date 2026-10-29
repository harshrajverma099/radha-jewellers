import React from 'react';
import { Calendar, Compass, Users, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Card3D } from './Card3D';
import { Stagger3D, StaggerItem3D } from './Motion3D';

export const WhyChooseUs: React.FC = () => {
  const values = [
    {
      icon: Calendar,
      title: 'Since 2003',
      description: 'An established jewellery showroom with a long-standing brand presence and trusted relationships across Hata and Kushinagar.',
    },
    {
      icon: Compass,
      title: 'Inspired by Indian Heritage',
      description: 'Design inspiration rooted in traditional Indian jewellery artistry that commemorates auspicious cultural celebrations.',
    },
    {
      icon: Users,
      title: 'A Personal Showroom Experience',
      description: 'We welcome you to explore jewellery in person, touch the craftsmanship, and receive attentive guidance from our team.',
    },
    {
      icon: Sparkles,
      title: 'Jewellery for Every Occasion',
      description: 'A thoughtfully curated range of styles designed for regal weddings, festive ceremonies, and elegant everyday wear.',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-cream/30 relative" aria-label="Why Choose Radha Jewellers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Our Values"
          title="Tradition. Trust. Timeless Beauty."
          subtitle="Built on personal bonds, an authentic appreciation for cultural heritage, and warm showroom hospitality."
        />

        {/* 4 Value Cards Grid with Staggered 3D Cascade */}
        <Stagger3D staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem3D key={item.title} className="flex">
                <Card3D maxTilt={10} depth={16} glare={true} className="w-full flex">
                  <div className="w-full relative bg-white p-8 rounded-2xl border border-beige/80 shadow-luxury flex flex-col justify-between">
                    {/* Number Watermark */}
                    <span className="absolute top-4 right-6 font-serif text-4xl font-bold text-cream select-none">
                      0{index + 1}
                    </span>

                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-ivory border border-gold/30 flex items-center justify-center text-gold-dark mb-6">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-warmgray-dark leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-beige/50 flex items-center gap-2 text-xs text-gold-dark uppercase tracking-wider font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>Showroom Value</span>
                    </div>
                  </div>
                </Card3D>
              </StaggerItem3D>
            );
          })}
        </Stagger3D>
      </div>
    </section>
  );
};
