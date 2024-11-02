import Link from "next/link"

import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MessageCircle } from "lucide-react"
import { Input } from "../base_ui/ui/input";
import { Button } from "../base_ui/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-primary py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Information */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className=" h-8 w-8 text-primary"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            <span className="text-xl font-bold text-primary">CarSales</span>
          </Link>
          <p className="text-sm">
            Your trusted partner in the car sales market. We provide reliable and transparent services to help you find your perfect vehicle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-sm">1-800-CAR-SALE</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <span className="text-sm">support@carsales.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MessageCircle size={16} />
              <span className="text-sm">Live Chat</span>
            </li>
          </ul>
          <form className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="text-sm" />
              <Button type="submit" variant="outline" size="sm">
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
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
      <div className="mt-8 pt-8 border-t text-center text-sm -mx-8">
        <p>&copy; {new Date().getFullYear()} CarSales. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer;
