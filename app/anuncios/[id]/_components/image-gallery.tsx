import Image from "next/image";
import ContactSeller from "./contact-seller";

interface ImageGalleryProps {
  images: {
    // Array de imagens do anúncio
    id: number; // Identificador único da imagem
    url: string; // URL da imagem
    ad_id: number; // ID do anúncio relacionado
  }[];
  fotoFocada: number;
  onFotoClick: (index: number) => void;
}

export function ImageGallery({
  images,
  fotoFocada,
  onFotoClick,
}: ImageGalleryProps) {
  return (
    <div className="md:flex md:w-[75%] w-full">
      <div className="relative w-full h-96 md:h-[60vh] ">
        <Image
          src={images[fotoFocada].url}
          alt={`Foto ${fotoFocada + 1}`}
          fill
          className="object-cover  aspect-square md:rounded-md"
        />
      </div>
      <div className="flex md:flex-col px-2 items-center gap-4 ">
        {images.slice(0, 4).map((foto, index) => (
          <button
            key={index}
            onClick={() => onFotoClick(index)}
            className={`relative w-20 h-20 flex-shrink-0 ${
              index === fotoFocada ? "ring-2 ring-primary rounded-md" : ""
            }`}
          >
            <Image
              src={foto.url}
              alt={`Miniatura ${index + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
