'use client'


import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { PingDocument } from '@nx-nextjs-tailwind-storybook/data-access'
import React from 'react'

const About = () => {
  const { data, loading } = useQuery(PingDocument)
  console.log(data, loading)
  return (
    <div className='text-2xl'>About</div>
  )
}

export default About