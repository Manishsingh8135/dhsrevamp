"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-gray-900 to-black h-[40rem] rounded-2xl w-full">
            <TextRevealCard
                text="Transform Your Home"
                revealText="With DHS REVAMP"
                className="border border-purple-500/20"
            >
                <TextRevealCardTitle className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Expert Renovation Services in LOS ANGELES
                </TextRevealCardTitle>
                <TextRevealCardDescription className="text-gray-300 font-serif italic">
                    DHS REVAMP specializes in transforming kitchens, bedrooms, bathrooms, and more. Elevate your home with our professional revamp solutions.
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}