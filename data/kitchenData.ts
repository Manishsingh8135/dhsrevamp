import { ServiceData } from "./services";
import { FaWarehouse, FaBlender, FaClipboardCheck, FaRuler, FaMobileAlt, FaLightbulb, FaPaintRoller } from 'react-icons/fa';

export const kitchenData: ServiceData = {
  id: "kitchen",
  title: "Kitchen Remodeling",
  description: "Transform your kitchen into a stunning, functional space that reflects your style and meets your needs.",
  heroImage: "/assets/kitchen/kitchen1.jpeg",
  features: [
    { text: "Custom cabinetry and storage solutions", icon: FaWarehouse },
    { text: "High-end appliance installation", icon: FaBlender },
    { text: "Bespoke countertops and backsplashes", icon: FaRuler },
    { text: "Efficient project management", icon: FaClipboardCheck },
    { text: "Ergonomic design principles", icon: FaRuler },
    { text: "Smart home integration", icon: FaMobileAlt },
    { text: "Lighting design and installation", icon: FaLightbulb },
    { text: "Flooring selection and installation", icon: FaPaintRoller }
  ],
  processSteps: [
    { title: "Initial Consultation", description: "We discuss your vision, needs, and budget." },
    { title: "Design Phase", description: "Our team creates detailed 3D renderings of your new kitchen." },
    { title: "Material Selection", description: "Choose from our curated selection of high-quality materials." },
    { title: "Construction", description: "Expert craftsmen bring the design to life." },
    { title: "Final Walkthrough", description: "Ensure every detail meets our high standards." }
  ],
  gallery: [
    { src: "/assets/kitchen/kitchen1.jpeg", alt: "Modern kitchen with island" },
    { src: "/assets/kitchen/kitchen2.jpg", alt: "Rustic kitchen design" },
    { src: "/assets/kitchen/kitchen3.jpg", alt: "Minimalist white kitchen" },
    { src: "/assets/kitchen/kitchen4.jpg", alt: "Luxury kitchen with marble countertops" },
    // { src: "/assets/kitchen/kitchen5.jpg", alt: "Contemporary kitchen with wood accents" },
    // { src: "/assets/kitchen/kitchen6.jpg", alt: "Open concept kitchen and dining area" }
  ],
  testimonials: [
    { name: "Sarah J.", quote: "DHS REVAMP transformed our outdated kitchen into a modern masterpiece!" },
    { name: "Michael R.", quote: "The attention to detail and quality of work exceeded our expectations." },
    { name: "Emily L.", quote: "Our new kitchen is not just beautiful, it&apos;s incredibly functional. DHS REVAMP thought of everything!" },
    { name: "David W.", quote: "The team was professional, punctual, and a pleasure to work with throughout the entire process." },
    { name: "Jennifer K.", quote: "We were amazed at how DHS REVAMP maximized our small kitchen space. It feels twice as big now!" },
    { name: "Robert T.", quote: "The quality of craftsmanship in our new kitchen is outstanding. It&apos;s truly a work of art." },
    { name: "Lisa M.", quote: "DHS REVAMP&apos;s design suggestions were spot on. They really listened to our needs and delivered beyond our expectations." }
  ],
  faq: [
    {
      question: "How long does a typical kitchen remodel take?",
      answer: "A typical kitchen remodel can take anywhere from 6 to 12 weeks, depending on the scope of work. We provide a detailed timeline during the planning phase."
    },
    {
      question: "Can you work with my existing layout?",
      answer: "Absolutely! We can work with your existing layout or create a completely new design, depending on your preferences and the structural possibilities of your space."
    },
    {
      question: "Do I need to move out during the renovation?",
      answer: "While it&apos;s not always necessary to move out, the kitchen will be unusable during the renovation. We can help you set up a temporary kitchen space to minimize disruption."
    },
    {
      question: "How much does a kitchen remodel typically cost?",
      answer: "Costs can vary widely based on the scope of work, materials chosen, and size of your kitchen. We provide detailed estimates after our initial consultation."
    },
    {
      question: "Can you help with appliance selection?",
      answer: "Yes, we can assist in selecting appliances that fit your needs, budget, and the overall design of your new kitchen."
    },
    {
      question: "Do you handle all aspects of the remodel, including plumbing and electrical?",
      answer: "Yes, we are a full-service remodeling company. We handle all aspects of your kitchen remodel, including plumbing, electrical, and any necessary structural changes."
    },
    {
      question: "What types of countertop materials do you offer?",
      answer: "We offer a wide range of countertop materials including granite, quartz, marble, butcher block, and eco-friendly options. We&apos;ll help you choose the best material for your needs and budget."
    },
    {
      question: "How do you ensure the project stays on budget?",
      answer: "We provide detailed, itemized estimates upfront and use project management software to track all expenses. We communicate regularly about any potential changes that might affect the budget."
    },
    {
      question: "What warranty do you offer on your work?",
      answer: "We offer a comprehensive warranty on all our work. Specific details are provided in our contract, but generally, we warranty our craftsmanship for 5 years."
    }
  ],
  benefits: [
    "Increased home value",
    "Improved functionality and efficiency",
    "Customized to your specific needs and style",
    "Energy-efficient appliances and lighting",
    "Enhanced storage solutions",
    "Better traffic flow and workspace",
    "Updated safety features",
    "Potential for better organization"
  ],
  comparisonData: [
    { feature: "Custom Design", us: "✓", others: "Limited options" },
    { feature: "Quality Materials", us: "High-end", others: "Varies" },
    { feature: "Project Timeline", us: "Guaranteed", others: "Often delayed" },
    { feature: "Warranty", us: "Comprehensive", others: "Limited" },
    { feature: "After-Service Support", us: "Lifetime", others: "Limited period" },
    { feature: "Eco-Friendly Options", us: "Wide range", others: "Limited" },
    { feature: "3D Design Preview", us: "✓", others: "Not always available" },
    { feature: "Financing Options", us: "Multiple plans", others: "Limited options" }
  ]
};