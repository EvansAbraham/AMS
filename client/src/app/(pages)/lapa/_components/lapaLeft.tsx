"use client";


import { Button } from '@/components/ui/button'
import { Card, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowDownUp, ArrowRight, ChevronRight, Cross, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Modal from '../../assets/_components/modal'
import LapaForm from './LapaForm'

const LapaLeft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="parent h-screen w-full md:w-1/3 lg:w-1/4 bg-white shadow-md flex flex-col px-4 flex-shrink-0">
      {/* Title */}
      <div className="p-2">
        <Label className="font-semibold text-lg flex items-center gap-2">
          LA / PA Detections <ChevronRight size={18} />
        </Label>
      </div>

      {/* Search Bar */}
      <div className="p-1">
        <Input 
          placeholder="Search..."
        />
      </div>

      {/* Menu Bar */}
      <div className="flex justify-between items-center p-1 my-2">
        <Button variant={"custom_outline"} onClick={openModal}>
          <PlusCircle size={20} />
          New
        </Button>

        <div className='flex gap-2'>
          <Button variant={"outline"}><ArrowDownUp /> Sort</Button>
          <Button variant="outline">
            <Link href={"/riskassessment"}>
              <Cross/>
            </Link>
          </Button>
        </div>
      </div>

      <ScrollArea className='w-full flex-grow'>
        <Card className='p-5 mb-4'>
          <div className='flex justify-between items-center'>
            <CardTitle className='text-[#071487]'>Asset Barcode - Completed</CardTitle>
            <div className='flex space-x-2'>
              <Button variant={"card_button"} className='h-6 w-6 hidden md:flex items-center justify-center'><ArrowRight/></Button>
            
            </div>
          </div>
          <CardContent className='p-0 mt-2'>
            <h1 className="font-medium">Primary Identifier</h1>
            <p className="text-sm text-gray-600">Wing Name: Room name</p>
            <p className="text-sm text-gray-600">Lapa Detections</p>
          </CardContent>
        </Card>
      </ScrollArea>

      {/* Modal for creating new LAPA entry */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="Create New LA/PA Detection"
      >
        <LapaForm />
      </Modal>
    </div>
  )
}

export default LapaLeft
