import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ChevronRight, PlusCircle } from 'lucide-react'
import React from 'react'

const AssetsLeft = () => {
  return (
    <div className="block h-screen w-full lg:w-1/4 bg-white items-center">
      {/* Title */}
      <div className='p-5'>
        <Label className='font-medium'>Assets <ChevronRight size={16} /></Label>
      </div>

      {/* Search bar */}
      <div className='px-4'>
        <Input placeholder='Search...'/>
      </div>

      {/* Menu Bar */}
      <div className='flex justify-between p-4'>
        <Button variant={"outline"}>
          <PlusCircle/>
          New
        </Button>
        <p className='py-1 text-gray-500'>Count: 1</p>
        <Button variant={"custom"}>
          POU Exp
        </Button>
      </div>
      <Separator className='mx-4'/>
      {/* Scroll Area */}
      
    </div>
  )
}

export default AssetsLeft