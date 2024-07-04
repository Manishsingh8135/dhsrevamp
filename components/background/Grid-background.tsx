import React from "react";
import HeroComponent from "../hero/hero-component";

export function GridBackgroundDemo() {
    return (
        <div className="h-[50rem] w-full bg-gradient-to-b from-gray-900 to-black bg-grid-white/[0.1] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <HeroComponent />
        </div>
    );
}