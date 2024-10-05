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
export default function Home() {
  const cards = [
    {
      image: "/carros_para_familia.jpg",
      text: "Carros para",
      strong: "Família"
    },
    {
      image: "/motorista_de_app.jpg",
      text: "Carros para motorista de ",
      strong: "Aplicativo"
    },
    {
      image: "/first_car.jpg",
      text: "Encontre seu",
      strong: "Primeiro carro"
    },
    {
      image: "/carro_para_viajar.jpg",
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
    }
  ]
  return (
    <>
      <Header />
      <div className="space-y-6 px-4">
        <div className="w-ful h-44 relative -mx-4">
          <Image
            src="./bg.svg"
            alt="banner com casal dirigindo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h2 className="text-2xl font-semibold">Busque por {" "}
          <ReactTypingEffect
            text={brands.map(brand => brand.name)}
            speed={200}
            eraseDelay={1000}
            className="text-primary font-bold" />
        </h2>
        <VehicleFilter />
        <CategoryList cards={cards} />
        <HighlightedAdsList />
        <BrandList brands={brands} />
      </div>
      <BottomNavigation />


    </>
  );
}
