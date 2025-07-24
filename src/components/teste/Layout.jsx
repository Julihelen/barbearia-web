import React from 'react'
import { InstagramIcon, MapPinIcon } from 'lucide-react'
import { LinkSection } from './dashboard/LinkSection'
import { SocialSection } from './dashboard/SocialSection'
import { HeroSection } from './dashboard/HeroSection'
export function Dashboard() {
  return (
    <div className="max-w-5xl">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <LinkSection />
        <SocialSection />
      </div>
    </div>
  )
}
