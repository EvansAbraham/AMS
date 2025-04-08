"use client"
import AssetsRight from './_components/AssetRight'
import AssetsLeft from './_components/AssetsLeft'

const Assets = () => {

  return (
    <div className='flex h-screen w-full overflow-hidden pt-15 md:pt-0'>
      <AssetsLeft />
      <AssetsRight />
    </div>
  )
}

export default Assets
