"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/app/base_ui/ui/button";

interface ImageGalleryProps {
  images: {
    // Array de imagens do anúncio
    id: number; // Identificador único da imagem
    url: string; // URL da imagem
    ad_id: number; // ID do anúncio relacionado
  }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96">
      <Image
        src={images[currentIndex].url}
        alt={`Car image ${currentIndex + 1}`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={prevImage}
          className="bg-transparent border-none hover:bg-transparent"
        >
          <ChevronLeft className="h-12 w-12 text-zinc-50" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextImage}
          className="bg-transparent border-none hover:bg-transparent"
        >
          <ChevronRight className="h-12 w-12 text-zinc-50" />
        </Button>
      </div>
      <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-primary/50 px-2 py-1 rounded text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
