"use client"

import { useState } from 'react'
import { Button } from "@/app/base_ui/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/app/base_ui/ui/card"
import { Input } from "@/app/base_ui/ui/input"
import { Label } from "@/app/base_ui/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/base_ui/ui/select"
import { Slider } from "@/app/base_ui/ui/slider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/base_ui/ui/dropdown-menu"
import { Calendar, Car, DollarSign, Edit, Eye, MoreVertical, Plus, Star, Trash2 } from "lucide-react"
import Header from '../components/header'
import BottomNavigation from '../components/bottom-navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../base_ui/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../base_ui/ui/carousel'


// Mock data for car listings

const carListings = [
  {
    id: 1,
    image: "https://img.olx.com.br/images/89/891427064966858.jpg",
    name: "2018 Toyota Camry",
    price: 15000,
    mileage: 50000,
    datePosted: "2023-05-15",
    status: "Active",
    featured: true,
  },
  {
    id: 2,
    image: "/placeholder.svg",
    name: "2020 Honda Civic",
    price: 18000,
    mileage: 30000,
    datePosted: "2023-05-10",
    status: "Pending",
    featured: false,
  },
  {
    id: 3,
    image: "/placeholder.svg",
    name: "2019 Ford Mustang",
    price: 25000,
    mileage: 40000,
    datePosted: "2023-05-05",
    status: "Sold",
    featured: false,
  },
  // Add more mock listings as needed
]

export default function Search() {


  const [sortBy, setSortBy] = useState("recent")

  return (
    <div>

      <Header />
      <div className="p-2 sm:p-0 flex flex-col md:flex-row gap-6">
        {/* Sidebar with filters */}


        <aside className="md:bg-border/50 dark:bg-card/40 dark:shadow-border/40 md:shadow-lg border-none w-full md:w-1/5 md:p-4  space-y-6 md:h-[94vh]">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Buscar
            </h2>
            <Input placeholder='Busque por uma marca ou veículo' />

          </div>
          <Accordion type="single" collapsible>

            <AccordionItem className="text-lg font-semibold mb-2" value="item-1">
              <AccordionTrigger>Filtrar</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="brand">Marca</Label>
                    <Select>
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                        {/* Add more brands */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label>Preço</Label>
                    <Slider />
                  </div>
                  <div>
                    <Label htmlFor="year">Ano</Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Selecione o ano" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        {/* Add more years */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label>Quilometragem</Label>
                    <Slider defaultValue={[0, 100000]} max={200000} step={5000} />
                  </div>
                </div>

              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </aside>

        {/* Main content area */}
        <main className="flex-1 md:p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Buscar</h1>
            <Button className='text-zinc-50'>
              <Plus className="mr-2 h-4 w-4" /> Criar um anúncio
            </Button>
          </div>

          {/* Sorting dropdown */}
          <div className="mb-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Mais recentes</SelectItem>
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="price-desc">Maior preço</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Grid of car listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {carListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden bg-border/50 dark:bg-card/40 dark:shadow-border/40 shadow-lg border-none">
                <CardHeader className="p-0">
                  <Carousel className="relative">
                    <CarouselContent>

                      <CarouselItem >
                        <div className="relative w-full h-60 ">
                          <img src={listing.image} alt="foto do carro" className="aspect-video" />
                        </div>
                      </CarouselItem>

                    </CarouselContent>
                    <div className=" absolute inset-0 flex justify-between  w-full h-full items-center px-4">
                      <CarouselPrevious className="left-0 bg-transparent border-none hover:bg-transparent" />
                      <CarouselNext className="right-0 bg-transparent border-none hover:bg-transparent" />
                    </div>

                  </Carousel>
                </CardHeader>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{listing.name}</h2>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-bold">${listing.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="w-4 h-4 mr-1" />
                      <span>{listing.mileage.toLocaleString()} miles</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Posted on {listing.datePosted}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Menu</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Star className="w-4 h-4 mr-2" />
                        {listing.featured ? "Favoritar" : "Desfavoritar"}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
      <BottomNavigation />
    </div>
  )
}