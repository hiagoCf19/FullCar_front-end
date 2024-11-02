"use client"
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/app/base_ui/ui/button'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export default function CarDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carImages = [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
  ]

  const carDetails = {
    model: 'Tesla Model S',
    year: 2023,
    price: '$79,990',
    mileage: '5,000 miles',
    enginePower: '670 hp',
    fuelType: 'Electric',
    location: 'San Francisco, CA'
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                <Image
                  src={carImages[currentImageIndex]}
                  alt={`Car image ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="flex justify-center mt-4 space-x-2">
                {carImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-bold">{carDetails.model}</h1>
              <p className="text-2xl font-semibold text-primary">{carDetails.price}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-medium">{carDetails.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mileage</p>
                  <p className="font-medium">{carDetails.mileage}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Engine Power</p>
                  <p className="font-medium">{carDetails.enginePower}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fuel Type</p>
                  <p className="font-medium">{carDetails.fuelType}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{carDetails.location}</p>
                </div>
              </div>
              <Button className="w-full">Contact Seller</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}