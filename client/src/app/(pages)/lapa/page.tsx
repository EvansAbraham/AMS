import React from 'react'
import LapaLeft from './_components/lapaLeft'
import LapaRight from './_components/lapaRight'
import { LapaProvider } from '@/context/LapaContext'

const LaPa = () => {
  return (
    <div className='flex h-screen w-full overflow-hidden  pt-15 md:pt-0'>
      <LapaProvider>
        <LapaLeft />
        <LapaRight />
      </LapaProvider>
    </div>
  )
}

export default LaPa
