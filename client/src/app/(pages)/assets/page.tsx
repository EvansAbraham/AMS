"use client"
import AssetsLeft from './_components/AssetsLeft'
import AssetsRight from './_components/AssetsRight'

const Assets = () => {

  return (
    <div className='flex h-screen w-full overflow-hidden'>
        <AssetsLeft/>
        <AssetsRight />
    </div>
  )
}

export default Assets