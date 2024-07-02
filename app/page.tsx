import { GridBackgroundDemo } from "@/components/background/Grid-background";
import FooterPreview from "@/components/footer/Footer";
import WhyChooseUs from "@/components/reason/WhyUs";
import { TabsDemo } from "@/components/tabs/TabDemo";
import { ModeToggle } from "@/components/theme-toggle/theme-toggle";
import { Button } from "@/components/ui/button";
import { LampDemo } from "@/components/ui/lamp";
import { LampDemoMain } from "@/components/welcome/welcome";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <GridBackgroundDemo/>
    <LampDemoMain/>
    <Button>Hello</Button>
    <TabsDemo/>
    <ModeToggle/>
    <WhyChooseUs/>
    <FooterPreview/>
   </div>
  );
}
