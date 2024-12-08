import Image from "next/image";

import { MessageCircle, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/base_ui/ui/card";
import { Button } from "@/app/base_ui/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/base_ui/ui/avatar";
import { FaWhatsapp } from "react-icons/fa";

interface SellerInfoProps {
  name: string;
  email: string;
  photoUrl: string;
  whatsappNumber: string;
  onChatClick: () => void;
}

export default function ContactSeller({
  name,
  email,
  photoUrl,
  whatsappNumber,
  onChatClick,
}: SellerInfoProps) {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <Card className="w-full  mx-auto dark:bg-background">
      <CardHeader className="text-xl font-semibold">
        Entre em contato
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h2 className="text-md font-bold">{name}</h2>
            <p className="text-muted-foreground text-sm">{email}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2 px-2">
        <Button
          onClick={handleWhatsAppClick}
          className="flex items-center bg-green-500"
        >
          <FaWhatsapp className="mr-2 h-4 w-4" />
          WhatsApp
        </Button>
        <Button
          onClick={onChatClick}
          variant="outline"
          className="flex items-center gap-2"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Mensagem
        </Button>
      </CardFooter>
    </Card>
  );
}
