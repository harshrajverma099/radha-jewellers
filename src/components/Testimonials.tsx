import React from 'react';
import { Star, MessageSquareHeart, ExternalLink, HeartHandshake } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Card3D } from './Card3D';
import { Scroll3DReveal } from './Motion3D';
import { siteConfig, getWhatsAppUrl, trackEvent } from '../data/siteConfig';

export const Testimonials: React.FC = () => {
  // Configured authentic reviews array (empty until genuine customer reviews are provided)
  const genuineReviews: Array<{
    id: string;
    customerName: string;
    occasion: string;
    content: string;
    date: string;
  }> = [];

  const hasReviews = genuineReviews.length > 0;
  const hasGoogleReviewsUrl = Boolean(siteConfig.googleReviewsUrl && siteConfig.googleReviewsUrl.trim().length > 0);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-ivory dark:bg-emerald-noir relative transition-colors duration-300" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badge="Customer Voices"
          title="Stories of Trust"
          subtitle="Real relationships nurtured across two decades of personal celebrations and milestone occasions."
        />

        {hasReviews ? (
          /* Render genuine reviews if supplied */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {genuineReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white dark:bg-emerald-surface p-8 rounded-2xl border border-beige dark:border-white/10 shadow-luxury dark:shadow-darkcard flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-serif italic text-charcoal dark:text-ivory text-base mb-6 leading-relaxed">
                    “{rev.content}”
                  </p>
                </div>
                <div className="pt-4 border-t border-beige/60 dark:border-white/10">
                  <p className="font-serif font-bold text-charcoal dark:text-ivory">{rev.customerName}</p>
                  <p className="text-xs text-warmgray dark:text-beige/70">{rev.occasion}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Graceful, authentic state inviting customers to experience Radha Jewellers with 3D Depth */
          <Scroll3DReveal delay={0.15}>
            <Card3D maxTilt={5} depth={15} glare={true} className="max-w-3xl mx-auto">
              <div className="text-center bg-white dark:bg-emerald-surface p-10 sm:p-14 rounded-3xl border border-beige/80 dark:border-white/10 shadow-luxury dark:shadow-darkcard">
                <div className="w-16 h-16 rounded-full bg-cream dark:bg-emerald-midnight mx-auto flex items-center justify-center text-gold-dark dark:text-gold-light mb-6 border border-gold/30">
                  <HeartHandshake className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal dark:text-ivory mb-4">
                  A Relationship Built on Integrity Since 2003
                </h3>

                <p className="text-base text-warmgray-dark dark:text-beige/85 leading-relaxed font-light mb-8 max-w-xl mx-auto">
                  For over twenty years, families across Hata and Kushinagar have trusted Radha Jewellers with their most cherished wedding and festive adornments. We invite you to visit our showroom and become part of our extended family.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={getWhatsAppUrl("Hello Radha Jewellers, I would like to visit your showroom.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('reviews_empty_whatsapp_click')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-white font-medium text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    <MessageSquareHeart className="w-4 h-4" />
                    <span>Share Your Experience With Us</span>
                  </a>

                  {hasGoogleReviewsUrl && (
                    <a
                      href={siteConfig.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('google_reviews_link_click')}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-beige dark:border-white/15 hover:border-gold dark:hover:border-gold-light text-charcoal dark:text-ivory hover:text-gold-dark dark:hover:text-gold-light bg-cream/30 dark:bg-emerald-midnight/60 font-medium text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Read Google Reviews</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Card3D>
          </Scroll3DReveal>
        )}
      </div>
    </section>
  );
};

