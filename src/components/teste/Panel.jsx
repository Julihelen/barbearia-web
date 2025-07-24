import React from 'react';
import { HeroSection } from './dashboard/HeroSection';
import { LinkSection } from './dashboard/LinkSection';
import { SocialSection } from './dashboard/SocialSection';
export function Panel() {
  return <div className="max-w-5xl">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <LinkSection />
        <SocialSection />
      </div>
    </div>;
}