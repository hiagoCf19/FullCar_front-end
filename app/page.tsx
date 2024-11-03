"use client"
import Image from "next/image";
import Header from "./components/header";
import VehicleFilter from "./home/vehicle-filter";
import CategoryList from "./home/category-list";
import BrandList from "./home/brand-list";
import ReactTypingEffect from 'react-typing-effect'
import HighlightedAdsList from "./home/HighlightedAds-list";
import BottomNavigation from "./components/bottom-navigation";
import React from "react";
import { Button } from "./base_ui/ui/button";
import Footer from "./components/footer";
export default function Home() {
  const cards = [
    {
      image: "/familia.jpeg",
      text: "Carros para",
      strong: "Família"
    },
    {
      image: "/uber.jpeg",
      text: "Carros para motorista de ",
      strong: "Aplicativo"
    },
    {
      image: "/first.jpeg",
      text: "Encontre seu",
      strong: "Primeiro carro"
    },
    {
      image: "/viagem.png",
      text: "Carros para",
      strong: "Viajar"
    },
    {
      image: "/dia_dia.jpg",
      text: "Carros para o ",
      strong: "Dia a dia"
    }

  ]
  const brands = [
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089244/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Chevrolet"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089245/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Citroën"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089250/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Jeep"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089246/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Fiat"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089252/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Toyota"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089253/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Volkswagen"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089249/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Hyundai"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64143957/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Subaru"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089398/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Mercedes-Benz"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089364/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Kia"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089398/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Mercedes-Benz"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089364/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Kia"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089398/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Mercedes-Benz"
    },
    {
      image: "https://image1.mobiauto.com.br/images/api/images/v1.0/64089364/transform/fl_progressive,f_webp,q_70,w_96",
      name: "Kia"
    }

  ]
  return (
    <>
      <Header />
      <div className="space-y-12 px-2 sm:px-40 overflow-x-hidden">
        <div className="w-ful h-60 sm:h-[75vh] relative -mx-4 sm:-mx-40">
          <Image
            src="/banner.jpg"
            alt="banner com casal dirigindo"
            fill
            layout="fixed"
            className=""
            priority

          />
          <div className="hidden sm:block ">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center p-6 space-y-4">


              <div className="space-y-4 flex flex-col items-center justify-center -mt-[15%]">
                <h1 className="font-bold text-5xl">Encontre o carro dos seus sonhos</h1>
                <p className="max-w-lg">
                  Milhares de veículos de diferentes marcas e modelos. Encontre o ideal para você com facilidade e segurança.
                </p>
                <Button>
                  Ver Ofertas
                </Button>
              </div>
            </div>

          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold  md:text-4xl -mt-2 ">Busque por {" "}
            <ReactTypingEffect
              text={brands.map(brand => brand.name)}
              speed={200}
              eraseDelay={1000}
              className="text-primary  font-bold" />
          </h2>
          <VehicleFilter />


        </div>
        <CategoryList cards={cards} />
        <BrandList brands={brands} />
        <HighlightedAdsList />
        <Footer />

      </div>

      <BottomNavigation />


    </>
  );
}
