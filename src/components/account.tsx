'use client'

import React from 'react'
import { User, ShoppingBag, Award } from 'lucide-react'
import { Progress } from '&/components/ui/progress'
import { Button } from '&/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '&/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '&/components/ui/tabs'

export function AccountComponent() {
  return (
    <div className='bg-green-50 p-4 md:p-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center space-x-4 mb-8'>
          <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center'>
            <User className='text-white w-8 h-8' />
          </div>
          <div>
            <h1 className='text-3xl font-bold text-green-800'>
              Welcome, Eco Warrior!
            </h1>
            <p className='text-green-600'>Member since June 2023</p>
          </div>
        </div>

        <Tabs defaultValue='dashboard'>
          <TabsList className='mb-4'>
            <TabsTrigger value='dashboard'>Dashboard</TabsTrigger>
            <TabsTrigger value='orders'>Orders</TabsTrigger>
            <TabsTrigger value='achievements'>Achievements</TabsTrigger>
            <TabsTrigger value='settings'>Settings</TabsTrigger>
          </TabsList>

          <TabsContent value='dashboard'>
            <div className='grid gap-6 md:grid-cols-2'>
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div>
                      <div className='flex justify-between mb-2'>
                        <span>Carbon Footprint Saved</span>
                        <span>75 kg CO2e</span>
                      </div>
                      <Progress value={75} className='h-2 bg-green-200' />
                    </div>
                    <div>
                      <div className='flex justify-between mb-2'>
                        <span>Plastic Waste Reduced</span>
                        <span>12 kg</span>
                      </div>
                      <Progress value={60} className='h-2 bg-green-200' />
                    </div>
                    <div>
                      <div className='flex justify-between mb-2'>
                        <span>Water Saved</span>
                        <span>500 L</span>
                      </div>
                      <Progress value={50} className='h-2 bg-green-200' />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-4'>
                    <li className='flex items-center space-x-3'>
                      <Award className='text-yellow-500 w-6 h-6' />
                      <span>Eco Pioneer: Made 10 green purchases</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <Award className='text-green-500 w-6 h-6' />
                      <span>Tree Hugger: Saved 50 kg of CO2</span>
                    </li>
                    <li className='flex items-center space-x-3'>
                      <Award className='text-blue-500 w-6 h-6' />
                      <span>Water Warrior: Conserved 500 L of water</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className='md:col-span-2'>
                <CardHeader>
                  <CardTitle>Monthly Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='h-64 flex items-end justify-between'>
                    {[40, 60, 30, 70, 50, 80].map((value, index) => (
                      <div
                        key={index}
                        className='w-1/6 bg-green-600 rounded-t'
                        style={{ height: `${value}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className='flex justify-between mt-2 text-sm text-gray-600'>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value='orders'>
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-4'>
                  {[1, 2, 3].map(order => (
                    <li
                      key={order}
                      className='flex items-center justify-between border-b pb-4'
                    >
                      <div className='flex items-center space-x-4'>
                        <ShoppingBag className='text-green-600 w-6 h-6' />
                        <div>
                          <p className='font-semibold'>Order #{1000 + order}</p>
                          <p className='text-sm text-gray-600'>
                            June {10 + order}, 2023
                          </p>
                        </div>
                      </div>
                      <Button variant='outline'>View Details</Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='achievements'>
            <Card>
              <CardHeader>
                <CardTitle>Your Eco Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid gap-4 md:grid-cols-2'>
                  {[
                    'Eco Pioneer',
                    'Tree Hugger',
                    'Water Warrior',
                    'Zero Waste Hero',
                  ].map((achievement, index) => (
                    <div
                      key={index}
                      className='flex items-center space-x-3 p-4 bg-white rounded-lg shadow'
                    >
                      <Award className='text-green-600 w-8 h-8' />
                      <div>
                        <p className='font-semibold'>{achievement}</p>
                        <p className='text-sm text-gray-600'>
                          Unlocked on June {15 + index}, 2023
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='settings'>
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form className='space-y-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      New Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500'
                    />
                  </div>
                  <Button className='bg-green-600 hover:bg-green-700 text-white'>
                    Save Changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
