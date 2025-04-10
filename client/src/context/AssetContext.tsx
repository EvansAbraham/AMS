// AssetContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Asset } from '@/app/state/api';

interface AssetContextType {
  selectedAsset: Asset | null;
  setSelectedAsset: React.Dispatch<React.SetStateAction<Asset | null>>;
  uniqueWings: string[];
  setUniqueWings: React.Dispatch<React.SetStateAction<string[]>>;
  allAssets: Asset[];
  setAllAssets: React.Dispatch<React.SetStateAction<Asset[]>>;
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export const AssetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [uniqueWings, setUniqueWings] = useState<string[]>([]);
  const [allAssets, setAllAssets] = useState<Asset[]>([]);

  return (
    <AssetContext.Provider value={{
      selectedAsset,
      setSelectedAsset,
      uniqueWings,
      setUniqueWings,
      allAssets,
      setAllAssets
    }}>
      {children}
    </AssetContext.Provider>
  );
};

export const useAsset = () => {
  const context = useContext(AssetContext);
  if (context === undefined) {
    throw new Error('useAsset must be used within an AssetProvider');
  }
  return context;
};