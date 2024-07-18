import { GridBackgroundDemo } from "@/components/background/Grid-background";
import CTASection from "@/components/cta/Cta";
import FooterPreview from "@/components/footer/Footer";
import  LayoutGridDemo from "@/components/imagegallery/ImageGallery";
import WhyChooseUs from "@/components/reason/WhyUs";
import ServiceProcessTimeline from "@/components/service-timeline/ServiceTimeline";
import { TabsDemo } from "@/components/tabs/TabDemo";
import TestimonialShowcase from "@/components/testimonials/Testimonial";
import { LampDemoMain } from "@/components/welcome/welcome";


export default function Home() {
  return (
   <div>
    <GridBackgroundDemo/>
    <LampDemoMain/>   
    <TabsDemo/>
    <WhyChooseUs/>
    <LayoutGridDemo/>
    <ServiceProcessTimeline/>
    <TestimonialShowcase/>
    <CTASection/>
   </div>
  );
}

