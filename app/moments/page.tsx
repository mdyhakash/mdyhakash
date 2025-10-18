"use client"

import { Navigation } from "@/components/navigation"
import { Gallery } from "@/components/gallery"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Contact } from "@/components/contact"

export default function GalleryPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="relative">
        <div className="pt-20 sm:pt-24 md:pt-32">
          <Gallery />
        </div>
        <Contact />
      </main>
      <ScrollToTop />
    </>
  )
}
