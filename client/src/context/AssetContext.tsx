// AssetContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Asset } from '@/app/state/api';

interface AssetContextType {
  selectedAsset: Asset | null;
  setSelectedAsset: React.Dispatch<React.SetStateAction<Asset | null>>;
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export const useAsset = (): AssetContextType => {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error('useAsset must be used within an AssetProvider');
  }
  return context;
};

interface AssetProviderProps {
  children: ReactNode;
}

export const AssetProvider: React.FC<AssetProviderProps> = ({ children }) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  return (
    <AssetContext.Provider value={{ selectedAsset, setSelectedAsset }}>
      {children}
    </AssetContext.Provider>
  );
};