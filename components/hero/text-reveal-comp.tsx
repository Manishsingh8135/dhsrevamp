"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
            <TextRevealCard
                text="You know the business"
                revealText="Revamp Your Space

        "
            >
                <TextRevealCardTitle>
                    Expert Renovation Services Nationwide
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    DHS REVAMP specializes in transforming kitchens, bedrooms, bathrooms, and more. Elevate your home with our professional revamp solutions.
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
