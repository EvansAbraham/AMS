// AssetsLeft.tsx
import React, { useMemo, useState, useEffect } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRight, ChevronRight, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AssetForm from './AssetForm';
import Modal from './modal';
import { useGetAssetsQuery } from '@/app/state/api';
import { useAsset } from '@/context/AssetContext';
import { Asset } from '@/app/state/api';
import { useRouter } from 'next/navigation';
import { Select, SelectValue, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';

const AssetsLeft: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSortAndFilter, setShowSortAndFilter] = useState(false);
  const { data: assets = [], isLoading, error } = useGetAssetsQuery();
  const { setSelectedAsset, setUniqueWings, setAllAssets } = useAsset();
  const router = useRouter();
  const [selectedWing, setSelectedWing] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

  // Calculate unique wings once
  const uniqueWings = useMemo(() => {
    const wings = new Set<string>();
    assets.forEach((asset: Asset) => {
      if (asset.wingInShort) {
        wings.add(asset.wingInShort);
      }
    });
    return Array.from(wings);
  }, [assets]);

  // Calculate unique floors based on selected wing
  const uniqueFloors = useMemo(() => {
    const floors = new Set<string>();
    assets.forEach((asset: Asset) => {
      if (!selectedWing || asset.wingInShort === selectedWing) {
        if (asset.floorInWords) {
          floors.add(asset.floorInWords);
        }
      }
    });
    return Array.from(floors);
  }, [assets, selectedWing]);

  // Update context only when data changes, not on every render
  useEffect(() => {
    if (assets && assets.length > 0) {
      setAllAssets(assets);
      // Only set unique wings once when assets change
      setUniqueWings(uniqueWings);
    }
  }, [assets, setAllAssets, setUniqueWings, uniqueWings]);

  const handlePOUExpClick = () => {
    if (showSortAndFilter) {
      setSelectedWing(null);
      setSelectedFloor(null);
    }
    setShowSortAndFilter((prev) => !prev);
  };

  const handleCardClick = (asset: Asset) => {
    console.log('Card clicked:', asset.filterInstalledOn);
    setSelectedAsset(asset);

    if (window.innerWidth < 640) {
      router.push(`/assets/${asset.id}`);
    }
  };

  // Sort and filter assets based on the search query and selected wing/floor
  const filteredAssets = assets
    .slice() // Create a shallow copy to avoid mutating the original array
    .sort((a: Asset, b: Asset) => (a.assetBarcode || '').localeCompare(b.assetBarcode || '')) // Sort by assetBarcode
    .filter((asset: Asset) => {
      const matchesSearch =
        asset.assetBarcode?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.roomName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.wingInShort?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesWing = selectedWing ? asset.wingInShort === selectedWing : true;
      const matchesFloor = selectedFloor ? asset.floorInWords === selectedFloor : true;

      return matchesSearch && matchesWing && matchesFloor;
    });

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
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Menu Bar */}
      <div className="flex justify-between items-center p-1 mb-2">
        <Button variant="custom_outline" onClick={() => setIsModalOpen(true)}>
          <PlusCircle size={20} />
          New
        </Button>
        <p className="text-gray-500 text-sm text-center">Count: {filteredAssets.length}</p>
        <Button variant={showSortAndFilter ? "custom" : "custom_outline"} onClick={handlePOUExpClick}>
          POU Exp
        </Button>
      </div>

      {/* Sort and Filter Buttons */}
      {showSortAndFilter && (
        <div className="flex flex-col gap-2 w-full px-1 mb-5">
          {/* Wing & Floor */}
          <div className='flex gap-2 w-full'>
            <Select onValueChange={(value) => setSelectedWing(value)}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Wing" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {uniqueWings.map((wing: string) => (
                    <SelectItem key={wing} value={wing}>
                      {wing}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => setSelectedFloor(value)}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Floor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {uniqueFloors.map((floor: string) => (
                    <SelectItem key={floor} value={floor}>
                      {floor}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Period */}
          <Select>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="previous-month">Previous Month</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="next-month">Next Month</SelectItem>
                <SelectItem value="previous-week">Previous Week</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Asset"
      >
        <AssetForm />
      </Modal>

      {/* Scroll Area with Asset Cards */}
      <ScrollArea className="w-full flex-grow overflow-y-auto space-y-2 thin-scroll">
        {isLoading && <p className="text-sm text-gray-500">Loading...</p>}
        {error && <p className="text-sm text-red-500">Failed to load assets.</p>}

        {!isLoading &&
          filteredAssets.map((asset: Asset) => (
            <Card key={asset.id} className="p-5 mb-4" onClick={() => handleCardClick(asset)}>
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