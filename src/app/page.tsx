"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import BannerGridAbout from '@/components/sections/about/BannerGridAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import BlogCardSix from '@/components/sections/blog/BlogCardSix';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Star, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="grid"
      cardStyle="floating"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Korean Essence"
          button={{
            text: "Reserve Now",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Authentic Korean Flavors"
          description="Experience the rich tradition of Korean cuisine. From sizzling bulgogi to perfectly fermented kimchi, every dish tells a story of heritage and passion."
          tag="Award-Winning Restaurant"
          tagIcon={Star}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942654881-qsaneqmq.jpg"
          imageAlt="Korean bibimbap in traditional stone bowl"
          frameStyle="card"
          metricsLabel="Trusted by food lovers and Korean cuisine enthusiasts across the city"
          metrics={[
            {
              id: "1",
              value: "500+",
              label: "Happy Customers Monthly"
            },
            {
              id: "2",
              value: "8 Years",
              label: "Serving Authentic Cuisine"
            },
            {
              id: "3",
              value: "100%",
              label: "Fresh Ingredients Daily"
            }
          ]}
          buttons={[
            {
              text: "View Menu",
              href: "#features"
            },
            {
              text: "Reserve Table",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <BannerGridAbout
          bannerMedia={{
            title: "Our Story",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942657459-r8ckgnlg.jpg",
            imageAlt: "Korean restaurant interior"
          }}
          cards={[
            {
              title: "Family Heritage",
              description: "Our founder brought authentic Korean recipes passed down through generations. Every dish is prepared with the same love and care as in his grandmother's kitchen."
            },
            {
              title: "Fresh Ingredients",
              description: "We source the finest Korean ingredients daily, including fresh vegetables and premium proteins. Quality is never compromised."
            },
            {
              title: "Warm Hospitality",
              description: "More than a restaurant, we create a welcoming space where families and friends gather to share meaningful moments over delicious food."
            }
          ]}
          bottomMedia={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942658145-o0ib66m2.jpg",
            imageAlt: "Korean chef cooking"
          }}
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Featured Menu Items"
          description="Discover our most beloved dishes, crafted with traditional methods and authentic flavors"
          tag="Menu Highlights"
          textboxLayout="default"
          features={[
            {
              id: "01",
              title: "Kimchi",
              description: "Fermented vegetables with the perfect balance of spice, tang, and umami. A staple at every Korean table.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942655430-k4ghmpia.jpg",
              imageAlt: "Vibrant red spicy kimchi"
            },
            {
              id: "02",
              title: "Bulgogi",
              description: "Tender marinated beef grilled to perfection. Sweet, savory, and melt-in-your-mouth delicious.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942656058-2kua3tbd.jpg",
              imageAlt: "Sizzling grilled bulgogi beef"
            },
            {
              id: "03",
              title: "Tteokbokki",
              description: "Chewy rice cakes in spicy red sauce. A beloved Korean street food and comfort favorite.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942656742-pknnwm75.jpg",
              imageAlt: "Spicy rice cakes in red sauce"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          buttons={[
            {
              text: "Full Menu",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Guests Say"
          description="Real experiences from people who love Korean Essence"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen, Food Blogger",
              date: "Date: 15 January 2025",
              title: "Most Authentic Korean Food I've Had",
              quote: "Finally found a place that doesn't compromise on authenticity. Every bite transported me back to Seoul. The kimchi is exactly like my grandmother used to make.",
              tag: "Food Enthusiast",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942658867-v839smwe.jpg",
              avatarAlt: "Sarah Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942661618-a3bx4w7j.jpg"
            },
            {
              id: "2",
              name: "Marcus Johnson, Regular Customer",
              date: "Date: 8 January 2025",
              title: "Perfect Family Dining Experience",
              quote: "We come here every month with our whole family. The staff treats us like family, the food is incredible, and the atmosphere is so warm and welcoming. Highly recommend!",
              tag: "Family Dining",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942659635-2bvmsvxf.jpg",
              avatarAlt: "Marcus Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942662301-hxo4f211.jpg"
            },
            {
              id: "3",
              name: "Lisa Park, Health Conscious",
              date: "Date: 2 January 2025",
              title: "Healthy and Delicious",
              quote: "I love that they use fresh, quality ingredients. You can taste the difference. Great for healthy eating without sacrificing flavor. The grilled dishes are my favorite.",
              tag: "Healthy Eater",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942660482-u5nitzsi.jpg",
              avatarAlt: "Lisa Park",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942663007-hki26atr.jpg"
            },
            {
              id: "4",
              name: "David Rodriguez, First Time Visitor",
              date: "Date: 28 December 2024",
              title: "Exceeded All Expectations",
              quote: "Never had Korean food before. The staff explained everything, made recommendations, and every dish was amazing. Definitely coming back and bringing friends.",
              tag: "New Diner",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942661118-scbjka93.jpg",
              avatarAlt: "David Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942663754-zbruv589.jpg"
            },
            {
              id: "5",
              name: "Emma Williams, Dinner Date Planner",
              date: "Date: 22 December 2024",
              title: "Perfect for Special Occasions",
              quote: "Had my anniversary dinner here. Romantic atmosphere, exquisite food, and attentive service. It's now our favorite restaurant for celebrations.",
              tag: "Special Occasions",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942658867-v839smwe.jpg",
              avatarAlt: "Emma Williams",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942661618-a3bx4w7j.jpg"
            },
            {
              id: "6",
              name: "James Lee, Korean Food Expert",
              date: "Date: 18 December 2024",
              title: "Authentic and Passionate",
              quote: "As someone who grew up eating Korean food, I can appreciate the dedication to authenticity here. This restaurant gets it right. A true gem in the city.",
              tag: "Expert Opinion",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942659635-2bvmsvxf.jpg",
              avatarAlt: "James Lee",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942662301-hxo4f211.jpg"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Trusted by Food Communities"
          description="Featured and recommended by leading food platforms and culinary organizations"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942667790-tt6fjaf8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942668522-1k20o82a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942669203-dhav3tbf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942669967-6ct5mjdu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942670637-t7mnwzmj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942671402-zq8hwi0p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942672201-kth846ua.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942668522-1k20o82a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942669203-dhav3tbf.jpg"
          ]}
          speed={40}
          topMarqueeDirection="left"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardSix
          title="Korean Cuisine Insights"
          description="Learn about Korean food traditions, cooking techniques, and dining culture"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          blogs={[
            {
              id: "1",
              title: "The Art of Kimchi Making",
              tags: ["Cooking Guide", "Jan 28, 2025"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942664511-xwsdk4qd.jpg",
              imageAlt: "Korean cooking guide"
            },
            {
              id: "2",
              title: "Essential Korean Pantry Staples",
              tags: ["Ingredients", "Jan 25, 2025"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942665557-mz3k1txl.jpg",
              imageAlt: "Korean ingredients"
            },
            {
              id: "3",
              title: "Korean Dining Etiquette",
              tags: ["Culture", "Jan 20, 2025"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942666264-8wsyt0j2.jpg",
              imageAlt: "Korean dining culture"
            },
            {
              id: "4",
              title: "Street Food of Korea",
              tags: ["Travel", "Jan 15, 2025"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764942666788-oif8cl8b.jpg",
              imageAlt: "Korean street food"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our restaurant and reservations"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do you have vegetarian options?",
              content: "Yes, we have several vegetarian dishes including vegetable bibimbap, kimchi pancake, and vegetarian japchae. Please let us know about your dietary preferences when making a reservation."
            },
            {
              id: "2",
              title: "Can we make reservations?",
              content: "Absolutely. We recommend reservations, especially during weekends. You can reserve online through our website or call us directly. Walk-ins are also welcome based on availability."
            },
            {
              id: "3",
              title: "Do you accommodate spice preferences?",
              content: "Korean cuisine can be spicy, but we're happy to adjust the spice level to your preference. Our staff will guide you through the menu and can modify dishes upon request."
            },
            {
              id: "4",
              title: "What are your operating hours?",
              content: "We are open Tuesday through Sunday from 11:00 AM to 10:00 PM. We're closed on Mondays. Hours may vary on holidays, so please check ahead."
            },
            {
              id: "5",
              title: "Do you offer delivery or takeout?",
              content: "Yes, we offer both delivery and takeout options. You can order through our website, phone, or major food delivery apps. We ensure quality in every order."
            },
            {
              id: "6",
              title: "Are there private dining options?",
              content: "Yes, we have a private dining room available for groups and special occasions. Please contact us for availability and details on private event catering."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to experience authentic Korean cuisine?"
          animationType="entrance-slide"
          inputPlaceholder="Enter your email for reservations"
          buttonText="Reserve Table"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="Korean Essence"
          description="Serving authentic Korean cuisine with passion and tradition since 2016. Experience the true flavors of Korea in our cozy restaurant."
          copyrightText="© 2025 Korean Essence Restaurant. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Menu",
                  href: "#features"
                },
                {
                  label: "Reservations",
                  href: "#contact"
                },
                {
                  label: "Events",
                  href: "#blog"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "Contact Us",
                  href: "#contact"
                },
                {
                  label: "Location",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "#faq"
                },
                {
                  label: "Careers",
                  href: "contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                },
                {
                  label: "Allergen Info",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Mail,
              href: "mailto:info@koreanessence.com",
              ariaLabel: "Email"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}