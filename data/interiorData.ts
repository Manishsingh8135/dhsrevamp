import { ServiceData } from "./services";
import { FaHome, FaDoorOpen, FaBoxes, FaPaintRoller, FaPalette, FaLightbulb, FaMobileAlt, FaWheelchair } from 'react-icons/fa';

export const interiorData: ServiceData = {
  id: "interior",
  title: "Interior Remodeling",
  description: "Revitalize your living spaces with our expert interior remodeling services, tailored to your lifestyle and preferences.",
  heroImage: "/assets/interiors/interior1.jpg",
  features: [
    { text: "Whole-home renovations", icon: FaHome },
    { text: "Open concept conversions", icon: FaDoorOpen },
    { text: "Custom built-ins and storage solutions", icon: FaBoxes },
    { text: "Flooring installation and refinishing", icon: FaPaintRoller },
    { text: "Interior painting and wallpapering", icon: FaPalette },
    { text: "Lighting design and installation", icon: FaLightbulb },
    { text: "Smart home technology integration", icon: FaMobileAlt },
    { text: "Accessibility modifications", icon: FaWheelchair }
  ],
  processSteps: [
    { title: "Design Consultation", description: "We discuss your vision and assess your interior spaces." },
    { title: "Concept Development", description: "Our designers create detailed plans and 3D renderings of your new interior." },
    { title: "Material and Finish Selection", description: "Choose from our curated selection of high-quality materials and finishes." },
    { title: "Construction and Installation", description: "Our skilled craftsmen bring the designs to life with precision." },
    { title: "Final Walkthrough", description: "We ensure every detail meets our high standards and your expectations." }
  ],
  gallery: [
    { src: "/assets/interiors/interior1.jpg", alt: "Modern open concept living area" },
    { src: "/assets/interiors/interior2.jpg", alt: "Elegant master bedroom suite" },
    { src: "/assets/interiors/interior3.jpg", alt: "Custom built-in home office" },
    { src: "/assets/interiors/interior4.jpg", alt: "Cozy family room with fireplace" },
    { src: "/assets/interiors/interior5.jpg", alt: "Stylish dining room renovation" },
    { src: "/assets/interiors/interior6.jpg", alt: "Luxurious walk-in closet" }
  ],
  testimonials: [
    { name: "Rachel S.", quote: "DHS REVAMP transformed our dated interior into a modern, open concept dream home. We couldn&apos;t be happier!" },
    { name: "Mark L.", quote: "The custom built-ins DHS REVAMP designed for our home office are both beautiful and functional. They&apos;ve completely changed how we work from home." },
    { name: "Sophia K.", quote: "We were amazed at how DHS REVAMP maximized the space in our small condo. It feels twice as big now!" },
    { name: "Daniel R.", quote: "The attention to detail in our whole-home renovation was impressive. Every room feels cohesive yet unique." },
    { name: "Emma T.", quote: "DHS REVAMP&apos;s design ideas for our living room were innovative and perfectly suited to our lifestyle. We love spending time there now." },
    { name: "James M.", quote: "The smart home integration DHS REVAMP implemented has made our daily routines so much easier and more efficient." },
    { name: "Olivia P.", quote: "We appreciated how DHS REVAMP listened to our needs and incorporated accessibility features seamlessly into our home&apos;s design." }
  ],
  faq: [
    {
      question: "How long does a typical interior remodel take?",
      answer: "The timeline can vary greatly depending on the scope of work. A single room renovation might take 2-4 weeks, while a whole-home remodel could take 3-6 months. We provide a detailed timeline during the planning phase."
    },
    {
      question: "Can you work with my existing furniture and decor?",
      answer: "Absolutely! We can design around your existing pieces or help you select new items that complement your remodeled space."
    },
    {
      question: "Do you offer eco-friendly or sustainable options for interior remodeling?",
      answer: "Yes, we offer a wide range of eco-friendly materials and energy-efficient solutions for interior remodeling, including low-VOC paints, sustainable flooring options, and energy-efficient lighting."
    },
    {
      question: "Can you help make my home more accessible for aging in place or disabilities?",
      answer: "Yes, we have extensive experience in designing and implementing accessibility modifications. We can incorporate features like wider doorways, grab bars, and zero-threshold showers while maintaining a stylish aesthetic."
    },
    {
      question: "How do you handle structural changes in interior remodeling?",
      answer: "Our team includes structural engineers who assess the feasibility of changes like removing walls or adding windows. We handle all necessary permits and ensure all work is up to code."
    },
    {
      question: "Can you incorporate smart home technology into my remodel?",
      answer: "Yes, we can integrate a wide range of smart home technologies, including automated lighting, climate control, security systems, and home entertainment setups."
    },
    {
      question: "How do you minimize dust and disruption during interior remodeling?",
      answer: "We use dust barriers, air scrubbers, and daily clean-up to minimize dust. We also work with you to create a plan that minimizes disruption to your daily life as much as possible."
    },
    {
      question: "Do you offer virtual design consultations?",
      answer: "Yes, we offer virtual design consultations and can work with you remotely for much of the design process if preferred."
    },
    {
      question: "What kind of warranty do you offer on interior remodeling work?",
      answer: "We offer a comprehensive 5-year warranty on our craftsmanship. Many of the products we use also come with manufacturer warranties, which we&apos;ll provide details on."
    }
  ],
  benefits: [
    "Improved functionality and flow of your home",
    "Increased home value",
    "Customized spaces that reflect your lifestyle",
    "Enhanced energy efficiency",
    "Updated style and aesthetics",
    "Better use of available space",
    "Improved lighting and ambiance",
    "Potential for better accessibility and aging in place"
  ],
  comparisonData: [
    { feature: "Custom Design Solutions", us: "✓", others: "Limited options" },
    { feature: "Quality Materials", us: "High-end", others: "Varies" },
    { feature: "Project Management", us: "Dedicated team", others: "Often fragmented" },
    { feature: "Timeline Adherence", us: "Guaranteed", others: "Often delayed" },
    { feature: "Craftsmanship Warranty", us: "5 years", others: "1-2 years typical" },
    { feature: "3D Design Previews", us: "Standard", others: "Extra cost if available" },
    { feature: "Post-Project Support", us: "Ongoing", others: "Limited" },
    { feature: "Eco-Friendly Options", us: "Extensive", others: "Limited" }
  ]
};