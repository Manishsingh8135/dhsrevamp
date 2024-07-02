import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";

const HeroText = () => {
    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Badge variant="outline" className="py-2 border  rounded-lg px-6 bg-amber-500 font-bold text-white">Best in North America</Badge>
            <h1 className="text-4xl  rounded-lg sm:text-7xl font-bold relative z-20 text-primary py-8">DHS REVAMP</h1>
            <p className="text-slate-300 text-2xl font-semibold text-center">
            Transform your space with DHS REVAMP. Expert revamp services for kitchens, bedrooms, bathrooms, and more across the USA.
            </p>
            <div className="flex  mt-12 gap-6">
                <div>
                    <Button variant="default" className="p-6 rounded-lg "> Get Started Today</Button>
                </div>
                <div>
                    <Button variant="secondary" className="p-6 rounded-lg"> Contact Us</Button>
                </div>
            </div>
        </div>
    )
}
export default HeroText;