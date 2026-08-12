'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import { MaterialSwatch } from '@/types';
import { MaterialLibraryModal } from '@/components/MaterialLibraryModal';
import { useAppNavigate } from '@/hooks/useAppNavigate';

interface MaterialModalContextValue {
  openMaterial: (material: MaterialSwatch) => void;
  closeMaterial: () => void;
}

const MaterialModalContext = createContext<MaterialModalContextValue | null>(null);

export function MaterialModalProvider({ children }: { children: React.ReactNode }) {
  const [inspectingMaterial, setInspectingMaterial] = useState<MaterialSwatch | null>(null);
  const { navigate } = useAppNavigate();

  const openMaterial = useCallback((material: MaterialSwatch) => {
    setInspectingMaterial(material);
  }, []);

  const closeMaterial = useCallback(() => {
    setInspectingMaterial(null);
  }, []);

  return (
    <MaterialModalContext.Provider value={{ openMaterial, closeMaterial }}>
      {children}
      <MaterialLibraryModal
        isOpen={!!inspectingMaterial}
        onClose={closeMaterial}
        material={inspectingMaterial}
        onRequestSample={() => {
          closeMaterial();
          navigate('contact');
        }}
      />
    </MaterialModalContext.Provider>
  );
}

export function useMaterialModal() {
  const ctx = useContext(MaterialModalContext);
  if (!ctx) {
    throw new Error('useMaterialModal must be used within MaterialModalProvider');
  }
  return ctx;
}
