"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAboutCards from '@/components/sections/about/SplitAboutCards';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Coffee, Leaf, Sparkles, Star, HelpCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="mediumSizeExtraSmallSpacing"
      background="none"
      cardStyle="outline-light"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen 
          navItems={[
            {name: "Home", id: "home"},
            {name: "About", id: "about"},
            {name: "Menu", id: "menu"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="BrewHaven"
          bottomLeftText="Open Daily 7AM - 9PM"
          bottomRightText="hello@brewhaven.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard 
          title="Welcome to BrewHaven"
          description="Discover the perfect blend of artisan coffee, cozy ambiance, and exceptional service. Your daily ritual starts here."
          tag="Specialty Coffee"
          tagIcon={Coffee}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816004659-le9arzeh.jpg"
          imageAlt="Modern coffeeshop interior"
          frameStyle="card"
          buttons={[
            {text: "View Menu", href: "menu"},
            {text: "Reserve a Table", href: "contact"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutCards 
          title="Our Coffee Philosophy"
          description="We believe in sourcing the finest beans from sustainable farms and roasting them to perfection. Every cup tells a story of passion, craftsmanship, and community."
          tag="About Us"
          tagIcon={Leaf}
          features={[
            {
              id: "1",
              title: "Premium Selection",
              description: "Hand-selected beans from ethical suppliers around the world",
              label: "Single Origin & Blends"
            },
            {
              id: "2",
              title: "Expert Baristas",
              description: "Trained professionals dedicated to crafting your perfect cup",
              label: "Specialty Training"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven 
          title="Signature Drinks"
          description="Explore our carefully crafted signature beverages"
          tag="Menu Highlights"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="blur-reveal"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              title: "Classic Espresso",
              description: "Rich, bold, and perfectly extracted. The foundation of all great coffee drinks.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816005933-fyb80bep.jpg",
              imageAlt: "Espresso with perfect crema"
            },
            {
              id: 2,
              title: "Silky Cappuccino",
              description: "Smooth espresso combined with velvety steamed milk and delicate foam.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816006912-ryg2dz8t.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: 3,
              title: "Cold Brew Perfection",
              description: "Smooth and refreshing cold brew, perfect for any season or time of day.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816007991-ebqi8b1n.jpg",
              imageAlt: "Cold brew coffee iced"
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardTwo 
          title="Our Menu"
          description="Handcrafted beverages and pastries to complement your coffee experience"
          tag="Specialty Selection"
          tagIcon={Coffee}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              brand: "BrewHaven",
              name: "Single Origin Americano",
              price: "$4.50",
              rating: 5,
              reviewCount: "328",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816005933-fyb80bep.jpg",
              imageAlt: "Single origin americano"
            },
            {
              id: "2",
              brand: "BrewHaven",
              name: "Artisan Cappuccino",
              price: "$5.00",
              rating: 5,
              reviewCount: "412",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816006912-ryg2dz8t.jpg",
              imageAlt: "Artisan cappuccino"
            },
            {
              id: "3",
              brand: "BrewHaven",
              name: "Iced Cold Brew",
              price: "$4.75",
              rating: 5,
              reviewCount: "267",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816007991-ebqi8b1n.jpg",
              imageAlt: "Cold brew coffee"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree 
          title="What Our Customers Say"
          description="Real feedback from coffee lovers who visit us daily"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          containerStyle="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@coffeeaddict",
              testimonial: "BrewHaven has the best espresso in town. The baristas really know their craft and the atmosphere is perfect for working or meeting friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816012255-5xchu92x.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              handle: "@jchen92",
              testimonial: "I've been coming here for three months and they remember my order. The quality is consistent and the coffee is always exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816013138-0eqj2d60.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emmalovescoffee",
              testimonial: "The pastries pair perfectly with their coffee. It's my favorite spot for breakfast before work. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816014052-j4fruh0q.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Park",
              handle: "@mpark_coffee",
              testimonial: "The cold brew is absolutely smooth and refreshing. Customer service is outstanding and they support local suppliers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816014933-n0x2vuak.jpg",
              imageAlt: "Michael Park"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia 
          title="Frequently Asked Questions"
          description="Everything you need to know about BrewHaven"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816015865-hp1g1sdx.jpg"
          imageAlt="Coffeeshop counter"
          mediaPosition="right"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What beans do you use?",
              content: "We source our beans from ethical suppliers across Central America, Africa, and Southeast Asia. Each batch is carefully roasted in-house to bring out the unique flavor profiles."
            },
            {
              id: "2",
              title: "Do you offer WiFi?",
              content: "Yes, we have high-speed WiFi available for all our customers. Perfect for working or studying. We also have plenty of seating and charging outlets."
            },
            {
              id: "3",
              title: "Can I order online?",
              content: "You can place pre-orders through our website or mobile app for pickup. We also accept walk-ins daily from 7AM to 9PM."
            },
            {
              id: "4",
              title: "Do you have dietary options?",
              content: "Yes! We offer oat, almond, and soy milk alternatives. Our pastries include vegan and gluten-free options. Ask our baristas about specific dietary needs."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm 
          title="Get In Touch"
          description="Have questions or want to reserve a table? Reach out to us and we'll get back to you within 24 hours."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765816017138-lebigbci.jpg"
          imageAlt="Cozy coffeeshop seating"
          mediaPosition="right"
          inputs={[
            {name: "name", type: "text", placeholder: "Your Name", required: true},
            {name: "email", type: "email", placeholder: "Your Email", required: true}
          ]}
          textarea={{name: "message", placeholder: "Tell us what brings you in or ask a question...", rows: 5, required: true}}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard 
          logoText="BrewHaven"
          columns={[
            {
              title: "Menu",
              items: [
                {label: "Coffee Drinks", href: "#menu"},
                {label: "Pastries", href: "#menu"},
                {label: "About Our Beans", href: "#about"}
              ]
            },
            {
              title: "Visit Us",
              items: [
                {label: "Hours: 7AM - 9PM", href: "#"},
                {label: "Reserve Table", href: "#contact"},
                {label: "Catering Services", href: "#contact"}
              ]
            },
            {
              title: "Connect",
              items: [
                {label: "Instagram", href: "https://instagram.com"},
                {label: "Contact Us", href: "#contact"},
                {label: "Newsletter", href: "#"}
              ]
            }
          ]}
          copyrightText="© 2025 BrewHaven. Crafted with love and exceptional coffee."
        />
      </div>
    </ThemeProvider>
  );
}