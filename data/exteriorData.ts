import { ServiceData } from "./services";

export const exteriorData: ServiceData = {
  id: "exterior",
  title: "Exterior Remodeling",
  description: "Transform your home&apos;s exterior to boost curb appeal and create stunning outdoor living spaces.",
  heroImage: "/assets/exterior/exterior-hero.jpg",
  features: [
    "Siding replacement and repair",
    "Roof installation and maintenance",
    "Window and door upgrades",
    "Deck and patio construction",
    "Landscaping design and implementation",
    "Outdoor kitchen installations",
    "Exterior painting and finishing",
    "Gutter system upgrades"
  ],
  processSteps: [
    { title: "Initial Consultation", description: "We assess your home&apos;s exterior and discuss your vision." },
    { title: "Design Development", description: "Our team creates detailed plans for your exterior transformation." },
    { title: "Material Selection", description: "Choose from our range of high-quality, durable exterior materials." },
    { title: "Construction Phase", description: "Our skilled team executes the exterior remodel with precision." },
    { title: "Final Inspection", description: "We ensure every aspect of the exterior renovation meets our high standards." }
  ],
  gallery: [
    { src: "/assets/exterior/exterior1.jpg", alt: "Modern home exterior with new siding" },
    { src: "/assets/exterior/exterior2.jpg", alt: "Beautiful landscaped front yard" },
    { src: "/assets/exterior/exterior3.jpg", alt: "Custom-built deck with outdoor kitchen" },
    { src: "/assets/exterior/exterior4.jpg", alt: "Elegant front entry with new door and windows" },
    { src: "/assets/exterior/exterior5.jpg", alt: "Revamped roof with solar panels" },
    { src: "/assets/exterior/exterior6.jpg", alt: "Cozy backyard patio with fire pit" }
  ],
  testimonials: [
    { name: "Alex M.", quote: "DHS REVAMP completely transformed the look of our home. The new siding and landscaping have made such a difference!" },
    { name: "Emily R.", quote: "We love our new deck and outdoor kitchen. It&apos;s like we added a whole new room to our house." },
    { name: "John D.", quote: "The team at DHS REVAMP was professional and efficient. Our exterior remodel was completed on time and on budget." },
    { name: "Sarah L.", quote: "The attention to detail in our exterior renovation was impressive. Our home now has the best curb appeal on the block!" },
    { name: "Mike T.", quote: "We&apos;re thrilled with our new windows and doors. Not only do they look great, but we&apos;ve noticed a significant decrease in our energy bills." },
    { name: "Linda K.", quote: "The landscaping design by DHS REVAMP has transformed our outdoor space. It&apos;s now our favorite place to relax." },
    { name: "David W.", quote: "From start to finish, working with DHS REVAMP was a pleasure. They truly brought our vision for our home&apos;s exterior to life." }
  ],
  faq: [
    {
      question: "How long does an exterior remodel typically take?",
      answer: "The duration can vary depending on the scope of work. A simple siding replacement might take 1-2 weeks, while a complete exterior overhaul could take 4-8 weeks. We provide a detailed timeline during the planning phase."
    },
    {
      question: "Can you help with choosing colors and materials for my home&apos;s exterior?",
      answer: "Absolutely! Our design team can help you choose colors and materials that complement your home&apos;s architecture and your personal style, while also considering factors like durability and energy efficiency."
    },
    {
      question: "Do you offer eco-friendly options for exterior remodeling?",
      answer: "Yes, we offer a range of eco-friendly options including sustainable siding materials, energy-efficient windows and doors, and solar panel installations."
    },
    {
      question: "Can you work on historical homes?",
      answer: "Yes, we have experience working on historical homes. We can help preserve the character of your home while updating it for modern efficiency and comfort."
    },
    {
      question: "Do you handle all necessary permits for exterior remodeling?",
      answer: "Yes, we handle all necessary permits and ensure that all work is compliant with local building codes and regulations."
    },
    {
      question: "How do you protect my landscaping during the remodel?",
      answer: "We take great care to protect your existing landscaping. This includes using protective coverings and carefully planning our work areas to minimize impact."
    },
    {
      question: "Can you install outdoor lighting as part of the exterior remodel?",
      answer: "Yes, we can design and install outdoor lighting systems to enhance the beauty and security of your home&apos;s exterior."
    },
    {
      question: "What types of warranties do you offer on exterior work?",
      answer: "We offer comprehensive warranties on our work, typically 5 years on craftsmanship. Many of the products we use also come with manufacturer warranties, which we&apos;ll provide details on."
    },
    {
      question: "How do you handle unexpected issues during an exterior remodel?",
      answer: "We conduct thorough inspections before starting work to minimize surprises. If unexpected issues do arise, we communicate promptly with homeowners and work to find the most cost-effective solutions."
    }
  ],
  benefits: [
    "Increased home value and curb appeal",
    "Improved energy efficiency",
    "Enhanced outdoor living spaces",
    "Better protection from the elements",
    "Reduced maintenance requirements",
    "Updated style and aesthetics",
    "Potential for better home security",
    "Improved overall home functionality"
  ],
  comparisonData: [
    { feature: "Comprehensive Design Services", us: "✓", others: "Limited" },
    { feature: "High-Quality Materials", us: "Always", others: "Varies" },
    { feature: "Energy Efficiency Focus", us: "✓", others: "Not always" },
    { feature: "Custom Solutions", us: "For every project", others: "Limited options" },
    { feature: "Project Timeline Guarantee", us: "✓", others: "Rarely offered" },
    { feature: "Post-Project Support", us: "Extensive", others: "Limited" },
    { feature: "Eco-Friendly Options", us: "Wide range", others: "Limited" },
    { feature: "Financing Options", us: "Multiple plans", others: "Few or none" }
  ]
};