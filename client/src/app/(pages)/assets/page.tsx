"use client"
import AssetsRight2 from './_components/AssetRight2'
import AssetsLeft from './_components/AssetsLeft'

const Assets = () => {

  return (
    <div className='flex h-screen w-full overflow-hidden pt-15 md:pt-0'>
      <AssetsLeft />
      {/* <AssetsRight /> */}
      <AssetsRight2 />
    </div>
  )
}

export default Assets
