import Image from 'next/image';
import { TextRevealCardPreview } from "./text-reveal-comp";

const HeroImg = () => {
    return (
        <div className="flex flex-col h-screen p-12 mt-8 ">
            <div className="w-full h-2/5 flex items-center justify-center mt-8 gap-2">
                <TextRevealCardPreview />
            </div>
            <div className="w-full h-3/5 grid grid-cols-2  gap-4">
                <div className=" flex items-center justify-center">
                    <Image 
                        src="/assets/hero/hero1.jpg" 
                        alt="Left Image" 
                        width={500} 
                        height={400} 
                        className="object-cover w-full h-full rounded-lg hover:cursor-pointer" 
                    />
                </div>
                <div className=" flex items-center justify-center">
                    <Image 
                        src="/assets/hero/hero2.jpeg" 
                        alt="Right Image" 
                        width={500} 
                        height={400} 
                        className="object-cover w-full h-full rounded-lg hover:cursor-pointer" 
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroImg;
