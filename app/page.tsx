import { GridBackgroundDemo } from "@/components/background/Grid-background";
import CTASection from "@/components/cta/Cta";
import FooterPreview from "@/components/footer/Footer";
import AdvancedHero3D from "@/components/hero/new-hero";
import Hero3 from "@/components/hero/new-hero";
import LayoutGridDemo from "@/components/imagegallery/ImageGallery";
import WhyChooseUs from "@/components/reason/WhyUs";
import ServiceProcessTimeline from "@/components/service-timeline/ServiceTimeline";
import { TabsDemo } from "@/components/tabs/TabDemo";
import TestimonialShowcase from "@/components/testimonials/Testimonial";
import { LampDemoMain } from "@/components/welcome/welcome";


export default function Home() {
  return (
    <div>
      <AdvancedHero3D 
      logoPath={""}
      initialCameraPosition={[0.9717728919512081, 0.41480069283742743, 3.2363700475392227]}
      initialRotation={[-2.6593545396871683, -0.17558357267414258, -3.050406980491143]}
        orbitControlsTarget={[0, 0, 0]}
        textPosition={[0, 2, 5]}
        />
      <GridBackgroundDemo />
      <LampDemoMain />
      <TabsDemo />
      <WhyChooseUs />
      <LayoutGridDemo />
      <ServiceProcessTimeline />
      <TestimonialShowcase />
      <CTASection />
    </div>
  );
}

