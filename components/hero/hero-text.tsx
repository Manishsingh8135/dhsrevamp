import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button";

const HeroText = () => {
    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <Badge variant="outline" className="py-2 border rounded-lg px-6 bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-white">Best in LOS ANGELES</Badge>
            <h1 className="text-4xl font-creepster sm:text-7xl font-extrabold relative z-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-8">DHS CONSTRUCTION GROUP</h1>
            <p className="text-gray-300 text-xl sm:text-2xl font-serif italic text-center max-w-2xl">
            Transform your space with DHS REVAMP. Expert revamp services for kitchens, bedrooms, bathrooms, and more across the USA.
            </p>
            <div className="flex mt-12 gap-6">
                <Button variant="default" className="p-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Get Started Today
                </Button>
                <Button variant="secondary" className="p-6 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300">
                    Contact Us
                </Button>
            </div>
        </div>
    )
}

export default HeroText;