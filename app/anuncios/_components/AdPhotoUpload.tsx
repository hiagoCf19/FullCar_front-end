"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { X, Upload } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/app/base_ui/ui/button";
import api from "@/app/services/apiService";
import Router from "next/router";
import Loading from "@/app/base_ui/_components/loading";
import { useRouter } from "next/navigation"; // Use este import

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/app/base_ui/ui/dialog";
interface Photo {
  id: string;
  file: File;
  previewUrl: string;
}
interface AdPhotoUploadProps {
  adId: string;
}
export function AdPhotoUpload({ adId }: AdPhotoUploadProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter(); // Inicializa o hook aqui

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (photos.length + acceptedFiles.length > 6) {
        toast.error("Limite de imagens atingido");
        return;
      }

      const newPhotos = acceptedFiles.map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        previewUrl: URL.createObjectURL(file),
      }));

      setPhotos((prev) => [...prev, ...newPhotos].slice(0, 6));
    },
    [photos]
  );

  const onSubmitAd = async () => {
    if (typeof window === "undefined") {
      return; // Evita erros no servidor
    }
    if (!adId) {
      toast.error("Ad ID não encontrado na URL.");
      return;
    }

    if (photos.length === 0) {
      toast.error("Adicione pelo menos uma foto antes de enviar.");
      return;
    }

    const formData = new FormData();

    // Adiciona os arquivos ao FormData
    photos.forEach((photo) => {
      formData.append("files", photo.file);
    });

    try {
      setUploading(true);
      const response = await api.post(
        `/api/integration/aws-s3/upload-multiple/${adId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess(true);
      setTimeout(async () => {
        setSuccess(false);
        router.push(`/anuncios/${adId}`); // Redireciona usando o hook useRouter
      }, 4000);
    } catch (error) {
      setUploading(false);
      console.error("Erro ao enviar o anúncio:", error);
      toast.error("Erro ao enviar o anúncio.");
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    disabled: photos.length >= 6 || uploading,
  });

  const removePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };

  const isSubmitDisabled = photos.length === 0 || uploading;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Envie as fotos do seu anúncio</h2>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive ? "border-primary bg-primary/10" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Arraste e solte fotos aqui ou clique para selecionar os arquivos
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Envie até 6 fotos (a primeira foto é obrigatória)
        </p>
      </div>

      {photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.previewUrl}
                alt={`Uploaded photo ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg"
              />
              <button
                onClick={() => removePhoto(photo.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Remove photo"
              >
                <X className="h-4 w-4" />
              </button>
              {index === 0 && (
                <span className="absolute bottom-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  Foto principal
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">
          {photos.length}/6 fotos enviadas
        </p>
        <Button
          type="submit"
          disabled={isSubmitDisabled}
          onClick={onSubmitAd}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
        >
          {uploading ? (
            <div className="flex items-center gap-2">
              Enviando
              <Loading />
            </div>
          ) : (
            "Finalizar anúncio"
          )}
        </Button>
      </div>

      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent className=" h-[30vh]">
          <DialogTitle></DialogTitle>
          <DialogDescription className="space-y-4">
            <div className="flex justify-center items-center">
              <h2 className="text-2xl font-semibold text-foreground">
                Anúncio criado com sucesso!
              </h2>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-md text-foreground w-full text-center">
                Aguarde enquanto estamos finalizando os detalhes. Em alguns
                segundos você será redirecionado para o seu anúncio criado.
              </p>
            </div>
            <div className="flex justify-center items-center scale-125">
              <Loading />
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}
