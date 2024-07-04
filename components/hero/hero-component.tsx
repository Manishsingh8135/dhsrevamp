import HeroImg from "./hero-img";
import HeroText from "./hero-text";

const HeroComponent = () => {
    return (
        <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4">
            <div className="w-full">
                <HeroText />
            </div>
            <div className="w-full">
                <HeroImg/>
            </div>
        </div>
    )
}

export default HeroComponent;