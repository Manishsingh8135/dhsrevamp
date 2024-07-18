import { ServiceData } from "./services";
import { FaWarehouse, FaShower, FaGripVertical, FaBath, FaLightbulb, FaTemperatureHigh, FaToilet, FaWind } from 'react-icons/fa';

export const bathroomData: ServiceData = {
  id: "bathroom",
  title: "Bathroom Remodeling",
  description: "Create a luxurious, spa-like retreat in your home with our expert bathroom remodeling services.",
  heroImage: "/assets/bathrooms/bathroom1.jpg",
  features: [
    { text: "Custom vanity and cabinetry", icon: FaWarehouse },
    { text: "High-end fixture installation", icon: FaShower },
    { text: "Tile and stonework", icon: FaGripVertical },
    { text: "Shower and tub upgrades", icon: FaBath },
    { text: "Lighting design", icon: FaLightbulb },
    { text: "Heated flooring options", icon: FaTemperatureHigh },
    { text: "Water-efficient toilet installation", icon: FaToilet },
    { text: "Ventilation system upgrades", icon: FaWind }
  ],
  processSteps: [
    { title: "Initial Consultation", description: "We discuss your bathroom renovation goals and budget." },
    { title: "Design Creation", description: "Our designers create 3D renderings of your new bathroom." },
    { title: "Material Selection", description: "Choose from our curated selection of tiles, fixtures, and finishes." },
    { title: "Construction Phase", description: "Our skilled team brings the design to life." },
    { title: "Final Inspection", description: "We ensure every detail is perfect before handover." }
  ],
  gallery: [
    { src: "/assets/bathrooms/bathroom1.jpg", alt: "Modern minimalist bathroom" },
    { src: "/assets/bathrooms/bathroom2.jpg", alt: "Luxury spa-inspired bathroom" },
    { src: "/assets/bathrooms/bathroom3.jpg", alt: "Contemporary bathroom with freestanding tub" },
    { src: "/assets/bathrooms/bathroom4.jpg", alt: "Sleek bathroom with double vanity" },
    { src: "/assets/bathrooms/bathroom5.jpg", alt: "Rustic bathroom with modern touches" },
    { src: "/assets/bathrooms/bathroom6.jpg", alt: "Small bathroom with smart storage solutions" }
  ],
  testimonials: [
    { name: "Emma S.", quote: "Our new bathroom feels like a luxury spa. DHS REVAMP did an amazing job!" },
    { name: "James L.", quote: "The attention to detail in our bathroom renovation was impressive. Highly recommend!" },
    { name: "Sophia R.", quote: "DHS REVAMP maximized the space in our small bathroom. It&apos;s so much more functional now." },
    { name: "Daniel K.", quote: "The team was professional and the work was completed on time and on budget." },
    { name: "Olivia M.", quote: "We love our new master bathroom. It&apos;s exactly what we envisioned!" },
    { name: "Thomas B.", quote: "The quality of workmanship in our bathroom remodel is outstanding." },
    { name: "Grace W.", quote: "DHS REVAMP&apos;s design ideas transformed our outdated bathroom into a modern oasis." }
  ],
  faq: [
    {
      question: "How long does a bathroom remodel typically take?",
      answer: "A standard bathroom remodel usually takes 3-6 weeks, depending on the scope of work. We provide a detailed timeline during the planning phase."
    },
    {
      question: "Can you make my small bathroom feel larger?",
      answer: "Absolutely! We use various design techniques and smart storage solutions to maximize space and create an illusion of a larger bathroom."
    },
    {
      question: "Do you offer eco-friendly options for bathroom remodels?",
      answer: "Yes, we offer a range of eco-friendly options including low-flow toilets, water-saving showerheads, and sustainable materials for countertops and flooring."
    },
    {
      question: "Can you handle structural changes in the bathroom?",
      answer: "Yes, we can handle structural changes such as moving walls or plumbing fixtures. Our team includes licensed plumbers and electricians to ensure all work is done to code."
    },
    {
      question: "What types of showers do you offer?",
      answer: "We offer a wide range of shower options including walk-in showers, shower/tub combos, and custom tiled showers. We can also install features like rain showerheads and body sprays."
    },
    {
      question: "How do you protect the rest of my home during the renovation?",
      answer: "We use heavy-duty plastic sheeting and air scrubbers to contain dust and debris. We also lay protective coverings on floors and stairs leading to the work area."
    },
    {
      question: "Can you make my bathroom more accessible for aging in place?",
      answer: "Yes, we can incorporate various accessibility features such as walk-in tubs, grab bars, non-slip flooring, and comfort-height toilets to make your bathroom safer and more comfortable."
    },
    {
      question: "Do you provide a warranty on bathroom remodels?",
      answer: "Yes, we offer a comprehensive warranty on all our work. The specific details are outlined in our contract, but typically we provide a 5-year warranty on craftsmanship."
    },
    {
      question: "How much does a bathroom remodel cost?",
      answer: "The cost can vary widely depending on the size of your bathroom, the quality of materials chosen, and the extent of the remodel. We provide detailed, itemized quotes after our initial consultation."
    }
  ],
  benefits: [
    "Increased home value",
    "Enhanced relaxation and comfort",
    "Improved energy efficiency",
    "Better space utilization",
    "Updated style and aesthetics",
    "Improved storage solutions",
    "Enhanced lighting",
    "Potential for better accessibility"
  ],
  comparisonData: [
    { feature: "Custom Design", us: "✓", others: "Limited options" },
    { feature: "Quality Materials", us: "High-end", others: "Varies" },
    { feature: "Project Timeline", us: "Guaranteed", others: "Often delayed" },
    { feature: "Warranty", us: "Comprehensive", others: "Limited" },
    { feature: "Accessibility Options", us: "Wide range", others: "Limited" },
    { feature: "Eco-Friendly Solutions", us: "✓", others: "Not always available" },
    { feature: "3D Design Preview", us: "✓", others: "Rarely offered" },
    { feature: "Post-Project Support", us: "Ongoing", others: "Limited period" }
  ]
};