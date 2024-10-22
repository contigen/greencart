'use client'

import React from 'react'
import { Minus, Plus, Trash2, ArrowRight, Leaf } from 'lucide-react'
import { Progress } from '&/components/ui/progress'
import { Button } from '&/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '&/components/ui/card'
import Image from 'next/image'

const cartItems = [
  {
    id: 1,
    name: 'Eco-Friendly Water Bottle',
    image: '/placeholder.svg',
    price: 24.99,
    quantity: 2,
    ecoImpact: 5,
  },
  {
    id: 2,
    name: 'Organic Cotton T-Shirt',
    image: '/placeholder.svg',
    price: 29.99,
    quantity: 1,
    ecoImpact: 4,
  },
]

export function CartComponent() {
  const [impact, setImpact] = React.useState(70)

  React.useEffect(() => {
    const timer = setTimeout(() => setImpact(94), 500)
    return () => clearTimeout(timer)
  }, [])

  const totalImpact = cartItems.reduce(
    (sum, item) => sum + item.ecoImpact * item.quantity,
    0
  )
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className='min-h-screen bg-green-50 p-4 md:p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-green-800 mb-8'>
          Your GreenCart
        </h1>

        <div className='grid gap-8 md:grid-cols-3'>
          <div className='md:col-span-2 space-y-4'>
            {cartItems.map(item => (
              <Card key={item.id}>
                <CardContent className='p-4 flex items-center space-x-4'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={20}
                    height={20}
                    className='w-20 h-20 object-cover rounded'
                  />
                  <div className='flex-grow'>
                    <h3 className='font-semibold'>{item.name}</h3>
                    <p className='text-green-700'>${item.price.toFixed(2)}</p>
                    <div className='flex items-center mt-2'>
                      <Button
                        variant='outline'
                        size='icon'
                        className='h-8 w-8 rounded-full'
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <span className='mx-2'>{item.quantity}</span>
                      <Button
                        variant='outline'
                        size='icon'
                        className='h-8 w-8 rounded-full'
                      >
                        <Plus className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                  <Button variant='ghost' size='icon' className='text-red-500'>
                    <Trash2 className='h-5 w-5' />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Eco Savings</span>
                    <span className='text-green-600'>-$5.00</span>
                  </div>
                  <div className='flex justify-between font-semibold'>
                    <span>Total</span>
                    <span>${(totalPrice - 5).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className='w-full bg-green-600 hover:bg-green-700 text-white'>
                  Checkout <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div>
                    <div className='flex justify-between mb-2'>
                      <span>Carbon Footprint Reduction</span>
                      <span>{impact}%</span>
                    </div>
                    <Progress value={impact} className='h-2 bg-green-200' />
                  </div>
                  <div className='flex items-center justify-between'>
                    <span>Eco-Impact Score</span>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <Leaf
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.round(totalImpact / cartItems.length)
                              ? 'text-green-600 fill-green-600'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className='text-sm text-gray-600'>
                    Your choices are making a difference! You&rsquo;ve saved the
                    equivalent of 3 trees.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
