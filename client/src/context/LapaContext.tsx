'use client'

import React, { createContext, useContext, useState } from 'react';
import { Lapa } from '@/app/state/api'; // Assuming you have a Lapa type defined

interface LapaContextType {
    selectedLapa: Lapa | null;
    setSelectedLapa: (lapa: Lapa | null) => void;
}

const LapaContext = createContext<LapaContextType>({
    selectedLapa: null,
    setSelectedLapa: () => { },
});

export const LapaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedLapa, setSelectedLapa] = useState<Lapa | null>(null);

    return (
        <LapaContext.Provider value={{ selectedLapa, setSelectedLapa }}>
            {children}
        </LapaContext.Provider>
    );
};

export const useLapa = () => useContext(LapaContext);