'use client'

import React from 'react'
import { Leaf, Package, DollarSign } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Eco-Friendly Water Bottle',
    image: '/placeholder.svg',
    ecoScore: 4,
    carbonFootprint: 2.5,
    packagingWaste: 1,
    price: 24.99,
    conventionalPrice: 19.99,
  },
  {
    id: 2,
    name: 'Organic Cotton T-Shirt',
    image: '/placeholder.svg',
    ecoScore: 5,
    carbonFootprint: 3.2,
    packagingWaste: 0.5,
    price: 29.99,
    conventionalPrice: 24.99,
  },
  {
    id: 3,
    name: 'Bamboo Toothbrush Set',
    image: '/placeholder.svg',
    ecoScore: 5,
    carbonFootprint: 1.8,
    packagingWaste: 0.2,
    price: 12.99,
    conventionalPrice: 9.99,
  },
  {
    id: 4,
    name: 'Reusable Produce Bags',
    image: '/placeholder.svg',
    ecoScore: 4,
    carbonFootprint: 1.5,
    packagingWaste: 0.1,
    price: 14.99,
    conventionalPrice: 11.99,
  },
]

const EcoScore = ({ score }: { score: number }) => {
  return (
    <div className='flex items-center'>
      {[...Array(5)].map((_, i) => (
        <Leaf
          key={i}
          className={`w-4 h-4 ${
            i < score ? 'text-green-600 fill-green-600' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export function ProductBrowse() {
  return (
    <div className='bg-white text-gray-800'>
      <main className='container mx-auto p-4 md:p-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Filter Sidebar */}
          <aside className='w-full md:w-64 bg-green-50 p-4 rounded-lg'>
            <h2 className='text-xl font-semibold mb-4'>Filters</h2>
            <div className='space-y-4'>
              <div>
                <label htmlFor='eco-score' className='block mb-2 font-medium'>
                  Eco-Score
                </label>
                <input
                  type='range'
                  id='eco-score'
                  min='1'
                  max='5'
                  className='w-full'
                />
              </div>
              <div>
                <label
                  htmlFor='carbon-footprint'
                  className='block mb-2 font-medium'
                >
                  Max Carbon Footprint
                </label>
                <input
                  type='number'
                  id='carbon-footprint'
                  className='w-full p-2 border rounded'
                  placeholder='kg CO2e'
                />
              </div>
              <div>
                <label
                  htmlFor='packaging-waste'
                  className='block mb-2 font-medium'
                >
                  Max Packaging Waste
                </label>
                <input
                  type='number'
                  id='packaging-waste'
                  className='w-full p-2 border rounded'
                  placeholder='kg'
                />
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className='flex-1'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {products.map(product => (
                <div
                  key={product.id}
                  className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={200}
                    className='w-full h-48 object-cover'
                  />
                  <div className='p-4'>
                    <h3 className='text-lg font-semibold mb-2'>
                      {product.name}
                    </h3>
                    <div className='flex justify-between items-center mb-2'>
                      <EcoScore score={product.ecoScore} />
                      <span className='text-green-700 font-bold'>
                        ${product.price}
                      </span>
                    </div>
                    <div className='text-sm text-gray-600 mb-2'>
                      <div className='flex items-center'>
                        <Leaf className='w-4 h-4 mr-1' />
                        Carbon Footprint: {product.carbonFootprint} kg CO2e
                      </div>
                      <div className='flex items-center'>
                        <Package className='w-4 h-4 mr-1' />
                        Packaging Waste: {product.packagingWaste} kg
                      </div>
                      <div className='flex items-center'>
                        <DollarSign className='w-4 h-4 mr-1' />
                        Savings: $
                        {(product.conventionalPrice - product.price).toFixed(2)}
                      </div>
                    </div>
                    <button className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors'>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
