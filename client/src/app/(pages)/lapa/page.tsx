import React from 'react'
import LapaLeft from './_components/lapaLeft'
import LapaRight from './_components/lapaRight'

const LaPa = () => {
  return (
    <div className='flex h-screen w-full overflow-hidden'>
      <LapaLeft/>
      <LapaRight/>
    </div>
  )
}

export default LaPa