import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRight, ChevronRight, PlusCircle } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import AssetForm from './AssetForm';
import Modal from './modal';
// import Link from 'next/link'; uncomment it when the button is being uncommented

const AssetsLeft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="parent h-screen w-full md:w-1/3 lg:w-1/4 bg-white shadow-md flex flex-col px-4 flex-shrink-0">
      {/* Title */}
      <div className="p-2">
        <Label className="font-semibold text-lg flex items-center gap-2">
          Assets <ChevronRight size={18} />
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
        <Button variant={"custom_outline"} onClick={() => setIsModalOpen(true)}>
          <PlusCircle size={20} />
          New
        </Button>

        <p className="text-gray-500 text-sm text-center">Count: 1</p>

        <Button variant="custom">
          POU Exp
        </Button>
      </div>

      {/* Scroll Area */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Asset"
      >
        <AssetForm />
      </Modal>
      <ScrollArea className='w-full flex-grow'>
        <Card className='p-5'>
          <div className='flex justify-between items-center'>
            <CardTitle className='text-[#071487]'>Asset Barcode</CardTitle>
            <div className='flex space-x-2'>
              <Button variant={"card_button"} className='h-6 w-6 hidden md:flex items-center justify-center'><ArrowRight/></Button>
              {/* Commented the below button just to ignore the error when integrating
               it can be uncommented also uncomment the import too
               <Button variant={"card_button"} className='h-6 w-6 flex md:hidden items-center justify-center'>
                <Link href={`/assets/${asset.id}`}>
                  <ArrowRight/>
                </Link>
              </Button> */}
            </div>
          </div>
          <CardContent className='p-0'>
            <p>Wing Name: Room name</p>
            <p>Lapa Detections</p>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default AssetsLeft;
