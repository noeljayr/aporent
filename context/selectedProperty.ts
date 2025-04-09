import { create } from "zustand";

interface SelectedTypes {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  expandProperty: boolean;
  setExpandProperty: (expanded: boolean) => void;
}

const useSelectedPropertyStore = create<SelectedTypes>((set) => ({
  selectedId: null,
  setSelectedId: (id) => set((state) => ({ selectedId: id })),
  expandProperty: false,
  setExpandProperty: (expanded) => set((state) => ({ expandProperty: expanded }))
}));

export default useSelectedPropertyStore;
