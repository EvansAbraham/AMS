// AssetsLeft.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRight, ChevronRight, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AssetForm from './AssetForm';
import Modal from './modal';
import { useGetAssetsQuery } from '@/app/state/api'; // Adjust the path if needed
import { useAsset } from '@/context/AssetContext'; // Import the context
import { Asset } from '@/app/state/api';
import { useRouter } from 'next/navigation';



const AssetsLeft: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const { data: assets = [], isLoading, error } = useGetAssetsQuery();
  const { setSelectedAsset } = useAsset(); // Use the context
  const router = useRouter();

  const handleCardClick = (asset: Asset) => {
    setSelectedAsset(asset);

    if (window.innerWidth < 640) {
      router.push(`/assets/${asset.id}`);
    }
  };

  // Filter assets based on the search query
  const filteredAssets = assets.filter((asset: Asset) =>
    asset.assetBarcode?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.roomName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.wingInShort?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="parent h-screen w-full md:w-1/3 lg:w-1/4 bg-white shadow-md flex flex-col px-4 flex-shrink-0">
      {/* Title */}
      <div className="p-2">
        <Label className="font-semibold text-lg flex items-center gap-2">
          Assets <ChevronRight size={18} />
        </Label>
      </div>

      {/* Search Bar */}
      <div className="p-1 mb-2">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
      </div>

      {/* Menu Bar */}
      <div className="flex justify-between items-center p-1 mb-2">
        <Button variant="custom_outline" onClick={() => setIsModalOpen(true)}>
          <PlusCircle size={20} />
          New
        </Button>
        <p className="text-gray-500 text-sm text-center">Count: {filteredAssets.length}</p>
        <Button variant="custom">POU Exp</Button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Asset"
      >
        <AssetForm />
      </Modal>

      {/* Scroll Area with Asset Cards */}
      <ScrollArea className="w-full flex-grow overflow-y-auto space-y-2">
        {isLoading && <p className="text-sm text-gray-500">Loading...</p>}
        {error && <p className="text-sm text-red-500">Failed to load assets.</p>}

        {!isLoading &&
          filteredAssets.map((asset: Asset) => (
            <Card key={asset.id} className="p-5 mb-4" onClick={() => setSelectedAsset(asset)}>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-[#071487]">
                  {asset.assetBarcode || 'No Barcode'}
                </CardTitle>
                <div className="flex space-x-2">
                  <Button variant="card_button" className="h-6 w-6 hidden md:flex items-center justify-center">
                    <ArrowRight />
                  </Button>
                </div>
              </div>
              <CardContent className="p-0">
                <p>Wing: {asset.wingInShort || 'N/A'} | Room: {asset.roomName || 'N/A'}</p>
                <p>Status: {asset.status || 'N/A'}</p>
              </CardContent>
            </Card>
          ))}
      </ScrollArea>
    </div>
  );
};

export default AssetsLeft;