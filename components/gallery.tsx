"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { galleryImages } from "@/lib/imageData"

export function Gallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const getImageSource = (image: { local?: string; url?: string }) => {
    // Prioritize URL if available, otherwise use local image
    return image.url || image.local || "/placeholder.svg"
  }

  const getGridSpan = (orientation: string) => {
    switch (orientation) {
      case "landscape":
        return "md:col-span-2"
      case "portrait":
        return "md:col-span-1"
      case "square":
        return "md:col-span-1"
      default:
        return "md:col-span-1"
    }
  }

  const getRowSpan = (orientation: string) => {
    switch (orientation) {
      case "landscape":
        return "md:row-span-1"
      case "portrait":
        return "md:row-span-2"
      case "square":
        return "md:row-span-1"
      default:
        return "md:row-span-1"
    }
  }

  return (
    <section id="gallery" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-accent"></span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            
          </p>
        </motion.div> */}

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[350px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${getGridSpan(image.orientation)} ${getRowSpan(image.orientation)}`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={getImageSource(image.image) || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex flex-col justify-end p-4 sm:p-6"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: hoveredId === image.id ? 0 : 20, opacity: hoveredId === image.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{image.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">{image.description}</p>

                  <div className="flex flex-col gap-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-accent">
                      {/* <span>📍</span> */}
                      <span>{image.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      {/* <span>📅</span> */}
                      <span>{image.date}</span>
                    </div>
                    {/* {image.orientation && (
                      <div className="flex items-center gap-2 text-accent">
                        <span>📐</span>
                        <span className="capitalize">{image.orientation}</span>
                      </div>
                    )} */}
                  </div>

                  {/* Tags */}
                  {/* {image.tags && image.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {image.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs bg-accent/20 text-accent rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )} */}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
