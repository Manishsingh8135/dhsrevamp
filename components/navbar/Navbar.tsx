"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/kitchens">Kitchens</HoveredLink>
            <HoveredLink href="/services/bathrooms">Bathrooms</HoveredLink>
            <HoveredLink href="/services/interiors">Interiors</HoveredLink>
            <HoveredLink href="/services/exteriors">Exteriors</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Recent Work"
              description="View our latest renovation projects"
              href="/projects/recent"
              src="/assets/recent-work.jpg"
            />
            <ProductItem
              title="Featured Designs"
              description="Explore our award-winning designs"
              href="/projects/featured"
              src="/assets/featured-designs.jpg"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about/team">Our Team</HoveredLink>
            <HoveredLink href="/about/process">Our Process</HoveredLink>
            <HoveredLink href="/about/testimonials">Testimonials</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Get in Touch</HoveredLink>
            <HoveredLink href="/quote">Request a Quote</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}