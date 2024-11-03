import Link from "next/link"

import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MessageCircle, Car } from "lucide-react"
import { Input } from "../base_ui/ui/input";
import { Button } from "../base_ui/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-primary py-4 sm:px-6 -mx-2 p-2  md:-mx-40">
      <div className="md:max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Information */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Car className="size-8 text-primary" />
            <img src="/logo_primary.png" alt="logo_fullcar" className="w-40 h-10" />
          </Link>
          <p className="text-sm">
            O seu parceiro de confiança no mercado de vendas de automóveis. Oferecemos serviços confiáveis ​​e transparentes para ajudá-lo a encontrar o veículo perfeito.          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Links rápidos</h3>
          <ul className="space-y-2">
            {['Home', 'Browse Listings', 'About Us', 'Contact Us', 'Terms of Service', 'Privacy Policy'].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm hover:text-primary transition-colors duration-200">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Suporte ao cliente</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-primary" />
              <span className="text-sm">(31) 982033698 - FullCar</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-primary" />
              <span className="text-sm">Fullcar@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MessageCircle size={16} className="text-primary" />
              <span className="text-sm">Live Chat</span>
            </li>
          </ul>
          <form className="mt-4">
            <h4 className="text-sm font-semibold mb-2">inscreva-se e fique por dentro das novidades</h4>
            <div className="flex space-x-2 items-center">
              <Input type="email" placeholder="Informe seu e-mail" className="text-sm border-primary/40" />
              <Button type="submit" size="sm">
                Inscrever
              </Button>
            </div>
          </form>
        </div>

        {/* Social Media */}
        <div className="pb-4">
          <h3 className="text-lg font-semibold mb-4 text-primary">Nos acompanhe</h3>
          <div className="flex space-x-4">
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <social.icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" border-t text-center text-sm -mx-8 flex justify-center items-center py-4 gap-1">
        <p>&copy; Developed By </p>
        <Link href={'https://github.com/hiagoCf19'} className="underline">Hiago Ferreira</Link>
      </div>
    </footer>
  )
}
export default Footer;
